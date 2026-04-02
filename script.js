// ===============================
// MOBILE MENU
// ===============================
const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
    menuToggle.textContent = mobileNav.classList.contains("active") ? "✕" : "☰";
  });

  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
      menuToggle.textContent = "☰";
    });
  });
}

// ===============================
// SCROLL ANIMATION
// ===============================
const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

fadeElements.forEach(el => observer.observe(el));

// ===============================
// FAQ ACCORDION
// ===============================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// ===============================
// COUNTER ANIMATION
// ===============================
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

function runCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;
    const increment = Math.ceil(target / 60);

    const updateCounter = () => {
      count += increment;
      if (count < target) {
        counter.textContent = count;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });
}

const counterSection = document.querySelector(".counter-section");
if (counterSection) {
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !counterStarted) {
        runCounters();
        counterStarted = true;
      }
    });
  }, { threshold: 0.3 });

  counterObserver.observe(counterSection);
}

// ===============================
// LANGUAGE SWITCH
// ===============================
const langEn = document.getElementById("langEn");
const langGu = document.getElementById("langGu");

const translations = {
  en: {
    topStripText: "Compassionate Breastfeeding Support • Online & In-Clinic Consultation • Mother’s Touch",
    siteLogo: "Mother’s Touch",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navReviews: "Reviews",
    navFaq: "FAQ",
    navContact: "Contact",
    navBook: "Book Now",

    heroTag: "Compassionate Breastfeeding Guidance",
    heroTitle: "Support for Every Mother’s Breastfeeding Journey",
    heroDesc: "Personalized lactation and breastfeeding support for latch issues, low milk supply, nipple pain, pumping, weaning, and newborn feeding concerns.",
    heroBtn1: "Book Consultation",
    heroBtn2: "WhatsApp Now",
    trust1: "✔ Personalized Support",
    trust2: "✔ Evidence-Based Guidance",
    trust3: "✔ Mother-Centered Care",

    counter1: "Mothers Supported",
    counter2: "Mother Satisfaction",
    counter3: "Common Feeding Concerns Covered",
    counter4: "Compassionate Care",

    problemTag: "How We Help",
    problemTitle: "Common Breastfeeding Problems We Support",
    problemDesc: "Personalized care for the most common breastfeeding and newborn feeding concerns faced by mothers.",

    problem1Title: "Painful Breastfeeding",
    problem1Desc: "Support for nipple pain, sore feeding, and uncomfortable breastfeeding sessions.",
    problem2Title: "Poor Latch",
    problem2Desc: "Guidance to help your baby latch correctly and feed more effectively.",
    problem3Title: "Low Milk Supply",
    problem3Desc: "Assessment and practical strategies to improve milk production naturally.",
    problem4Title: "Breast Refusal",
    problem4Desc: "Help when baby is refusing breastfeeds or struggling during feeding time.",
    problem5Title: "Cracked Nipples",
    problem5Desc: "Gentle support and feeding correction to reduce pain and promote healing.",
    problem6Title: "Engorgement",
    problem6Desc: "Relief and feeding guidance for fullness, heaviness, and breast discomfort.",
    problem7Title: "Pumping Guidance",
    problem7Desc: "Support for pumping, storing milk, and building a flexible feeding routine.",
    problem8Title: "Weaning Support",
    problem8Desc: "Safe and smooth transition guidance for babies and mothers during weaning.",

    servicesTag: "Our Services",
    servicesTitle: "Breastfeeding Consultations Designed for Mothers",
    servicesDesc: "Professional support tailored to your motherhood stage and feeding journey.",

    service1Title: "Clinic Consultation",
    service1Desc: "One-to-one in-person breastfeeding support and feeding assessment.",
    service2Title: "Video Consultation",
    service2Desc: "Expert online support from the comfort of your home.",
    service3Title: "Phone Consultation",
    service3Desc: "Quick and practical guidance for urgent feeding doubts.",
    service4Title: "Prenatal Guidance",
    service4Desc: "Breastfeeding preparation and confidence-building before delivery.",
    service5Title: "Postnatal Support",
    service5Desc: "Support for latch, milk supply, pain, and newborn feeding concerns.",
    service6Title: "Weaning Consultation",
    service6Desc: "Step-by-step help for gentle and healthy baby-led weaning.",

    trustTag: "Transformation",
    trustTitle: "From Feeding Stress to Feeding Confidence",
    trustDesc: "How mothers often feel before and after proper lactation guidance.",
    beforeTitle: "Before Support",
    before1: "Pain during feeding",
    before2: "Baby not latching well",
    before3: "Fear of low milk supply",
    before4: "Stress and confusion",
    afterTitle: "After Guidance",
    after1: "More confident feeding",
    after2: "Improved latch support",
    after3: "Clear practical steps",
    after4: "Calm and empowered motherhood",

    aboutTag: "Meet Your Consultant",
    aboutTitle: "Dr. Bhoomi Vikani",
    aboutSub: "Certified Lactation Consultant • Mother’s Touch",
    aboutP1: "Dr. Bhoomi Vikani is dedicated to helping mothers navigate their breastfeeding journey with confidence, comfort, and clarity through compassionate and personalized lactation support.",
    aboutP2: "From latch issues and nipple pain to low milk supply, pumping guidance, and weaning support — every consultation is designed to provide practical, evidence-based care tailored to the unique needs of mother and baby.",
    aboutP3: "At Mother’s Touch, the goal is simple: to make every mother feel supported, understood, and empowered throughout her feeding journey.",
    aboutHighlight1: "One-to-One Personalized Guidance",
    aboutHighlight2: "Evidence-Based Breastfeeding Support",
    aboutHighlight3: "Online & Offline Consultations",

    whyTag: "Why Choose Us",
    whyTitle: "Why Mothers Trust Mother’s Touch",
    whyDesc: "A calm, supportive, and expert space where mothers receive practical breastfeeding care tailored to their journey.",
    why1Title: "Personalized Support",
    why1Desc: "Every mother and baby pair is different, and so is the guidance we offer.",
    why2Title: "Compassionate Care",
    why2Desc: "We understand the emotional side of breastfeeding and support you with patience.",
    why3Title: "Evidence-Based Guidance",
    why3Desc: "Trusted advice based on modern breastfeeding principles and practical care.",
    why4Title: "Flexible Consultation Options",
    why4Desc: "Choose support through clinic visits, video sessions, or guided follow-ups.",

    reviewsTag: "Patient Love",
    reviewsTitle: "What Mothers Say About Their Experience",
    reviewsDesc: "Kind words from mothers who found comfort, confidence, and support through Mother’s Touch.",
    reviewBadgeText: "Trusted by mothers for compassionate breastfeeding support",
    review1Text: "“I was struggling with latch and pain after delivery. Dr. Bhoomi guided me so calmly and clearly. It made a huge difference.”",
    review1Name: "— New Mother",
    review2Text: "“Very practical support and so easy to understand. I felt heard and supported throughout the consultation.”",
    review2Name: "— Happy Mom",
    review3Text: "“Her breastfeeding guidance gave me confidence when I was feeling confused and stressed.”",
    review3Name: "— First-Time Mother",

    reelTag: "Social Presence",
    reelTitle: "Breastfeeding Education Through Reels",
    reelDesc: "Helpful awareness content created to support mothers with practical and simple breastfeeding guidance.",
    reelCard1Title: "Helpful Lactation Tips",
    reelCard1Desc: "Simple and practical breastfeeding awareness content for mothers.",
    reelBtn1: "View Instagram",
    reelCard2Title: "Mother Education Content",
    reelCard2Desc: "Educational posts and short-form guidance to help mothers feel more informed.",
    reelBtn2: "Follow Now",

    faqTag: "FAQ",
    faqTitle: "Frequently Asked Questions",
    faqDesc: "Quick answers to common breastfeeding consultation questions.",

    contactTag: "Get In Touch",
    contactTitle: "Book Your Consultation Today",
    contactDesc: "Whether you are facing breastfeeding difficulties or simply need expert guidance, Mother’s Touch is here to support you.",
    callBtn: "📞 Call Now",
    waBtn: "💬 WhatsApp",
    igBtn: "📷 Instagram",
    contactBox1Title: "Consultation Options",
    contactBox1Desc: "Available for in-clinic, video, and guided breastfeeding consultations.",
    contactBox2Title: "WhatsApp Support",
    contactBox2Desc: "Quick communication for appointment inquiries and breastfeeding support.",
    contactBox3Title: "Working Hours",
    contactBox3Desc: "By appointment only • Flexible consultation timings available",
    contactBox4Title: "Clinic Address",
    contactBox4Desc: "Possible Triangle, Mavdi Bypass Rd, Mavdi Village, Mavdi, Rajkot, Gujarat 360004.",
    formBtn: "Send Inquiry",

    footerBrand: "Mother’s Touch",
    footerSub: "Lactation & Breastfeeding Support Clinic",
    footerText: "Personalized breastfeeding guidance for mothers with compassionate and evidence-based support.",
    footerHome: "Home",
    footerServices: "Services",
    footerAbout: "About",
    footerContact: "Contact",
    bookFloatBtn: "Book Consultation"
  },

  gu: {
    topStripText: "માતાઓ માટે સહાનુભૂતિપૂર્ણ બ્રેસ્ટફીડિંગ સપોર્ટ • ઑનલાઇન અને કન્સલ્ટેશન ઉપલબ્ધ • Mother’s Touch",
    siteLogo: "મધર્સ ટચ",
    navHome: "હોમ",
    navAbout: "અમારા વિશે",
    navServices: "સેવાઓ",
    navReviews: "રિવ્યૂ",
    navFaq: "પ્રશ્નો",
    navContact: "સંપર્ક",
    navBook: "બુક કરો",

    heroTag: "સહાનુભૂતિપૂર્ણ બ્રેસ્ટફીડિંગ માર્ગદર્શન",
    heroTitle: "દરેક માતાની બ્રેસ્ટફીડિંગ સફરમાં સંપૂર્ણ સપોર્ટ",
    heroDesc: "લૅચની સમસ્યા, દૂધ ઓછું આવવું, નિપલ પેઇન, પમ્પિંગ, વીનિંગ અને બેબી ફીડિંગ સમસ્યાઓ માટે વ્યક્તિગત માર્ગદર્શન.",
    heroBtn1: "કન્સલ્ટેશન બુક કરો",
    heroBtn2: "હવે WhatsApp કરો",
    trust1: "✔ વ્યક્તિગત માર્ગદર્શન",
    trust2: "✔ વૈજ્ઞાનિક આધારિત સલાહ",
    trust3: "✔ માતા કેન્દ્રિત કાળજી",

    counter1: "માતાઓને સપોર્ટ",
    counter2: "માતા સંતોષ",
    counter3: "ફીડિંગ સમસ્યાઓ કવર",
    counter4: "સહાનુભૂતિપૂર્ણ કાળજી",

    problemTag: "અમે કેવી રીતે મદદ કરીએ",
    problemTitle: "બ્રેસ્ટફીડિંગની સામાન્ય સમસ્યાઓ",
    problemDesc: "માતાઓમાં સામાન્ય જોવા મળતી બ્રેસ્ટફીડિંગ અને નવજાત બાળકની ફીડિંગ સમસ્યાઓ માટે વ્યક્તિગત માર્ગદર્શન.",

    problem1Title: "દુખાવાવાળી ફીડિંગ",
    problem1Desc: "નિપલ પેઇન, સોર ફીડિંગ અને અસ્વસ્થ બ્રેસ્ટફીડિંગ માટે મદદ.",
    problem2Title: "લૅચ પ્રોબ્લેમ",
    problem2Desc: "બેબીને યોગ્ય રીતે લૅચ કરાવવા માટે માર્ગદર્શન.",
    problem3Title: "દૂધ ઓછું આવવું",
    problem3Desc: "મિલ્ક સપ્લાય વધારવા માટે પ્રેક્ટિકલ માર્ગદર્શન.",
    problem4Title: "બેબી બ્રેસ્ટ ન લેવું",
    problem4Desc: "બેબી ફીડિંગ વખતે બ્રેસ્ટ ન લેતો હોય ત્યારે સહાય.",
    problem5Title: "ફાટેલા નિપલ્સ",
    problem5Desc: "દુખાવો ઓછો કરવા અને હીલિંગ માટે નરમ માર્ગદર્શન.",
    problem6Title: "એન્ગોર્જમેન્ટ",
    problem6Desc: "સ્તનમાં ભારેપણું, ભરાવ અને અસ્વસ્થતા માટે માર્ગદર્શન.",
    problem7Title: "પમ્પિંગ માર્ગદર્શન",
    problem7Desc: "પમ્પિંગ, મિલ્ક સ્ટોરેજ અને ફીડિંગ રૂટીન માટે સહાય.",
    problem8Title: "વીનિંગ સપોર્ટ",
    problem8Desc: "માતા અને બાળક માટે સરળ અને સલામત વીનિંગ માર્ગદર્શન.",

    servicesTag: "અમારી સેવાઓ",
    servicesTitle: "માતાઓ માટે ડિઝાઇન કરેલી બ્રેસ્ટફીડિંગ કન્સલ્ટેશન",
    servicesDesc: "માતૃત્વના દરેક સ્ટેજ માટે યોગ્ય અને વ્યક્તિગત માર્ગદર્શન.",

    service1Title: "ક્લિનિક કન્સલ્ટેશન",
    service1Desc: "એકથીએક વ્યક્તિગત બ્રેસ્ટફીડિંગ સપોર્ટ.",
    service2Title: "વિડિયો કન્સલ્ટેશન",
    service2Desc: "ઘરે બેઠા નિષ્ણાત માર્ગદર્શન.",
    service3Title: "ફોન કન્સલ્ટેશન",
    service3Desc: "તાત્કાલિક પ્રશ્નો માટે ઝડપી માર્ગદર્શન.",
    service4Title: "પ્રિનેટલ માર્ગદર્શન",
    service4Desc: "ડિલિવરી પહેલાં બ્રેસ્ટફીડિંગ માટે તૈયારી.",
    service5Title: "પોસ્ટનેટલ સપોર્ટ",
    service5Desc: "લૅચ, મિલ્ક સપ્લાય અને પેઇન માટે મદદ.",
    service6Title: "વીનિંગ કન્સલ્ટેશન",
    service6Desc: "બાળક માટે હેલ્ધી વીનિંગ માટે સ્ટેપ બાય સ્ટેપ માર્ગદર્શન.",

    trustTag: "પરિવર્તન",
    trustTitle: "ફીડિંગ સ્ટ્રેસથી ફીડિંગ કૉન્ફિડન્સ સુધી",
    trustDesc: "યોગ્ય માર્ગદર્શન પહેલાં અને પછી માતાઓમાં થતો ફેરફાર.",
    beforeTitle: "મદદ પહેલાં",
    before1: "ફીડિંગ દરમિયાન દુખાવો",
    before2: "બેબી યોગ્ય રીતે લૅચ ન કરવો",
    before3: "દૂધ ઓછું આવવાનો ડર",
    before4: "સ્ટ્રેસ અને ગૂંચવણ",
    afterTitle: "માર્ગદર્શન પછી",
    after1: "વધુ કૉન્ફિડન્સ સાથે ફીડિંગ",
    after2: "સારો લૅચ સપોર્ટ",
    after3: "સ્પષ્ટ પ્રેક્ટિકલ સ્ટેપ્સ",
    after4: "શાંતિપૂર્ણ અને સશક્ત માતૃત્વ",

    aboutTag: "તમારા કન્સલ્ટન્ટને મળો",
    aboutTitle: "ડૉ. ભૂમિ વિકાણી",
    aboutSub: "સર્ટિફાઇડ લેક્ટેશન કન્સલ્ટન્ટ • Mother’s Touch",
    aboutP1: "ડૉ. ભૂમિ વિકાણી માતાઓને બ્રેસ્ટફીડિંગની સફરમાં આત્મવિશ્વાસ, આરામ અને સ્પષ્ટતા સાથે આગળ વધવામાં મદદ કરવા માટે સમર્પિત છે.",
    aboutP2: "લૅચ ઇશ્યુ, નિપલ પેઇન, દૂધ ઓછું આવવું, પમ્પિંગ માર્ગદર્શન અને વીનિંગ સપોર્ટ જેવી સમસ્યાઓ માટે દરેક કન્સલ્ટેશન વ્યક્તિગત રીતે ડિઝાઇન કરવામાં આવે છે.",
    aboutP3: "Mother’s Touch નો મુખ્ય હેતુ એ છે કે દરેક માતાને સમજ, સપોર્ટ અને આત્મવિશ્વાસનો અનુભવ થાય.",
    aboutHighlight1: "એકથીએક વ્યક્તિગત માર્ગદર્શન",
    aboutHighlight2: "વૈજ્ઞાનિક આધારિત બ્રેસ્ટફીડિંગ સપોર્ટ",
    aboutHighlight3: "ઑનલાઇન અને ઑફલાઇન કન્સલ્ટેશન",

    whyTag: "અમને કેમ પસંદ કરો",
    whyTitle: "માતાઓ Mother’s Touch પર કેમ વિશ્વાસ કરે છે",
    whyDesc: "શાંત, સહાયક અને નિષ્ણાત માર્ગદર્શન આપતું પ્લેટફોર્મ.",
    why1Title: "વ્યક્તિગત સપોર્ટ",
    why1Desc: "દરેક માતા અને બાળક અલગ હોય છે, એટલે માર્ગદર્શન પણ અલગ હોય છે.",
    why2Title: "સહાનુભૂતિપૂર્ણ કાળજી",
    why2Desc: "બ્રેસ્ટફીડિંગનો ભાવનાત્મક પાસો સમજીને ધીરજપૂર્વક સહાય.",
    why3Title: "વૈજ્ઞાનિક આધારિત માર્ગદર્શન",
    why3Desc: "મોડર્ન બ્રેસ્ટફીડિંગ સિદ્ધાંતો આધારિત વિશ્વસનીય માર્ગદર્શન.",
    why4Title: "ફ્લેક્સિબલ કન્સલ્ટેશન વિકલ્પો",
    why4Desc: "ક્લિનિક, વિડિયો અથવા ફોલોઅપ દ્વારા માર્ગદર્શન પસંદ કરો.",

    reviewsTag: "માતાઓનો પ્રેમ",
    reviewsTitle: "માતાઓ શું કહે છે",
    reviewsDesc: "Mother’s Touch દ્વારા સહારો, વિશ્વાસ અને માર્ગદર્શન મેળવનાર માતાઓના શબ્દો.",
    reviewBadgeText: "સહાનુભૂતિપૂર્ણ બ્રેસ્ટફીડિંગ સપોર્ટ માટે માતાઓનો વિશ્વાસ",
    review1Text: "“ડિલિવરી પછી લૅચ અને પેઇનથી બહુ પરેશાન હતી. ડૉ. ભૂમિએ ખૂબ શાંતિથી અને સ્પષ્ટ રીતે માર્ગદર્શન આપ્યું.”",
    review1Name: "— નવી માતા",
    review2Text: "“ખૂબ જ પ્રેક્ટિકલ અને સરળ માર્ગદર્શન. કન્સલ્ટેશન દરમિયાન મને સાચો સપોર્ટ મળ્યો.”",
    review2Name: "— ખુશ માતા",
    review3Text: "“તેમના માર્ગદર્શનથી મને કૉન્ફિડન્સ મળ્યો જ્યારે હું ખૂબ ગૂંચવણમાં હતી.”",
    review3Name: "— પ્રથમવાર માતા",

    reelTag: "સોશિયલ પ્રેઝન્સ",
    reelTitle: "રીલ્સ દ્વારા બ્રેસ્ટફીડિંગ એજ્યુકેશન",
    reelDesc: "માતાઓ માટે સરળ અને ઉપયોગી બ્રેસ્ટફીડિંગ માર્ગદર્શનવાળો અવેરનેસ કન્ટેન્ટ.",
    reelCard1Title: "લેક્ટેશન ટિપ્સ",
    reelCard1Desc: "માતાઓ માટે સરળ અને પ્રેક્ટિકલ બ્રેસ્ટફીડિંગ માહિતી.",
    reelBtn1: "Instagram જુઓ",
    reelCard2Title: "મધર એજ્યુકેશન કન્ટેન્ટ",
    reelCard2Desc: "માતાઓને વધુ સમજ આપવા માટે શોર્ટ એજ્યુકેશન કન્ટેન્ટ.",
    reelBtn2: "હવે Follow કરો",

    faqTag: "સામાન્ય પ્રશ્નો",
    faqTitle: "વારંવાર પૂછાતા પ્રશ્નો",
    faqDesc: "બ્રેસ્ટફીડિંગ કન્સલ્ટેશન વિશેના સામાન્ય પ્રશ્નોના જવાબો.",

    contactTag: "સંપર્ક કરો",
    contactTitle: "આજે જ તમારી કન્સલ્ટેશન બુક કરો",
    contactDesc: "જો તમને બ્રેસ્ટફીડિંગમાં સમસ્યા હોય કે નિષ્ણાત માર્ગદર્શન જોઈએ — Mother’s Touch તમારી સાથે છે.",
    callBtn: "📞 હમણાં કૉલ કરો",
    waBtn: "💬 WhatsApp",
    igBtn: "📷 Instagram",
    contactBox1Title: "કન્સલ્ટેશન વિકલ્પો",
    contactBox1Desc: "ક્લિનિક, વિડિયો અને માર્ગદર્શિત બ્રેસ્ટફીડિંગ કન્સલ્ટેશન ઉપલબ્ધ છે.",
    contactBox2Title: "WhatsApp સપોર્ટ",
    contactBox2Desc: "અપોઇન્ટમેન્ટ અને બ્રેસ્ટફીડિંગ પ્રશ્નો માટે ઝડપી સંપર્ક.",
    contactBox3Title: "સમય",
    contactBox3Desc: "ફક્ત અપોઇન્ટમેન્ટ દ્વારા • ફ્લેક્સિબલ ટાઈમિંગ ઉપલબ્ધ",
    contactBox4Title: "સરનામું",
    contactBox4Desc: "Possible Triangle, Mavdi Bypass Rd, Mavdi Village, Mavdi, Rajkot, Gujarat 360004.",
    formBtn: "Inquiry મોકલો",

    footerBrand: "મધર્સ ટચ",
    footerSub: "લેક્ટેશન અને બ્રેસ્ટફીડિંગ સપોર્ટ ક્લિનિક",
    footerText: "માતાઓ માટે સહાનુભૂતિપૂર્ણ અને વૈજ્ઞાનિક આધારિત બ્રેસ્ટફીડિંગ માર્ગદર્શન.",
    footerHome: "હોમ",
    footerServices: "સેવાઓ",
    footerAbout: "અમારા વિશે",
    footerContact: "સંપર્ક",
    bookFloatBtn: "કન્સલ્ટેશન બુક કરો"
  }
};

function setLanguage(lang) {
  Object.keys(translations[lang]).forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.textContent = translations[lang][id];
    }
  });

  if (lang === "gu") {
    document.documentElement.lang = "gu";
    langGu.classList.add("active");
    langEn.classList.remove("active");
  } else {
    document.documentElement.lang = "en";
    langEn.classList.add("active");
    langGu.classList.remove("active");
  }

  localStorage.setItem("preferredLanguage", lang);
}

if (langEn && langGu) {
  langEn.addEventListener("click", () => setLanguage("en"));
  langGu.addEventListener("click", () => setLanguage("gu"));
}

const savedLang = localStorage.getItem("preferredLanguage") || "en";
setLanguage(savedLang);
