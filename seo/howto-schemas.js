const howToSchemas = {
    'home': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Work with ZeeFrames UI UX Design Agency",
        "description": "Step-by-step guide to collaborating with ZeeFrames for UI UX design projects",
        "step": [
            {"@type": "HowToStep", "name": "Schedule a Discovery Call", "text": "Book a free consultation to discuss your project goals and requirements", "position": 1},
            {"@type": "HowToStep", "name": "Define Project Scope", "text": "Work with our team to outline deliverables, timeline, and budget", "position": 2},
            {"@type": "HowToStep", "name": "Design & Development", "text": "Our experts create your UI UX design using Figma, Webflow, or Framer", "position": 3},
            {"@type": "HowToStep", "name": "Review & Iterate", "text": "Provide feedback and collaborate on refinements", "position": 4},
            {"@type": "HowToStep", "name": "Launch & Support", "text": "Deploy your product with ongoing support and maintenance", "position": 5}
        ]
    },
    'about': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How ZeeFrames Delivers UI UX Design Excellence",
        "description": "Our proven process for creating exceptional digital experiences",
        "step": [
            {"@type": "HowToStep", "name": "Understand Your Vision", "text": "We start by deeply understanding your business goals and user needs", "position": 1},
            {"@type": "HowToStep", "name": "Research & Strategy", "text": "Conduct user research and competitive analysis to inform design decisions", "position": 2},
            {"@type": "HowToStep", "name": "Design & Prototype", "text": "Create wireframes, mockups, and interactive prototypes", "position": 3},
            {"@type": "HowToStep", "name": "Test & Validate", "text": "Conduct usability testing to ensure optimal user experience", "position": 4},
            {"@type": "HowToStep", "name": "Deliver & Support", "text": "Hand off polished designs with documentation and ongoing support", "position": 5}
        ]
    },
    'ui-ux-design': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create Effective UI UX Design",
        "description": "Our strategic UI UX design process for web and mobile applications",
        "step": [
            {"@type": "HowToStep", "name": "Discovery", "text": "Define design vision, audience expectations, and success metrics clearly", "position": 1},
            {"@type": "HowToStep", "name": "Design", "text": "Create elegant, structured layouts with clear usability throughout", "position": 2},
            {"@type": "HowToStep", "name": "Prototype", "text": "Build interactive experiences that demonstrate flow and engagement", "position": 3},
            {"@type": "HowToStep", "name": "Refine", "text": "Review, validate, and enhance every detail for flawless visual experience", "position": 4}
        ]
    },
    'brand-design': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Build a Strong Brand Identity",
        "description": "A structured brand design process for creating memorable brands",
        "step": [
            {"@type": "HowToStep", "name": "Discovery", "text": "Understand brand goals, target audience, and market positioning", "position": 1},
            {"@type": "HowToStep", "name": "Direction", "text": "Define visual direction and establish creative foundations", "position": 2},
            {"@type": "HowToStep", "name": "Design", "text": "Design brand visuals, assets, and key identity elements", "position": 3},
            {"@type": "HowToStep", "name": "System", "text": "Build a consistent and scalable brand system for all touchpoints", "position": 4}
        ]
    },
    'mvp-design': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Design an MVP (Minimum Viable Product)",
        "description": "Our MVP design process for validating product ideas quickly",
        "step": [
            {"@type": "HowToStep", "name": "Discovery", "text": "Understand goals, users, and problem scope to define MVP requirements", "position": 1},
            {"@type": "HowToStep", "name": "Definition", "text": "Define core features and MVP requirements that deliver essential value", "position": 2},
            {"@type": "HowToStep", "name": "Design", "text": "Create intuitive flows and usable interfaces focused on core functionality", "position": 3},
            {"@type": "HowToStep", "name": "Validation", "text": "Prepare MVP for testing and gather real user feedback", "position": 4}
        ]
    },
    'webflow-development': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Build a Website with Webflow",
        "description": "Our Webflow development process for creating responsive websites",
        "step": [
            {"@type": "HowToStep", "name": "Plan", "text": "Define site structure, content strategy, and design requirements", "position": 1},
            {"@type": "HowToStep", "name": "Design", "text": "Create responsive layouts and visual designs in Webflow", "position": 2},
            {"@type": "HowToStep", "name": "Build", "text": "Develop interactive elements and integrate CMS functionality", "position": 3},
            {"@type": "HowToStep", "name": "Launch", "text": "Deliver a polished, live-ready site with smooth interactions and scalability ensured", "position": 4}
        ]
    },
    'framer-development': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create Interactive Websites with Framer",
        "description": "Our Framer development process for motion-rich web experiences",
        "step": [
            {"@type": "HowToStep", "name": "Plan", "text": "Define brand goals, motion intent, and functional priorities for creative alignment", "position": 1},
            {"@type": "HowToStep", "name": "Design", "text": "Implement smooth animations, transitions, and page structures that reinforce storytelling", "position": 2},
            {"@type": "HowToStep", "name": "Develop", "text": "Build responsive Framer sites optimized for speed, engagement, and accessibility", "position": 3},
            {"@type": "HowToStep", "name": "Deliver", "text": "Test, refine, and launch high-performing websites with integrated analytics tracking", "position": 4}
        ]
    },
    'ui-ux-consulting': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Conduct UI UX Consulting",
        "description": "Our UI UX consulting process for improving user experiences",
        "step": [
            {"@type": "HowToStep", "name": "Review", "text": "Understand goals, challenges, and current product experience", "position": 1},
            {"@type": "HowToStep", "name": "Analysis", "text": "Analyze user flows, interfaces, and behaviors to uncover friction points", "position": 2},
            {"@type": "HowToStep", "name": "Strategy", "text": "Provide clear UX direction and actionable improvement steps", "position": 3},
            {"@type": "HowToStep", "name": "Validation", "text": "Validate solutions and define practical implementation roadmap", "position": 4}
        ]
    },
    'no-code-development': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Build Applications with No-Code Tools",
        "description": "Our no-code development process using Webflow, Framer, and Bubble",
        "step": [
            {"@type": "HowToStep", "name": "Requirements Gathering", "text": "Define application features, user flows, and technical requirements", "position": 1},
            {"@type": "HowToStep", "name": "Platform Selection", "text": "Choose the right no-code platform (Webflow, Framer, or Bubble) for your needs", "position": 2},
            {"@type": "HowToStep", "name": "Design & Build", "text": "Create responsive designs and build functionality using no-code tools", "position": 3},
            {"@type": "HowToStep", "name": "Test & Deploy", "text": "Test thoroughly and deploy your application with proper integrations", "position": 4}
        ]
    },
    'product-revamp': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Revamp Your Digital Product",
        "description": "Our product revamp process for modernizing existing applications",
        "step": [
            {"@type": "HowToStep", "name": "Audit", "text": "Conduct comprehensive UX audit to identify pain points and opportunities", "position": 1},
            {"@type": "HowToStep", "name": "Strategy", "text": "Define revamp strategy aligned with business goals and user needs", "position": 2},
            {"@type": "HowToStep", "name": "Redesign", "text": "Create modern, intuitive designs that improve user experience", "position": 3},
            {"@type": "HowToStep", "name": "Implement", "text": "Roll out improvements incrementally with user testing and validation", "position": 4}
        ]
    },
    'team-extension': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Extend Your Design Team with ZeeFrames",
        "description": "Our process for seamless team extension and collaboration",
        "step": [
            {"@type": "HowToStep", "name": "Assess Needs", "text": "Understand your team structure, project requirements, and skill gaps", "position": 1},
            {"@type": "HowToStep", "name": "Match Talent", "text": "Assign dedicated UI UX designers that fit your project and culture", "position": 2},
            {"@type": "HowToStep", "name": "Onboard", "text": "Integrate our designers into your workflow and communication channels", "position": 3},
            {"@type": "HowToStep", "name": "Collaborate", "text": "Work together seamlessly with regular updates and transparent communication", "position": 4}
        ]
    },
    'work-with-us': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Start a Project with ZeeFrames",
        "description": "Step-by-step guide to beginning your design project with us",
        "step": [
            {"@type": "HowToStep", "name": "Submit Your Project", "text": "Fill out our project inquiry form with your requirements and goals", "position": 1},
            {"@type": "HowToStep", "name": "Initial Consultation", "text": "Schedule a free call to discuss your project in detail", "position": 2},
            {"@type": "HowToStep", "name": "Proposal & Agreement", "text": "Review our proposal, timeline, and pricing, then sign the agreement", "position": 3},
            {"@type": "HowToStep", "name": "Kickoff & Delivery", "text": "Begin the project with a kickoff meeting and receive regular updates", "position": 4}
        ]
    },
    'brand-identity-design': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create a Brand Identity",
        "description": "Our brand identity design process for building recognizable brands",
        "step": [
            {"@type": "HowToStep", "name": "Research", "text": "Understand brand values, target audience, and competitive landscape", "position": 1},
            {"@type": "HowToStep", "name": "Concept", "text": "Develop visual concepts and brand personality", "position": 2},
            {"@type": "HowToStep", "name": "Design", "text": "Create logo, color palette, typography, and brand assets", "position": 3},
            {"@type": "HowToStep", "name": "Guidelines", "text": "Document brand standards and usage guidelines", "position": 4}
        ]
    },
    'brand-strategy-positioning': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Develop Brand Strategy and Positioning",
        "description": "Our strategic approach to defining brand positioning",
        "step": [
            {"@type": "HowToStep", "name": "Analysis", "text": "Analyze market, competitors, and target audience", "position": 1},
            {"@type": "HowToStep", "name": "Define", "text": "Define brand purpose, values, and unique positioning", "position": 2},
            {"@type": "HowToStep", "name": "Strategy", "text": "Create messaging framework and communication strategy", "position": 3},
            {"@type": "HowToStep", "name": "Implement", "text": "Roll out brand strategy across all touchpoints", "position": 4}
        ]
    },
    'bubble-app-development': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Build Apps with Bubble",
        "description": "Our Bubble app development process for no-code applications",
        "step": [
            {"@type": "HowToStep", "name": "Plan", "text": "Define app features, workflows, and database structure", "position": 1},
            {"@type": "HowToStep", "name": "Design", "text": "Create responsive UI and user flows in Bubble", "position": 2},
            {"@type": "HowToStep", "name": "Build", "text": "Develop workflows, integrations, and backend logic", "position": 3},
            {"@type": "HowToStep", "name": "Launch", "text": "Test, optimize, and deploy your Bubble application", "position": 4}
        ]
    },
    'design-systems-guidelines': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create Design Systems and Guidelines",
        "description": "Our process for building scalable design systems",
        "step": [
            {"@type": "HowToStep", "name": "Audit", "text": "Audit existing design patterns and components", "position": 1},
            {"@type": "HowToStep", "name": "Define", "text": "Define design tokens, components, and patterns", "position": 2},
            {"@type": "HowToStep", "name": "Build", "text": "Create reusable component library and documentation", "position": 3},
            {"@type": "HowToStep", "name": "Maintain", "text": "Establish governance and maintenance processes", "position": 4}
        ]
    },
    'experience-architecture': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Design Experience Architecture",
        "description": "Our approach to structuring user experiences",
        "step": [
            {"@type": "HowToStep", "name": "Research", "text": "Understand user needs and business objectives", "position": 1},
            {"@type": "HowToStep", "name": "Structure", "text": "Define information architecture and navigation", "position": 2},
            {"@type": "HowToStep", "name": "Map", "text": "Create user journey maps and interaction flows", "position": 3},
            {"@type": "HowToStep", "name": "Validate", "text": "Test and refine experience architecture", "position": 4}
        ]
    },
    'figma-sites': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Design Websites in Figma",
        "description": "Our Figma design process for creating website designs",
        "step": [
            {"@type": "HowToStep", "name": "Setup", "text": "Set up design system and component library in Figma", "position": 1},
            {"@type": "HowToStep", "name": "Design", "text": "Create responsive layouts and visual designs", "position": 2},
            {"@type": "HowToStep", "name": "Prototype", "text": "Build interactive prototypes with Figma", "position": 3},
            {"@type": "HowToStep", "name": "Handoff", "text": "Prepare design files for development handoff", "position": 4}
        ]
    },
    'mobile-design': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create Interaction and Motion Design",
        "description": "Our process for designing engaging interactions and animations",
        "step": [
            {"@type": "HowToStep", "name": "Define", "text": "Define interaction principles and motion strategy", "position": 1},
            {"@type": "HowToStep", "name": "Design", "text": "Design micro-interactions and transitions", "position": 2},
            {"@type": "HowToStep", "name": "Animate", "text": "Create motion prototypes and animations", "position": 3},
            {"@type": "HowToStep", "name": "Implement", "text": "Guide implementation with motion specifications", "position": 4}
        ]
    },
    'motion-design': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create Motion Design",
        "description": "Our motion design process for animated experiences",
        "step": [
            {"@type": "HowToStep", "name": "Concept", "text": "Develop motion concept and storyboard", "position": 1},
            {"@type": "HowToStep", "name": "Design", "text": "Design visual elements and animation sequences", "position": 2},
            {"@type": "HowToStep", "name": "Animate", "text": "Create smooth animations with proper timing", "position": 3},
            {"@type": "HowToStep", "name": "Deliver", "text": "Export and optimize motion assets for implementation", "position": 4}
        ]
    },
    'platform-maintenance-support': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Maintain and Support Your Platform",
        "description": "Our ongoing maintenance and support process",
        "step": [
            {"@type": "HowToStep", "name": "Monitor", "text": "Monitor platform performance and user feedback", "position": 1},
            {"@type": "HowToStep", "name": "Update", "text": "Implement updates, fixes, and improvements", "position": 2},
            {"@type": "HowToStep", "name": "Optimize", "text": "Optimize performance and user experience", "position": 3},
            {"@type": "HowToStep", "name": "Support", "text": "Provide ongoing technical support and guidance", "position": 4}
        ]
    },
    'product-strategy-consulting': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Develop Product Strategy",
        "description": "Our product strategy consulting process",
        "step": [
            {"@type": "HowToStep", "name": "Discover", "text": "Understand market, users, and business goals", "position": 1},
            {"@type": "HowToStep", "name": "Analyze", "text": "Analyze opportunities and competitive landscape", "position": 2},
            {"@type": "HowToStep", "name": "Define", "text": "Define product vision, strategy, and roadmap", "position": 3},
            {"@type": "HowToStep", "name": "Execute", "text": "Guide execution with strategic recommendations", "position": 4}
        ]
    },
    'web-design': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create Product Roadmaps",
        "description": "Our product roadmapping process for strategic planning",
        "step": [
            {"@type": "HowToStep", "name": "Gather", "text": "Gather requirements and stakeholder input", "position": 1},
            {"@type": "HowToStep", "name": "Prioritize", "text": "Prioritize features based on value and impact", "position": 2},
            {"@type": "HowToStep", "name": "Plan", "text": "Create timeline and milestone-based roadmap", "position": 3},
            {"@type": "HowToStep", "name": "Communicate", "text": "Share roadmap and align stakeholders", "position": 4}
        ]
    },
    'prototyping-user-testing': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Prototype and Test with Users",
        "description": "Our prototyping and user testing process",
        "step": [
            {"@type": "HowToStep", "name": "Prototype", "text": "Create interactive prototypes for testing", "position": 1},
            {"@type": "HowToStep", "name": "Recruit", "text": "Recruit target users for testing sessions", "position": 2},
            {"@type": "HowToStep", "name": "Test", "text": "Conduct usability tests and gather feedback", "position": 3},
            {"@type": "HowToStep", "name": "Iterate", "text": "Analyze results and iterate on design", "position": 4}
        ]
    },
    'rebranding-evolution': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Rebrand Your Business",
        "description": "Our rebranding process for brand evolution",
        "step": [
            {"@type": "HowToStep", "name": "Assess", "text": "Assess current brand and identify evolution needs", "position": 1},
            {"@type": "HowToStep", "name": "Strategy", "text": "Define rebranding strategy and positioning", "position": 2},
            {"@type": "HowToStep", "name": "Redesign", "text": "Create new brand identity and visual system", "position": 3},
            {"@type": "HowToStep", "name": "Launch", "text": "Roll out rebrand across all touchpoints", "position": 4}
        ]
    },
    'ux-audit-product-optimization': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Conduct UX Audit and Optimize Products",
        "description": "Our UX audit process for product optimization",
        "step": [
            {"@type": "HowToStep", "name": "Audit", "text": "Conduct comprehensive UX audit and heuristic evaluation", "position": 1},
            {"@type": "HowToStep", "name": "Identify", "text": "Identify usability issues and improvement opportunities", "position": 2},
            {"@type": "HowToStep", "name": "Recommend", "text": "Provide prioritized recommendations for optimization", "position": 3},
            {"@type": "HowToStep", "name": "Implement", "text": "Guide implementation of UX improvements", "position": 4}
        ]
    },
    'ux-research-insights': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Conduct UX Research",
        "description": "Our UX research process for gathering user insights",
        "step": [
            {"@type": "HowToStep", "name": "Plan", "text": "Define research objectives and methodology", "position": 1},
            {"@type": "HowToStep", "name": "Recruit", "text": "Recruit participants and prepare research materials", "position": 2},
            {"@type": "HowToStep", "name": "Conduct", "text": "Conduct research sessions and gather data", "position": 3},
            {"@type": "HowToStep", "name": "Analyze", "text": "Analyze findings and deliver actionable insights", "position": 4}
        ]
    },
    'visual-communication-design': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Create Visual Communication Design",
        "description": "Our visual communication design process",
        "step": [
            {"@type": "HowToStep", "name": "Brief", "text": "Understand communication goals and target audience", "position": 1},
            {"@type": "HowToStep", "name": "Concept", "text": "Develop visual concepts and creative direction", "position": 2},
            {"@type": "HowToStep", "name": "Design", "text": "Create visual assets and communication materials", "position": 3},
            {"@type": "HowToStep", "name": "Deliver", "text": "Finalize and deliver production-ready assets", "position": 4}
        ]
    },
    'work': {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to View ZeeFrames Portfolio",
        "description": "Explore our portfolio of successful design projects",
        "step": [
            {"@type": "HowToStep", "name": "Browse", "text": "Browse through our portfolio of completed projects", "position": 1},
            {"@type": "HowToStep", "name": "Review", "text": "Review case studies and project outcomes", "position": 2},
            {"@type": "HowToStep", "name": "Evaluate", "text": "Evaluate our design approach and results", "position": 3},
            {"@type": "HowToStep", "name": "Connect", "text": "Contact us to discuss your project needs", "position": 4}
        ]
    }
};

function getHowToSchema(pageKey) {
    return howToSchemas[pageKey] || null;
}

function renderHowToSchema(pageKey) {
    const schema = getHowToSchema(pageKey);
    if (schema) {
        document.write('<script type="application/ld+json">' + JSON.stringify(schema) + '<\/script>');
    }
}
