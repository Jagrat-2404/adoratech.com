export const COMPANY_INFO = {
  name: "AdoraTech",
  legalName: "AdoraTech IT Solutions Inc.",
  tagline: "Reliable IT solutions for growing businesses.",
  description: "AdoraTech delivers enterprise-grade managed IT services, proactive cybersecurity, cloud migration, and bespoke software engineering. We partner with ambitious organizations to transform complex technology into a dependable engine for secure growth.",
  foundedYear: 2011,
  yearsExperience: "15+",
  email: "contact@adoratech.com",
  salesEmail: "sales@adoratech.com",
  supportEmail: "support@adoratech.com",
  phone: "+1 (800) 492-3672",
  directLine: "+1 (415) 890-2341",
  address: "500 Howard Street, Suite 400, San Francisco, CA 94105",
  businessHours: "Monday – Friday: 8:00 AM – 6:00 PM PST (24/7/365 Emergency NOC & SOC for Managed Clients)",
  stats: [
    { value: "250+", label: "Projects Delivered", suffix: "+" },
    { value: "120+", label: "Enterprise Clients", suffix: "+" },
    { value: "15+", label: "Years Experience", suffix: "+" },
    { value: "99.9%", label: "Uptime SLA", suffix: "%" }
  ]
};

export const CORE_SERVICES = [
  {
    id: "managed-it",
    category: "it-management",
    title: "Managed IT Services",
    shortTitle: "Managed IT",
    shortDesc: "Proactive 24/7 infrastructure monitoring, rapid helpdesk support, remote desktop management, and automated maintenance.",
    longDesc: "Eliminate costly downtime and IT headaches. Our fully managed IT services provide complete oversight of your workstations, servers, network hardware, and employee workflows with guaranteed response SLAs under 15 minutes.",
    icon: "Server",
    badge: "Core Enterprise",
    popular: true,
    keyFeatures: [
      "24/7/365 NOC monitoring & automated alert triage",
      "Tier 1–3 remote helpdesk & dedicated onsite dispatch",
      "Automated OS patch management & software vulnerability remediation",
      "Hardware asset lifecycle tracking & procurement assistance",
      "Vendor management for telecom, ISPs, and SaaS licenses",
      "Disaster recovery planning & automated offsite backups"
    ],
    techStack: ["Datadog", "ConnectWise", "ServiceNow", "NinjaOne", "Zabbix", "Ansible"],
    deliverables: "Monthly Health Scorecard, Dedicated vCIO Account Reviews, SLA Guarantee Contract",
    startingPrice: "$99 / user / mo",
    typicalTimeline: "Immediate Onboarding (1-2 Weeks)",
    caseSnippet: "Lowered IT ticket resolution time by 68% for a 450-employee healthcare network with zero system outages."
  },
  {
    id: "cloud-solutions",
    category: "cloud",
    title: "Cloud Solutions & Migration",
    shortTitle: "Cloud Solutions",
    shortDesc: "Secure cloud migration, hybrid infrastructure design, cost optimization (FinOps), and high-availability multi-cloud architecture.",
    longDesc: "Transition legacy workloads to AWS, Microsoft Azure, or Google Cloud Platform without disrupting daily business. We architect resilient, auto-scaling environments equipped with Infrastructure-as-Code and continuous cost governance.",
    icon: "Cloud",
    badge: "Certified Partners",
    popular: true,
    keyFeatures: [
      "Zero-downtime database and workload cloud migration",
      "Multi-cloud architectures across AWS, Azure, and Google Cloud",
      "FinOps cloud spend audits saving clients an average of 35%",
      "Automated infrastructure provisioning via Terraform and Pulumi",
      "Kubernetes & container orchestration (EKS, AKS, GKE)",
      "High availability (HA) multi-region disaster recovery replication"
    ],
    techStack: ["AWS", "Microsoft Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker", "Prometheus"],
    deliverables: "Cloud Architecture Blueprint, Terraform Repositories, FinOps Cost Reduction Audit",
    startingPrice: "$6,500",
    typicalTimeline: "3 - 8 weeks",
    caseSnippet: "Migrated a 20-year legacy ERP to Azure Cloud with zero data loss and 42% lower annual hosting expenses."
  },
  {
    id: "cybersecurity",
    category: "cybersecurity",
    title: "Cybersecurity & Compliance",
    shortTitle: "Cybersecurity",
    shortDesc: "Comprehensive threat detection, SOC 2 / ISO 27001 readiness, ethical penetration testing, and zero-trust perimeter defense.",
    longDesc: "Safeguard your critical assets and proprietary data. Our certified security analysts implement multi-layered defenses, manage 24/7 Security Operations Center (SOC) telemetry, and prepare your business for strict regulatory compliance audits.",
    icon: "ShieldCheck",
    badge: "Mission Critical",
    popular: true,
    keyFeatures: [
      "24/7 Managed Detection and Response (MDR / SIEM / EDR)",
      "SOC 2 Type II, ISO 27001, HIPAA & GDPR compliance readiness",
      "Network, web app, and external API penetration testing",
      "Zero-Trust Architecture & identity access management (IAM)",
      "Phishing simulation training & employee cyber awareness",
      "Incident response planning, red teaming, and tabletop drills"
    ],
    techStack: ["CrowdStrike", "SentinelOne", "Splunk", "Cloudflare Zero Trust", "Burp Suite", "HashiCorp Vault"],
    deliverables: "Executive Risk & Vulnerability Report, SOC 2 Gap Analysis, Security Attestation Certificate",
    startingPrice: "$7,500",
    typicalTimeline: "2 - 6 weeks",
    caseSnippet: "Shielded a fintech payment processor handling $3.2B annually with zero security breaches across 3 years."
  },
  {
    id: "software-development",
    category: "software-dev",
    title: "Custom Software Development",
    shortTitle: "Software Development",
    shortDesc: "High-performance web applications, responsive customer portals, mobile applications, and resilient backend microservices.",
    longDesc: "When off-the-shelf software falls short, our senior engineering squad crafts tailored digital solutions. We combine modern frameworks, clean code principles, and intuitive UX design to deliver software that scales effortlessly.",
    icon: "Code2",
    badge: "Full-Cycle Agile",
    popular: true,
    keyFeatures: [
      "Custom web applications & modern enterprise customer portals",
      "Cross-platform iOS and Android mobile apps (React Native / Flutter)",
      "RESTful and GraphQL API design with automated OpenAPI documentation",
      "Modernization of outdated legacy systems & monolith refactoring",
      "Database schema optimization (PostgreSQL, MongoDB, Redis)",
      "Automated CI/CD deployment pipelines with 85%+ test coverage"
    ],
    techStack: ["React", "TypeScript", "Node.js", "Python", "Go", "PostgreSQL", "Next.js", "Docker"],
    deliverables: "Design System, 100% IP Source Code Ownership, Automated Test Suite, CI/CD Pipeline",
    startingPrice: "$8,500",
    typicalTimeline: "4 - 12 weeks",
    caseSnippet: "Built a customized real-time fleet logistics portal reducing vehicle downtime by 45% for 18,000 drivers."
  },
  {
    id: "it-consulting",
    category: "it-management",
    title: "IT Consulting & Digital Transformation",
    shortTitle: "IT Consulting",
    shortDesc: "Strategic virtual CIO (vCIO) advisory, IT roadmapping, technology audits, and legacy modernization roadmaps.",
    longDesc: "Align technology investment directly with commercial objectives. We serve as your strategic technical advisors, auditing current tech stacks, evaluating vendor contracts, and architecting actionable roadmaps for sustainable digital maturity.",
    icon: "Lightbulb",
    badge: "Executive Advisory",
    popular: false,
    keyFeatures: [
      "Fractional vCIO and enterprise technology steering committee",
      "Comprehensive IT infrastructure health & security audits",
      "Digital transformation roadmaps with ROI forecasting",
      "Software vendor evaluation, negotiation & procurement guidance",
      "IT budgeting, CAPEX/OPEX modeling, and resource planning",
      "Mergers & Acquisitions (M&A) technical due diligence assessments"
    ],
    techStack: ["Gartner IT Framework", "TOGAF", "ITIL 4", "COBIT", "Agile", "Jira"],
    deliverables: "3-Year Strategic IT Masterplan, Tech Debt Audit, Executive Presentation Deck",
    startingPrice: "$5,000",
    typicalTimeline: "2 - 4 weeks",
    caseSnippet: "Formulated a 3-year digital modernization plan for an insurance firm, unlocking $2.1M in efficiency gains."
  },
  {
    id: "data-analytics",
    category: "ai",
    title: "Data Analytics & Business Intelligence",
    shortTitle: "Data & Analytics",
    shortDesc: "Centralized data warehousing, interactive PowerBI/Tableau dashboards, predictive analytics, and enterprise GenAI integration.",
    longDesc: "Turn dormant data silos into actionable executive decision-making. We construct resilient ETL/ELT pipelines, unified cloud data lakes, and automated reporting dashboards that offer real-time clarity across your entire operation.",
    icon: "BarChart3",
    badge: "Data-Driven",
    popular: false,
    keyFeatures: [
      "Modern data stack architecture (Snowflake, BigQuery, Databricks)",
      "Automated ETL / ELT data pipeline engineering with dbt & Airflow",
      "Custom executive dashboards in Power BI, Tableau, and Metabase",
      "Predictive analytics, customer churn modeling & anomaly detection",
      "Generative AI & LLM enterprise assistants fine-tuned on private data",
      "Data governance, role-based privacy masking & master data management"
    ],
    techStack: ["Snowflake", "dbt", "Python", "Power BI", "Tableau", "Apache Airflow", "PostgreSQL"],
    deliverables: "Centralized Data Lakehouse, Real-Time BI Dashboards, Data Dictionary & Governance Docs",
    startingPrice: "$8,000",
    typicalTimeline: "4 - 8 weeks",
    caseSnippet: "Consolidated 8 disparate enterprise data sources into Snowflake, cutting weekly executive reporting from 3 days to 4 seconds."
  }
];

