import type { Locale, ServiceId } from "./site";

type Service = { id: ServiceId; name: string; line: string; examples: string[] };
type Project = {
  name: string;
  kind: string;
  text: string;
  tags: string[];
  image: { src: string; width: number; height: number };
  url?: string;
};

export type Content = {
  meta: { title: string; description: string; ogTitle: string };
  whatsappMessage: string;
  skip: string;
  nav: {
    label: string;
    backToTop: string;
    openMenu: string;
    closeMenu: string;
    links: { href: string; label: string }[];
    whatsappShort: string;
    switchLabel: string;
  };
  whatsappCta: string;
  hero: { lines: string[]; sub: string; secondary: string; scrollLabel: string };
  services: { title: string; tabsLabel: string; hint: string; illustration: string; items: Service[] };
  work: { title: string; lead: string; madeLabel: string; visit: string; projects: Project[] };
  reasons: { title: string; lead: string; items: { title: string; text: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  contact: { title: string; lead: string; location: string };
  footer: { tagline: string; servicesTitle: string; contactTitle: string; rights: string };
  fab: string;
};

const images = {
  capella: { src: "/work/capellacare2.png", width: 1536, height: 1024 },
  biscofa: { src: "/work/biscofa.png", width: 1122, height: 1402 },
  gawhra: { src: "/work/elgawhra.png", width: 1054, height: 1492 },
};

const en: Content = {
  meta: {
    title: "BitTechnologies | Software house in Fayoum, Egypt",
    description:
      "BitTechnologies designs and builds websites, mobile apps, desktop software, online stores and AI tools. Send us your idea on WhatsApp.",
    ogTitle: "BitTechnologies | You have the idea. We build the software.",
  },
  whatsappMessage: "Hi BitTechnologies, I have an idea I'd like to build.",
  skip: "Skip to content",
  nav: {
    label: "Main",
    backToTop: "BitTechnologies, back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    links: [
      { href: "#services", label: "What we build" },
      { href: "#work", label: "Our work" },
      { href: "#questions", label: "Questions" },
      { href: "#contact", label: "Contact" },
    ],
    whatsappShort: "WhatsApp us",
    switchLabel: "العربية",
  },
  whatsappCta: "Message us on WhatsApp",
  hero: {
    lines: ["You have", "the idea.", "We build", "the software."],
    sub: "BitTechnologies is a software house in Fayoum, Egypt. We design and build websites, mobile apps, desktop programs, online stores and AI tools, then keep them running after launch.",
    secondary: "See what we build",
    scrollLabel: "Scroll to what we build",
  },
  services: {
    title: "What we build",
    tabsLabel: "Services",
    hint: "Keep scrolling. The blocks rebuild into each thing we make.",
    illustration: "Illustration",
    items: [
      {
        id: "web",
        name: "Websites",
        line: "A website that looks sharp on every phone and loads fast, so people trust you the moment they find you.",
        examples: ["Company and personal sites", "Booking pages", "Portfolios", "Landing pages"],
      },
      {
        id: "mobile",
        name: "Mobile apps",
        line: "Android and iPhone apps your customers download from the store and keep on their home screen.",
        examples: ["Ordering apps", "Booking apps", "Loyalty and rewards", "Delivery tracking"],
      },
      {
        id: "desktop",
        name: "Desktop software",
        line: "Programs for Windows and Mac that run your shop, clinic or office, even without internet.",
        examples: ["Cashier systems", "Inventory", "Clinic records", "Accounting tools"],
      },
      {
        id: "ai",
        name: "AI tools",
        line: "Smart tools that answer your customers, read your documents and handle the repetitive work for you.",
        examples: ["Customer chatbots", "Document reading", "Automations", "Smart search"],
      },
      {
        id: "store",
        name: "Online stores",
        line: "A shop that sells while you sleep: products, cart, payments, delivery and an admin panel you control.",
        examples: ["Product catalog", "Online payments", "Order tracking", "Sales dashboard"],
      },
      {
        id: "design",
        name: "UI/UX design",
        line: "We design every screen before writing code, so you see and approve exactly what you're getting.",
        examples: ["App and web screens", "Clickable prototypes", "Redesigns", "Brand-matched styles"],
      },
      {
        id: "cloud",
        name: "Cloud & DevOps",
        line: "We put your software online and keep it running: hosting, domains, servers and backups.",
        examples: ["Hosting and domains", "Server setup", "Backups", "Speed and uptime"],
      },
    ],
  },
  work: {
    title: "Things we've built",
    lead: "Real projects for real businesses. Each one started as a message.",
    madeLabel: "What we made",
    visit: "Visit",
    projects: [
      {
        name: "Capella Care",
        kind: "Beauty store, website and app",
        text: "A full online shop for skincare, makeup and haircare. Shoppers browse by category, search, save favorites and check out, on the web or in the app.",
        tags: ["Online store", "Website", "Mobile app"],
        image: images.capella,
        url: "https://capellacares.com",
      },
      {
        name: "Biscofa",
        kind: "Coffee ordering app",
        text: "Customers pick drinks, desserts and breakfast, order in seconds from anywhere and collect reward points on every order.",
        tags: ["Mobile app", "UI/UX design"],
        image: images.biscofa,
      },
      {
        name: "El Gawhra Roastery",
        kind: "Online store for a roastery since 1973",
        text: "An Arabic-first shop for roasted nuts and snacks, with collections, featured products and a layout made for phones.",
        tags: ["Online store", "Website", "UI/UX design"],
        image: images.gawhra,
      },
    ],
  },
  reasons: {
    title: "Why people work with us",
    lead: "We're a young team, and that works in your favor: you get our full attention, from the first message to long after launch.",
    items: [
      {
        title: "You talk to the people building it",
        text: "No middlemen. Message us and you're speaking with the designers and developers working on your project.",
      },
      {
        title: "A clear price before we start",
        text: "We agree on what's included and what it costs up front, so there are no surprises halfway through.",
      },
      {
        title: "Arabic and English",
        text: "Your website or app can speak both languages, with proper right-to-left layouts for Arabic.",
      },
      {
        title: "We stay after launch",
        text: "Fixes, updates and hosting. When something needs changing, you know exactly who to message.",
      },
    ],
  },
  faq: {
    title: "Questions people ask us",
    items: [
      {
        q: "I only have an idea. Is that enough?",
        a: "Yes. Send it to us on WhatsApp as a message or a voice note. We'll ask a few questions and turn it into a clear plan.",
      },
      {
        q: "How much does it cost?",
        a: "It depends on what you need. After a short chat we send you a fixed price and a list of everything included.",
      },
      {
        q: "How long does it take?",
        a: "Small websites are quick. Apps and larger systems take longer. You get a timeline together with the price, before anything starts.",
      },
      {
        q: "Do you only work with people in Fayoum?",
        a: "No. We're based in Fayoum and work with people all over Egypt. Everything can happen online.",
      },
      {
        q: "Can you fix or improve software I already have?",
        a: "Yes. Send us what you have and what's bothering you, and we'll tell you honestly whether to fix it or rebuild it.",
      },
    ],
  },
  contact: {
    title: "Have an idea? Send it to us.",
    lead: "One message is all it takes to start. Tell us what you want to build and we'll take it from there.",
    location: "Fayoum, Egypt",
  },
  footer: {
    tagline: "Websites, apps and software, built in Fayoum for people across Egypt.",
    servicesTitle: "What we build",
    contactTitle: "Contact",
    rights: "© 2026 BitTechnologies. All rights reserved.",
  },
  fab: "Message BitTechnologies on WhatsApp",
};

const ar: Content = {
  meta: {
    title: "BitTechnologies | شركة برمجيات في الفيوم، مصر",
    description:
      "نصمم ونبني المواقع وتطبيقات الموبايل وبرامج الكمبيوتر والمتاجر الإلكترونية وأدوات الذكاء الاصطناعي. أرسل فكرتك على واتساب.",
    ogTitle: "BitTechnologies | لديك فكرة؟ نحوّلها إلى برنامج حقيقي.",
  },
  whatsappMessage: "مرحباً BitTechnologies، عندي فكرة أريد تنفيذها.",
  skip: "تخطَّ إلى المحتوى",
  nav: {
    label: "القائمة الرئيسية",
    backToTop: "BitTechnologies، العودة للأعلى",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    links: [
      { href: "#services", label: "ماذا نبني" },
      { href: "#work", label: "أعمالنا" },
      { href: "#questions", label: "أسئلة" },
      { href: "#contact", label: "تواصل معنا" },
    ],
    whatsappShort: "راسلنا واتساب",
    switchLabel: "English",
  },
  whatsappCta: "راسلنا على واتساب",
  hero: {
    lines: ["لديك فكرة؟", "نحوّلها إلى", "برنامج حقيقي."],
    sub: "BitTechnologies شركة برمجيات في الفيوم، مصر. نصمم ونبني المواقع وتطبيقات الموبايل وبرامج الكمبيوتر والمتاجر الإلكترونية وأدوات الذكاء الاصطناعي، ونتابع تشغيلها بعد الإطلاق.",
    secondary: "شاهد ماذا نبني",
    scrollLabel: "انتقل إلى ماذا نبني",
  },
  services: {
    title: "ماذا نبني",
    tabsLabel: "الخدمات",
    hint: "واصل التمرير، المكعبات تعيد تشكيل نفسها لكل خدمة.",
    illustration: "رسم توضيحي",
    items: [
      {
        id: "web",
        name: "مواقع الويب",
        line: "موقع سريع وأنيق على كل الشاشات، يكسب ثقة الناس من أول زيارة.",
        examples: ["مواقع الشركات والأفراد", "صفحات الحجز", "معارض الأعمال", "صفحات الهبوط"],
      },
      {
        id: "mobile",
        name: "تطبيقات الموبايل",
        line: "تطبيقات أندرويد وآيفون يحمّلها عملاؤك من المتجر ويحتفظون بها على شاشتهم.",
        examples: ["تطبيقات الطلبات", "تطبيقات الحجز", "برامج الولاء والنقاط", "تتبع التوصيل"],
      },
      {
        id: "desktop",
        name: "برامج الكمبيوتر",
        line: "برامج لويندوز وماك تدير متجرك أو عيادتك أو مكتبك، حتى بدون إنترنت.",
        examples: ["أنظمة الكاشير", "إدارة المخزون", "سجلات العيادات", "برامج الحسابات"],
      },
      {
        id: "ai",
        name: "أدوات الذكاء الاصطناعي",
        line: "أدوات ذكية ترد على عملائك وتقرأ مستنداتك وتنجز المهام المتكررة بدلاً منك.",
        examples: ["روبوتات محادثة للعملاء", "قراءة المستندات", "أتمتة المهام", "بحث ذكي"],
      },
      {
        id: "store",
        name: "المتاجر الإلكترونية",
        line: "متجر يبيع وأنت نائم: منتجات وسلة ودفع وتوصيل، ولوحة تحكم في يدك.",
        examples: ["كتالوج المنتجات", "الدفع الإلكتروني", "تتبع الطلبات", "لوحة المبيعات"],
      },
      {
        id: "design",
        name: "تصميم UI/UX",
        line: "نصمم كل شاشة قبل كتابة الكود، فترى ما ستحصل عليه بالضبط وتوافق عليه.",
        examples: ["شاشات التطبيقات والمواقع", "نماذج تفاعلية", "إعادة التصميم", "هوية متناسقة مع علامتك"],
      },
      {
        id: "cloud",
        name: "السحابة و DevOps",
        line: "نطلق برنامجك على الإنترنت ونبقيه يعمل: استضافة ونطاقات وخوادم ونسخ احتياطي.",
        examples: ["الاستضافة والنطاقات", "إعداد الخوادم", "النسخ الاحتياطي", "السرعة والاستقرار"],
      },
    ],
  },
  work: {
    title: "أعمال نفّذناها",
    lead: "مشاريع حقيقية لأعمال حقيقية. كل واحد منها بدأ برسالة.",
    madeLabel: "ما قمنا به",
    visit: "زيارة",
    projects: [
      {
        name: "Capella Care",
        kind: "متجر تجميل، موقع وتطبيق",
        text: "متجر إلكتروني متكامل لمنتجات العناية بالبشرة والمكياج والشعر. يتصفح العملاء الأقسام ويبحثون ويحفظون المفضلة ويشترون من الموقع أو التطبيق.",
        tags: ["متجر إلكتروني", "موقع", "تطبيق موبايل"],
        image: images.capella,
        url: "https://capellacares.com",
      },
      {
        name: "Biscofa",
        kind: "تطبيق طلب القهوة",
        text: "يختار العملاء المشروبات والحلويات والفطور، ويطلبون في ثوانٍ من أي مكان، ويجمعون النقاط مع كل طلب.",
        tags: ["تطبيق موبايل", "تصميم UI/UX"],
        image: images.biscofa,
      },
      {
        name: "محمصة الجوهرة",
        kind: "متجر إلكتروني لمحمصة منذ 1973",
        text: "متجر عربي أولاً للمكسرات والمحمصات، بأقسام ومنتجات مميزة وتصميم مناسب للموبايل.",
        tags: ["متجر إلكتروني", "موقع", "تصميم UI/UX"],
        image: images.gawhra,
      },
    ],
  },
  reasons: {
    title: "لماذا يعمل الناس معنا",
    lead: "نحن فريق شاب، وهذا في صالحك: تحصل على كامل اهتمامنا من أول رسالة حتى بعد الإطلاق بوقت طويل.",
    items: [
      {
        title: "تتحدث مع من يبني مشروعك",
        text: "بدون وسطاء. راسلنا وستتحدث مباشرة مع المصممين والمبرمجين الذين يعملون على مشروعك.",
      },
      {
        title: "سعر واضح قبل أن نبدأ",
        text: "نتفق مقدماً على ما يشمله العمل وتكلفته، فلا مفاجآت في منتصف الطريق.",
      },
      {
        title: "عربي وإنجليزي",
        text: "موقعك أو تطبيقك يمكن أن يتحدث اللغتين، مع تصميم صحيح من اليمين لليسار للعربية.",
      },
      {
        title: "نبقى معك بعد الإطلاق",
        text: "إصلاحات وتحديثات واستضافة. وعندما تحتاج إلى تغيير شيء، تعرف بالضبط من تراسل.",
      },
    ],
  },
  faq: {
    title: "أسئلة يسألها الناس",
    items: [
      {
        q: "عندي فكرة فقط. هل هذا كافٍ؟",
        a: "نعم. أرسلها لنا على واتساب كرسالة مكتوبة أو صوتية، وسنسألك بعض الأسئلة ونحوّلها إلى خطة واضحة.",
      },
      {
        q: "كم التكلفة؟",
        a: "تعتمد على ما تحتاجه. بعد محادثة قصيرة نرسل لك سعراً ثابتاً وقائمة بكل ما يشمله.",
      },
      {
        q: "كم يستغرق التنفيذ؟",
        a: "المواقع الصغيرة سريعة، والتطبيقات والأنظمة الأكبر تأخذ وقتاً أطول. تحصل على جدول زمني مع السعر قبل أن يبدأ أي شيء.",
      },
      {
        q: "هل تعملون مع أهل الفيوم فقط؟",
        a: "لا. مقرنا في الفيوم ونعمل مع الناس في كل أنحاء مصر، وكل شيء يمكن أن يتم أونلاين.",
      },
      {
        q: "هل يمكنكم إصلاح أو تطوير برنامج موجود عندي؟",
        a: "نعم. أرسل لنا ما لديك وما يزعجك فيه، وسنخبرك بصراحة هل الأفضل إصلاحه أم إعادة بنائه.",
      },
    ],
  },
  contact: {
    title: "عندك فكرة؟ أرسلها لنا.",
    lead: "رسالة واحدة تكفي للبدء. أخبرنا بما تريد بناءه وسنتولى الباقي.",
    location: "الفيوم، مصر",
  },
  footer: {
    tagline: "مواقع وتطبيقات وبرامج، نبنيها في الفيوم لعملاء في كل أنحاء مصر.",
    servicesTitle: "ماذا نبني",
    contactTitle: "تواصل معنا",
    rights: "© 2026 BitTechnologies. جميع الحقوق محفوظة.",
  },
  fab: "راسل BitTechnologies على واتساب",
};

export const content: Record<Locale, Content> = { ar, en };
