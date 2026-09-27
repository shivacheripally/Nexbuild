export const services = [
  {
    slug: 'strategy',
    title: 'Strategy & Consulting',
    tagline: 'Define where you are going and how to get there.',
    description:
      'We help you clarify your product vision, understand your market, and chart a roadmap that aligns ambition with feasibility. From discovery workshops to go-to-market planning, we make sure every decision is grounded in research.',
    deliverables: [
      'Discovery & stakeholder workshops',
      'Market & competitive analysis',
      'Product roadmap definition',
      'Go-to-market strategy',
      'Success metrics & KPIs',
    ],
    icon: 'compass',
  },
  {
    slug: 'brand-design',
    title: 'Brand & Visual Design',
    tagline: 'Craft an identity that people remember.',
    description:
      'A brand is more than a logo. We build visual systems that communicate your values across every touchpoint — from color and typography to motion and tone of voice.',
    deliverables: [
      'Brand identity & logo design',
      'Color & typography systems',
      'Design tokens & guidelines',
      'Marketing collateral',
      'Brand voice & messaging',
    ],
    icon: 'palette',
  },
  {
    slug: 'web-product',
    title: 'Web & Product Design',
    tagline: 'Interfaces that feel effortless and convert.',
    description:
      'We design user experiences that balance beauty with function. Every screen is informed by user research, tested for usability, and crafted to guide visitors toward action.',
    deliverables: [
      'User research & personas',
      'Information architecture',
      'Wireframing & prototyping',
      'UI design & design systems',
      'Usability testing',
    ],
    icon: 'layout',
  },
  {
    slug: 'engineering',
    title: 'Engineering & Development',
    tagline: 'Build it right, built to last.',
    description:
      'Our engineers turn design into fast, accessible, and maintainable software. We work in modern stacks and ship with automated testing and CI/CD so you can iterate with confidence.',
    deliverables: [
      'Frontend development (React, Next.js)',
      'Backend & API development',
      'Database architecture',
      'Performance optimization',
      'CI/CD & DevOps',
    ],
    icon: 'code',
  },
  {
    slug: 'growth',
    title: 'Growth & Optimization',
    tagline: 'Ship it, measure it, improve it.',
    description:
      'Launch is just the beginning. We help you set up analytics, run experiments, and continuously optimize your product based on real user behavior — not guesswork.',
    deliverables: [
      'Analytics & tracking setup',
      'A/B testing & experimentation',
      'Conversion rate optimization',
      'SEO & content strategy',
      'Performance monitoring',
    ],
    icon: 'trending-up',
  },
  {
    slug: 'support',
    title: 'Care & Support',
    tagline: 'Ongoing partnership, not a one-off project.',
    description:
      'We offer retainer-based support to keep your product secure, up-to-date, and evolving. Whether it is a new feature or a bug fix, we are here when you need us.',
    deliverables: [
      'Monthly maintenance retainers',
      'Security updates & monitoring',
      'Feature iterations',
      'Technical documentation',
      'Priority response SLA',
    ],
    icon: 'life-buoy',
  },
] as const

