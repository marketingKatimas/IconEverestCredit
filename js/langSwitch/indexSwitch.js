// Get the language toggle checkbox and the text elements
// Navbar Desktop
const languageToggle = document.getElementById('language-toggle');
const HomeNav = document.getElementById('HomeNav');
const AboutUsNav = document.getElementById('AboutUsNav');
const ServicesNav = document.getElementById('ServicesNav');
const MoreInfoNav = document.getElementById('MoreInfoNav');
const PaymentMethodNav = document.getElementById('PaymentMethodNav');
const PrivacyNoticeNav = document.getElementById('PrivacyNoticeNav');
const CareersNav = document.getElementById('CareersNav');
const ContactUsNav = document.getElementById('ContactUsNav');
const ApplyNowNav = document.getElementById('ApplyNowNav');

//Navbar Mobile
const HomeMobileNav = document.getElementById('HomeMobileNav');
const AboutUsMobileNav = document.getElementById('AboutUsMobileNav');
const ServicesMobileNav = document.getElementById('ServicesMobileNav');
const MoreInfoMobileNav = document.getElementById('MoreInfoMobileNav');
const PaymentMethodMobileNav = document.getElementById('PaymentMethodMobileNav');
const PrivacyNoticeMobileNav = document.getElementById('PrivacyNoticeMobileNav');
const CareerMobileNav = document.getElementById('CareerMobileNav');
const ContactMobileNav = document.getElementById('ContactMobileNav');
const ApplyNowMobileNav = document.getElementById('ApplyNowMobileNav');

//Banner
const LowInterestRate = document.getElementById('LowInterestRate');
const ApplyNowSlide = document.getElementById('ApplyNowSlide');
const Information = document.getElementById('Information');
const FastApproval = document.getElementById('FastApproval');
const ContactUsSlide = document.getElementById('ContactUsSlide');




// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
    languageToggle.checked = true;
    updateNavbar('bm');
    updateMobileNavbar('bm');
    updateBanner('bm');

} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateBanner('en');

}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateBanner('bm');

        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateBanner('en');

        localStorage.setItem('language', 'en');
    }
});

function updateNavbar(language) {
    if (language === 'bm') {
        HomeNav.textContent = 'Laman Utama';
        AboutUsNav.textContent = 'Mengenai Kami';
        ServicesNav.textContent = 'Perkhidmatan';
        MoreInfoNav.textContent = 'Maklumat Lanjut';
        PaymentMethodNav.textContent = 'Cara Menbayar';
        PrivacyNoticeNav.textContent = 'Notis Privasi';
        CareersNav.textContent = 'Kerjaya';
        ContactUsNav.textContent = 'Hubungi Kami';
        ApplyNowNav.innerHTML = 'Mohon Sekarang <i class="arrow_right">';
    } else {
        HomeNav.textContent = 'Home';
        AboutUsNav.textContent = 'About Us';
        ServicesNav.textContent = 'Services';
        MoreInfoNav.textContent = 'More Info';
        PaymentMethodNav.textContent = 'Payment Method';
        PrivacyNoticeNav.textContent = 'Privacy Notice';
        CareersNav.textContent = 'Careers';
        ContactUsNav.textContent = 'Contacts';
        ApplyNowNav.innerHTML = 'Apply Now <i class="arrow_right">';
    }
}

function updateMobileNavbar(language) {
    if (language === 'bm') {
        HomeMobileNav.textContent = 'Laman Utama';
        AboutUsMobileNav.textContent = 'Mengenai Kami';
        ServicesMobileNav.textContent = 'Perkhidmatan';
        MoreInfoMobileNav.textContent = 'Maklumat Lanjut';
        PaymentMethodMobileNav.textContent = 'Cara Menbayar';
        PrivacyNoticeMobileNav.textContent = 'Notis Privasi';
        CareerMobileNav.textContent = 'Kerjaya';
        ContactMobileNav.textContent = 'Hubungi Kami';
        ApplyNowMobileNav.innerHTML = 'Mohon Sekarang <i class="arrow_right">';
    } else {
        HomeMobileNav.textContent = 'Home';
        AboutUsMobileNav.textContent = 'About Us';
        ServicesMobileNav.textContent = 'Services';
        MoreInfoMobileNav.textContent = 'More Info';
        PaymentMethodMobileNav.textContent = 'Payment Method';
        PrivacyNoticeMobileNav.textContent = 'Privacy Notice';
        CareerMobileNav.textContent = 'Careers';
        ContactMobileNav.textContent = 'Contacts';
        ApplyNowMobileNav.innerHTML = 'Apply Now <i class="arrow_right">';
    }
}

function updateBanner(language) {
    if (language === 'bm') {
        LowInterestRate.textContent = 'Icon Everest Credit Membiayai gaya hidup anda dengan kadar faedah serendah 0.66%';
        ApplyNowSlide.innerHTML = 'Mohon Sekarang <i class="arrow_right">';
        Information.textContent = 'Maklumat';
        FastApproval.textContent = 'Memperkenalkan i-CREDIT - kemudahan pembiayaan peribadi dengan Kelulusan Pantas, Bayaran Balik Bulanan Fleksibel, dan Kadar Faedah Terendah di Malaysia!';
        ContactUsSlide.innerHTML = 'Hubungi Kami <i class="arrow_right">';
    } else {
        LowInterestRate.textContent = 'Icon Everest Credit Financing your lifestyle with interest rates as low as 0.66%';
        ApplyNowSlide.innerHTML = 'Apply Now <i class="arrow_right">';
        Information.textContent = 'Information';
        FastApproval.textContent = 'Introducing i-CREDIT a personal financing facility with Fast Approval, Flexible Monthly Payment and Lowest Interest Rate in Malaysia!';
        ContactUsSlide.innerHTML = 'Contact Us <i class="arrow_right">';
    }
}