export const WHY_CHOOSE_US = [
  {
    icon: "Headphones",
    title: "24/7 Support",
    shortDesc: "Round-the-clock proactive monitoring and Tier-3 engineer access with guaranteed sub-15 minute response times.",
    badge: "Always Available"
  },
  {
    icon: "Award",
    title: "Certified Experts",
    shortDesc: "Over 60 seasoned architects holding elite credentials across AWS, Azure, Google Cloud, Cisco, and CISSP.",
    badge: "Industry Certified"
  },
  {
    icon: "Shield",
    title: "Secure Infrastructure",
    shortDesc: "Zero-trust blueprints, continuous vulnerability management, and built-in SOC 2 & ISO 27001 compliance standards.",
    badge: "Bank-Grade Security"
  },
  {
    icon: "Maximize2",
    title: "Scalable Solutions",
    shortDesc: "Modular, forward-compatible architectures designed to expand frictionlessly as your revenue and team multiply.",
    badge: "Built for Growth"
  }
];

export const CLIENT_LOGOS = [
  { name: "Apex Financial", tag: "Fintech Leader", logoText: "APEX FINANCIAL" },
  { name: "BioVance Health", tag: "Healthcare Network", logoText: "BIOVANCE" },
  { name: "Nexus Global Logistics", tag: "Supply Chain", logoText: "NEXUS GLOBAL" },
  { name: "OmniPay Systems", tag: "Payments", logoText: "OMNIPAY" },
  { name: "Veloce Enterprise", tag: "Retail Cloud", logoText: "VELOCE" },
  { name: "CloudScale Systems", tag: "SaaS Enterprise", logoText: "CLOUDSCALE" }
];

