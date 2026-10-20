export const COMPANY_INFO = {
  name: "AdoraTech",
  legalName: "AdoraTech Solutions Inc.",
  tagline: "Architecting Digital Dominance for the Intelligent Enterprise",
  description: "We are an elite software engineering and IT consulting partner. We design, build, scale, and secure world-class web applications, mobile ecosystems, enterprise systems, and AI automation engines for ambitious brands.",
  foundedYear: 2018,
  email: "hello@adoratech.com",
  salesEmail: "inquiries@adoratech.com",
  phone: "+1 (800) 492-3672",
  directLine: "+1 (415) 890-2341",
  stats: [
    { value: "250+", label: "Enterprise Apps Delivered", suffix: "+" },
    { value: "99.8%", label: "On-Time Sprint SLA", suffix: "%" },
    { value: "60+", label: "Senior Engineers & Architects", suffix: "+" },
    { value: "15+", label: "Global Design & Tech Awards", suffix: "+" },
    { value: "99.4%", label: "Client Retention Rate", suffix: "%" },
    { value: "$280M+", label: "Client Valuation Created", suffix: "+" }
  ]
};

export const CORE_SERVICES = [
  {
    id: "web-development",
    category: "web",
    title: "Custom Web Application Engineering",
    shortDesc: "Ultra-fast, responsive, reactive web applications built with modern frontend architectures and high-throughput APIs.",
    longDesc: "From high-converting SaaS platforms to complex multi-tenant dashboards, we architect web experiences that load in sub-seconds, adhere to strict WCAG accessibility guidelines, and effortlessly scale to millions of concurrent users.",
    icon: "Globe",
    badge: "Most Requested",
    popular: true,
    capabilities: [
      "Single-Page Applications (SPA) & Micro-Frontends",
      "Progressive Web Apps (PWA) with Offline Sync",
      "Next.js / React Server Components & Static Generation",
      "Real-time Dashboards via WebSockets & GraphQL Subscriptions",
      "Headless CMS & High-Speed E-Commerce Engines",
      "Core Web Vitals Optimization (99+ Lighthouse Scores)"
    ],
    techStack: ["React 19", "Next.js", "TypeScript", "Node.js", "GraphQL", "TailwindCSS", "PostgreSQL", "Redis"],
    deliverables: "Design System, Full Source Code, CI/CD Pipeline, Automated Test Suite, Production Deployment",
    startingPrice: "$7,500",
    typicalTimeline: "4 - 8 weeks",
    caseSnippet: "Accelerated load times by 72% for FinFlow SaaS, leading to +38% user onboarding completion."
  },
  {
    id: "mobile-development",
    category: "mobile",
    title: "Mobile App Development (iOS & Android)",
    shortDesc: "Intuitive, high-performance native and cross-platform mobile apps crafted for 60fps fluidity and delightful interactions.",
    longDesc: "We craft award-winning mobile experiences across iOS, Android, and wearables. Leveraging React Native and Flutter for cross-platform speed or pure Swift/Kotlin for native power, we ensure pixel perfection and seamless hardware integrations.",
    icon: "Smartphone",
    badge: "Flagship",
    popular: true,
    capabilities: [
      "Cross-Platform Flutter & React Native Engineering",
      "Native iOS (Swift / SwiftUI) & Android (Kotlin / Compose)",
      "Biometric Security, Apple Pay & Google Wallet Integrations",
      "Offline-First Data Sync & Background Geolocation",
      "Bluetooth BLE, Camera Computer Vision & IoT Connectivity",
      "App Store & Google Play Launch & Optimization (ASO)"
    ],
    techStack: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "SQLite", "Fastlane", "Mixpanel"],
    deliverables: "Interactive Prototypes, App Store Binaries, Backend APIs, Push Notification Infrastructure, Analytics Setup",
    startingPrice: "$9,000",
    typicalTimeline: "6 - 12 weeks",
    caseSnippet: "Engineered TeleHealth Go with 4.9★ rating on iOS App Store and 650k+ active patient users."
  },
  {
    id: "enterprise-software",
    category: "enterprise",
    title: "Enterprise Software & ERP/CRM Solutions",
    shortDesc: "Tailored mission-critical software, custom business portals, and intelligent workflow automation systems.",
    longDesc: "We replace fragmented spreadsheets, legacy bottlenecks, and inflexible off-the-shelf software with bespoke enterprise platforms. Our architectures feature strict access control, event-driven pipelines, and seamless synchronization with third-party software.",
    icon: "Cpu",
    badge: "High Impact",
    popular: false,
    capabilities: [
      "Custom ERP, CRM & Supply Chain Management Systems",
      "Legacy Code Modernization & Monolith-to-Microservices",
      "Event-Driven Architecture (Kafka / RabbitMQ / SQS)",
      "Role-Based Access Control (RBAC) & SAML/SSO Integration",
      "Automated Regulatory Compliance & Audit Logging",
      "High-Volume Data Processing & Distributed Transactions"
    ],
    techStack: ["Go", "Python", "Java Spring Boot", ".NET Core", "Kafka", "Docker", "Kubernetes", "MongoDB"],
    deliverables: "Architecture Blueprint, Microservice Cluster, Data Migration Strategy, Enterprise SLA Support",
    startingPrice: "$14,000",
    typicalTimeline: "8 - 16 weeks",
    caseSnippet: "Modernized legacy logistics software for global carrier, eliminating $1.4M in annual server maintenance costs."
  },
  {
    id: "ai-automation",
    category: "ai",
    title: "GenAI, LLMs & Intelligent Automation",
    shortDesc: "Harness generative AI, proprietary RAG pipelines, and automated agentic workflows to multiply business efficiency.",
    longDesc: "Transform raw organizational knowledge into actionable intelligence. We design specialized generative AI agents, document processing pipelines, predictive machine learning models, and conversational assistants tuned specifically to your private enterprise data.",
    icon: "Bot",
    badge: "Trending 2026",
    popular: true,
    capabilities: [
      "Enterprise Retrieval-Augmented Generation (RAG) Pipelines",
      "Autonomous Multi-Agent Systems & Tool-Calling Bots",
      "Private LLM Hosting (Llama, Mistral, DeepSeek) with Zero Data Leakage",
      "Computer Vision & Document Extraction (OCR/IDP)",
      "Predictive Analytics & Real-Time Churn / Anomaly Detection",
      "Custom Model Fine-Tuning & Vector Embeddings"
    ],
    techStack: ["Python", "PyTorch", "LangChain", "LlamaIndex", "ChromaDB", "Pinecone", "OpenAI", "HuggingFace"],
    deliverables: "Model Weights, Fine-Tuning Pipelines, Custom Vector Store, Secure API Gateway, Performance Dashboard",
    startingPrice: "$11,000",
    typicalTimeline: "5 - 10 weeks",
    caseSnippet: "Built internal legal synthesis AI assistant saving 4,200 billable research hours per quarter."
  },
  {
    id: "cloud-devops",
    category: "cloud",
    title: "Cloud Architecture, DevOps & Site Reliability",
    shortDesc: "Resilient multi-cloud infrastructure, automated GitOps CI/CD pipelines, and 99.99% high-availability setups.",
    longDesc: "We eliminate deployment anxiety and cut redundant cloud bills. Our certified AWS, GCP, and Azure architects build automated, self-healing cloud foundations with infrastructure-as-code, zero-downtime rolling releases, and end-to-end telemetry.",
    icon: "Cloud",
    badge: "Certified",
    popular: false,
    capabilities: [
      "Infrastructure as Code (Terraform & Pulumi)",
      "Kubernetes (EKS / GKE) Orchestration & Helm Packaging",
      "Automated CI/CD Pipelines with GitHub Actions & GitLab CI",
      "FinOps Cloud Cost Optimization (30-50% Cost Reductions)",
      "Zero-Downtime Blue/Green and Canary Deployments",
      "24/7 Telemetry, APM & Prometheus / Grafana Observability"
    ],
    techStack: ["AWS", "Google Cloud", "Azure", "Terraform", "Kubernetes", "Docker", "Prometheus", "Datadog"],
    deliverables: "Terraform Modules, CI/CD Workflows, SRE Runbooks, Cloud Cost Optimization Report",
    startingPrice: "$6,500",
    typicalTimeline: "3 - 6 weeks",
    caseSnippet: "Reduced cloud spend by 44% while increasing peak server capacity to handle 10x Black Friday surges."
  },
  {
    id: "cybersecurity",
    category: "security",
    title: "Cybersecurity, Pentesting & Compliance",
    shortDesc: "Proactive threat protection, penetration testing, source code audits, and SOC2 / ISO 27001 readiness.",
    longDesc: "Security is non-negotiable. Our certified ethical hackers simulate real-world attacks against your apps and APIs, identifying hidden vulnerabilities before adversaries do. We help tech companies become SOC2, HIPAA, and GDPR compliant.",
    icon: "ShieldCheck",
    badge: "Mission Critical",
    popular: false,
    capabilities: [
      "Full Web & Mobile Application Penetration Testing",
      "Static & Dynamic Application Security Testing (SAST/DAST)",
      "SOC2 Type II, ISO 27001 & HIPAA Readiness Audits",
      "Zero-Trust Architecture & Cloud IAM Hardening",
      "Smart Contract & Cryptographic Algorithm Auditing",
      "Incident Response Planning & Red-Team Simulations"
    ],
    techStack: ["OWASP ZAP", "Burp Suite", "Snyk", "SonarQube", "Trivy", "Vault", "Cloudflare Zero Trust"],
    deliverables: "Executive Risk Report, Detailed Remediation Guide, Security Attestation Certificate",
    startingPrice: "$7,000",
    typicalTimeline: "2 - 5 weeks",
    caseSnippet: "Identified and remediated 14 critical API authorization flaws prior to series B funding round."
  }
];

