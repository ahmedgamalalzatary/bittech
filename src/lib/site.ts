export const WHATSAPP_NUMBER = "201011125116";
export const WHATSAPP_DISPLAY = "+20 101 112 5116";
export const EMAIL = "info@bittech.site";
export const LOCATION = "Fayoum, Egypt";

export function whatsappLink(message = "Hi BitTech, I have an idea I'd like to build.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type ServiceId = "web" | "mobile" | "desktop" | "ai" | "store" | "design" | "cloud";

export const services: {
  id: ServiceId;
  name: string;
  line: string;
  examples: string[];
}[] = [
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
];

export const projects = [
  {
    name: "Capella Care",
    kind: "Beauty store, website and app",
    text: "A full online shop for skincare, makeup and haircare. Shoppers browse by category, search, save favorites and check out, on the web or in the app.",
    tags: ["Online store", "Website", "Mobile app"],
    image: { src: "/work/capellacare2.png", width: 1536, height: 1024 },
    url: "https://capellacares.com",
  },
  {
    name: "Biscofa",
    kind: "Coffee ordering app",
    text: "Customers pick drinks, desserts and breakfast, order in seconds from anywhere and collect reward points on every order.",
    tags: ["Mobile app", "UI/UX design"],
    image: { src: "/work/biscofa.png", width: 1122, height: 1402 },
  },
  {
    name: "El Gawhra Roastery",
    kind: "Online store for a roastery since 1973",
    text: "An Arabic-first shop for roasted nuts and snacks, with collections, featured products and a layout made for phones.",
    tags: ["Online store", "Website", "UI/UX design"],
    image: { src: "/work/elgawhra.png", width: 1054, height: 1492 },
  },
];

export const reasons = [
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
];

export const faqs = [
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
];