export const PARTNERSHIPS_AND_CERTS = [
  {
    id: "iso",
    name: "ISO/IEC 27001",
    label: "Certified Information Security",
    desc: "Internationally recognized standard for enterprise information security management systems (ISMS)."
  },
  {
    id: "soc2",
    name: "SOC 2 Type II",
    label: "Compliant & Verified",
    desc: "Rigorous third-party audit verification for security, confidentiality, and data integrity."
  },
  {
    id: "microsoft",
    name: "Microsoft Solutions Partner",
    label: "Azure Cloud & M365",
    desc: "Accredited partner for enterprise Azure cloud migrations and Microsoft 365 governance."
  },
  {
    id: "aws",
    name: "AWS Advanced Tier",
    label: "Certified Cloud Services",
    desc: "Recognized technical expertise in designing, deploying, and managing complex AWS environments."
  },
  {
    id: "gcp",
    name: "Google Cloud Premier",
    label: "Infrastructure & Data Partner",
    desc: "Specialized in BigQuery data analytics, Kubernetes, and enterprise AI workloads."
  },
  {
    id: "cisco",
    name: "Cisco Premier Certified",
    label: "Networking & Security",
    desc: "Certified implementation partner for enterprise SD-WAN, firewalls, and campus networks."
  }
];

export const CASE_STUDIES = [
  {
    id: "fintech-cloud-modernization",
    title: "Zero-Downtime Cloud Migration & Core Modernization",
    client: "Apex Financial Global",
    category: "Cloud & Cybersecurity",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    description: "Re-architected an on-premise transactional core into an elastic multi-region AWS cloud environment handling $3.2B in annual transactions with sub-200ms latency.",
    metrics: [
      { label: "Annual Volume", value: "$3.2B+" },
      { label: "Downtime during Cutover", value: "0 mins" },
      { label: "Latency Reduction", value: "64%" }
    ],
    tags: ["AWS Cloud", "Zero-Trust", "Kubernetes", "PostgreSQL"],
    quote: "AdoraTech operated as a true strategic partner. Their zero-downtime execution gave our executive board absolute peace of mind."
  },
  {
    id: "telehealth-managed-security",
    title: "24/7 Managed SOC & HIPAA Compliance Automation",
    client: "BioVance Health Network",
    category: "Managed IT & Security",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    description: "Implemented a fully managed 24/7 Security Operations Center with end-to-end HIPAA compliance automation for a 450-provider healthcare network.",
    metrics: [
      { label: "Threat Incident Response", value: "< 12 mins" },
      { label: "Active Care Providers", value: "450+" },
      { label: "Audit Readiness Score", value: "100%" }
    ],
    tags: ["Managed SOC", "CrowdStrike", "HIPAA Ready", "Splunk"],
    quote: "Our clinical staff can focus on patient care knowing our data and network are continuously protected by AdoraTech's 24/7 experts."
  },
  {
    id: "logistics-data-analytics",
    title: "Enterprise Fleet Telematics & Real-Time BI Hub",
    client: "Nexus Global Logistics",
    category: "Data Analytics & Software",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=80",
    description: "Architected an event-driven telemetry dashboard connecting 18,000 commercial vehicles with predictive fuel optimization and automated executive BI reports.",
    metrics: [
      { label: "Fuel Cost Savings", value: "32.4%" },
      { label: "Vehicles Connected", value: "18,000" },
      { label: "Report Generation Time", value: "-98%" }
    ],
    tags: ["Power BI", "Snowflake", "IoT Streaming", "React"],
    quote: "The unified data platform built by AdoraTech literally paid for its full development cost within the first 90 days of operation."
  }
];

