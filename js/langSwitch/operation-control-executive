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

// Header
const CareersHeaderDes = document.getElementById('CareersHeaderDes');

//Job Descrition
const JobDes = document.getElementById('JobDes');
const minimizing = document.getElementById('minimizing');
const Achieve = document.getElementById('Achieve');
const Maintain = document.getElementById('Maintain');
const Contact = document.getElementById('Contact');
const FollowUp = document.getElementById('FollowUp');
const Ensure = document.getElementById('Ensure');
const Exercise = document.getElementById('Exercise');
const Assist = document.getElementById('Assist');
const Willing = document.getElementById('Willing');
const FieldVisit = document.getElementById('FieldVisit');
const Perform = document.getElementById('Perform');

//Job Requirement
const JobRequirements = document.getElementById('JobRequirements');
const Certificate = document.getElementById('Certificate');
const Experience = document.getElementById('Experience');
const Excellent = document.getElementById('Excellent');
const Language = document.getElementById('Language');
const Experienced = document.getElementById('Experienced');
const Attitude = document.getElementById('Attitude');
const Independently = document.getElementById('Independently');
const FreshGrad = document.getElementById('FreshGrad');
const Vacancies = document.getElementById('Vacancies');
const FullContract = document.getElementById('FullContract');
const Role = document.getElementById('Role');
const AttachedDoc = document.getElementById('AttachedDoc');
const FullName = document.getElementById('FullName');
const PositionApplied = document.getElementById('PositionApplied');
const Current = document.getElementById('Current');
const Expected = document.getElementById('Expected');
const Period = document.getElementById('Period');

//Apply Position Form
const ApplyPosition = document.getElementById('ApplyPosition');
const FullNamePosition = document.getElementById('FullNamePosition');
const EmailPosition = document.getElementById('EmailPosition');
const PhonePosition = document.getElementById('PhonePosition');
const UploadCVResume = document.getElementById('UploadCVResume');
const AllowedType = document.getElementById('AllowedType');
const Agreement = document.getElementById('Agreement');
const Submit = document.getElementById('Submit');

//Footer
const FooterDes = document.getElementById('FooterDes');
const PrivacyPolicyFooter = document.getElementById('PrivacyPolicyFooter');
const TermOfUseFooter = document.getElementById('TermOfUseFooter');
const ContactsFooter = document.getElementById('ContactsFooter');

// Check the current language preference and update the switch accordingly
if (localStorage.getItem('language') === 'bm') {
    languageToggle.checked = true;
    updateNavbar('bm');
    updateMobileNavbar('bm');
    updateHeader('bm');
    updateJobDes('bm');
    updateJobReq('bm');
    updateForm('bm');
    updateFooter('bm');
} else {
    languageToggle.checked = false;
    updateNavbar('en');
    updateMobileNavbar('en');
    updateHeader('en');
    updateJobDes('en');
    updateJobReq('en');
    updateForm('en');
    updateFooter('en');
}

