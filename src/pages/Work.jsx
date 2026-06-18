import './Work.css'

export default function Work() {
  return (
    <>
      <section className="hero-section py_80 sm_py_48">
        <div className="container">
          <div className="mx-auto relative" style={{ maxWidth: '900px' }}>
            <img
              width="50"
              height="50"
              className="absolute hero-star"
              src="/frontend-assets/images/svgs/hero-star.svg"
              alt="star"
              decoding="async"
              fetchpriority="high"
            />
            <h1 className="main-heading text_white text-center relative fw_800 uppercase">
              Our UI UX & Branding Case Studies
            </h1>
            <p
              className="fs_18 sm_fs_16 text_white ff_inter lh_27 capitalize text-center hero-text mx-auto"
              style={{ maxWidth: '571px' }}
            >
              No matter the industry you’re in, or the asset you need, we can design it for you
            </p>
            <a
              href="https://calendly.com/contact-zeeframes/30min?month=2025-11"
              target="_blank"
              className="btn-component btn-outlined ff_inter mx-auto btn-animate-swap overflow-hidden relative w-fit"
            >
              <span className="work-us">Schedule call</span>
              <span className="lets-talk absolute">Book a Demo</span>
            </a>
          </div>
        </div>
      </section>
      <section className="work-section py_80">
        <div className="container">
          <h2 className="ff_inter fs_16 lh_24 uppercase text_gray_350 fw_400">Choose your industry</h2>
          <div className="max-w-full overflow-hidden">
            <div className="filters-wraper flex flex-wrap">
              <label htmlFor="industry-all" className="filter-item ff_inter fs_16 lh_24 fw_500 white">
                <input
                  className="filter-field"
                  type="radio"
                  name="portfolio_category"
                  id="industry-all"
                  value="all"
                  defaultChecked
                />
                All Niches
              </label>
              <label htmlFor="industry-fintech" className="filter-item ff_inter fs_16 lh_24 fw_500 white">
                <input
                  className="filter-field"
                  type="radio"
                  name="portfolio_category"
                  id="industry-fintech"
                  value="FinTech"
                />
                FinTech
              </label>
              <label htmlFor="industry-logistic" className="filter-item ff_inter fs_16 lh_24 fw_500 white">
                <input
                  className="filter-field"
                  type="radio"
                  name="portfolio_category"
                  id="industry-logistic"
                  value="Logistic"
                />
                Logistic
              </label>
              <label htmlFor="industry-real-estate" className="filter-item ff_inter fs_16 lh_24 fw_500 white">
                <input
                  className="filter-field"
                  type="radio"
                  name="portfolio_category"
                  id="industry-real-estate"
                  value="Real Estate"
                />
                Real Estate
              </label>
            </div>
          </div>
          <div id="no-results" className="mt_64 sm_mt_32 text-center" style={{ display: 'none' }}>
            <p className="fs_24 lh_normal fw_500 text_white ff_inter">
              No projects found for the selected category.
            </p>
          </div>
          <div id="portfolio-grid" className="mt_64 sm_mt_32 grid md_grid-cols-2 portfolio">
            <div className="portfolio-card" data-category="FinTech">
              <div className="portfolio-thumbnail overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  width="600"
                  height="685"
                  src="/storage/280/3.png"
                  alt="All-in-one dashboard to manage gigs, tours, venues, and payrolls."
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content flex justify-between" style={{ alignItems: 'end' }}>
                <div>
                  <p className="fs_14 lh_normal ff_inter text_white" style={{ marginBottom: '8px' }}>
                    Gig Desk
                  </p>
                  <h3 className="fs_28 sm_fs_24 ff_inter lh_normal fw_600 text_white portfolio-title">
                    All-in-one dashboard to manage gigs, tours, venues, and payrolls.
                  </h3>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-category="Logistic">
              <div className="portfolio-thumbnail overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  width="600"
                  height="685"
                  src="/storage/278/2.png"
                  alt="Real-time shipment tracking and delivery management at your fingertips"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content flex justify-between" style={{ alignItems: 'end' }}>
                <div>
                  <p className="fs_14 lh_normal ff_inter text_white" style={{ marginBottom: '8px' }}>
                    Ship Track
                  </p>
                  <h3 className="fs_28 sm_fs_24 ff_inter lh_normal fw_600 text_white portfolio-title">
                    Real-time shipment tracking and delivery management at your fingertips
                  </h3>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-category="Real Estate">
              <div className="portfolio-thumbnail overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  width="600"
                  height="685"
                  src="/storage/277/1-(2).png"
                  alt="Discover and book the world&#039;s finest luxury villas with ease"
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content flex justify-between" style={{ alignItems: 'end' }}>
                <div>
                  <p className="fs_14 lh_normal ff_inter text_white" style={{ marginBottom: '8px' }}>
                    Villa Vault
                  </p>
                  <h3 className="fs_28 sm_fs_24 ff_inter lh_normal fw_600 text_white portfolio-title">
                    Discover and book the world&#039;s finest luxury villas with ease
                  </h3>
                </div>
              </div>
            </div>
            <div className="portfolio-card" data-category="FinTech">
              <div className="portfolio-thumbnail overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  width="600"
                  height="685"
                  src="/storage/275/Rectangle-6338.png"
                  alt="Empowering communities with financial solutions."
                  loading="lazy"
                />
              </div>
              <div className="portfolio-content flex justify-between" style={{ alignItems: 'end' }}>
                <div>
                  <p className="fs_14 lh_normal ff_inter text_white" style={{ marginBottom: '8px' }}>
                    Bloom Money
                  </p>
                  <h3 className="fs_28 sm_fs_24 ff_inter lh_normal fw_600 text_white portfolio-title">
                    Empowering communities with financial solutions.
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div id="portfolio-pagination" className="navigation-wraper bs-pagination mt_64 sm_mt_32"></div>
        </div>
      </section>

      <section className="py_80 sm_py_32 relative behind-cursor">
        <div className="container">
          <div className="flex md-flex-wrap" style={{ rowGap: '32px', columnGap: '64px' }}>
            <div className="w-full" style={{ maxWidth: '636px' }}>
              <span className="fs_14 uppercase text_primary">Contact us</span>
              <h2
                className="fs_40 sm_fs_28 lh_40 fw_700 capitalize"
                style={{ marginTop: '32px', marginBottom: '12px', maxWidth: '510px' }}
              >
                Let’s Build Something You’ll Be Proud Of
              </h2>

              <p className="ff_inter fs_14 lh_21 text_gray_495" style={{ maxWidth: '534px' }}>
                Have a project in mind? Whether you need a full UI/UX redesign, a new digital product, or a
                stronger online presence, our team is ready to help turn your ideas into reality.
              </p>
              <ul className="mt-32 list-unstyled flex flex-col" style={{ gap: '12px' }}>
                <li className="flex items-center fs_14 lh_21 ff_inter text_gray_495" style={{ gap: '8px' }}>
                  <svg
                    className="shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0013 1.54102C5.0538 1.54102 1.04297 5.55185 1.04297 10.4993C1.04297 15.4468 5.0538 19.4577 10.0013 19.4577C14.9488 19.4577 18.9596 15.4468 18.9596 10.4993C18.9596 5.55185 14.9488 1.54102 10.0013 1.54102ZM6.2763 10.4743C6.15782 10.3639 6.00112 10.3038 5.8392 10.3067C5.67728 10.3096 5.52279 10.3752 5.40828 10.4897C5.29377 10.6042 5.22818 10.7587 5.22532 10.9206C5.22247 11.0825 5.28257 11.2392 5.39297 11.3577L7.89297 13.8577C8.01016 13.9747 8.16901 14.0405 8.33464 14.0405C8.50026 14.0405 8.65911 13.9747 8.7763 13.8577L14.6096 8.02435C14.72 7.90587 14.7801 7.74916 14.7773 7.58725C14.7744 7.42533 14.7088 7.27084 14.5943 7.15633C14.4798 7.04182 14.3253 6.97623 14.1634 6.97337C14.0015 6.97051 13.8448 7.03062 13.7263 7.14102L8.33464 12.5327L6.2763 10.4743Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  You’ll hear from us within one business day.
                </li>
                <li className="flex items-center fs_14 lh_21 ff_inter text_gray_495" style={{ gap: '8px' }}>
                  <svg
                    className="shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0013 1.54102C5.0538 1.54102 1.04297 5.55185 1.04297 10.4993C1.04297 15.4468 5.0538 19.4577 10.0013 19.4577C14.9488 19.4577 18.9596 15.4468 18.9596 10.4993C18.9596 5.55185 14.9488 1.54102 10.0013 1.54102ZM6.2763 10.4743C6.15782 10.3639 6.00112 10.3038 5.8392 10.3067C5.67728 10.3096 5.52279 10.3752 5.40828 10.4897C5.29377 10.6042 5.22818 10.7587 5.22532 10.9206C5.22247 11.0825 5.28257 11.2392 5.39297 11.3577L7.89297 13.8577C8.01016 13.9747 8.16901 14.0405 8.33464 14.0405C8.50026 14.0405 8.65911 13.9747 8.7763 13.8577L14.6096 8.02435C14.72 7.90587 14.7801 7.74916 14.7773 7.58725C14.7744 7.42533 14.7088 7.27084 14.5943 7.15633C14.4798 7.04182 14.3253 6.97623 14.1634 6.97337C14.0015 6.97051 13.8448 7.03062 13.7263 7.14102L8.33464 12.5327L6.2763 10.4743Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  We’ll understand your goals and gather the right project details.
                </li>
                <li className="flex items-center fs_14 lh_21 ff_inter text_gray_495" style={{ gap: '8px' }}>
                  <svg
                    className="shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.0013 1.54102C5.0538 1.54102 1.04297 5.55185 1.04297 10.4993C1.04297 15.4468 5.0538 19.4577 10.0013 19.4577C14.9488 19.4577 18.9596 15.4468 18.9596 10.4993C18.9596 5.55185 14.9488 1.54102 10.0013 1.54102ZM6.2763 10.4743C6.15782 10.3639 6.00112 10.3038 5.8392 10.3067C5.67728 10.3096 5.52279 10.3752 5.40828 10.4897C5.29377 10.6042 5.22818 10.7587 5.22532 10.9206C5.22247 11.0825 5.28257 11.2392 5.39297 11.3577L7.89297 13.8577C8.01016 13.9747 8.16901 14.0405 8.33464 14.0405C8.50026 14.0405 8.65911 13.9747 8.7763 13.8577L14.6096 8.02435C14.72 7.90587 14.7801 7.74916 14.7773 7.58725C14.7744 7.42533 14.7088 7.27084 14.5943 7.15633C14.4798 7.04182 14.3253 6.97623 14.1634 6.97337C14.0015 6.97051 13.8448 7.03062 13.7263 7.14102L8.33464 12.5327L6.2763 10.4743Z"
                      fill="#BDBDBD"
                    />
                  </svg>
                  You’ll receive a clear proposal with timeline, scope, and pricing.
                </li>
              </ul>
            </div>
            <div className="grow form-wraper">
              <form
                id="contactForm"
                data-action="https://zeeframes.com/contact-submit"
                className="flex flex-col"
                style={{ gap: '28px' }}
              >
                <div>
                  <input
                    className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140 relative behind-cursor"
                    type="text"
                    name="full_name"
                    id="fullName"
                    placeholder="Full Name*"
                    required
                  />
                </div>
                <div>
                  <input
                    className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140 relative behind-cursor"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address*"
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140 relative behind-cursor"
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number*"
                    required
                  />
                </div>
                <div className="relative" id="countryWrapper">
                  <input type="hidden" name="country" id="countryValue" />
                  <input
                    className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140 relative behind-cursor"
                    type="text"
                    id="countryTrigger"
                    placeholder="Country (Optional)"
                    autoComplete="off"
                    readOnly
                    style={{ cursor: 'pointer' }}
                  />
                  <svg
                    id="countryChevron"
                    style={{
                      position: 'absolute',
                      right: '14px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      pointerEvents: 'none',
                      transition: 'transform .2s',
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#8F8F8F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                  <div
                    id="countryDropdownPanel"
                    style={{
                      display: 'none',
                      position: 'absolute',
                      top: 'calc(100% + 4px)',
                      left: '0',
                      width: '100%',
                      zIndex: '999',
                      borderRadius: '8px',
                      border: '1px solid #373737',
                      background: '#171717',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ padding: '8px' }}>
                      <input
                        type="text"
                        id="countrySearch"
                        className="input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140"
                        placeholder="Search country..."
                        autoComplete="off"
                        style={{ padding: '8px 12px' }}
                      />
                    </div>
                    <ul
                      id="countryDropdown"
                      style={{
                        listStyle: 'none',
                        margin: '0',
                        padding: '0 4px 4px',
                        maxHeight: '200px',
                        overflowY: 'auto',
                      }}
                    >
                      <li data-value="AF">Afghanistan</li>
                      <li data-value="AL">Albania</li>
                      <li data-value="DZ">Algeria</li>
                      <li data-value="AD">Andorra</li>
                      <li data-value="AO">Angola</li>
                      <li data-value="AG">Antigua and Barbuda</li>
                      <li data-value="AR">Argentina</li>
                      <li data-value="AM">Armenia</li>
                      <li data-value="AU">Australia</li>
                      <li data-value="AT">Austria</li>
                      <li data-value="AZ">Azerbaijan</li>
                      <li data-value="BS">Bahamas</li>
                      <li data-value="BH">Bahrain</li>
                      <li data-value="BD">Bangladesh</li>
                      <li data-value="BB">Barbados</li>
                      <li data-value="BY">Belarus</li>
                      <li data-value="BE">Belgium</li>
                      <li data-value="BZ">Belize</li>
                      <li data-value="BJ">Benin</li>
                      <li data-value="BT">Bhutan</li>
                      <li data-value="BO">Bolivia</li>
                      <li data-value="BA">Bosnia and Herzegovina</li>
                      <li data-value="BW">Botswana</li>
                      <li data-value="BR">Brazil</li>
                      <li data-value="BN">Brunei</li>
                      <li data-value="BG">Bulgaria</li>
                      <li data-value="BF">Burkina Faso</li>
                      <li data-value="BI">Burundi</li>
                      <li data-value="CV">Cabo Verde</li>
                      <li data-value="KH">Cambodia</li>
                      <li data-value="CM">Cameroon</li>
                      <li data-value="CA">Canada</li>
                      <li data-value="CF">Central African Republic</li>
                      <li data-value="TD">Chad</li>
                      <li data-value="CL">Chile</li>
                      <li data-value="CN">China</li>
                      <li data-value="CO">Colombia</li>
                      <li data-value="KM">Comoros</li>
                      <li data-value="CG">Congo</li>
                      <li data-value="CD">Congo (DRC)</li>
                      <li data-value="CR">Costa Rica</li>
                      <li data-value="CI">Côte d'Ivoire</li>
                      <li data-value="HR">Croatia</li>
                      <li data-value="CU">Cuba</li>
                      <li data-value="CY">Cyprus</li>
                      <li data-value="CZ">Czech Republic</li>
                      <li data-value="DK">Denmark</li>
                      <li data-value="DJ">Djibouti</li>
                      <li data-value="DM">Dominica</li>
                      <li data-value="DO">Dominican Republic</li>
                      <li data-value="EC">Ecuador</li>
                      <li data-value="EG">Egypt</li>
                      <li data-value="SV">El Salvador</li>
                      <li data-value="GQ">Equatorial Guinea</li>
                      <li data-value="ER">Eritrea</li>
                      <li data-value="EE">Estonia</li>
                      <li data-value="SZ">Eswatini</li>
                      <li data-value="ET">Ethiopia</li>
                      <li data-value="FJ">Fiji</li>
                      <li data-value="FI">Finland</li>
                      <li data-value="FR">France</li>
                      <li data-value="GA">Gabon</li>
                      <li data-value="GM">Gambia</li>
                      <li data-value="GE">Georgia</li>
                      <li data-value="DE">Germany</li>
                      <li data-value="GH">Ghana</li>
                      <li data-value="GR">Greece</li>
                      <li data-value="GD">Grenada</li>
                      <li data-value="GT">Guatemala</li>
                      <li data-value="GN">Guinea</li>
                      <li data-value="GW">Guinea-Bissau</li>
                      <li data-value="GY">Guyana</li>
                      <li data-value="HT">Haiti</li>
                      <li data-value="HN">Honduras</li>
                      <li data-value="HU">Hungary</li>
                      <li data-value="IS">Iceland</li>
                      <li data-value="IN">India</li>
                      <li data-value="ID">Indonesia</li>
                      <li data-value="IR">Iran</li>
                      <li data-value="IQ">Iraq</li>
                      <li data-value="IE">Ireland</li>
                      <li data-value="IL">Israel</li>
                      <li data-value="IT">Italy</li>
                      <li data-value="JM">Jamaica</li>
                      <li data-value="JP">Japan</li>
                      <li data-value="JO">Jordan</li>
                      <li data-value="KZ">Kazakhstan</li>
                      <li data-value="KE">Kenya</li>
                      <li data-value="KI">Kiribati</li>
                      <li data-value="KW">Kuwait</li>
                      <li data-value="KG">Kyrgyzstan</li>
                      <li data-value="LA">Laos</li>
                      <li data-value="LV">Latvia</li>
                      <li data-value="LB">Lebanon</li>
                      <li data-value="LS">Lesotho</li>
                      <li data-value="LR">Liberia</li>
                      <li data-value="LY">Libya</li>
                      <li data-value="LI">Liechtenstein</li>
                      <li data-value="LT">Lithuania</li>
                      <li data-value="LU">Luxembourg</li>
                      <li data-value="MG">Madagascar</li>
                      <li data-value="MW">Malawi</li>
                      <li data-value="MY">Malaysia</li>
                      <li data-value="MV">Maldives</li>
                      <li data-value="ML">Mali</li>
                      <li data-value="MT">Malta</li>
                      <li data-value="MH">Marshall Islands</li>
                      <li data-value="MR">Mauritania</li>
                      <li data-value="MU">Mauritius</li>
                      <li data-value="MX">Mexico</li>
                      <li data-value="FM">Micronesia</li>
                      <li data-value="MD">Moldova</li>
                      <li data-value="MC">Monaco</li>
                      <li data-value="MN">Mongolia</li>
                      <li data-value="ME">Montenegro</li>
                      <li data-value="MA">Morocco</li>
                      <li data-value="MZ">Mozambique</li>
                      <li data-value="MM">Myanmar</li>
                      <li data-value="NA">Namibia</li>
                      <li data-value="NR">Nauru</li>
                      <li data-value="NP">Nepal</li>
                      <li data-value="NL">Netherlands</li>
                      <li data-value="NZ">New Zealand</li>
                      <li data-value="NI">Nicaragua</li>
                      <li data-value="NE">Niger</li>
                      <li data-value="NG">Nigeria</li>
                      <li data-value="NO">Norway</li>
                      <li data-value="OM">Oman</li>
                      <li data-value="PK">Pakistan</li>
                      <li data-value="PW">Palau</li>
                      <li data-value="PA">Panama</li>
                      <li data-value="PG">Papua New Guinea</li>
                      <li data-value="PY">Paraguay</li>
                      <li data-value="PE">Peru</li>
                      <li data-value="PH">Philippines</li>
                      <li data-value="PL">Poland</li>
                      <li data-value="PT">Portugal</li>
                      <li data-value="QA">Qatar</li>
                      <li data-value="RO">Romania</li>
                      <li data-value="RU">Russia</li>
                      <li data-value="RW">Rwanda</li>
                      <li data-value="KN">Saint Kitts and Nevis</li>
                      <li data-value="LC">Saint Lucia</li>
                      <li data-value="VC">Saint Vincent and the Grenadines</li>
                      <li data-value="WS">Samoa</li>
                      <li data-value="SM">San Marino</li>
                      <li data-value="ST">Sao Tome and Principe</li>
                      <li data-value="SA">Saudi Arabia</li>
                      <li data-value="SN">Senegal</li>
                      <li data-value="RS">Serbia</li>
                      <li data-value="SC">Seychelles</li>
                      <li data-value="SL">Sierra Leone</li>
                      <li data-value="SG">Singapore</li>
                      <li data-value="SK">Slovakia</li>
                      <li data-value="SI">Slovenia</li>
                      <li data-value="SB">Solomon Islands</li>
                      <li data-value="SO">Somalia</li>
                      <li data-value="ZA">South Africa</li>
                      <li data-value="SS">South Sudan</li>
                      <li data-value="ES">Spain</li>
                      <li data-value="LK">Sri Lanka</li>
                      <li data-value="SD">Sudan</li>
                      <li data-value="SR">Suriname</li>
                      <li data-value="SE">Sweden</li>
                      <li data-value="CH">Switzerland</li>
                      <li data-value="SY">Syria</li>
                      <li data-value="TW">Taiwan</li>
                      <li data-value="TJ">Tajikistan</li>
                      <li data-value="TZ">Tanzania</li>
                      <li data-value="TH">Thailand</li>
                      <li data-value="TL">Timor-Leste</li>
                      <li data-value="TG">Togo</li>
                      <li data-value="TO">Tonga</li>
                      <li data-value="TT">Trinidad and Tobago</li>
                      <li data-value="TN">Tunisia</li>
                      <li data-value="TR">Turkey</li>
                      <li data-value="TM">Turkmenistan</li>
                      <li data-value="TV">Tuvalu</li>
                      <li data-value="UG">Uganda</li>
                      <li data-value="UA">Ukraine</li>
                      <li data-value="AE">United Arab Emirates</li>
                      <li data-value="GB">United Kingdom</li>
                      <li data-value="US">United States</li>
                      <li data-value="UY">Uruguay</li>
                      <li data-value="UZ">Uzbekistan</li>
                      <li data-value="VU">Vanuatu</li>
                      <li data-value="VE">Venezuela</li>
                      <li data-value="VN">Vietnam</li>
                      <li data-value="YE">Yemen</li>
                      <li data-value="ZM">Zambia</li>
                      <li data-value="ZW">Zimbabwe</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <textarea
                    className="textarea input w-full fs_14 lh_normal fw_500 ff_inter text_gray_140"
                    name="about_project"
                    id="aboutProject"
                    placeholder="Tell us about your project, goals, timeline, or requirements*"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-component btn-outlined-primary ff_inter relative behind-cursor"
                  style={{ marginTop: '4px' }}
                >
                  Submit Inquiry
                </button>
              </form>
              <div style={{ marginTop: '32px' }}>
                <p className="fs_14 lh_normal ff_inter text_gray_350">
                  Prefer email instead? Feel free to contact us directly.
                </p>
                <div
                  className="flex items-center sm-flex-wrap"
                  style={{ marginTop: '12px', columnGap: '16px', rowGap: '12px' }}
                >
                  <a
                    href="mailto:businessmanager@zeeframes.com"
                    className="flex items-center"
                    style={{ gap: '6px' }}
                    aria-label="mail us on businessmanager@zeeframes.com"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.944 3.25H14.056C15.894 3.25 17.35 3.25 18.489 3.403C19.661 3.561 20.61 3.893 21.359 4.641C22.107 5.39 22.439 6.339 22.597 7.511C22.75 8.651 22.75 10.106 22.75 11.944V12.056C22.75 13.894 22.75 15.35 22.597 16.489C22.439 17.661 22.107 18.61 21.359 19.359C20.61 20.107 19.661 20.439 18.489 20.597C17.349 20.75 15.894 20.75 14.056 20.75H9.944C8.106 20.75 6.65 20.75 5.511 20.597C4.339 20.439 3.39 20.107 2.641 19.359C1.893 18.61 1.561 17.661 1.403 16.489C1.25 15.349 1.25 13.894 1.25 12.056V11.944C1.25 10.106 1.25 8.65 1.403 7.511C1.561 6.339 1.893 5.39 2.641 4.641C3.39 3.893 4.339 3.561 5.511 3.403C6.651 3.25 8.106 3.25 9.944 3.25ZM5.71 4.89C4.704 5.025 4.124 5.279 3.7 5.702C3.278 6.125 3.024 6.705 2.889 7.711C2.751 8.739 2.749 10.093 2.749 12C2.749 13.907 2.751 15.262 2.889 16.29C3.024 17.295 3.278 17.875 3.701 18.298C4.124 18.721 4.704 18.975 5.71 19.11C6.738 19.248 8.092 19.25 9.999 19.25H13.999C15.906 19.25 17.261 19.248 18.289 19.11C19.294 18.975 19.874 18.721 20.297 18.298C20.72 17.875 20.974 17.295 21.109 16.289C21.247 15.261 21.249 13.907 21.249 12C21.249 10.093 21.247 8.739 21.109 7.71C20.974 6.705 20.72 6.125 20.297 5.702C19.874 5.279 19.294 5.025 18.288 4.89C17.261 4.752 15.906 4.75 13.999 4.75H9.999C8.092 4.75 6.739 4.752 5.71 4.89ZM5.422 7.52C5.54934 7.36729 5.7321 7.27139 5.93013 7.25338C6.12815 7.23538 6.32521 7.29675 6.478 7.424L8.64 9.223C9.573 10 10.22 10.538 10.768 10.89C11.297 11.23 11.656 11.345 12.001 11.345C12.346 11.345 12.705 11.231 13.234 10.89C13.781 10.538 14.429 10 15.362 9.223L17.521 7.423C17.5967 7.35997 17.6841 7.31246 17.7782 7.2832C17.8722 7.25393 17.9711 7.24348 18.0692 7.25244C18.1673 7.2614 18.2627 7.2896 18.3499 7.33542C18.4371 7.38124 18.5145 7.44379 18.5775 7.5195C18.6405 7.59521 18.688 7.68259 18.7173 7.77665C18.7466 7.87072 18.757 7.96963 18.7481 8.06774C18.7391 8.16584 18.7109 8.26122 18.6651 8.34843C18.6193 8.43564 18.5567 8.51297 18.481 8.576L16.285 10.406C15.398 11.146 14.68 11.744 14.045 12.152C13.385 12.577 12.742 12.845 12.001 12.845C11.26 12.845 10.617 12.576 9.956 12.152C9.322 11.744 8.604 11.145 7.717 10.407L5.52 8.577C5.44424 8.51394 5.38165 8.43656 5.33582 8.34929C5.28998 8.26202 5.2618 8.16657 5.25289 8.0684C5.24397 7.97023 5.25449 7.87127 5.28385 7.77717C5.31322 7.68307 5.36084 7.59568 5.424 7.52"
                        fill="#BDBDBD"
                      />
                    </svg>
                    <span className="fs_14 lh_21 ff_inter text_gray_495">contact@zeeframes.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