export const TESTIMONIALS = [
  {
    name: "David Sterling",
    role: "Chief Technology Officer",
    company: "Apex Financial Global",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "AdoraTech modernized our entire IT infrastructure in under 5 months. Their proactive 24/7 monitoring, security rigor, and rapid response times have made them an indispensable extension of our leadership team."
  },
  {
    name: "Dr. Aris Thorne",
    role: "Chief Information Officer",
    company: "BioVance Health Network",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Finding an IT partner who truly understands HIPAA compliance and enterprise security at scale is rare. AdoraTech achieved a flawless 100% score on our third-party penetration audit while keeping our 450 clinic staff supported 24/7."
  },
  {
    name: "Sarah Jenkins",
    role: "VP of Operations & Logistics",
    company: "Nexus Global Freight",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    rating: 5,
    text: "Their cloud and data engineering team migrated 40TB of mission-critical logistics data with zero downtime. Since launching our new telemetry hub, our vehicle downtime dropped by 45%. Exceptional professionalism."
  }
];

export const CORE_VALUES = [
  {
    name: "Innovation",
    desc: "Continuously adopting proven modern technologies, automated toolsets, and architectural patterns to keep our clients ahead of their competition.",
    icon: "Lightbulb"
  },
  {
    name: "Security",
    desc: "Treating security and privacy as an uncompromisable foundation in every network line, cloud policy, database, and line of code we touch.",
    icon: "ShieldCheck"
  },
  {
    name: "Reliability",
    desc: "Delivering predictable 99.9% uptime, meeting deadlines without excuses, and providing round-the-clock support when your business needs it most.",
    icon: "CheckCircle2"
  },
  {
    name: "Transparency",
    desc: "Maintaining open, candid communication with zero hidden fees, honest technology assessments, and real-time visibility into project milestones.",
    icon: "Search"
  },
  {
    name: "Client Success",
    desc: "Measuring our performance not by closed billable tickets, but by the tangible commercial growth, cost savings, and peace of mind we unlock for you.",
    icon: "TrendingUp"
  }
];

