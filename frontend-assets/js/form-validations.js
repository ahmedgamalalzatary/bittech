$(document).ready(function () {

    const $form = $('#contactForm');

    $.validator.addMethod('phoneIntl', function (value) {
        const iti = window._itiInstance;
        if (!iti) return true;
        if (!value.trim()) return false;
        if (!window.intlTelInputUtils) return true;
        return iti.isValidNumber();
    }, function () {
        const iti = window._itiInstance;
        if (!iti || !window.intlTelInputUtils) return 'Enter a valid phone number';
        const code = iti.getValidationError();
        // validationError enum: 0=IS_POSSIBLE, 1=INVALID_COUNTRY_CODE, 2=TOO_SHORT, 3=TOO_LONG, 4=INVALID_LENGTH
        const msgs = {
            0: 'Enter a valid phone number',
            1: 'Invalid country code',
            2: 'Phone number is too short',
            3: 'Phone number is too long',
            4: 'Enter a valid phone number'
        };
        return msgs[code] !== undefined ? msgs[code] : 'Enter a valid phone number';
    });

    $form.validate({
        errorClass: 'error',
        validClass: 'valid',
        errorElement: 'div',

        errorPlacement: function (error, element) {
            error.addClass('error-message').css({
                color: '#dc2626',
                fontSize: '12px',
                marginTop: '4px',
                fontFamily: 'Inter Tight, sans-serif',
                fontWeight: '500'
            });
            const itiWrapper = element.closest('.iti');
            error.insertAfter(itiWrapper.length ? itiWrapper : element);
        },

        rules: {
            full_name:     { required: true, minlength: 3, maxlength: 60 },
            email:         { required: true, email: true },
            phone:         { required: true, phoneIntl: true },
            about_project: { required: true, minlength: 10, maxlength: 1000 }
        },

        messages: {
            full_name: {
                required: 'Full Name is required',
                minlength: 'Enter at least 3 characters',
                maxlength: 'Name cannot exceed 60 characters'
            },
            email: {
                required: 'Email is required',
                email: 'Please enter a valid email address'
            },
            phone: {
                required: 'Phone number is required'
            },
            about_project: {
                required: 'Project description is required',
                minlength: 'Enter at least 10 characters',
                maxlength: 'Project description cannot exceed 1000 characters'
            }
        },

        submitHandler: function (form) {
            const $submitBtn = $(form).find('button[type="submit"]');
            const originalText = $submitBtn.text();
            const iti = window._itiInstance;

            const formData = new FormData(form);
            if (iti) formData.set('phone', iti.getNumber());

            $.ajax({
                url: $(form).data('action'),
                method: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },

                beforeSend: function () {
                    $submitBtn.text('Submitting...').prop('disabled', true);
                },

                success: function (res) {
                    if (res.status) {
                        form.reset();
                        $form.validate().resetForm();
                        $('.valid').removeClass('valid');
                        if (iti) iti.setCountry('us');
                        window.location.href = '/contact-us/thank-you';
                    } else {
                        toastr.error(res.message || 'Submission failed');
                    }
                },

                error: function () {
                    toastr.error('Something went wrong. Please try again.');
                },

                complete: function () {
                    $submitBtn.text(originalText).prop('disabled', false);
                }
            });
        }
    });

    // Re-validate phone when user switches country flag (only if field has a value)
    const phoneEl = document.querySelector('#phone');
    if (phoneEl) {
        phoneEl.addEventListener('countrychange', function () {
            if (phoneEl.value.trim()) {
                $form.validate().element('#phone');
            }
        });
    }

});