export const TECH_STACK = [
  { name: "React 19", category: "Frontend", level: "Core" },
  { name: "Next.js 15", category: "Frontend", level: "Core" },
  { name: "TypeScript", category: "Language", level: "Core" },
  { name: "Node.js", category: "Backend", level: "Core" },
  { name: "Python", category: "AI & Backend", level: "Core" },
  { name: "Go (Golang)", category: "Backend", level: "Advanced" },
  { name: "Flutter", category: "Mobile", level: "Core" },
  { name: "React Native", category: "Mobile", level: "Core" },
  { name: "Swift", category: "iOS", level: "Specialist" },
  { name: "Kotlin", category: "Android", level: "Specialist" },
  { name: "PostgreSQL", category: "Database", level: "Core" },
  { name: "MongoDB", category: "Database", level: "Core" },
  { name: "Redis", category: "Caching", level: "Core" },
  { name: "AWS Cloud", category: "Cloud", level: "Partner" },
  { name: "Google Cloud", category: "Cloud", level: "Partner" },
  { name: "Docker", category: "DevOps", level: "Core" },
  { name: "Kubernetes", category: "DevOps", level: "Core" },
  { name: "Terraform", category: "DevOps", level: "Core" },
  { name: "GraphQL", category: "API", level: "Core" },
  { name: "Kafka", category: "Streaming", level: "Advanced" },
  { name: "OpenAI / Claude", category: "GenAI", level: "Specialist" },
  { name: "LangChain", category: "AI Orchestration", level: "Specialist" }
];

