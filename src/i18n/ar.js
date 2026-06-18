const ar = {
  common: {
    langSwitch: 'English',
    nav: {
      home: 'الرئيسية',
      about: 'من نحن',
      work: 'أعمالنا',
    },
    form: {
      fullName: 'الاسم الكامل*',
      email: 'البريد الإلكتروني*',
      phone: 'رقم الهاتف*',
      country: 'الدولة (اختياري)',
      searchCountry: 'ابحث عن دولة...',
      project: 'حدثنا عن مشروعك أو أهدافك أو الجدول الزمني أو المتطلبات*',
      submit: 'إرسال الطلب',
      preferEmail: 'تفضل البريد الإلكتروني؟ يمكنك التواصل معنا مباشرة.',
    },
    contact: {
      eyebrow: 'تواصل معنا',
      title: 'لنصنع شيئًا تفخر به',
      description:
        'هل لديك مشروع؟ سواء كنت تحتاج إلى إعادة تصميم كاملة لواجهة وتجربة المستخدم، أو منتج رقمي جديد، أو حضور أقوى على الإنترنت، فريقنا جاهز لتحويل أفكارك إلى واقع.',
      points: [
        'سنرد عليك خلال يوم عمل واحد.',
        'سنفهم أهدافك ونجمع تفاصيل المشروع المناسبة.',
        'ستصلك خطة واضحة تشمل الجدول الزمني والنطاق والتسعير.',
      ],
    },
  },
  footer: {
    intro:
      'نحوّل الأفكار إلى تجارب رقمية تتمحور حول المستخدم للشركات حول العالم، من الشركات الكبرى إلى الشركات الناشئة، باستخدام Figma وWebflow وحلول اللا كود.',
    company: 'الشركة',
    services: 'الخدمات',
    industries: 'القطاعات',
    copyright: '© ZeeFrames (Private) Limited. جميع الحقوق محفوظة.',
    servicesList: [
      'استشارات UI UX',
      'تصميم UI UX',
      'تصميم المواقع',
      'تصميم MVP',
      'تجديد المنتج',
      'تصميم الهوية',
      'تطوير NoCode',
      'تطوير Webflow',
      'تطوير Framer',
      'تصميم Figma',
    ],
    industriesList: ['الذكاء الاصطناعي/تعلم الآلة', 'SaaS', 'Web3', 'السفر', 'التقنية المالية', 'التقنية التعليمية', 'اللوجستيات', 'العقارات', 'الرعاية الصحية', 'التجارة الإلكترونية'],
  },
  work: {
    heroTitle: 'دراسات حالة UI UX والعلامة التجارية',
    heroText: 'مهما كان القطاع الذي تعمل فيه أو الأصل الذي تحتاجه، يمكننا تصميمه لك',
    heroPrimary: 'احجز مكالمة',
    heroSecondary: 'احجز عرضًا',
    filterTitle: 'اختر القطاع',
    filters: {
      all: 'كل القطاعات',
      fintech: 'تقنية مالية',
      logistic: 'لوجستيات',
      realEstate: 'عقارات',
    },
    noResults: 'لا توجد مشاريع للفئة المحددة.',
    portfolio: [
      { name: 'جيج دِسك', title: 'لوحة موحدة لإدارة الحفلات والجولات والأماكن والرواتب.' },
      { name: 'شِب تراك', title: 'تتبع الشحنات وإدارة التوصيل لحظيًا بين يديك' },
      { name: 'فيلا فولت', title: 'اكتشف واحجز أرقى الفلل الفاخرة حول العالم بسهولة' },
      { name: 'بلوم موني', title: 'تمكين المجتمعات عبر حلول مالية فعالة.' },
    ],
  },
  about: {
    hero: {
      title: 'وكالة استراتيجية لتصميم UI UX',
      description:
        'نحن وكالة تصميم منتجات رائدة للشركات الناشئة. نتميز في تصميم UI UX والهوية وتطوير الويب، ونلتزم بتحقيق رضا كامل في كل مشروع.',
      primary: 'اطلب عرضًا اليوم',
      secondary: 'احجز عرضًا',
      reviewedOn: 'تم التقييم على',
      ratings: [
        {
          title: 'تقييم 4.9',
          logo: '/frontend-assets/images/svgs/clutch.svg',
          logoAlt: 'clutch',
          logoWidth: 28,
        },
        {
          title: 'الأفضل في',
          flags: true,
          logo: '/frontend-assets/images/svgs/clutch.svg',
          logoAlt: 'clutch',
          logoWidth: 28,
        },
        {
          title: '150 مليون مشاهدة',
          logo: '/frontend-assets/images/svgs/dribbble.svg',
          logoAlt: 'dribbble',
          logoWidth: 33,
        },
        {
          title: 'موثّق',
          verified: true,
          logo: '/frontend-assets/images/svgs/webflow.svg',
          logoAlt: 'webflow',
          logoWidth: 32,
        },
      ],
    },
    partner: {
      eyebrow: 'من نحن',
      title: 'من نحن كشريك تصميم',
      description:
        'ZeeFrames وكالة متخصصة في تصميم UI UX تركز على إنشاء تجارب رقمية استثنائية. نحن ملتزمون بتقديم أفضل تجربة مستخدم ممكنة لأعمالك.',
      cards: [
        {
          icon: '/frontend-assets/images/svgs/team.svg',
          alt: 'team',
          title: 'فريقنا',
          description:
            'يمتلك فريقنا من خبراء UI UX سجلًا مثبتًا في تقديم حلول تصميم مبتكرة تحول الأعمال عبر قطاعات ومناطق مختلفة.',
        },
        {
          icon: '/frontend-assets/images/svgs/client-centeric.svg',
          alt: 'client-centric',
          title: 'تصميم يركز على العميل',
          description:
            'في ZeeFrames، يركز نهجنا على فهم احتياجات العميل والتعاون لبناء منتجات رقمية استثنائية وموجهة بالأهداف.',
        },
        {
          icon: '/frontend-assets/images/svgs/testimonial.svg',
          alt: 'testimonial',
          title: 'عرض شهادات العملاء',
          description:
            'لا تعتمد على كلامنا فقط. استكشف الشهادات ودراسات الحالة التي توضح كيف تساعد حلولنا التصميمية الشركات على تحقيق أهدافها.',
        },
      ],
    },
    mission: {
      eyebrow: 'مهمتنا',
      text:
        'تسعى ZeeFrames إلى أن تكون وكالة UI UX رائدة معروفة بحلول مبتكرة تقدم تجارب مستخدم استثنائية وتدفع نمو الأعمال. نحن نمزج بين الإبداع والتصميم المتمحور حول المستخدم لصناعة منتجات مميزة وبديهية وتحقيق أثر طويل الأمد مع عملائنا.',
      caption: 'منذ 2020، ما الذي حققناه...',
      metrics: [
        {
          target: '1200',
          label: 'مشروع ناجح',
          icon: '/frontend-assets/images/svgs/flame.svg',
          alt: 'flame',
          width: 87,
          height: 121,
          right: '26px',
        },
        {
          target: '200',
          label: 'عميل متكرر',
          icon: '/frontend-assets/images/svgs/repeated-clients.svg',
          alt: 'repeated-clients',
          width: 121,
          height: 121,
          right: '9px',
        },
        {
          target: '30',
          label: 'خبير UX',
          icon: '/frontend-assets/images/svgs/user-circle.svg',
          alt: 'user-circle',
          width: 101,
          height: 101,
          right: '10px',
        },
        {
          target: '4.8',
          label: 'نجوم على جوجل',
          icon: '/frontend-assets/images/svgs/smile.svg',
          alt: 'smile',
          width: 121,
          height: 121,
          right: '9px',
        },
      ],
    },
    culture: {
      eyebrow: 'ثقافتنا',
      title: 'كيف يمزج فريقنا بين UI UX والهوية والـ No-code',
      description: 'نؤمن بالتواصل الواضح وحل المشكلات بشكل استباقي والشفافية الكاملة.',
    },
    values: {
      eyebrow: 'قيمنا',
      text:
        'معًا نصنع شراكات مثالية. نقدم تعاونًا مريحًا ونحوّل رؤيتك إلى واقع بإبداع من الدرجة الأولى. بلا مبالغة، فقط ما يفيد.',
      items: [
        {
          icon: '/frontend-assets/images/about-crafted.webp',
          title: 'مصنوع بعناية لا منسوخ',
          description:
            'لا يوجد تحديان متطابقان تمامًا، لذلك نؤمن أن كل مشروع يستحق حلًا مصممًا خصيصًا له، بما في ذلك مشروعك.',
        },
        {
          icon: '/frontend-assets/images/about-seamless-collaboration.webp',
          title: 'تعاون سلس',
          description:
            'نضمن تسليم جميع المخرجات في الوقت المناسب لأننا نحب المشاريع السلسة. مديرو المشاريع لدينا جاهزون دائمًا للنقاش وتقديم التحديثات.',
        },
        {
          icon: '/frontend-assets/images/about-stay-flexible.webp',
          title: 'مرونة مستمرة',
          description:
            'نبقى قابلين للتكيف مع الاحتياجات العاجلة والتغييرات كلما تطور مشروعك.',
        },
        {
          icon: '/frontend-assets/images/about-transparent-pricing.webp',
          title: 'تسعير شفاف',
          description:
            'نقدم تفصيلًا واضحًا للفواتير دون أي رسوم مخفية. سواء كانت الشراكة حسب المشروع أو متكررة، يمكنك الإلغاء في أي وقت.',
        },
      ],
    },
    team: {
      eyebrow: 'فريقنا',
      title: 'مبادئ تقود قراراتنا التصميمية',
      description: 'اطمئن، مشروعك في أيدٍ أمينة.',
      members: [
        { image: '/frontend-assets/images/about-nasir.webp', name: 'ناصر علي', role: 'المدير التنفيذي والمؤسس' },
        { image: '/frontend-assets/images/about-ali.webp', name: 'محمد علي', role: 'مدير المبيعات' },
        { image: '/frontend-assets/images/about-babar.webp', name: 'محمد بابر', role: 'مدير التصميم' },
        { image: '/frontend-assets/images/about-umar.webp', name: 'عمر إسلام', role: 'قائد تصميم UI UX' },
        { image: '/frontend-assets/images/about-nashra.webp', name: 'نشرة مقصود', role: 'مصممة UI UX' },
        { image: '/frontend-assets/images/about-gohar.webp', name: 'جوهر أيوب', role: 'مصمم UI UX' },
        { image: '/frontend-assets/images/about-abdullah.webp', name: 'راؤو عبد الله', role: 'مصمم UI UX' },
        { image: '/frontend-assets/images/about-maryam.webp', name: 'مريم هاشمي', role: 'مصممة UI UX' },
        { image: '/frontend-assets/images/about-mubashir.webp', name: 'رانا مبشر', role: 'مصمم UI UX' },
        { image: '/frontend-assets/images/about-yousaf.webp', name: 'محمد يوسف', role: 'مصمم UI UX' },
        { image: '/frontend-assets/images/about-mustafa.webp', name: 'مصطفى أفريدي', role: 'مصمم UI UX' },
        { image: '/frontend-assets/images/about-bilal.webp', name: 'بلال يونس', role: 'مصمم UI UX' },
      ],
    },
    reviews: {
      reviewCount: '41 مراجعة',
      platforms: 'مراجعات على 3 منصات',
      average: 'متوسط التقييم',
      cards: [
        { logo: '/frontend-assets/images/svgs/clutch-large.svg', logoAlt: 'Clutch', star: '/frontend-assets/images/svgs/red-star.svg', height: 28 },
        { logo: '/frontend-assets/images/svgs/goodfirms-large.svg', logoAlt: 'Goodfirms', star: '/frontend-assets/images/svgs/blue-star.svg', height: 15 },
        { logo: '/frontend-assets/images/svgs/upwork-large.svg', logoAlt: 'Upwork', star: '/frontend-assets/images/svgs/green-star.svg', height: 29 },
      ],
    },
  },
  home: {
    hero: {
      titleStart: 'ذكاء إبداعي',
      badge: 'بدون كود',
      titleEnd: 'في كل بكسل',
      descriptionPrefix: 'نصمم',
      highlight: 'واجهات مذهلة',
      descriptionSuffix: 'للشركات حول العالم.',
      primary: 'احجز مكالمة',
      primaryHover: 'لنتحدث',
      secondary: '© 2025 الأعمال',
      secondaryHover: 'فتح',
    },
    partners: 'موثوق من قادة الصناعة والشركات الناشئة سريعة النمو',
    services: {
      eyebrow: 'نتميّز في',
      title: 'خدمات UI UX وتجربة المنتج',
      description: 'تصاميم تقدّم تجارب استخدام استثنائية',
      items: [
        { href: 'services/ui-ux-design', label: 'للتجارب الرقمية', title: 'تصميم UI UX', ariaLabel: 'اقرأ المزيد عن خدمة تصميم UI UX' },
        { href: 'services/product-revamp', label: 'للشركات الناشئة والقائمة', title: 'تجديد المنتج', ariaLabel: 'اقرأ المزيد عن خدمة تجديد المنتج' },
        { href: 'services/brand-design', label: 'لرواة القصص البصرية', title: 'تصميم الهوية', ariaLabel: 'اقرأ المزيد عن خدمة تصميم الهوية' },
        { href: 'services/no-code-development', label: 'لبناء التطبيقات بسرعة', title: 'تطوير بدون كود', ariaLabel: 'اقرأ المزيد عن خدمة التطوير بدون كود' },
        { href: 'services/mvp-design', label: 'للشركات الناشئة والمؤسسين', title: 'تصميم MVP', ariaLabel: 'اقرأ المزيد عن خدمة تصميم MVP' },
        { href: 'services/team-extension', label: 'فريق UI UX مخصص', title: 'توسعة الفريق', ariaLabel: 'اقرأ المزيد عن خدمة توسعة الفريق' },
      ],
    },
    showcase: {
      eyebrow: 'كيف ساعدنا الآخرين على النجاح',
      title: 'معرضنا الإبداعي',
      description: 'أصبحنا خبراء في إنشاء منتجات رقمية عالية المستوى. نصمم بجمال ونطوّر بإتقان ونهتم بعمق بما نقدمه.',
      projects: [
        { image: '/storage/280/3.png', name: 'جيج دِسك', title: 'لوحة موحدة لإدارة الحفلات والجولات والأماكن والرواتب.' },
        { image: '/storage/278/2.png', name: 'شِب تراك', title: 'تتبع الشحنات وإدارة التوصيل لحظيًا بين يديك' },
        { image: '/storage/277/1-(2).png', name: 'فيلا فولت', title: 'اكتشف واحجز أرقى الفلل الفاخرة حول العالم بسهولة' },
        { image: '/storage/275/Rectangle-6338.png', name: 'بلوم موني', title: 'تمكين المجتمعات عبر حلول مالية فعالة.' },
      ],
    },
    discovery: {
      title: 'مشروعك هنا',
      prefix: 'الدليل في أعمالنا. اطّلع على ',
      link: 'دراسات الحالة',
      suffix: ' لتتعرف على كيف يمكن لخدمات تطوير المنتجات لدينا أن تغيّر أعمالك.',
      primary: 'احجز مكالمة استكشافية',
      secondary: 'لنتحدث',
    },
    process: {
      eyebrow: 'عمليتنا، ميزتك',
      title: 'من الفكرة إلى التنفيذ',
      description: 'أصبحنا خبراء في إنشاء منتجات رقمية عالية المستوى. نصمم بجمال ونطوّر بإتقان ونهتم بعمق بما نقدمه.',
      steps: [
        { title: 'الاكتشاف', subtitle: 'البحث وتحليل المجال', description: 'لا تتجاهل خطوة البحث والتطوير الأساسية في عملية تصميم UX. اكتشف مشكلات المستخدمين وحلها لإطلاق منتج ناجح. اجمع بيانات عن الجمهور المستهدف وحلل آراء العملاء وطوّر تجربة الاستخدام.', mobileImage: '/frontend-assets/images/home-process-mob-1.webp' },
        { title: 'التدفقات', subtitle: 'خريطة رحلة المستخدم وهيكل الموقع', description: 'أنشئ تدفقات استخدام ناجحة لمنتجك عبر رسم رحلات المستخدم والتفاعلات. حدّد أفكار المنتج وأهدافه بما يناسب احتياجات المستخدمين وسلوكهم وتوقعاتهم، ثم اختبرها مع مستخدمين حقيقيين للتحسين.', mobileImage: '/frontend-assets/images/home-process-mob-2.webp' },
        { title: 'الوايرفريم', subtitle: 'تصميم منخفض الدقة', description: 'حدّد المحتوى والوظائف الأساسية لمنتجك باستخدام الوايرفريم في عملية تصميم UX. اطرح أفكارًا متعددة، واحصل على ملاحظات، وطورها حتى تصل إلى مستوى أعلى من الدقة، مع واجهة أكثر طبيعية وسهولة.', mobileImage: '/frontend-assets/images/home-process-mob-3.webp' },
        { title: 'النماذج البصرية', subtitle: 'تصميم عالي الدقة', description: 'تصوّر شكل منتجك النهائي عبر النماذج البصرية في UX. تتم مراجعة تصميم كل شاشة بالتفصيل من قبل أصحاب المصلحة وفريق التصميم، ثم يُختبر مع المستخدمين لتحسينه حسب احتياجاتهم وتوقعاتهم.', mobileImage: '/frontend-assets/images/home-process-mob-4.webp' },
        { title: 'النمذجة التفاعلية', subtitle: 'تصميم التفاعل', description: 'ينشئ مصممو UX نماذج أولية قابلة للنقر لمنتجك باستخدام أدوات مثل Invision لتقييم الوظائف. اجمع ملاحظات المستخدمين وتعاون مع فريق التطوير للوصول إلى نسخة أفضل قابلة للتنفيذ.', mobileImage: '/frontend-assets/images/home-process-mob-5.webp' },
        { title: 'الاختبار', subtitle: 'اختبار قابلية الاستخدام', description: 'يركز مصممو UX على تحسين قابلية الاستخدام من خلال الاختبار مع مستخدمين حقيقيين. حدّد أهداف الاختبار والسيناريوهات، واستقطب الجمهور المناسب، ثم حلّل النتائج وأجرِ التعديلات للحصول على أفضل تجربة استخدام.', mobileImage: '/frontend-assets/images/home-process-mob-6.webp' },
      ],
    },
    gradient: {
      title: 'تصميم يفكر. واجهات تُشعر.',
      description: 'في ZeeFrames، نبني أنظمة تصميم جاهزة للذكاء الاصطناعي لبرامج حديثة تكون مرنة وقابلة للتوسع ومتمحورة حول الإنسان.',
      primary: 'شاهد الذكاء الاصطناعي في العمل',
      secondary: 'لنتحدث',
    },
    faq: {
      eyebrow: 'الأسئلة الشائعة',
      title: 'أسئلة؟ لدينا الإجابات',
      description: 'تقلل ZeeFrames تعقيد التصميم وتسرّع إطلاق المنتجات عبر تدفقات UX واضحة وأنظمة بصرية قابلة للتوسع وتنفيذ بدون كود.',
      primary: 'احجز مكالمة مجانية',
      secondary: 'لنتحدث',
      items: [
        {
          question: 'ما هو تصميم UI UX ولماذا هو مهم؟',
          answers: [
            'تصميم UX أو تجربة المستخدم هو تصميم منتجات رقمية سهلة الاستخدام وتمنح المستخدم تجربة إيجابية. وهو مهم لأن التصميم الجيد يرفع رضا المستخدمين وتفاعلهم ومعدلات التحويل.',
          ],
        },
        {
          question: 'ما هي عملية تصميم UX وكم تستغرق؟',
          answers: [
            'تصميم UI أو واجهة المستخدم هو الجانب البصري للمنتجات الرقمية، مثل التخطيط والألوان والطباعة والعناصر الأخرى. وهو يختلف عن UX الذي يركز أكثر على التجربة العامة للمستخدم، بينما يركز UI على المظهر والجاذبية البصرية.',
          ],
        },
        {
          question: 'ما أنواع خدمات تصميم UX التي تقدمونها؟',
          answers: [
            'نقدم مجموعة من خدمات UX مثل البحث، والوايرفريم، والنماذج الأولية، واختبارات قابلية الاستخدام، والتصميمات الرسومية. نعمل عن قرب مع عملائنا لفهم احتياجاتهم وأهدافهم وتقديم حلول مخصصة تساعدهم على تحقيقها.',
          ],
        },
        {
          question: 'كيف يختلف تصميم UI UX لدى ZeeFrames عن الحلول الأخرى؟',
          answers: [
            'في ZeeFrames، نؤمن بقوة التفاعل بين الإنسان والحاسوب ونستخدمه لاتخاذ قرارات تصميم مدروسة قائمة على البيانات تميزنا عن المنافسين. وبصفتنا استوديو UI UX رائدًا في باكستان، نبدأ من اكتشاف احتياجات المستخدمين ونقاط ألمهم وننتهي باختبارات حقيقية للحصول على ملاحظات مباشرة، مما يمكننا من إنشاء تصاميم تتمحور حول المستخدم وتعزز سهولة الاستخدام والوصول والرضا العام.',
            'فلسفتنا التصميمية بسيطة: ضع المستخدم في قلب كل ما نقوم به. سواء كان ذلك في أبحاث UX أو تصميم تدفقات المستخدم أو الوايرفريم أو النمذجة التفاعلية، يضمن فريقنا من الخبراء مراعاة المستخدمين في كل مرحلة للوصول إلى نتائج قوية تلائم احتياجات أعمالك.',
          ],
        },
        {
          question: 'هل توجد مراجعات عملاء أو دراسات حالة متاحة لتصميم UI UX لدى ZeeFrames؟',
          answers: [
            'نفخر في ZeeFrames بمراجعات العملاء ودراسات الحالة التي تعرض خبرتنا في مجال UI UX. يمكنك الوصول إليها بسهولة على موقعنا للاطلاع على أعمالنا والأثر الذي أحدثته في أعمال عملائنا. وبصفتنا شركة UI UX من الطراز الأول، عملنا مع مجموعة متنوعة من العملاء حول العالم وساعدناهم على إنشاء تجارب رقمية جذابة وسهلة لعملائهم.',
          ],
        },
      ],
    },
    whatsAppLabel: 'تحدث معنا على واتساب',
  },
}

export default ar