export const MILESTONES = [
  {
    year: "2011",
    title: "Founding in San Francisco",
    description: "Established by senior systems engineers with a mission to deliver trustworthy enterprise IT services and proactive systems management."
  },
  {
    year: "2015",
    title: "Cloud Infrastructure Practice Launched",
    description: "Expanded into high-scale AWS and Azure cloud migrations, achieving premier certified partnership status."
  },
  {
    year: "2018",
    title: "24/7 Security Operations Center (SOC)",
    description: "Launched our dedicated 24/7/365 managed cybersecurity center and certified Tier-3 response escalation team."
  },
  {
    year: "2021",
    title: "ISO 27001 & SOC 2 Type II Accreditations",
    description: "Secured rigorous independent certifications, allowing expansion into defense-grade fintech and healthcare enterprises."
  },
  {
    year: "2024",
    title: "Global Hubs in London & Singapore",
    description: "Opened regional support centers in the UK and APAC to deliver true follow-the-sun 24/7 coverage for multinational clients."
  },
  {
    year: "2026",
    title: "Autonomous IT Operations & GenAI Integration",
    description: "Surpassed 250+ enterprise deliveries with over 120 ongoing managed clients and an industry-leading 99.9% uptime SLA."
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Marcus Vance",
    role: "Chief Executive Officer & Founder",
    bio: "18+ years in enterprise IT architecture and cloud systems. Formerly led infrastructure reliability at tier-one technology firms.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com",
    specialties: ["IT Strategy", "Cloud Architecture", "Enterprise Governance"]
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    bio: "PhD in Distributed Computing from MIT. Specializes in high-availability cloud topologies, zero-trust security, and disaster recovery.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com",
    specialties: ["Multi-Cloud", "Kubernetes", "Disaster Recovery"]
  },
  {
    name: "Tariq Al-Mansoor",
    role: "Director of Cybersecurity & Compliance",
    bio: "CISSP and certified ethical hacker with 14 years specializing in defense-grade penetration audits and SOC 2 Type II readiness.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com",
    specialties: ["Zero-Trust", "Penetration Testing", "SOC 2 / ISO"]
  },
  {
    name: "Dev Patel",
    role: "Head of AI & Data Engineering",
    bio: "Pioneer in enterprise data lakehouses, predictive telemetry analytics, and private corporate LLM fine-tuning pipelines.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com",
    specialties: ["Snowflake", "Predictive BI", "Enterprise AI"]
  },
  {
    name: "Maya Chen",
    role: "VP of Software Engineering",
    bio: "Ex-Stripe engineering manager. Passionate about performant full-stack architectures, clean code standards, and agile sprint delivery.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com",
    specialties: ["React / Node", "System Architecture", "API Integration"]
  },
  {
    name: "Sophia Lindqvist",
    role: "VP of Client Operations & Support",
    bio: "Dedicated to white-glove customer success, ensuring rapid SLA ticket resolution and frictionless client onboarding workflows.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&auto=format&fit=crop&q=80",
    linkedin: "https://linkedin.com",
    specialties: ["ITIL 4 Service Delivery", "24/7 NOC", "Client Success"]
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    name: "Discover",
    title: "Discover & Assess",
    desc: "We perform a comprehensive audit of your current hardware, cloud instances, security posture, and business objectives to identify risks and opportunities."
  },
  {
    step: "02",
    name: "Plan",
    title: "Plan & Architect",
    desc: "Our senior architects design a customized roadmap with clear SLA definitions, transparent cost projections, and phased risk-free implementation milestones."
  },
  {
    step: "03",
    name: "Implement",
    title: "Implement & Modernize",
    desc: "We execute deployments using automated CI/CD and proven migration playbooks, ensuring zero unexpected downtime or disruption to your ongoing operations."
  },
  {
    step: "04",
    name: "Support",
    title: "Support & Optimize",
    desc: "Our 24/7 NOC and SOC provide round-the-clock monitoring, routine patch management, quarterly executive reviews, and continuous security enhancement."
  }
];