export const projects = [
  {
    slug: 'lumen-finance',
    title: 'Lumen Finance',
    category: 'Fintech · Web App',
    summary:
      'A personal finance dashboard that helps people budget, track spending, and plan for the future — all in one beautifully simple interface.',
    challenge:
      'Lumen came to us with a powerful budgeting engine but a confusing interface that users abandoned within a week. They needed a complete UX overhaul without rebuilding the backend.',
    approach:
      'We ran a two-week discovery sprint to map user pain points, then redesigned the entire dashboard around a single guiding principle: show the next action, not every option. We built a component library in parallel with the redesign so the engineering team could ship quickly.',
    result:
      'Daily active users increased 240% within three months of relaunch. Average session time doubled, and the app hit a 4.8-star rating on the App Store — up from 3.1.',
    services: ['Web & Product Design', 'Engineering & Development', 'Growth & Optimization'],
    duration: '12 weeks',
    year: '2025',
    image: 'lumen',
  },
  {
    slug: 'atlas-outdoors',
    title: 'Atlas Outdoors',
    category: 'E-commerce · Brand & Web',
    summary:
      'A premium outdoor gear brand that needed a digital storefront as rugged and refined as the products they sell.',
    challenge:
      'Atlas had a loyal following and beautiful products, but their online store felt like a spreadsheet. They needed a brand refresh and a storefront that conveyed quality and adventure.',
    approach:
      'We started with a brand refresh — new logo, color system, and photography direction. Then we designed and built a headless e-commerce storefront with a custom product configurator and editorial content sections.',
    result:
      'Online revenue grew 180% year-over-year. The new brand system was adopted across packaging and retail, and the site won a CSS Design Award for e-commerce excellence.',
    services: ['Brand & Visual Design', 'Web & Product Design', 'Engineering & Development'],
    duration: '16 weeks',
    year: '2025',
  },
  {
    slug: 'pulse-health',
    title: 'Pulse Health',
    category: 'Healthcare · Mobile App',
    summary:
      'A telehealth platform connecting patients with specialists, featuring appointment scheduling, video visits, and secure messaging.',
    challenge:
      'Pulse needed to launch quickly to serve rural communities with limited healthcare access. The platform had to be accessible to non-technical users, HIPAA-compliant, and reliable under poor connectivity.',
    approach:
      'We designed a progressive web app that works on any device, online or offline. The interface was tested with patients aged 18–82 to ensure accessibility. We built the video and scheduling infrastructure on a serverless architecture for scalability.',
    result:
      'Served 50,000+ patient visits in the first year. 94% of patients rated their experience 4 or 5 stars. The platform expanded to three new states within six months.',
    services: ['Strategy & Consulting', 'Web & Product Design', 'Engineering & Development'],
    duration: '20 weeks',
    year: '2024',
  },
  {
    slug: 'verge-studios',
    title: 'Verge Studios',
    category: 'Media · Website & CMS',
    summary:
      'An independent production company showcasing their portfolio of documentary and commercial work with a cinematic, immersive website.',
    challenge:
      'Verge had a stunning portfolio of video work but a website that did not do it justice. They wanted a site that felt like a film — immersive, full-bleed, and emotional.',
    approach:
      'We designed a full-screen video experience with scroll-driven storytelling. A custom CMS lets the team add new projects without touching code. Performance was critical — we optimized video delivery with adaptive streaming.',
    result:
      'Average time on site increased 5x. The site was featured in Awwwards Site of the Day. Inbound project inquiries doubled within two months of launch.',
    services: ['Brand & Visual Design', 'Web & Product Design', 'Engineering & Development'],
    duration: '10 weeks',
    year: '2024',
  },
  {
    slug: 'orbit-saas',
    title: 'Orbit SaaS',
    category: 'B2B SaaS · Product Design',
    summary:
      'A project management tool for creative agencies, replacing chaos with clarity through a clean, intuitive interface.',
    challenge:
      'Orbit had a powerful feature set but users were overwhelmed by the interface. Churn was high, and activation took weeks. They needed a product redesign that simplified without losing power.',
    approach:
      'We conducted user interviews with 30+ customers, then redesigned the navigation, onboarding, and core workflows. We introduced a command palette and contextual help so users always knew what to do next.',
    result:
      'Activation time dropped from 14 days to 2. Churn fell 60%. Net Promoter Score rose from +12 to +47. The redesign was rolled out with zero downtime.',
    services: ['Strategy & Consulting', 'Web & Product Design', 'Engineering & Development'],
    duration: '14 weeks',
    year: '2025',
  },
  {
    slug: 'fern-and-co',
    title: 'Fern & Co.',
    category: 'Hospitality · Brand & Web',
    summary:
      'A boutique hotel group with three properties, each with its own personality but a shared commitment to warmth and sustainability.',
    challenge:
      'Fern & Co. had three hotels with three different websites, three different brands, and no unified booking experience. They needed a cohesive brand system and a single booking platform.',
    approach:
      'We created a master brand with a flexible system that could adapt to each property. Then we built a unified booking platform with a custom CMS for each hotel to manage their own content.',
    result:
      'Direct bookings increased 150%, reducing reliance on OTAs. The unified brand system was adopted across signage, in-room materials, and digital. Guest satisfaction scores rose 22%.',
    services: ['Brand & Visual Design', 'Web & Product Design', 'Engineering & Development'],
    duration: '18 weeks',
    year: '2024',
  },
] as const

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We start by listening. Through workshops, interviews, and research, we understand your business, your users, and your goals. No assumptions — just clarity.',
    activities: ['Stakeholder workshops', 'User research', 'Competitive analysis', 'Technical audit'],
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We synthesize what we learned into a clear strategy. We define the problem, the audience, the success metrics, and the roadmap. Everyone aligns before a single pixel is pushed.',
    activities: ['Strategy document', 'User personas', 'Information architecture', 'Roadmap'],
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We explore, prototype, and refine. We design in the open, sharing work early and often. We test with real users and iterate based on what we learn.',
    activities: ['Wireframes', 'UI design', 'Prototyping', 'Usability testing'],
  },
  {
    number: '04',
    title: 'Build',
    description:
      'Our engineers bring designs to life with clean, tested, and accessible code. We ship in increments, so you see progress every week and can course-correct in real time.',
    activities: ['Frontend development', 'Backend & APIs', 'Testing & QA', 'CI/CD setup'],
  },
  {
    number: '05',
    title: 'Launch',
    description:
      'We do not just flip a switch. We plan the launch, monitor everything, and fix issues fast. We help you announce, distribute, and measure from day one.',
    activities: ['Launch plan', 'Analytics setup', 'Performance monitoring', 'Marketing support'],
  },
  {
    number: '06',
    title: 'Grow',
    description:
      'After launch, we keep going. We analyze user behavior, run experiments, and ship improvements. Your product is never done — it gets better every month.',
    activities: ['A/B testing', 'Conversion optimization', 'Feature iterations', 'Monthly reporting'],
  },
] as const