export const CASE_STUDIES = [
  {
    id: "omnipay-fintech",
    title: "OmniPay Global: Enterprise Banking Super-App",
    client: "OmniPay Financial Group",
    industry: "Fintech & Payments",
    service: "Web-App & Mobile Engineering",
    image: "fintech_dashboard",
    description: "Re-architected a legacy banking portal into a lightning-fast React web dashboard and cross-platform Flutter mobile application handling over $3.2B in annual transactions.",
    metrics: [
      { label: "Transaction Speed", value: "< 240ms" },
      { label: "App Store Rating", value: "4.9 ★" },
      { label: "Annual Volume", value: "$3.2B+" },
      { label: "Security Breaches", value: "0" }
    ],
    tags: ["React", "Flutter", "Go", "AWS", "Zero-Trust", "PostgreSQL"],
    quote: "AdoraTech operated as a true strategic partner, not an outsourced contractor. Their speed and precision blew our board away."
  },
  {
    id: "healthpulse-ai",
    title: "HealthPulse AI: Clinical Telemedicine & Diagnostic Engine",
    client: "HealthPulse Network",
    industry: "Healthcare & AI",
    service: "Mobile App & AI Automation",
    image: "health_ai_platform",
    description: "Engineered a HIPAA-compliant telemedicine platform with an integrated RAG-based clinical decision support assistant that triages patient vitals and symptoms in real time.",
    metrics: [
      { label: "Clinician Triage Time", value: "-64%" },
      { label: "Active Patients", value: "1.4M" },
      { label: "HIPAA Audit Score", value: "100%" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    tags: ["Next.js", "Python", "LlamaIndex", "iOS / Android", "WebRTC", "GCP"],
    quote: "Our physicians save an average of 2 hours daily on charting and triage thanks to the AI systems built by AdoraTech."
  },
  {
    id: "nexus-logistics",
    title: "Nexus Fleet: Autonomous Telematics & Route Optimization",
    client: "Nexus Global Logistics",
    industry: "Supply Chain & IoT",
    service: "Enterprise Software & Cloud",
    image: "logistics_tracking",
    description: "Built an event-driven telemetry dispatch hub monitoring 18,000 commercial fleet vehicles across North America with real-time route optimization and fuel efficiency analytics.",
    metrics: [
      { label: "Fuel Expense Reduction", value: "32.4%" },
      { label: "Vehicles Connected", value: "18,000+" },
      { label: "Telemetry Latency", value: "< 90ms" },
      { label: "Fleet Downtime", value: "-45%" }
    ],
    tags: ["Kafka", "Kubernetes", "Node.js", "TimescaleDB", "React", "Mapbox"],
    quote: "The real-time vehicle dispatch engine paid for itself in fuel savings in less than 90 days."
  },
  {
    id: "auracommerce-luxury",
    title: "Aura Luxury: Next-Gen Headless Global E-Commerce",
    client: "Aura Brands International",
    industry: "E-Commerce & Retail",
    service: "Web-App Development & UI/UX",
    image: "ecommerce_luxury",
    description: "Designed and engineered an ultra-luxurious, sub-second headless commerce experience for 42 international markets with localized currencies, real-time inventory, and 3D product previews.",
    metrics: [
      { label: "Mobile Conversion", value: "+74%" },
      { label: "Avg Page Load", value: "680ms" },
      { label: "International Markets", value: "42" },
      { label: "Lighthouse Performance", value: "98/100" }
    ],
    tags: ["Next.js", "Shopify Plus Headless", "Three.js", "TailwindCSS", "Edge CDN"],
    quote: "The visual finesse and silky smooth 60fps animations elevated our brand identity to an entirely new echelon."
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Marcus Vance",
    role: "Chief Executive Officer & Co-Founder",
    bio: "Ex-Google engineering lead with 15+ years spearheading hyper-scale cloud platforms and enterprise software ventures.",
    specialties: ["Tech Strategy", "Enterprise Architecture", "Product Vision"],
    location: "San Francisco, CA",
    avatar: "MV"
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    bio: "PhD in Distributed Computing from MIT. Specializes in fault-tolerant microservices, high-throughput systems, and edge computing.",
    specialties: ["Distributed Systems", "Cloud Infrastructure", "Kubernetes"],
    location: "San Francisco, CA",
    avatar: "ER"
  },
  {
    name: "Dev Patel",
    role: "Head of AI & Machine Learning",
    bio: "Former AI research scientist at Stanford AI Lab. Pioneer in production LLM fine-tuning, RAG pipelines, and autonomous agent systems.",
    specialties: ["LLMs & RAG", "Deep Learning", "Vector Search"],
    location: "London, UK",
    avatar: "DP"
  },
  {
    name: "Sophia Lindqvist",
    role: "VP of Product & UI/UX Design",
    bio: "Multiple Awwwards & Red Dot recipient. Passionate about sleek micro-interactions, dark glassmorphic interfaces, and design systems.",
    specialties: ["Design Systems", "Interaction Design", "UX Research"],
    location: "Stockholm / London",
    avatar: "SL"
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Lead Cybersecurity Architect",
    bio: "CISSP and Certified Ethical Hacker (CEH) with a background in defense-grade penetration testing and SOC2 compliance auditing.",
    specialties: ["Application Security", "Threat Modeling", "Zero-Trust"],
    location: "Singapore",
    avatar: "TM"
  },
  {
    name: "Maya Chen",
    role: "Director of Mobile Engineering",
    bio: "Previously led iOS/Android core architecture at Stripe. Master of 60fps cross-platform mobile animations and offline data sync.",
    specialties: ["Flutter", "React Native", "Swift/Kotlin"],
    location: "San Francisco, CA",
    avatar: "MC"
  }
];

export const MILESTONES = [
  {
    year: "2018",
    title: "Inception in San Francisco",
    description: "Founded by two senior engineers with a vision to build software with zero compromises on quality, speed, or security."
  },
  {
    year: "2020",
    title: "Global Expansion & 50th Launch",
    description: "Opened our European technical hub in London and celebrated our 50th enterprise software delivery during the global digital surge."
  },
  {
    year: "2022",
    title: "SOC2 & ISO 27001 Certification",
    description: "Achieved highest tier security compliance, expanding into high-stakes fintech, healthcare, and federal government projects."
  },
  {
    year: "2024",
    title: "AI Labs Launch & Singapore Center",
    description: "Established our dedicated Applied GenAI laboratory and opened the Asia-Pacific delivery hub in Marina Bay, Singapore."
  },
  {
    year: "2026",
    title: "Next-Gen Enterprise Cloud & Agentic Systems",
    description: "Now serving over 250 enterprise clients worldwide with over 60 dedicated senior engineers, architects, and AI specialists."
  }
];

export const BLOG_POSTS = [
  {
    id: "enterprise-microfrontends-2026",
    title: "The 2026 Blueprint for Enterprise Micro-Frontends: Scalability Without Chaos",
    slug: "enterprise-microfrontends-2026",
    category: "Web Engineering",
    readTime: "7 min read",
    publishDate: "October 14, 2026",
    author: {
      name: "Marcus Vance",
      role: "CEO & Co-Founder",
      avatar: "MV"
    },
    excerpt: "Why modern monolith frontends buckle under enterprise team sizes, and how Module Federation with React 19 provides modular autonomy with sub-second page performance.",
    content: `### The Micro-Frontend Paradigm Shift

As engineering organizations scale beyond 50 engineers, frontend monoliths invariably become the single largest bottleneck in release velocity. Merge conflicts, prolonged CI build pipelines, and unintentional regressions across disjointed features paralyze sprints.

In 2026, enterprise software engineering has settled on a battle-tested architecture: **Dynamic Module Federation coupled with React 19 Server Components**.

#### 1. Independent Deployability Without Shared Bundle Bloat
The golden rule of enterprise micro-frontends is that team checkout should never block team catalog. By deploying micro-apps as independent remote containers orchestrated via a lightweight shell application, teams achieve:
- Isolated sprint cycles and zero-dependency deployments
- Fault isolation: a runtime crash in recommendations does not crash the payment flow
- Sub-400ms initial load times through intelligent edge preloading

\`\`\`javascript
// Example Module Federation host config in Vite
export default defineConfig({
  plugins: [
    federation({
      name: 'host-app',
      remotes: {
        billingApp: 'https://billing.adoratech.com/assets/remoteEntry.js',
        analyticsApp: 'https://analytics.adoratech.com/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom']
    })
  ]
});
\`\`\`

#### 2. Design System Enforced via Universal Tokens
Autonomy must not come at the expense of visual coherence. A unified design system packaged as an immutable npm package or CSS variables schema guarantees brand consistency across all distributed teams.

#### Key Takeaway for Engineering Leaders
Micro-frontends are an organizational scaling tool first, and a technical tool second. If your team has fewer than 25 frontend developers, stick to a modular monorepo. When you cross that threshold, dynamic federation is the definitive path forward.`,
    tags: ["React 19", "Micro-Frontends", "Vite", "Architecture", "Performance"]
  },
  {
    id: "production-rag-pipelines-latency",
    title: "Architecting Production RAG Pipelines with Sub-150ms End-to-End Latency",
    slug: "production-rag-pipelines-latency",
    category: "AI & Machine Learning",
    readTime: "9 min read",
    publishDate: "October 08, 2026",
    author: {
      name: "Dev Patel",
      role: "Head of AI",
      avatar: "DP"
    },
    excerpt: "A deep dive into hybrid dense-sparse vector indexing, speculative decoding, and streaming inference for high-concurrency enterprise AI applications.",
    content: `### The Enterprise RAG Dilemma

Retrieval-Augmented Generation (RAG) is the foundational architecture of enterprise knowledge access. However, 80% of enterprise RAG proof-of-concepts fail to transition into production due to unacceptable latency (often 4 to 9 seconds) and hallucination risks.

At AdoraTech Applied AI Labs, we engineered a production standard delivering sub-150ms semantic retrieval and streaming token generation.

#### The Three Latency Chokepoints
1. **Inefficient Vector Distance Computation**: Brute-force cosine distance over millions of vectors degrades linearly.
2. **Context Window Stuffing**: Dumping 30 chunks into the prompt slows down transformer prefill.
3. **Serial Network Hops**: Query parsing -> Embedding -> Search -> Reranking -> LLM call.

\`\`\`python
# Optimized Async Hybrid Search with Reciprocal Rank Fusion
async def query_knowledge_base(user_prompt: str, tenant_id: str):
    # Concurrent vector embedding and BM25 tokenization
    dense_vector, sparse_tokens = await asyncio.gather(
        generate_embedding_async(user_prompt),
        tokenize_bm25(user_prompt)
    )
    
    # Hybrid search in HNSW indexed Qdrant / Pinecone cluster
    results = await vector_db.hybrid_search(
        collection=f"tenant_{tenant_id}",
        vector=dense_vector,
        sparse=sparse_tokens,
        top_k=5,
        score_threshold=0.82
    )
    return results
\`\`\`

#### Speculative Decoding & Edge Token Streaming
By streaming tokens immediately via Server-Sent Events (SSE) while the model computes continuation sequences, the perceived latency drops from seconds to under 200 milliseconds, delighting end users.`,
    tags: ["Generative AI", "RAG", "Vector DB", "Python", "Low Latency"]
  },
  {
    id: "mobile-benchmarks-native-vs-flutter",
    title: "Native vs. Flutter in 2026: Benchmarking Memory Footprint & GPU Performance",
    slug: "mobile-benchmarks-native-vs-flutter",
    category: "Mobile Development",
    readTime: "6 min read",
    publishDate: "September 29, 2026",
    author: {
      name: "Maya Chen",
      role: "Director of Mobile Engineering",
      avatar: "MC"
    },
    excerpt: "We put Swift/Kotlin and Flutter Impeller through intense stress tests: frame rate drops, memory consumption under 10k list elements, and battery drain.",
    content: `### The Modern Cross-Platform Reality

Choosing the right mobile stack is one of the highest-stakes technical decisions for any product team. The debate between pure native (Swift/Kotlin) and cross-platform frameworks (Flutter/React Native) has changed dramatically with the introduction of Flutter's **Impeller rendering engine** and modern Ahead-of-Time (AOT) compilation.

#### The Test Environment
- **Devices**: iPhone 16 Pro (iOS 19) & Samsung Galaxy S26 Ultra (Android 16)
- **Scenarios**:
  - Continuous 120Hz scrolling of 10,000 mixed media items (video thumbnails, complex vectors)
  - Memory consumption after 30 minutes of continuous heavy interaction
  - Cold startup time to interactive state

| Metric | Swift / Kotlin Native | Flutter (Impeller Engine) | React Native (New Arch) |
|---|---|---|---|
| Cold Start Time | 280ms | 340ms | 410ms |
| 120fps Scroll Stability | 99.4% | 98.6% | 96.2% |
| Peak RAM (10k items) | 114 MB | 138 MB | 162 MB |
| Battery Drain / Hour | 3.8% | 4.1% | 4.6% |

#### Our Verdict for IT Decision Makers
For 85% of commercial and enterprise mobile applications, Flutter and React Native provide practically indistinguishable performance from pure native code, while cutting development and maintenance costs by 40-50%. Only reserve pure native when deeply embedding hardware-specific ARKit, low-level Bluetooth protocols, or real-time audio synthesis.`,
    tags: ["Mobile", "Flutter", "iOS", "Android", "Benchmarks"]
  },
  {
    id: "zero-trust-cloud-infrastructure",
    title: "Zero Trust Cloud Infrastructure: A Practical DevOps Checklist for High Growth Teams",
    slug: "zero-trust-cloud-infrastructure",
    category: "Cybersecurity & Cloud",
    readTime: "8 min read",
    publishDate: "September 18, 2026",
    author: {
      name: "Tariq Al-Mansoor",
      role: "Lead Security Architect",
      avatar: "TM"
    },
    excerpt: "Perimeter security is dead. Here is how leading enterprise engineering teams implement mutual TLS, ephemeral credentials, and automated vulnerability gating.",
    content: `### The Fall of the Castle-and-Moat Architecture

In modern cloud environments characterized by microservices, remote developers, and third-party SaaS integrations, assuming that internal traffic is benign is a fatal mistake. Zero Trust operates under the core mantra: **Never trust, always verify.**

#### The 5 Pillars of Enterprise Zero Trust

1. **Identity as the Perimeter**: Eliminate static passwords and long-lived API keys. Transition all service-to-service communication to mTLS using SPIFFE/SPIRE or HashiCorp Vault ephemeral certificates.
2. **Micro-Segmentation in Kubernetes**: Enforce strict NetworkPolicies. Default deny all ingress and egress traffic between pods unless explicitly whitelisted.
3. **Immutable Infrastructure via GitOps**: No manual SSH into production EC2 instances or Kubernetes pods. All changes must pass CI/CD automated linting, security scanning, and signed commits.
4. **Continuous Vulnerability Remediation**: Implement automated dependency scanners (Trivy, Snyk) that automatically break the build when a high-severity CVE is detected.
5. **Least-Privilege Cloud IAM**: Use AWS IAM Roles Anywhere or Google Workload Identity with temporary role assumption limited to 15-minute validity windows.`,
    tags: ["Cybersecurity", "DevOps", "Zero Trust", "Kubernetes", "Compliance"]
  },
  {
    id: "composable-enterprise-software",
    title: "Why Monolithic ERPs are Failing: The Rise of Composable Enterprise Software",
    slug: "composable-enterprise-software",
    category: "Enterprise Software",
    readTime: "10 min read",
    publishDate: "September 02, 2026",
    author: {
      name: "Dr. Elena Rostova",
      role: "CTO",
      avatar: "ER"
    },
    excerpt: "Multi-million dollar ERP implementations are infamous for running over-budget and stifling agility. Discover how composable API-driven architectures are transforming enterprise IT.",
    content: `### The Stagnation of Legacy Enterprise Suites

Historically, enterprises bought monolithic all-in-one software suites with the promise that one vendor could handle billing, inventory, human resources, logistics, and customer relations. The reality? Clunky user interfaces, astronomical annual licensing costs, and vendor lock-in that makes altering a single business rule take six months.

#### The Composable IT Paradigm
Composable enterprise architecture breaks down monolithic giants into best-of-breed modular micro-services connected via resilient API contracts and asynchronous event buses.

#### Key Architectural Advantages:
- **Agility**: Swap out an underperforming payment or analytics service in days without disrupting inventory or CRM systems.
- **Cost Optimization**: Pay only for the computing resources and API calls your business actually uses.
- **Superior User Experience**: Tailor internal tools precisely to how your operations teams work, rather than forcing them into generic vendor templates.`,
    tags: ["Enterprise Software", "ERP", "Architecture", "Microservices"]
  }
];

export const TESTIMONIALS = [
  {
    name: "David Sterling",
    role: "Chief Technology Officer",
    company: "Apex Financial Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "AdoraTech transformed our core banking portal in just 4 months. Their engineering caliber, security diligence, and attention to micro-interactions is truly world class. Our transaction throughput increased by 420% with zero downtime."
  },
  {
    name: "Dr. Aris Thorne",
    role: "Co-Founder & CEO",
    company: "BioVance Telehealth",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Their mobile and AI engineering team delivered a HIPAA-compliant app that patients and clinicians genuinely love using. They reduced triage times by 64% and achieved a flawless 100% score on our third-party penetration audit."
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Engineering",
    company: "CloudScale Freight",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "We migrated 40TB of mission-critical logistics data across 18,000 live fleet vehicles with zero downtime. The AdoraTech team are true craftsmen of distributed systems. I cannot recommend them highly enough."
  },
  {
    name: "Julian Thorne",
    role: "Chief Product Officer",
    company: "Veloce Retail Brands",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Our conversion rate shot up 74% within 3 weeks of launching our new headless web application built by AdoraTech. The page load speeds (sub-700ms globally) blew past our most ambitious KPIs."
  }
];

export const FAQ_ITEMS = [
  {
    question: "What is your typical project engagement model and pricing structure?",
    answer: "We offer three flexible engagement models tailored to your requirements: 1) Dedicated Engineering Squads (monthly sprint-based billing with full agile team allocation), 2) Fixed-Scope Milestone Deliveries (ideal for clearly defined MVPs or specific modules), and 3) Time & Materials / Strategic Advisory for evolving enterprise R&D."
  },
  {
    question: "How do you protect our intellectual property and confidential data?",
    answer: "You retain 100% exclusive intellectual property ownership of all custom source code, architectures, design assets, and data models created during the engagement. We sign strict mutual Non-Disclosure Agreements (NDAs) prior to any discovery call and adhere to ISO 27001 data protection protocols."
  },
  {
    question: "What is the typical timeline for an end-to-end custom application?",
    answer: "A focused enterprise MVP or custom web application typically takes between 4 to 8 weeks from kickoff to production launch. Complex distributed systems, multi-platform mobile ecosystems, or custom AI fine-tuning models usually span 8 to 16 weeks across iterative two-week agile sprints with bi-weekly staging releases."
  },
  {
    question: "What post-launch SLA support and maintenance do you provide?",
    answer: "We never leave our clients hanging after launch. We offer 24/7/365 Managed SRE Support with guaranteed 15-minute critical incident response times, continuous OS security patching, dependency upgrades, cloud cost monitoring, and dedicated developer hours for iterative feature rollouts."
  },
  {
    question: "Can your engineering squad seamlessly augment our existing in-house team?",
    answer: "Absolutely. Over 45% of our projects involve co-development alongside client technical teams. Our senior engineers integrate smoothly into your Slack/Teams channels, Jira/Linear sprint boards, and GitHub/GitLab repositories, pairing with your staff while mentoring on best practices."
  },
  {
    question: "How does AdoraTech ensure code quality and prevent technical debt?",
    answer: "Every line of code submitted undergoes strict automated linting, type-checking, SAST vulnerability screening, minimum 85% unit test coverage thresholds, and mandatory peer review by a Principal Architect before merging into staging branches."
  }
];

export const GLOBAL_OFFICES = [
  {
    city: "San Francisco",
    tag: "Global Headquarters",
    address: "500 Howard Street, Suite 400",
    postal: "San Francisco, CA 94105",
    country: "United States",
    timezone: "America/Los_Angeles",
    phone: "+1 (415) 890-2341",
    email: "sf@adoratech.com"
  },
  {
    city: "London",
    tag: "European Technical Hub",
    address: "10 Finsbury Square, 3rd Floor",
    postal: "London EC2A 1AF",
    country: "United Kingdom",
    timezone: "Europe/London",
    phone: "+44 (20) 7946-0921",
    email: "london@adoratech.com"
  },
  {
    city: "Singapore",
    tag: "Asia-Pacific Delivery Center",
    address: "1 Marina Boulevard, Level 20",
    postal: "Marina Bay 018989",
    country: "Singapore",
    timezone: "Asia/Singapore",
    phone: "+65 6712-8800",
    email: "apac@adoratech.com"
  }
];
