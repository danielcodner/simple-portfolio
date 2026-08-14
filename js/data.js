/*
  Case study data.
  To add a new project, copy one of the objects below and edit the fields.
  - "gallery" is an array of images shown in the auto-rotating carousel at the
    top of the case study modal. Each entry accepts a hex/gradient string
    (placeholder background) — swap them for real image URLs later by editing
    renderCaseStudy() in main.js to use <img> instead of a background style.
  - "video" is the path to an mp4 shown in the phone-frame mockup above the
    Overview section. Point two case studies at the same path to reuse a video.
*/

const CASE_STUDIES = [
  {
    id: "project-one",
    index: "01",
    title: "Redesigning ASOS homepage & Trending",
    tagline: "Cutting checkout drop-off through clearer flow and trust signals.",
    role: "Senior Product Designer",
    year: "2026",
    tools: "Figma, Lovable, Usertesting.com",
    tags: ["Product startegy", "UX Research", "Ai Prototyping", "Interaction Design", "E-commerce", "Wireframing"],
    video: "Assets/case-studies/asos-demo.mp4",
    gallery: [
      "linear-gradient(135deg, #d2e1da 0%, #3f6b53 100%)",
      "linear-gradient(135deg, #a3c1ac 0%, #182420 100%)",
      "linear-gradient(135deg, #e7f1ee 0%, #6f8f7c 100%)"
    ],
    overview:
      "The client's checkout flow had a 61% drop-off rate between cart and confirmation. I led a research-to-ship redesign focused on reducing friction at every step, with particular attention to mobile.",
    problem:
      "Checkout was a five-step flow spread across separate pages, with no visible progress indicator and inconsistent form validation. Users abandoned most often at the shipping step, where cost wasn't shown until the final page.",
    process:
      "I ran moderated usability sessions with 8 existing customers, mapped the full funnel in Amplitude, and facilitated two workshops with engineering and customer support to surface edge cases. From there I designed a condensed two-step flow with upfront cost transparency, inline validation, and a persistent order summary.",
    outcome:
      "The redesigned flow shipped as an A/B test against the existing checkout. Over a six-week rollout, checkout completion improved by 24%, and support tickets related to shipping cost confusion dropped by over 70%."
  },
  {
    id: "project-three",
    index: "02",
    title: "Redesigning the ASOS Android app",
    tagline: "The Android app was falling behind iOS and Web — old-fashioned, inconsistent, and overdue a rebuild.",
    role: "Lead Product Designer",
    year: "2017",
    tools: "Sketch, Usertesting.com",
    tags: ["Cross-platform Design", "UX Research", "Android"],
    video: "Assets/case-studies/android-demo.mp4",
    gallery: [
      "url('Assets/case-studies/android-before-after.png') top center / cover no-repeat",
      "url('Assets/case-studies/android-results.png') top center / cover no-repeat",
      "url('Assets/case-studies/android-crossplatform.png') top center / cover no-repeat"
    ],
    overview:
      "The ASOS Android app had fallen behind the iOS and Web experience — outdated, inconsistent, and overdue a redesign. As the sole Android designer, I led the project end-to-end, working closely with the Android development team and cross-functional stakeholders to bring it back in line with ASOS's design system.",
    problem:
      "The app felt old and hadn't been updated in a long time. Styling and colour palettes were inconsistent, the UX felt clunky, and the app wasn't built on a modular design framework, which made it difficult to maintain — content was overloaded, there was no design library, no clear hierarchy, and the experience wasn't product-focused.",
    process:
      "I ran ideation workshops and sketching sessions with stakeholders to explore concepts, which we evaluated and turned into wireframe prototypes. I conducted user testing via Usertesting.com alongside face-to-face guerrilla testing to validate the customer journey, and analysed Material Design patterns to decide which conventions to adopt for Android specifically. I worked daily with the Android development team in a scrum format — daily stand-ups, design critiques and weekly hand-off meetings — and ran monthly Android Champion meetings with product managers and designers to champion the platform. Partway through, the UX architect left the business without being replaced, so I managed the design direction alone for the rest of the project, while staying closely aligned with platform leads, business analysts and stakeholders throughout.",
    outcome:
      "The redesign brought the app in line with ASOS's design system — consistent styling, clearer hierarchy, immersive layouts and improved accessibility, replacing an overloaded, inconsistent experience. Android users grew to over 2 million, unique visits increased by more than 650,000 over a 12-month period, and orders doubled to over 500,000 (Dec 2016–2017). Customer feedback was consistently positive, with users describing the app as 'well designed', 'easy to navigate' and 'very responsive'."
  },
  {
    id: "project-four",
    index: "03",
    title: "TOPSHOP website design relaunch",
    tagline: "Bringing a once-loved high street brand back to life, independent from ASOS.com.",
    role: "Lead Product Designer",
    year: "2024",
    tools: "Figma, Miro",
    tags: ["Brand strategy", "UX Research", "E-commerce"],
    video: "Assets/app-demo.mp4",
    gallery: [
      "url('Assets/case-studies/topshop-problem.png') top center / cover no-repeat",
      "url('Assets/case-studies/topshop-research.png') top center / cover no-repeat",
      "url('Assets/case-studies/topshop-skills.png') top center / cover no-repeat"
    ],
    overview:
      "Topshop, once a popular and well-loved brand, had been consumed into the ASOS experience. This project set out to bring it back to life as a standalone destination for new and returning customers, independent from ASOS.com.",
    problem:
      "Since Topshop's high street closure and its merge into ASOS, the brand had lost its autonomy and identity — over 50% of people surveyed were unaware Topshop still existed, its presence on ASOS was minimal, and the experience no longer felt premium or aligned with its original audience. The brief was to relaunch Topshop as a rich, immersive, standalone experience that could rebuild a strong community around the brand.",
    process:
      "I ran ideation workshops to define business and design principles — landing on themes like premium brand quality, an immersive/video-led experience, and a 'product first' approach for a refreshed target audience. I built customer personas spanning loyal Topshop shoppers, lapsed customers and a new 'designer-obsessed' segment, then used platform mapping and competitor analysis (against Zara, COS, Massimo Dutti and Arket) to audit the end-to-end journey. I balanced conflicting stakeholder priorities through regular focus groups, onboarded additional designers onto the project as lead designer, and presented progress regularly to keep the brand and business teams aligned.",
    outcome:
      "The work produced an agreed set of business and design principles, a validated platform framework, and a competitor-benchmarked design direction for Topshop's relaunch as a standalone, premium destination — with stakeholder buy-in secured despite competing priorities and a tight timeline."
  }
];