export const FAQ_ITEMS = [
  {
    question: "What makes AdoraTech different from standard managed service providers (MSPs)?",
    answer: "Unlike traditional break-fix vendors who only show up when something crashes, AdoraTech provides proactive, continuous enterprise IT management. We combine 24/7 Tier-3 certified engineers, built-in cybersecurity compliance, and custom software engineering expertise under a single trusted partnership with guaranteed sub-15 minute response SLAs."
  },
  {
    question: "How do you guarantee minimal or zero downtime during cloud migration?",
    answer: "We utilize phased cutover strategies, real-time database replication, and blue/green deployment topologies. Workloads are thoroughly validated in staging environments before any live DNS cutover occurs, ensuring your employees and customers experience zero disruption."
  },
  {
    question: "Can AdoraTech integrate with our existing internal IT team?",
    answer: "Yes, absolutely. Over half of our engagements are co-managed IT partnerships. We augment your in-house staff by handling routine 24/7 monitoring, off-hours helpdesk, and complex cybersecurity audits, freeing your internal team to focus on strategic company priorities."
  },
  {
    question: "What security and regulatory standards do you adhere to?",
    answer: "AdoraTech is certified in ISO/IEC 27001 and verified SOC 2 Type II compliant. We implement bank-grade zero-trust network access, end-to-end encryption at rest and in transit, and help clients achieve HIPAA, GDPR, and PCI-DSS readiness."
  },
  {
    question: "How do your contract terms and onboarding timeline work?",
    answer: "We offer transparent, predictable monthly subscription pricing with no hidden charges. Standard onboarding takes between 7 to 14 business days, beginning with an exhaustive network audit and deployment of our monitoring agents without interrupting your team."
  }
];