export const stats = [
  { value: '120+', label: 'Projects shipped' },
  { value: '40+', label: 'Clients served' },
  { value: '8', label: 'Years in business' },
  { value: '98%', label: 'Client retention' },
] as const

export const testimonials = [
  {
    quote:
      'Nexbuild did not just build our website — they rebuilt how we think about our digital presence. The strategy work alone paid for the entire project.',
    author: 'Sarah Chen',
    role: 'CEO, Lumen Finance',
  },
  {
    quote:
      'Working with Nexbuild felt like having an in-house team without the overhead. They were invested in our success from day one.',
    author: 'Marcus Reid',
    role: 'Founder, Atlas Outdoors',
  },
  {
    quote:
      'The redesign transformed our product. Activation time dropped from two weeks to two days. I did not think it was possible.',
    author: 'Priya Sharma',
    role: 'VP Product, Orbit SaaS',
  },
] as const

export const team = [
  {
    name: 'Alex Morgan',
    role: 'Founder & Strategy Lead',
    bio: 'Alex has spent 15 years helping companies define and ship digital products. Before Nexbuild, he led product strategy at two venture-backed startups.',
    initials: 'AM',
  },
  {
    name: 'Jordan Lee',
    role: 'Design Director',
    bio: 'Jordan is a multidisciplinary designer who has led brand and product design for companies across fintech, healthcare, and e-commerce.',
    initials: 'JL',
  },
  {
    name: 'Sam Rivera',
    role: 'Engineering Lead',
    bio: 'Sam is a full-stack engineer who cares deeply about performance, accessibility, and clean architecture. They have built platforms serving millions of users.',
    initials: 'SR',
  },
  {
    name: 'Taylor Kim',
    role: 'Growth & Analytics',
    bio: 'Taylor turns data into decisions. With a background in growth marketing and product analytics, they help clients iterate based on evidence, not opinions.',
    initials: 'TK',
  },
] as const

export const faqs = [
  {
    question: 'What types of projects do you take on?',
    answer:
      'We work on full-lifecycle digital projects — brand and identity, web and product design, engineering, and growth. We typically partner with companies that want a combination of these, but we also take on focused engagements like a brand refresh or a product redesign.',
  },
  {
    question: 'How do you price your work?',
    answer:
      'Most of our projects are fixed-scope, fixed-price engagements. After the discovery phase, we provide a detailed proposal with a clear breakdown of deliverables, timeline, and cost. For ongoing work, we offer monthly retainers.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'It depends on scope. A brand refresh can take 4–6 weeks. A full website redesign and build typically runs 10–16 weeks. A complex product build can take 3–6 months. We will give you a realistic timeline after our first conversation.',
  },
  {
    question: 'Do you work with startups or only established companies?',
    answer:
      'Both. We work with early-stage startups that need to get to market quickly, as well as established companies looking to evolve their digital presence. What matters to us is ambition and a willingness to collaborate.',
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Yes. We offer care and support retainers that include maintenance, security updates, feature iterations, and priority response. Most of our clients continue working with us after launch.',
  },
  {
    question: 'Where are you based?',
    answer:
      'We are a distributed team working across North America and Europe. We collaborate remotely and have worked with clients on every continent except Antarctica.',
  },
] as const
