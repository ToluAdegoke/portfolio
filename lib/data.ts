export const site = {
  name: "Tolulope Adegoke",
  role: "Web developer",
  email: "adegoketolulope08@gmail.com",
  github: "https://github.com/ToluAdegoke",
  linkedin: "https://www.linkedin.com/in/tolulope-adegoke-a64b89283",
  twitter: "https://twitter.com/dev_Tolu",
  sabi: "https://sabiexam.com",
  whatsapp: `https://wa.me/2349027035268?text=${encodeURIComponent("Hi Tolu, I'd like a website for my business.")}`,
};

export const nav = [
  { href: "/#websites", label: "Websites" },
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "How it works" },
  { href: "/about", label: "About" },
];

export const demos = [
  {
    name: "Kiln & Kettle",
    shot: "/images/site-kiln-and-kettle.jpg",
    shotMobile: "/images/site-kiln-and-kettle-mobile.jpg",
    kind: "Cafe",
    blurb: "Menu tabs, a live open-now badge and table booking.",
    href: "/demos/kiln-and-kettle/index.html",
    image: "/images/demo-kiln.jpg",
    alt: "A barista pouring milk into a cup behind a cafe counter",
    width: 1000,
    height: 681,
  },
  {
    name: "El Fuego",
    shot: "/images/site-el-fuego.jpg",
    shotMobile: "/images/site-el-fuego-mobile.jpg",
    kind: "Online store",
    blurb: "A hot sauce shop with heat filters and a working cart.",
    href: "/demos/el-fuego/index.html",
    image: "/images/demo-elfuego.jpg",
    alt: "Three El Fuego hot sauce bottles on a wooden table",
    width: 990,
    height: 660,
  },
  {
    name: "Ada Okafor Photography",
    shot: "/images/site-ada-okafor.jpg",
    shotMobile: "/images/site-ada-okafor-mobile.jpg",
    kind: "Photographer",
    blurb: "A filterable gallery, full-screen viewer and pricing.",
    href: "/demos/ada-okafor/index.html",
    image: "/images/demo-ada.jpg",
    alt: "A bride and groom smiling at each other in a garden",
    width: 1000,
    height: 666,
  },
];

export const principles = [
  {
    title: "Ship to real people early",
    body: "Sabi went from a hypothesis to 500+ students. Real usage tells me what to build next better than any roadmap.",
  },
  {
    title: "Do it properly where it counts",
    body: "Sabi's paywall is enforced server-side with row-level security, not just hidden in the UI. Slower to build, but the only version worth shipping.",
  },
  {
    title: "Don't solve problems you don't have",
    body: "Streaks and study plans run on Lagos time instead of full timezone handling. Our users don't need it yet, so we didn't build it.",
  },
  {
    title: "Use AI to move faster, not think less",
    body: "AI is in the product where it helps students learn, and in my workflow where it speeds up frontend work. The product decisions stay mine.",
  },
];

export const services = [
  {
    title: "Business websites",
    for: "Cafes, restaurants, salons, clinics",
    body: "Your menu or services, opening hours, location and a clear way to book, call or message you on WhatsApp.",
    example: "Like Kiln & Kettle",
  },
  {
    title: "Online stores",
    for: "Food brands, fashion, crafts",
    body: "Product pages, a cart and Paystack checkout, so customers can order and pay you directly.",
    example: "Like El Fuego",
  },
  {
    title: "Portfolios",
    for: "Photographers, creatives, professionals",
    body: "A gallery that shows your best work, your prices and an enquiry form that lands in your inbox.",
    example: "Like Ada Okafor",
  },
];

export const included = [
  "Looks great on phones, where most of your customers are",
  "Loads fast, even on slow connections",
  "Set up so Google can find you",
  "Call, WhatsApp and email buttons that work",
  "Help connecting your own domain name",
  "A walkthrough so you can make simple updates",
];

export const steps = [
  { title: "Chat", body: "Tell me about your business, your customers and what you want the site to do." },
  { title: "Design", body: "I put together a first version for you to react to. We adjust until it feels like you." },
  { title: "Build", body: "I build the real site with your words, photos and prices, and test it on phones." },
  { title: "Launch", body: "We go live on your domain, and I show you how to keep it up to date." },
];