export const BLOG_POSTS = [
  {
    id: "hybrid-cloud-migration-playbook",
    title: "The Enterprise Hybrid Cloud Playbook: Avoiding Downtime & Hidden Costs",
    slug: "hybrid-cloud-migration-playbook",
    category: "Cloud",
    readTime: "6 min read",
    publishDate: "October 22, 2026",
    author: {
      name: "Marcus Vance",
      role: "CEO & IT Architect",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    excerpt: "Learn how mid-market and enterprise organizations migrate mission-critical legacy applications to hybrid AWS/Azure clouds while keeping egress fees and downtime under control.",
    content: `### Why Hybrid Cloud Remains the Standard for Growing Enterprises

While public clouds offer unmatched agility, lifting and shifting legacy workloads blindly can result in catastrophic bill shock and unexpected latency spikes. The most successful IT leaders adopt an intentional hybrid strategy.

#### 1. Audit Workload Dependencies Before Touching Data
Before migrating a single gigabyte, map out every internal database query, third-party webhook, and latency requirement. Legacy ERP systems often rely on sub-millisecond local network connections that degrade over WAN connections unless optimized with edge caching.

#### 2. Implement FinOps Governance on Day One
Cloud costs scale effortlessly unless gated by automated budget caps and resource tagging policies. We recommend:
- Enforcing automated shutdown schedules on non-production staging environments
- Purchasing 1-to-3 year reserved instances for steady-state databases to lock in 40-60% discounts
- Routing telemetry and logs through warm/cold tiered object storage

#### 3. Real-Time Data Synchronization & Phased Cutover
Rather than attempting a high-risk weekend 'big bang' migration, establish continuous replication between on-premise storage and cloud databases. When data parity is confirmed, execute DNS traffic cutover in stages.

By combining proactive architecture with clear governance, your business unlocks true cloud agility with zero operational interruptions.`
  },
  {
    id: "zero-trust-cybersecurity-defense",
    title: "Beyond the Firewall: Implementing Practical Zero-Trust Security in 2026",
    slug: "zero-trust-cybersecurity-defense",
    category: "Cybersecurity",
    readTime: "8 min read",
    publishDate: "October 15, 2026",
    author: {
      name: "Tariq Al-Mansoor",
      role: "Director of Cybersecurity",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    excerpt: "Perimeter defenses are no longer enough in a remote-first world. Discover how identity verification, least-privilege access, and micro-segmentation shield your business.",
    content: `### The Death of the Traditional Corporate Perimeter

With employees working from everywhere and enterprise SaaS replacing internal file servers, the old castle-and-moat security model has become obsolete. Attackers do not break into networks; they simply log in using compromised credentials.

#### The 3 Core Tenets of Zero-Trust
1. **Verify Explicitly**: Always authenticate and authorize based on all available data points—including user identity, device health, location, and data classification.
2. **Use Least-Privilege Access**: Limit user access with Just-In-Time (JIT) and Just-Enough-Access (JEA) policies, dynamic role-based permissions, and adaptive risk controls.
3. **Assume Breach**: Minimize the blast radius by segmenting networks, encrypting all internal communications, and actively hunting for anomalies.

#### Practical Steps for Growing Businesses
- **Enforce Hardware-Backed MFA**: Replace SMS text verification with FIDO2 hardware keys or authenticator apps to eliminate 99.9% of credential stuffing attempts.
- **Implement Endpoint Detection & Response (EDR)**: Modern EDR solutions like CrowdStrike continuously isolate suspicious host processes before ransomware can propagate.
- **Continuous SOC Monitoring**: Security alerts generated at 2:00 AM require immediate human analysis, not a Monday morning triage.`
  },
  {
    id: "custom-software-vs-commercial-off-shelf",
    title: "Build vs. Buy: When to Invest in Custom Software for Sustainable Advantage",
    slug: "custom-software-vs-commercial-off-shelf",
    category: "Software Development",
    readTime: "5 min read",
    publishDate: "October 07, 2026",
    author: {
      name: "Maya Chen",
      role: "VP of Software Engineering",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    excerpt: "Generic software creates generic businesses. Here is how executive teams evaluate the inflection point where custom portals and APIs yield a 10x ROI over off-the-shelf subscriptions.",
    content: `### The Cost of Forcing Your Business into Vendor Boxes

Every growing business starts by purchasing generic off-the-shelf software tools. However, as workflows mature, companies often find themselves paying exorbitant annual license fees for bloated platforms where only 15% of the features are used—while employees maintain messy manual spreadsheets to bridge the gaps.

#### When Custom Software is the Right Investment:
1. **The Feature is Your Differentiator**: If client onboarding or supply chain speed is your core competitive advantage, you cannot afford to have the exact same capabilities as your competitors.
2. **Per-Seat Licensing is Strangling Growth**: Off-the-shelf SaaS bills balloon rapidly as your team grows from 50 to 500 users. Owning your proprietary portal eliminates ongoing per-user license taxes.
3. **Legacy Systems Cannot Talk to Modern APIs**: Bespoke integration layers and middleware turn fragmented silos into automated real-time workflows.

#### Modern Agile Delivery
Custom software development in 2026 no longer means multi-year waterfall projects with uncertain outcomes. Using modular component frameworks and agile bi-weekly staging releases, high-value enterprise applications launch in weeks, delivering immediate returns.`
  },
  {
    id: "ai-readiness-for-growing-enterprises",
    title: "Enterprise AI Readiness: Preparing Your Data Architecture for LLMs & Automation",
    slug: "ai-readiness-for-growing-enterprises",
    category: "AI",
    readTime: "7 min read",
    publishDate: "September 28, 2026",
    author: {
      name: "Dev Patel",
      role: "Head of AI & Data",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    excerpt: "Before launching AI bots or automation swarms, enterprises must clean their underlying data foundations. Here is our step-by-step framework for private enterprise AI.",
    content: `### Why 80% of Enterprise AI Proof-of-Concepts Stall

The promise of generative AI and autonomous workflows is immense, but an AI model is only as intelligent as the data feeding it. When companies attempt to connect large language models to unorganized, siloed, or permissionless internal databases, the results are hallucinations, security leaks, and employee frustration.

#### The Prerequisites for Enterprise AI Success:
- **Data Governance & RBAC**: Ensure an AI agent cannot inadvertently reveal executive compensation files or confidential customer records to general staff.
- **Unified Vector Repositories**: Consolidate company manuals, standard operating procedures, and product documentation into structured embeddings with clear semantic tags.
- **Private, Zero-Data-Retention Hosting**: Guarantee that proprietary customer and commercial data is never used to train public commercial models.

By building on a clean, centralized data foundation, AI tools become reliable multipliers of your workforce productivity.`
  },
  {
    id: "strategic-it-governance-vcio",
    title: "The Virtual CIO Advantage: Aligning Technology Budgets with Business Growth",
    slug: "strategic-it-governance-vcio",
    category: "IT Management",
    readTime: "6 min read",
    publishDate: "September 14, 2026",
    author: {
      name: "Marcus Vance",
      role: "CEO & IT Architect",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    excerpt: "How mid-market enterprises leverage fractional executive IT leadership (vCIO) to eliminate tech debt, negotiate vendor contracts, and navigate cyber compliance.",
    content: `### Transforming IT from a Cost Center to a Revenue Engine

Many growing businesses reach a stage where day-to-day IT support is handled, but nobody is looking 24 months down the road. Without strategic leadership, technology decisions are made reactively—leading to duplicated software licenses, unpatched security liabilities, and missed opportunities.

A Virtual CIO (vCIO) provides executive-level technology vision without the $350k+ salary of a full-time hire.

#### What a Strategic vCIO Delivers:
- **3-Year Technology Masterplan**: A comprehensive roadmap mapping IT expenditures directly to revenue expansion goals.
- **Quarterly Business Reviews (QBRs)**: Regular board-level presentations reviewing SLA metrics, security posture, and upcoming hardware lifecycles.
- **Vendor Negotiation & Cost Trimming**: Aggressively auditing telecom, cloud, and software licensing contracts to eliminate waste and vendor lock-in.

When technology is managed with executive foresight, it becomes your most dependable competitive engine.`
  },
  {
    id: "multi-cloud-resilience-strategies",
    title: "Multi-Cloud High Availability: Designing for 99.99% Reliability",
    slug: "multi-cloud-resilience-strategies",
    category: "Cloud",
    readTime: "7 min read",
    publishDate: "September 02, 2026",
    author: {
      name: "Dr. Elena Rostova",
      role: "Chief Technology Officer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80"
    },
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80",
    excerpt: "Cloud outages happen to the biggest tech giants. Here is how modern enterprise architects build active-passive and active-active failover across availability zones.",
    content: `### Cloud Outages are Inevitable—Downtime is Not

Even global cloud hyper-scalers suffer unexpected DNS failures, power grid interruptions, and configuration bugs. For businesses that depend on uninterrupted customer transactions, relying entirely on a single cloud region is an unacceptable risk.

#### Principles of High Availability (HA) Architecture:
1. **Multi-Availability Zone Deployment**: Distribute your compute clusters across at least three distinct geographic availability zones within a primary region.
2. **Automated Health Probes & DNS Failover**: Configure global traffic managers (such as Cloudflare or AWS Route 53) to automatically reroute requests within 30 seconds of an unhealthy heartbeat.
3. **Database Asynchronous Cross-Region Replication**: Maintain an active replica in a secondary region ready for automated promotion in the event of an outage.

With continuous telemetry and automated recovery scripts, your enterprise maintains 99.99% operational continuity regardless of external disruptions.`
  }
];

export const SUPPORT_OPTIONS = [
  {
    id: "sales",
    title: "Sales & Inquiries",
    desc: "Discuss new managed IT agreements, cloud migration scopes, custom software proposals, or schedule an executive consultation.",
    email: "sales@adoratech.com",
    phone: "+1 (800) 492-3672 ext. 1",
    badge: "New Partnerships"
  },
  {
    id: "support",
    title: "24/7 Technical Support",
    desc: "For existing clients requiring immediate NOC/SOC ticket assistance, emergency incident escalation, or helpdesk triage.",
    email: "support@adoratech.com",
    phone: "+1 (800) 492-3672 ext. 2",
    badge: "Sub-15m SLA"
  },
  {
    id: "partnerships",
    title: "Vendor & Tech Partnerships",
    desc: "Explore software ecosystem integrations, reseller partnerships, co-marketing opportunities, and alliance channels.",
    email: "alliances@adoratech.com",
    phone: "+1 (800) 492-3672 ext. 3",
    badge: "Ecosystem"
  },
  {
    id: "careers",
    title: "Careers & Talent",
    desc: "Join our senior team of cloud architects, cybersecurity engineers, and full-stack software developers.",
    email: "careers@adoratech.com",
    phone: "+1 (800) 492-3672 ext. 4",
    badge: "We Are Hiring"
  }
];