// Add event listener to the language toggle checkbox
languageToggle.addEventListener('change', function () {
    if (this.checked) {
        updateNavbar('bm');
        updateMobileNavbar('bm');
        updateHeader('bm');
        updateJobDes('bm');
        updateJobReq('bm');
        updateForm('bm');
        updateFooter('bm');
        localStorage.setItem('language', 'bm');
    } else {
        updateNavbar('en');
        updateMobileNavbar('en');
        updateHeader('en');
        updateJobDes('en');
        updateJobReq('en');
        updateForm('en');
        updateFooter('en');
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

function updateHeader(language) {
    if (language === 'bm') {
        CareersHeaderDes.textContent = 'Organisasi kami berkembang pesat, dan kami sedang mencari bakat seperti anda untuk menyertai pasukan kami. Sama ada anda seorang graduan baru atau berpengalaman, temui impak yang anda boleh kecapi dengan bekerja di iconeverstcredit.com.my';
    } else {
        CareersHeaderDes.textContent = 'Our organization is growing rapidly, and we are in search of talents like you to join our team. Whether you are a fresh graduate or an experienced professional, discover the impact you could make with a career at iconeverstcredit.com.my';
    }
}

function  updateJobDes(language) {
    if (language === 'bm') {
        JobDes.textContent = 'Deskripsi kerja:';
        minimizing.textContent = 'untuk meminimumkan kemungkiran dan hutang lapuk bagi pinjaman berterusan';
        Achieve.textContent = 'Urus dan capai piawaian produktiviti harian dari segi percubaan, kenalan dan jumlah terkumpul';
        Maintain.textContent = 'Mengurus dan menyelenggara akaun pelanggan untuk memastikan akaun adalah terkini dan dikendalikan dengan baik';
        Contact.textContent = 'Hubungi pelanggan untuk mengingatkan pelanggan tentang jadual pembayaran dan dapatkan pembayaran yang berkaitan';
        FollowUp.textContent = 'Susulan akaun tertunggak dengan menggunakan teknik pengumpulan telefon, surat penolakan dan penasihat undang-undang';
        Ensure.textContent = 'Pastikan tindakan kutipan yang diambil adalah dalam garis panduan korporat dan dasar kutipan';
        Exercise.textContent = 'Laksanakan pertimbangan dalam amalan dan dasar yang ditetapkan untuk menentukan tindakan yang sesuai';
        Assist.textContent = 'Membantu dalam membangunkan, merancang dan melaksanakan strategi untuk mendapatkan semula prinsip daripada peminjam yang pinjaman tidak berbayarnya telah dicaj.';
        Willing.textContent = 'Bersedia untuk bekerja lebih jauh seperti untuk menambah baik dasar kredit semasa, metodologi analisis kredit seperti pemarkahan/portfolio kredit, analisis portfolio, audit pelanggan, dsb.';
        FieldVisit.textContent = 'Wajib melakukan lawatan lapangan';
        Perform.textContent = 'Melaksanakan tugas-tugas lain yang diarahkan';
    } else {
        JobDes.textContent = 'Job Description:';
        minimizing.textContent = 'for minimizing defaults and bad debts of ongoing loans';
        Achieve.textContent = 'Manage and achieve daily productivity standards in terms of attempts, contacts and amount collected';
        Maintain.textContent = 'Manage and maintain customer’s accounts to ensure the accounts are current and well conducted';
        Contact.textContent = 'Contact customers to remind customers of payment schedule and obtain relevant payments';
        FollowUp.textContent = 'Follow up overdue accounts by utilizing phone collection techniques, dunning letters, and legal counsel';
        Ensure.textContent = 'Ensure that collection actions taken are within corporate guidelines, and collection policies';
        Exercise.textContent = 'Exercise judgement within defined practices and policies to determine appropriate actions';
        Assist.textContent = 'Assist in developing, planning and implementations of strategies to recover principle from borrowers whose non-performing loans have been charged-off';
        Willing.textContent = 'Willing to work extra miles such to improve current credit policy, credit analysis methodologies such as credit scoring/portfolio, portfolio analysis, client audit, etc';
        FieldVisit.textContent = 'Required to do field visits';
        Perform.textContent = 'Perform other duties as assigned';
    }
}

function updateJobReq(language) {
    if (language === 'bm') {
        JobRequirements.textContent = 'Syarat-Syarat Pekerjaan:';
        Certificate.textContent = 'Calon mestilah memiliki sekurang-kurangnya Sijil SPM/STPM/Diploma dalam mana-mana bidang berkaitan';
        Experience.textContent = 'Pengalaman dalam pemulihan kredit akan menjadi kelebihan tambahan';
        Excellent.textContent = 'Kemahiran komunikasi dan perundingan yang sangat baik';
        Language.textContent = 'Bahasa yang Diperlukan: Bahasa Malaysia, Inggeris & Mandarin';
        Experienced.textContent = 'Berpengalaman dalam aplikasi Microsoft Office termasuk Excel, Word dan Outlook';
        Attitude.textContent = 'Sikap kerja yang baik, bersemangat, bertenaga dan berorientasikan pelanggan';
        Independently.textContent = 'Mampu bekerja secara bebas dengan pengawasan yang minimum';
        FreshGrad.textContent = 'Fresh graduate digalakkan memohon, latihan akan disediakan';
        Vacancies.innerHTML = 'Kami mempunyai beberapa kekosongan yang tersedia di <strong>15, Jalan Medan Tuanku 1, Chow Kit, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</strong>';
        FullContract.textContent = 'Jawatan sepenuh masa dan berdasarkan Kontrak tersedia';
        Role.textContent = 'Jika anda rasa anda mempunyai apa yang diperlukan untuk cemerlang dalam peranan yang dinyatakan di atas, mohon sekarang melalui Jabatan Sumber Manusia kami.';
        AttachedDoc.textContent = 'Sila lampirkan resume terkini anda bersama maklumat berikut:';
        FullName.textContent = 'Nama penuh';
        PositionApplied.textContent = 'Jawatan yang Dipohon';
        Current.textContent = 'Gaji pokok semasa';
        Expected.textContent = 'Gaji pokok yang dijangkakan';
        Period.textContent = 'Notice period';
    } else {
        JobRequirements.textContent = 'Job Requirements:';
        Certificate.textContent = 'Candidate must possess at least SPM/STPM/Diploma Certificate in any related field';
        Experience.textContent = 'Experience in credit recovery will be an added advantage';
        Excellent.textContent = 'Excellent communication and negotiation skills';
        Language.textContent = 'Required Language(s): Bahasa Malaysia, English & Mandarin';
        Experienced.textContent = 'Experienced in Microsoft Office applications including Excel, Word and Outlook';
        Attitude.textContent = 'Good working attitude, passionate, energetic and customer-oriented';
        Independently.textContent = 'Able to work independently with minimal supervision';
        FreshGrad.textContent = 'Fresh graduates are encouraged to apply, training will be provided';
        Vacancies.innerHTML = 'We have multiple vacancies available in <strong>15, Jalan Medan Tuanku 1, Chow Kit, 50300 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur</strong>';
        FullContract.textContent = 'Full-time and Contract-basis position(s) available';
        Role.textContent = 'If you think you have what it takes to excel in the role mentioned above, apply now through our Human Resources Department.';
        AttachedDoc.textContent = 'Please attach your latest résumé together with the following information:';
        FullName.textContent = 'Full name';
        PositionApplied.textContent = 'Position applied';
        Current.textContent = 'Current basic salary';
        Expected.textContent = 'Expected basic salary';
        Period.textContent = 'Notice period';
    }
}

function updateForm(language) {
    if (language === 'bm') {
        ApplyPosition.textContent = 'Mohon jawatan ini:';
        FullNamePosition.textContent = 'Nama penuh:';
        EmailPosition.textContent = 'Emel:';
        PhonePosition.textContent = 'Telefon:';
        UploadCVResume.textContent = 'Muat naik CV/Resume';
        AllowedType.textContent = 'Jenis yang Dibenarkan: .pdf, .doc, .docx';
        Agreement.innerHTML = '&nbsp;Dengan menggunakan borang ini anda bersetuju dengan penyimpanan dan pengendalian data anda oleh tapak web ini.';
        Submit.innerHTML = 'Hantar <i class="arrow_right"></i>';
    } else {
        ApplyPosition.textContent = 'Apply for this position';
        FullNamePosition.textContent = 'Full Name:';
        EmailPosition.textContent = 'Email:';
        PhonePosition.textContent = 'Phone:';
        UploadCVResume.textContent = 'Upload CV/Resume';
        AllowedType.textContent = 'Allowed Type(s): .pdf, .doc, .docx';
        Agreement.innerHTML = '&nbsp;By using this form you agree with the storage and handling of your data by this website.';
        Submit.innerHTML = 'Submit <i class="arrow_right"></i>';
    }
}

function updateFooter(language) {
    if (language === 'bm') {
        FooterDes.textContent = 'Perkhidmatan pembiayaan peribadi berlesen anda dengan nasihat kredit percuma. Kadar faedah rendah, kelulusan cepat, proses permohonan tanpa kerumitan.';
        PrivacyPolicyFooter.textContent = 'Notis Privasi';
        TermOfUseFooter.textContent = 'Syarat Penggunaan';
        ContactsFooter.textContent = 'Hubungi';
    } else {
        FooterDes.textContent = 'Your go-to licensed personal financing service with free credit advice. Low interest rate, fast approval, hassle-free application process.';
        PrivacyPolicyFooter.textContent = 'Privacy Policy';
        TermOfUseFooter.textContent = 'Terms of Use';
        ContactsFooter.textContent = 'Contacts';
    }
}