document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const mobileTabButtons = document.querySelectorAll('.mobile-tab-button');
    const mobileMenu = document.querySelector('.services-mobile-menu');
    const tabPanels = document.querySelectorAll('.tab-panel');
    const servicesDropdown = document.querySelector('.services-dropdown');
    const servicesMegaMenu = document.querySelector('.services-mega-menu');

    // Function to get active tab index based on current page
    function getActiveTabIndex() {
        const currentPath = window.location.pathname;

        const brandingServices = [
            '/services/creative-logo-design',
            '/services/brand-strategy-positioning',
            '/services/motion-design',
            '/services/visual-communication-design',
            '/services/rebranding-evolution',
            '/services/brand-identity-design'
        ];

        const developmentServices = [
            '/services/webflow-development',
            '/services/framer-development',
            '/services/bubble-app-development',
            '/services/figma-sites',
            '/services/platform-maintenance-support'
        ];

        if (brandingServices.some(service => currentPath.includes(service))) {
            return 1;
        } else if (developmentServices.some(service => currentPath.includes(service))) {
            return 2;
        }

        return 0;
    }

    // Show dropdown on hover and set correct tab
    if (servicesDropdown && servicesMegaMenu) {
        servicesDropdown.addEventListener('mouseenter', () => {
            const activeIndex = getActiveTabIndex();
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            tabButtons[activeIndex].classList.add('active');
            tabPanels[activeIndex].classList.add('active');
        });
    }

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            button.classList.add('active');
            if (tabPanels[index]) {
                tabPanels[index].classList.add('active');
            }
        });
    });

    mobileTabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
        });
    });
});