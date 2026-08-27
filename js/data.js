/*
  Case study data.
  To add a new project, copy one of the objects below and edit the fields.
  - "gallery" is an array of images shown in the auto-rotating carousel at the
    top of the case study modal. Each entry accepts a hex/gradient string
    (placeholder background) — swap them for real image URLs later by editing
    renderCaseStudy() in main.js to use <img> instead of a background style.
  - "video" is the path to an mp4 shown in the phone-frame mockup above the
    Overview section. Point two case studies at the same path to reuse a video.
  - "metrics" is optional — an array of { label, value } pairs shown as a
    "Product Metrics" block between Process and Outcome, styled like the
    Role/Year/Tools row. Omit it (or leave the array empty) and the block
    won't render at all. Example:
      metrics: [
        { label: "Conversion", value: "+24%" },
        { label: "Support tickets", value: "-70%" }
      ]
*/

const CASE_STUDIES = [
  {
    id: "project-one",
    index: "01",
    title: "Redesigning ASOS homepage",
    tagline: "Cutting checkout drop-off through clearer flow and trust signals.",
    role: "Product Designer",
    year: "2026",
    tools: "Figma, Lovable, Usertesting.com",
    tags: ["Product startegy", "UX Research", "Ai Prototyping", "Interaction Design", "E-commerce", "Wireframing"],
    metrics: [
      { label: "Metric one", value: "Value" },
      { label: "Metric two", value: "Value" },
      { label: "Metric three", value: "Value" }
    ],
    video: "Assets/app-demo.mp4",
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
    role: "Product Designer",
    year: "2017",
    tools: "Sketch, Usertesting.com",
    tags: ["Cross-platform Design", "UX Research", "Android"],
    metrics: [
      { label: "Metric one", value: "Value" },
      { label: "Metric two", value: "Value" },
      { label: "Metric three", value: "Value" }
    ],
    video: "Assets/app-demo.mp4",
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
    role: "Product Designer",
    year: "2024",
    tools: "Figma, Miro",
    tags: ["Brand strategy", "UX Research", "E-commerce"],
    metrics: [
      { label: "Metric one", value: "Value" },
      { label: "Metric two", value: "Value" },
      { label: "Metric three", value: "Value" }
    ],
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
  },
  {
    id: "project-five",
    index: "04",
    title: "Sale Toolkit Guidelines",
    tagline: "Creating a single-source brand guidelines toolkit",
    role: "Product Designer",
    year: "2026",
    tools: "Figma, Powerpoint",
    tags: ["Product startegy", "A/B test", "Guidelines", "Design"],
    metrics: [
      { label: "Engagement", value: "+21% YoY vs +15% (previous sale)" }
    ],
    video: "Assets/sale-demo.mp4",
    gallery: [
      "linear-gradient(135deg, #e0d7c9 0%, #8a6a4f 100%)",
      "linear-gradient(135deg, #c9b8a3 0%, #4f3a29 100%)",
      "linear-gradient(135deg, #ede4d8 0%, #a68b6f 100%)"
    ],
    overview: "Sale is a crucial trading tool for driving sell-through of seasonal stock and clearing inventory.",
    problem: "Sale campaigns were often not following and type of guidelines, missed alignment with business direction and lacked a form of consistency from season to season. We were unable to determine what the best customer experience would be.",
    process: "After A/B testing some different types of Sale directions we found that customers respond to clear, mission-led UX and urgency. Some of the things that worked well were UX-led new re-design of sale which drove a performance uplift. Including a hero shop all button which significantly increased clicks, showing appetite for those pages pulling interest away from sale category buttons. Dresses and Shoes were some of the most popular mission-led categories. Sale recommendations were also a top conversion driver with strong performance across the app.",
    outcome: "The outcome was to utilise product design for conversion driven moments to ensure the creative is performance optimised. To develop a Brand Toolkit for Sale creatives to ensure consistency and to deliver against both brand and performance goals. This would be available for anyone in the business wether existing or new persons and be ready to pickup to reference, adapt and educate. The Sale Brand Toolkit Guidelines are an internal that I created for all customer-facing teams including marketing, Brand, Design, Trading and UX. They were created to ensure a consistent customer experience that become synonymous with our Sale period. These guidelines provide a framework to balance value and urgency with clarity, quality, and brand desirability, ensuring that sales targets can be met without compromise. These guidelines were designed to optimise urgent sales on the right stock, while preserving our return to full price bounce back and brand's long-term consistency."
  },
  {
    id: "project-six",
    index: "05",
    title: "Trending Reels",
    tagline: "One-line summary of the project and the problem it solved.",
    role: "Product Designer",
    year: "2026",
    tools: "Tools used",
    tags: ["Content creation", "Guidelines", "Design", "Image retouching"],
    metrics: [
      { label: "Content", value: "Value" },
      { label: "AVG Reels per visit", value: "5" },
    ],
    video: "Assets/trending-reels.mp4",
    gallery: [
      "linear-gradient(135deg, #d9e3ec 0%, #3f5a75 100%)",
      "linear-gradient(135deg, #aebfd1 0%, #1c2c3d 100%)",
      "linear-gradient(135deg, #eef2f6 0%, #6f8ba3 100%)"
    ],
    overview: "Show customers what's hot and widely loved to help them shop confidently, reduce decision fatigue, and stay ahead as trendsetters.",
    problem: "There was an opportunity to create a dedicated destination where customers could come and shop what's popular and selling right now within the ASOS App. Customers go to social media to find this type of content and we want to surface this all in one place within the app.",
    process: "A project that stakeholders felt strongly about bringing added customer value, this started with a simple and familiar experience. I ran numerous user testing tests to try and validate which type of content landed best with our customers and there was various suggestions where personalisation seemed to be a major requirement. Low-motion video was popular along side well crafted cinematic content however more static slide-show type videos were not favoured. Content needed to be less bespoke if it was not dynamically personalised to the individual. I spent several months working on content for this initiative and feeding the reels for both WW & MW 3 times a week. Along the way we made small UX tweaks to the experience improving the click-through journeys, endless scroll and video controls.",
    outcome: "Created a space to put fashion into context through short format videos and static impactful imagery. Creating rich and meaningful content that enhances the users experience and promotes our products in the best possible way. This enables customers to both discovery and shop the latest trends in a familiar format they're used to on social media."
  },
  {
    id: "project-seven",
    index: "06",
    title: "ASOS Horizons redesign",
    tagline: "Rethinking the ASOS brand and redesign",
    role: "Product Designer",
    year: "2024",
    tools: "Tools used",
    tags: ["Tag one", "Tag two", "Tag three"],
    metrics: [
      { label: "Metric one", value: "Value" },
      { label: "Metric two", value: "Value" },
      { label: "Metric three", value: "Value" }
    ],
    video: "Assets/app-demo.mp4",
    gallery: [
      "linear-gradient(135deg, #e6dce8 0%, #6b4d78 100%)",
      "linear-gradient(135deg, #c3aecb 0%, #2e1f38 100%)",
      "linear-gradient(135deg, #f1ebf2 0%, #9377a1 100%)"
    ],
    overview: "Placeholder overview — replace with a short summary of the project, the client, and your role.",
    problem: "Placeholder problem — describe the challenge or pain point that kicked off the work.",
    process: "Placeholder process — outline the research, design, and collaboration steps you took.",
    outcome: "Placeholder outcome — summarise the results, metrics, or impact of the project."
  }
];
