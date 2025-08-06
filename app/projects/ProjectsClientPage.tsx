"use client"

interface Project {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  tech_stack: string[]
  architecture: string
  challenges: string
  image_url: string
  category: string
  github_link?: string
  live_link?: string
}

// Hardcoded projects for fallback or initial development
const hardcodedProjects: Project[] = [
  {
    id: "1",
    title: "DevTimeTracker",
    subtitle: "A Time Management System for IT Professionals",
    description:
      "DevTimeTracker is a productivity-focused platform that allows users and teams to track project/task durations, manage their workflow, generate insights, and integrate with tools like GitHub or Slack.",
    features: [
      "Start/stop time tracking",
      "Project and task assignment",
      "Productivity analytics & progress dashboards",
      "Role-based access control",
      "Billable time entries",
      "Report generation for projects and users",
    ],
    tech_stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase (PostgreSQL)", "Vercel"],
    architecture:
      "Frontend: Built using Next.js with server/client components and Tailwind UI. Backend: API routes & server actions with PostgreSQL DB. Authentication: Managed via Supabase Auth and protected client routes. Deployment: Hosted on Vercel, with auto-deploy from GitHub.",
    challenges:
      "Real-time tracking with server actions, Productivity insight via dynamic dashboards, Integration-ready structure for Slack, GitHub, Jira, etc.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "web",
    github_link: "https://github.com/fairozfaisal/devtimetracker",
    live_link: "#",
  },
  {
    id: "2",
    title: "CustomRig PC Builder",
    subtitle: "AI-Powered PC Configuration Platform",
    description:
      "CustomRig is a full-stack platform that helps users design custom PC builds with AI assistance, real-time compatibility checks, and admin control over components and orders.",
    features: [
      "AI-powered PC recommendations via Gemini API",
      "Real-time component compatibility and price calculation",
      "Prebuilt and custom PC builder interface",
      "Admin dashboard for managing inventory, users, and orders",
      "PDF export of PC builds with integrated QR code",
    ],
    tech_stack: ["Next.js", "React", "Tailwind CSS", "Supabase (PostgreSQL)", "Gemini API", "jsPDF", "Vercel"],
    architecture:
      "Frontend: Built using Next.js (App Router) and styled with Tailwind CSS + shadcn/ui. Backend: Supabase PostgreSQL database with RPCs for server logic. Authentication: Supabase Auth with role-based routing and API protection. Deployment: Hosted on Vercel with GitHub integration for CI/CD.",
    challenges:
      "Dynamic compatibility validation across CPU, GPU, motherboard, etc. AI-assisted recommendations for beginner users. Seamless admin UX for product and order management.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "web",
    github_link: "https://github.com/fairozfaisal/customrig-pc-builder",
    live_link: "#",
  },
  {
    id: "3",
    title: "AirKerala Website",
    subtitle: "Official Airline Website Development",
    description:
      "Developed and deployed the official airline website using HTML, CSS, JavaScript, PHP, MySQL, React, and Next.js with a focus on performance, security, and user experience.",
    features: [
      "Flight booking and management system",
      "User account management",
      "Secure payment processing",
      "Flight status tracking",
      "Responsive design for all devices",
    ],
    tech_stack: ["Next.js", "React", "JavaScript", "PHP", "MySQL", "HTML/CSS"],
    architecture:
      "Modern web application with server-side rendering for optimal performance and SEO. Integrated with backend systems for real-time flight data and booking management.",
    challenges:
      "Implementing secure payment processing, optimizing performance for users with varying internet speeds, ensuring cross-browser compatibility.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "web",
    live_link: "https://airkerala.com",
  },
  {
    id: "4",
    title: "Server Migration Project",
    subtitle: "Azure to Hetzner Cloud Migration",
    description:
      "Migrated over 100 websites from Azure to Hetzner Cloud using Linux (Apache) and Windows IIS environments. Implemented robust backup and disaster recovery strategies to minimize downtime and ensure seamless transitions.",
    features: [
      "Comprehensive migration planning",
      "Minimal downtime implementation",
      "Performance optimization post-migration",
      "Cost reduction while maintaining reliability",
      "Automated backup and recovery systems",
    ],
    tech_stack: ["Azure", "Hetzner Cloud", "Linux", "Apache", "Windows IIS", "PowerShell", "Bash"],
    architecture:
      "Hybrid cloud architecture with load balancing and failover capabilities. Automated deployment pipelines for continuous integration.",
    challenges:
      "Ensuring zero data loss during migration, minimizing downtime for critical services, optimizing performance in the new environment.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
  },
  {
    id: "5",
    title: "Web Application Security Assessment",
    subtitle: "OWASP Juice Shop Penetration Testing",
    description:
      "Conducted comprehensive penetration testing on OWASP Juice Shop following OWASP Top 10 standards. Discovered and exploited multiple vulnerabilities such as SQL Injection, XSS, and CSRF.",
    features: [
      "Vulnerability assessment and exploitation",
      "Detailed security reporting",
      "Remediation recommendations",
      "Security best practices implementation",
    ],
    tech_stack: ["OWASP ZAP", "Burp Suite", "Metasploit", "Kali Linux", "Python"],
    architecture:
      "Systematic approach to security testing following industry standard methodologies. Comprehensive documentation of findings and remediation steps.",
    challenges:
      "Identifying complex vulnerabilities, developing custom exploitation techniques, providing actionable remediation steps.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
  },
  {
    id: "6",
    title: "Cloud-Powered Job Alert System",
    subtitle: "Automated Job Scraping and Personalized Email Alerts",
    description:
      "A robust system that scrapes various job portals for specific keywords (e.g., 'Cloud DevOps remote') and sends daily personalized job alerts via email using the Mailjet API. The system is designed for efficient backend automation and is deployed on Azure Functions with containerized scheduling for reliability and scalability.",
    features: [
      "Automated job scraping",
      "Keyword-based filtering",
      "Daily personalized email alerts",
      "Mailjet API integration",
      "Containerized deployment on Azure Functions",
      "Scheduled execution via Cron",
    ],
    tech_stack: ["Python", "FastAPI", "Cron", "Mailjet API", "Remotive/LinkedIn API", "Docker", "Azure Functions"],
    architecture:
      "Serverless architecture on Azure Functions, with Python FastAPI for API endpoints, Docker for containerization, and Cron for scheduling. Integrates with external job APIs and Mailjet for email delivery.",
    challenges:
      "Efficiently scraping dynamic job portals, ensuring reliable daily email delivery, managing API rate limits, and optimizing cloud resource usage.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "7",
    title: "Zero Trust Access Platform",
    subtitle: "Secure Network Access with Role-Based Controls",
    description:
      "Developed and implemented a comprehensive zero-trust network architecture, enforcing strict role-based access control, multi-factor authentication (MFA), and encrypted communication tunnels (OpenVPN/IPSec). Automated policy enforcement and infrastructure provisioning using Terraform and PowerShell scripts.",
    features: [
      "Zero-trust network architecture",
      "Role-based access control (RBAC)",
      "Multi-Factor Authentication (MFA) integration",
      "Encrypted VPN tunnels (OpenVPN/IPSec)",
      "Automated policy enforcement",
      "Infrastructure as Code (Terraform)",
    ],
    tech_stack: ["Azure AD", "VPN", "UTM Firewall", "MFA (Duo/Microsoft)", "Terraform", "PowerShell"],
    architecture:
      "Leverages Azure AD for identity management, integrates with MFA solutions, and uses UTM firewalls for perimeter security. Network segmentation and encrypted tunnels are managed via VPN, with infrastructure defined and deployed using Terraform.",
    challenges:
      "Implementing granular access policies, integrating diverse security tools, ensuring seamless user experience with MFA, and maintaining network performance under strict security controls.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "8",
    title: "Hybrid Cloud Cost Optimizer Dashboard",
    subtitle: "Real-time Cost Analysis and Optimization for Multi-Cloud Environments",
    description:
      "A full-stack dashboard application designed to fetch and analyze usage and cost data from AWS and Azure APIs. It provides real-time insights into cloud spending trends and offers intelligent optimization suggestions, including alerts for low resource utilization, leveraging basic machine learning techniques.",
    features: [
      "Multi-cloud cost aggregation (AWS, Azure)",
      "Real-time usage and cost visualization",
      "Trend analysis and forecasting",
      "Optimization suggestions (e.g., low usage alerts)",
      "Interactive charts and graphs",
      "User authentication and role-based access",
    ],
    tech_stack: ["React", "Node.js", "MongoDB", "AWS SDK", "Azure SDK", "Chart.js"],
    architecture:
      "Frontend built with React for interactive data visualization. Backend with Node.js for API integrations and data processing. MongoDB for data storage. Integrates with AWS and Azure SDKs to pull billing data. Chart.js for rendering dynamic charts.",
    challenges:
      "Handling large volumes of billing data, accurately attributing costs, developing effective optimization algorithms, and ensuring secure API access to cloud provider accounts.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "9",
    title: "AI Support Chatbot with Web Panel",
    subtitle: "Intelligent Customer Support with Admin Control",
    description:
      "Developed an AI-powered customer support chatbot for websites, capable of handling common queries by leveraging the OpenAI API (or Gemini). Includes a comprehensive web-based administration panel for reviewing chat logs, training the chatbot with FAQs, and fine-tuning its responses.",
    features: [
      "AI-powered conversational interface",
      "OpenAI/Gemini API integration",
      "Customizable FAQ training",
      "Real-time chat log review",
      "Admin panel for response control",
      "Scalable and responsive design",
    ],
    tech_stack: ["OpenAI API (or Gemini)", "Next.js", "Firebase", "Tailwind CSS"],
    architecture:
      "Frontend built with Next.js and Tailwind CSS for a modern UI. Backend leverages Firebase for data storage and authentication. AI capabilities are powered by the OpenAI (or Gemini) API for natural language processing and response generation.",
    challenges:
      "Ensuring accurate and contextually relevant AI responses, managing conversation history, building an intuitive admin interface for content management, and handling concurrent user requests.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "ai",
    github_link: "#",
  },
  {
    id: "10",
    title: "Internal Vulnerability Scanner",
    subtitle: "Automated Web Security Scanning with OWASP ZAP",
    description:
      "Created a custom web interface to automate security scans against specified URLs using the OWASP ZAP API. The system stores scan results in an SQLite database and sends automated email summaries via a scheduled cron job, providing continuous security monitoring.",
    features: [
      "Web-based scan initiation",
      "OWASP ZAP API integration",
      "Automated vulnerability scanning",
      "Scan result storage (SQLite)",
      "Scheduled email summaries (Cron)",
      "Detailed security reports",
    ],
    tech_stack: ["Python", "OWASP ZAP API", "Flask", "SQLite"],
    architecture:
      "Python Flask application provides the web interface and interacts with the OWASP ZAP API. SQLite database stores scan configurations and results. Cron jobs trigger scheduled scans and email notifications.",
    challenges:
      "Parsing and interpreting OWASP ZAP output, securely managing scan targets, designing an intuitive reporting interface, and ensuring the scanner operates without impacting target systems.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "11",
    title: "FoneX Hosting Control Panel (Lite)",
    subtitle: "Lightweight Web Hosting Management for FoneX Customers",
    description:
      "Developed a simplified hosting control panel for FoneX customers, enabling them to easily manage their web hosting services. Features include creating and deleting websites, setting up email accounts, and automating SSL certificate provisioning using Certbot with Apache/Nginx.",
    features: [
      "Website creation/deletion",
      "Email account management",
      "Automated SSL provisioning (Certbot)",
      "Apache/Nginx integration",
      "User-friendly web interface",
      "Shell scripting for backend automation",
    ],
    tech_stack: ["PHP", "MySQL", "HTML/CSS", "Shell Scripting", "Apache/Nginx"],
    architecture:
      "PHP-based frontend interacts with a MySQL database for user and site data. Backend logic uses shell scripts to interact with Apache/Nginx configurations and Certbot for SSL management.",
    challenges:
      "Ensuring secure execution of shell scripts from the web interface, managing file permissions, providing real-time feedback on server operations, and simplifying complex server tasks for end-users.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "12",
    title: "SD-WAN Simulation with Live Failover Demo",
    subtitle: "Network Resilience Testing and Real-time Monitoring",
    description:
      "Simulated a two-branch SD-WAN architecture using network emulation tools (GNS3/EVE-NG) with OSPF/BGP routing protocols. Conducted automated failover testing using Python scripts and implemented real-time traffic monitoring with Grafana to visualize network performance and resilience.",
    features: [
      "SD-WAN architecture simulation",
      "Multi-branch network setup",
      "OSPF/BGP routing protocol implementation",
      "Automated failover testing (Python)",
      "Real-time traffic monitoring (Grafana)",
      "Network performance visualization",
    ],
    tech_stack: ["GNS3/EVE-NG", "Cisco/VyOS", "Python", "Grafana"],
    architecture:
      "Network topology simulated in GNS3/EVE-NG with virtual routers (Cisco/VyOS). Python scripts automate failover scenarios and data collection. Grafana visualizes network metrics from collected data.",
    challenges:
      "Accurately simulating real-world network conditions, designing robust failover mechanisms, integrating data collection with visualization tools, and interpreting complex network performance metrics.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "networking",
    github_link: "#",
  },
  {
    id: "13",
    title: "Interactive Resume Website (Fairoz.in v2)",
    subtitle: "Modern, Animated Portfolio with Live Previews",
    description:
      "An upgraded, visually stunning personal portfolio website designed to create a strong first impression. Features include animated sections, live code previews for projects, an interactive skills timeline, and seamless contact integrations. Built with modern web technologies and automated CI/CD.",
    features: [
      "Animated sections with Framer Motion",
      "Live code previews for projects",
      "Interactive skills timeline",
      "Contact form integrations",
      "Responsive and modern design",
      "Automated CI/CD with GitHub Actions",
    ],
    tech_stack: ["Next.js", "Tailwind CSS", "Framer Motion", "GitHub Actions (CI/CD)"],
    architecture:
      "Frontend built with Next.js (App Router) for performance and SEO, styled with Tailwind CSS. Animations powered by Framer Motion. Deployed with Vercel and integrated with GitHub Actions for continuous deployment.",
    challenges:
      "Achieving smooth and performant animations, integrating diverse content types (code, images, interactive elements), optimizing for various screen sizes, and maintaining a cohesive design language.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "web",
    github_link: "https://github.com/fairozfaisal/fairoz.in",
    live_link: "https://fairoz.in",
  },
  {
    id: "14",
    title: "Multi-Cloud File Sync Tool",
    subtitle: "Cross-Provider File Synchronization with Checksum Comparison",
    description:
      "A command-line tool to synchronize files and directories across AWS S3, Azure Blob Storage, and Google Cloud Storage, ensuring data consistency by comparing file checksums.",
    features: [
      "Sync between any two supported providers",
      "Checksum-based comparison to avoid unnecessary transfers",
      "Recursive directory synchronization",
      "Configurable include/exclude patterns",
      "Dry-run mode to preview changes",
    ],
    tech_stack: ["Python", "Boto3 (AWS)", "azure-storage-blob", "google-cloud-storage"],
    architecture:
      "A modular Python application with separate connector classes for each cloud provider. A central sync engine orchestrates the comparison and transfer logic. Configuration is managed via a YAML file.",
    challenges:
      "Handling different authentication methods for each cloud provider, managing API rate limits, and optimizing memory usage for large file listings.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "15",
    title: "Serverless Blog Platform",
    subtitle: "CMS-less Markdown Blogging with Git-Based Authoring",
    description:
      "A fast, modern blog platform built with Next.js and deployed on Vercel. Blog posts are written in Markdown and managed through a Git repository, triggering automatic deployments.",
    features: [
      "Write posts in Markdown",
      "Git-based workflow for content management",
      "Automatic builds and deployments on push",
      "Server-side rendering (SSR) for fast loads and SEO",
      "No traditional CMS or database needed",
    ],
    tech_stack: ["Next.js", "React", "Vercel Functions", "MongoDB Atlas", "Markdown"],
    architecture:
      "Next.js frontend reads Markdown files from the file system during the build process. Vercel handles serverless deployment. MongoDB Atlas can be used for storing metadata like view counts or comments.",
    challenges:
      "Implementing dynamic routing for posts, parsing Markdown with metadata (frontmatter), and setting up an efficient build process for a large number of posts.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "16",
    title: "Auto-Scaling Microservice App",
    subtitle: "Container-Based Microservice with Autoscaling",
    description:
      "A containerized microservice application deployed on AWS ECS with Terraform. The application is designed to automatically scale based on CPU and memory usage to handle variable traffic loads efficiently.",
    features: [
      "Containerized with Docker",
      "Orchestrated with Kubernetes on AWS ECS",
      "Infrastructure as Code using Terraform",
      "Auto-scaling based on traffic metrics",
      "Centralized logging and monitoring",
    ],
    tech_stack: ["Docker", "Kubernetes", "AWS ECS", "Terraform", "Node.js"],
    architecture:
      "A Node.js microservice is containerized using Docker and deployed to an AWS ECS cluster managed by Kubernetes. Terraform scripts define the entire infrastructure, including VPC, ECS cluster, and auto-scaling policies.",
    challenges:
      "Configuring Kubernetes for auto-scaling, setting up robust health checks for services, and managing state in a distributed environment.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "17",
    title: "IaC Audit System",
    subtitle: "Automated Tracking and Auditing of IaC Changes",
    description:
      "An automated system that tracks changes in Terraform configurations within an Azure DevOps repository. It audits for common misconfigurations and security vulnerabilities, generating reports for compliance.",
    features: [
      "Monitors Terraform state changes",
      "Audits for security misconfigurations",
      "Integrates with Azure DevOps pipelines",
      "Generates compliance and audit reports",
      "Customizable rule sets for auditing",
    ],
    tech_stack: ["Terraform", "Azure DevOps", "Python", "Checkov"],
    architecture:
      "An Azure DevOps pipeline triggers a Python script on every commit to the main branch. The script uses tools like Checkov to scan Terraform code against a set of security and compliance rules.",
    challenges:
      "Developing a comprehensive set of audit rules, minimizing false positives in scan results, and integrating the audit process seamlessly into the developer workflow without causing delays.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "18",
    title: "Cloud Resume Challenge",
    subtitle: "Serverless Resume on AWS with Visitor Counter",
    description:
      "The classic DevOps project. A personal resume website hosted on AWS S3, served via CloudFront, with a visitor counter powered by a Lambda function and DynamoDB. CI/CD is handled by GitHub Actions.",
    features: [
      "Static site hosting on S3",
      "Global content delivery with CloudFront (CDN)",
      "Serverless API (Lambda) for visitor counter",
      "NoSQL database (DynamoDB) for storing counts",
      "Automated deployment with GitHub Actions",
    ],
    tech_stack: ["AWS S3", "Lambda", "DynamoDB", "CloudFront", "GitHub Actions", "HTML/CSS"],
    architecture:
      "A static HTML/CSS/JS website is stored in an S3 bucket. CloudFront serves the content globally. A JavaScript call on the site hits an API Gateway endpoint, which triggers a Lambda function to update a visitor count in DynamoDB.",
    challenges:
      "Correctly configuring IAM roles and permissions for all AWS services, handling CORS issues between CloudFront and API Gateway, and writing an efficient CI/CD pipeline.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "19",
    title: "Cloud Billing Dashboard",
    subtitle: "Visualize and Forecast Cloud Spending",
    description:
      "A web dashboard that connects to the AWS Cost Explorer API to visualize current and historical cloud spending. It provides breakdowns by service and forecasts future costs, with data stored in MongoDB for trend analysis.",
    features: [
      "Connects to AWS Cost Explorer API",
      "Interactive charts and graphs for spending data",
      "Cost breakdown by AWS service",
      "Future cost forecasting",
      "Data caching in MongoDB for performance",
    ],
    tech_stack: ["AWS Cost Explorer", "Python Dash", "MongoDB", "Boto3"],
    architecture:
      "A Python Dash web application serves as the frontend. The backend uses Boto3 to fetch data from the AWS Cost Explorer API, processes it, and stores it in a MongoDB database. The dashboard queries MongoDB to display visualizations.",
    challenges:
      "Handling the potentially large and complex billing data from AWS, creating accurate forecasting models, and optimizing dashboard load times.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "20",
    title: "DNS Failover Monitor",
    subtitle: "Automated DNS Switching with Email Alerts",
    description:
      "A serverless monitor that checks the health of a primary IP address. If the endpoint fails, it automatically updates an AWS Route 53 DNS record to a secondary IP and sends an alert email via SES.",
    features: [
      "Automated health checks of endpoints",
      "Automatic DNS record updates on failure",
      "Integration with AWS Route 53",
      "Email notifications via AWS SES",
      "Serverless and cost-effective",
    ],
    tech_stack: ["AWS Route 53", "Python", "AWS Lambda", "AWS SES"],
    architecture:
      "An AWS Lambda function, triggered on a schedule by CloudWatch Events, runs a Python script to perform an HTTP health check. If the check fails, the script uses the Boto3 SDK to update a Route 53 record and send an email via SES.",
    challenges:
      "Avoiding false positives in health checks, ensuring the Lambda has the correct IAM permissions, and managing DNS propagation times.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "21",
    title: "Multi-Region Web App",
    subtitle: "High-Availability Blog with Global Traffic Manager",
    description:
      "A blog application deployed to Azure App Services in two different geographical regions. Azure Global Traffic Manager is configured for performance-based routing, directing users to the closest and fastest endpoint, with automatic failover.",
    features: [
      "Deployed in multiple Azure regions for high availability",
      "Performance-based routing with Global Traffic Manager",
      "Automatic failover to a healthy region",
      "Centralized database with geo-replication",
      "Consistent user experience across regions",
    ],
    tech_stack: ["Azure App Services", "Azure Global Traffic Manager", "Azure SQL", "Node.js"],
    architecture:
      "A Node.js web application is deployed to two separate Azure App Services in different regions. An Azure Global Traffic Manager profile sits in front, routing user traffic. An Azure SQL database is configured with geo-replication to keep data in sync.",
    challenges:
      "Managing database replication and latency, configuring health probes for the Traffic Manager, and handling state and sessions in a multi-region setup.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "22",
    title: "Cloud-Based Backup System",
    subtitle: "Automated Encrypted Backups to Azure Blob Storage",
    description:
      "A system using a Bash script and Cron to perform nightly backups of critical files and databases. The backups are encrypted using Restic before being uploaded to a secure Azure Blob Storage container.",
    features: [
      "Automated nightly backups via Cron",
      "Support for file and database backups",
      "End-to-end encryption with Restic",
      "Secure and cost-effective storage on Azure Blob",
      "Easy restoration process",
    ],
    tech_stack: ["Azure Blob Storage", "Bash", "Cron", "Restic", "Linux"],
    architecture:
      "A Bash script, executed by a cron job on a Linux server, uses Restic to create an encrypted, deduplicated backup of specified directories and database dumps. The resulting backup repository is then synced to an Azure Blob Storage container.",
    challenges:
      "Securely managing encryption keys, ensuring backup integrity, and optimizing the backup process to minimize runtime and network usage.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "cloud",
    github_link: "#",
  },
  {
    id: "23",
    title: "Log Analyzer for Threat Detection",
    subtitle: "Detecting Brute Force Attacks with the Elastic Stack",
    description:
      "A security project that uses the Elastic Stack (Elasticsearch, Logstash, Kibana) to analyze server logs. Filebeat collects logs, Logstash parses them, and a Kibana dashboard visualizes data to detect patterns like brute force attacks.",
    features: [
      "Centralized log collection with Filebeat",
      "Log parsing and enrichment with Logstash",
      "Powerful search and analytics with Elasticsearch",
      "Interactive dashboards in Kibana",
      "Alerting on suspicious activity",
    ],
    tech_stack: ["Elastic Stack (ELK)", "Filebeat", "Python", "Linux"],
    architecture:
      "Filebeat agents on servers ship logs (e.g., SSH, web server) to a central Logstash instance. Logstash parses the logs and sends structured data to Elasticsearch. Kibana is used to query Elasticsearch and build visualizations and dashboards.",
    challenges:
      "Writing accurate Logstash parsing rules (grok patterns), tuning Elasticsearch for performance, and designing effective Kibana dashboards to highlight security events.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "24",
    title: "Phishing Detection Toolkit",
    subtitle: "Analyzing URLs with Regex and VirusTotal API",
    description:
      "A Python tool that analyzes URLs to detect potential phishing attempts. It uses regular expressions to identify suspicious patterns (e.g., brand impersonation) and integrates with the VirusTotal API to check the URL against known threats.",
    features: [
      "URL analysis using regular expressions",
      "Integration with VirusTotal API for reputation checks",
      "Detection of common phishing patterns",
      "Command-line interface for easy use",
      "Outputs a risk score for each URL",
    ],
    tech_stack: ["Python", "Regex", "VirusTotal API", "Requests"],
    architecture:
      "A command-line Python script that takes a URL as input. It runs a series of local checks using regex and then makes an API call to VirusTotal. The results are aggregated to produce a final risk assessment.",
    challenges:
      "Developing effective regex patterns that catch phishing attempts without too many false positives, managing API keys securely, and interpreting the complex data returned by the VirusTotal API.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "25",
    title: "Firewall Log Visualizer",
    subtitle: "Dashboard for Geolocation, Ports, and Traffic Patterns",
    description:
      "A visualization system for UTM firewall logs. It uses Logstash to parse logs, enriches them with geolocation data, and sends them to Kibana. The dashboard displays traffic maps, top used ports, and accepted/denied traffic patterns.",
    features: [
      "Parses UTM firewall logs",
      "Enriches logs with IP geolocation data",
      "Visualizes traffic on a world map",
      "Dashboards for top source/destination ports and IPs",
      "Tracks traffic trends over time",
    ],
    tech_stack: ["UTM Firewall", "Grafana", "Logstash", "Kibana", "Elasticsearch"],
    architecture:
      "Firewall logs are sent via syslog to a Logstash server. Logstash parses the logs, uses a filter to add geolocation data based on IP addresses, and stores the result in Elasticsearch. Kibana or Grafana is used to build dashboards.",
    challenges:
      "Correctly parsing different firewall log formats, efficiently handling high volumes of log data, and designing clear and insightful visualizations.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "26",
    title: "Password Audit Tool",
    subtitle: "Scanning Password Dumps Against Public Leaks",
    description:
      "A Python script that audits password dumps against the HaveIBeenPwned API to check for publicly leaked passwords. It processes a list of password hashes, queries the API, and reports which passwords have been compromised.",
    features: [
      "Processes password lists or dumps",
      "Integrates with the HaveIBeenPwned API",
      "Checks for compromised passwords securely (k-Anonymity)",
      "Stores results in an SQLite database for reporting",
      "Generates a summary report of findings",
    ],
    tech_stack: ["Python", "HaveIBeenPwned API", "SQLite", "Requests"],
    architecture:
      "A command-line tool that reads a file of passwords. For each password, it calculates the SHA-1 hash, uses the k-Anonymity model to query the HIBP API, and logs any matches to a local SQLite database.",
    challenges:
      "Implementing the k-Anonymity model correctly to protect privacy, handling API rate limits, and efficiently processing large password lists.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "27",
    title: "Web App Honeypot",
    subtitle: "Trapping Attackers on a Fake Login Page",
    description:
      "A simple web application built with Flask that mimics a vulnerable login page. It is designed to attract and trap attackers, logging their IP addresses, user agent strings, and the usernames/passwords they attempt to use.",
    features: [
      "Realistic but fake login interface",
      "Logs all login attempts (successful or not)",
      "Records attacker IP, user agent, and credentials used",
      "Stores logs in a local SQLite database",
      "No actual authentication, all attempts are logged",
    ],
    tech_stack: ["Flask", "SQLite", "Python", "HTML/CSS"],
    architecture:
      "A lightweight Flask web application with a single route for the login page. Any POST request to this page has its form data and request headers logged to an SQLite database before returning a generic 'login failed' message.",
    challenges:
      "Making the honeypot look convincing enough to attract attackers, securely logging the data without introducing new vulnerabilities, and analyzing the collected data for patterns.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "28",
    title: "SIEM Lite",
    subtitle: "Configuring a Personal Security Information & Event Management",
    description:
      "A project to set up a personal, open-source SIEM using Wazuh for endpoint security monitoring and the ELK Stack for log aggregation and analysis. This provides hands-on experience with enterprise-grade security tools.",
    features: [
      "Endpoint monitoring with Wazuh agents",
      "Log aggregation with the ELK Stack",
      "Security event correlation and analysis",
      "Custom dashboards for visualizing security data",
      "Rule-based alerting for suspicious events",
    ],
    tech_stack: ["Wazuh", "ELK Stack", "Ubuntu Server", "Filebeat"],
    architecture:
      "Wazuh agents are installed on endpoints, reporting to a central Wazuh manager. The manager integrates with an ELK Stack, sending alerts and event data to Elasticsearch. Kibana is used to visualize and analyze the SIEM data.",
    challenges:
      "Integrating Wazuh with the ELK stack, tuning Wazuh rules to reduce noise, and managing the storage and performance of the Elasticsearch cluster.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "29",
    title: "Nmap + Report Generator",
    subtitle: "Automated Network Scanning and Vulnerability Reporting",
    description:
      "A Python script that automates running Nmap scans against a list of target IPs. It parses the XML output from Nmap, identifies open ports and potential vulnerabilities, and generates a clean HTML report of the findings.",
    features: [
      "Automates Nmap scans for multiple targets",
      "Parses Nmap's XML output",
      "Identifies open ports, services, and versions",
      "Generates a professional HTML report",
      "Can be scheduled to run periodically",
    ],
    tech_stack: ["Python", "Nmap", "HTML", "XML Parsing"],
    architecture:
      "A Python script that uses the `subprocess` module to run Nmap with specific flags (including XML output). The script then uses an XML parsing library (like `xml.etree.ElementTree`) to read the results and an HTML templating engine (like Jinja2) to generate the report.",
    challenges:
      "Correctly parsing the complex Nmap XML output, handling different types of scan results, and designing a clear and readable HTML report template.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "30",
    title: "Secure File Sharing Portal",
    subtitle: "A Secure Dropzone with Encrypted, Expiring Links",
    description:
      "A web portal built with PHP/Laravel that allows users to upload files and generate a secure, time-limited sharing link. Files are encrypted at rest using AES-256, and links automatically expire after a set time or number of downloads.",
    features: [
      "Secure file uploads",
      "AES-256 encryption for files at rest",
      "Generation of unique, expiring share links",
      "Set custom expiration times or download limits",
      "User authentication for managing uploads",
    ],
    tech_stack: ["PHP", "Laravel", "MySQL", "AES Encryption", "Bootstrap"],
    architecture:
      "A Laravel web application with user authentication. When a file is uploaded, it's encrypted on the server using PHP's OpenSSL functions and stored. A unique token is generated and stored in a MySQL database with an expiration date, which is used for the share link.",
    challenges:
      "Securely managing encryption keys, implementing the link expiration logic correctly, and handling large file uploads efficiently.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "31",
    title: "Two-Factor Auth Implementation",
    subtitle: "Custom 2FA for User Login Systems",
    description:
      "A project to add two-factor authentication (2FA) to a Node.js web application. It supports both SMS-based codes via the Twilio API and time-based one-time passwords (TOTP) with apps like Google Authenticator.",
    features: [
      "Adds a layer of security to user logins",
      "Supports SMS-based 2FA via Twilio",
      "Supports TOTP with authenticator apps",
      "User can choose their preferred 2FA method",
      "Includes a recovery code system",
    ],
    tech_stack: ["Node.js", "Express", "Twilio API", "Google Authenticator (TOTP)", "MongoDB"],
    architecture:
      "An extension to a standard Node.js/Express login system. After a successful password login, the user is prompted for a 2FA code. The server validates the code against the Twilio API or by using a TOTP library and the user's secret key stored in MongoDB.",
    challenges:
      "Implementing the TOTP algorithm correctly, securely storing user secret keys, and creating a seamless user experience for enrolling in and using 2FA.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "32",
    title: "VPN Management Portal",
    subtitle: "Web UI for OpenVPN User and Certificate Management",
    description:
      "A Flask web UI that provides an interface for managing an OpenVPN server. It allows an administrator to easily create new VPN users, generate their client configuration files, and revoke access when needed, all without using the command line.",
    features: [
      "Web interface for OpenVPN management",
      "Create new VPN users",
      "Generate and download client .ovpn files",
      "Revoke user certificates to disable access",
      "View a list of current and revoked users",
    ],
    tech_stack: ["OpenVPN", "Bash", "Flask", "Python", "easy-rsa"],
    architecture:
      "A Flask web application that acts as a frontend to the OpenVPN server's command-line tools (like easy-rsa). The Python backend executes Bash scripts to generate certificates, keys, and configuration files, and to manage the certificate revocation list (CRL).",
    challenges:
      "Securely executing shell commands from a web application, managing file permissions for certificates and keys, and providing real-time feedback to the admin.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "security",
    github_link: "#",
  },
  {
    id: "33",
    title: "Remote Linux Monitoring Dashboard",
    subtitle: "Monitoring CPU, RAM, Disk, and Network with Grafana",
    description:
      "A monitoring setup for multiple Linux servers using Prometheus and Grafana. Node Exporter is installed on each server to expose system metrics, which Prometheus scrapes and stores. Grafana is then used to create a comprehensive dashboard.",
    features: [
      "Monitors key system metrics (CPU, RAM, Disk, Network)",
      "Supports multiple remote servers",
      "Time-series data storage with Prometheus",
      "Rich, interactive dashboards with Grafana",
      "Alerting for critical conditions (e.g., high CPU)",
    ],
    tech_stack: ["Node Exporter", "Prometheus", "Grafana", "Linux"],
    architecture:
      "Node Exporter runs as a service on each target Linux server. A central Prometheus server is configured to 'scrape' the metrics from each Node Exporter instance at regular intervals. Grafana connects to Prometheus as a data source to build dashboards.",
    challenges:
      "Setting up secure communication between servers, configuring Prometheus scrape jobs correctly, and designing effective and easy-to-read Grafana dashboards.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "34",
    title: "Active Directory Health Check Tool",
    subtitle: "Automated Reporting on Replication, DNS, and Trust Health",
    description:
      "A PowerShell script designed to run as a scheduled task on a domain controller. It performs a series of health checks on Active Directory, including replication status, DNS health, and domain trust, and emails a summary report.",
    features: [
      "Automated health checks for Active Directory",
      "Checks replication status between domain controllers",
      "Verifies DNS configuration and resolution",
      "Checks the status of domain trusts",
      "Sends an email report with the results",
    ],
    tech_stack: ["PowerShell", "Task Scheduler", "Active Directory", "Windows Server"],
    architecture:
      "A single, comprehensive PowerShell script that uses built-in Active Directory cmdlets (like `repadmin` and `dcdiag`) to gather health information. The script formats the output into a clean report and uses `Send-MailMessage` to email it to administrators. It's run daily via Windows Task Scheduler.",
    challenges:
      "Parsing the output of various command-line tools, creating a clear and concise report, and securely storing credentials for sending email if required.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "35",
    title: "Ansible Playbook Library",
    subtitle: "Reusable Playbooks for LAMP, Docker, SSL, and UFW",
    description:
      "A collection of reusable Ansible playbooks for common server setup tasks. This library allows for the rapid and consistent configuration of new servers, including setting up a LAMP stack, installing Docker, configuring UFW firewall, and obtaining SSL certificates.",
    features: [
      "Automated setup of a LAMP (Linux, Apache, MySQL, PHP) stack",
      "Installation and configuration of Docker",
      "UFW firewall configuration with custom rules",
      "Automated SSL certificate installation with Let's Encrypt",
      "Modular and reusable roles",
    ],
    tech_stack: ["Ansible", "YAML", "Linux", "Docker", "LAMP"],
    architecture:
      "A well-structured Ansible project with separate roles for each major component (e.g., `apache`, `mysql`, `docker`). A central playbook can then be used to apply a combination of these roles to a target server, defined in an inventory file.",
    challenges:
      "Making the playbooks idempotent (safe to run multiple times), managing variables and secrets securely (using Ansible Vault), and designing the roles to be flexible and reusable.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "36",
    title: "Disk Space Auto-Cleaner",
    subtitle: "Automated Cleanup of Logs, Backups, and Temp Folders",
    description:
      "A Bash script that runs as a daily cron job to automatically clean up a server's disk space. It removes old log files, deletes backups older than a specified number of days, and clears temporary folders to prevent the disk from filling up.",
    features: [
      "Automated disk space cleanup",
      "Rotates and deletes old log files",
      "Removes old backups based on a retention policy",
      "Clears temporary directories",
      "Logs its actions for auditing",
    ],
    tech_stack: ["Bash Scripting", "Cron", "Linux", "Logrotate"],
    architecture:
      "A Bash script that uses commands like `find` with `-mtime` to locate and delete old files. The script is configured to run automatically at a set time each day using a cron job. It writes its actions to a log file for later review.",
    challenges:
      "Writing the script carefully to avoid accidentally deleting important files, setting appropriate retention policies, and ensuring the script has the correct permissions to delete files in different directories.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "37",
    title: "User Provisioning CLI Tool",
    subtitle: "Terminal-Based Management of Active Directory Users",
    description:
      "A command-line interface (CLI) tool written in PowerShell that simplifies the process of managing Active Directory users. It provides a simple menu-driven interface in the terminal to add, modify, or disable users without needing the full GUI.",
    features: [
      "Menu-driven command-line interface",
      "Add new users with predefined templates",
      "Modify existing user attributes (e.g., reset password)",
      "Disable or enable user accounts",
      "Logs all actions for auditing",
    ],
    tech_stack: ["PowerShell", "Active Directory", "Windows Server"],
    architecture:
      "A PowerShell script that creates a loop to display a menu of options. Based on the user's input, it calls different functions that use the Active Directory PowerShell module to perform the requested actions. All operations are logged to a text file.",
    challenges:
      "Creating an intuitive and error-proof CLI menu, validating user input, and ensuring the script is run with the necessary administrative privileges.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "38",
    title: "Remote Patch Manager",
    subtitle: "Automated Windows Patching with Reporting",
    description:
      "A system that uses PowerShell to automate the process of patching remote Windows servers. It can trigger updates via WSUS or use Chocolatey for third-party software, and it generates a report on the patch status of each server.",
    features: [
      "Remotely trigger Windows Updates on multiple servers",
      "Manage third-party software updates with Chocolatey",
      "Automated process using PowerShell Remoting",
      "Generates a CSV or HTML report of patch status",
      "Can be scheduled to run during maintenance windows",
    ],
    tech_stack: ["WSUS", "PowerShell", "Chocolatey", "Windows Server"],
    architecture:
      "A central PowerShell script that reads a list of server names. It then uses PowerShell Remoting (`Invoke-Command`) to run update commands on each server. The results are collected and compiled into a single report.",
    challenges:
      "Configuring PowerShell Remoting securely, handling servers that are offline, and parsing the different output formats from Windows Update and Chocolatey.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "39",
    title: "Docker Hosting Panel",
    subtitle: "Web GUI to Deploy and Monitor Containers",
    description:
      "A web-based graphical user interface (GUI) for managing a Docker host. It allows users to deploy new containers from specified images, view running containers, check their logs, and start/stop/restart them, all from a browser.",
    features: [
      "Web-based GUI for Docker management",
      "Deploy new containers from Docker Hub images",
      "View a list of all containers and their status",
      "Access real-time container logs",
      "Start, stop, and restart containers",
    ],
    tech_stack: ["React", "Node.js", "Docker SDK", "Express", "WebSockets"],
    architecture:
      "A React frontend that communicates with a Node.js/Express backend. The backend uses the Docker SDK for JavaScript to interact with the local Docker daemon's API. WebSockets are used to stream container logs to the frontend in real-time.",
    challenges:
      "Securely exposing the Docker API, creating a responsive and real-time user interface, and managing the state of multiple containers.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "40",
    title: "Linux Firewall Setup Script",
    subtitle: "Automated UFW/IPTables Configuration",
    description:
      "A shell script that automates the setup of a secure firewall on a new Linux server using UFW (Uncomplicated Firewall) or raw IPTables. It sets default deny policies and allows common services like SSH, HTTP, and HTTPS.",
    features: [
      "Automates firewall configuration",
      "Sets a default 'deny all' incoming policy",
      "Opens standard ports (SSH, HTTP, HTTPS)",
      "Allows for adding custom rules",
      "Supports both UFW and IPTables",
      "Idempotent design",
    ],
    tech_stack: ["UFW", "IPTables", "Shell Scripting", "Bash", "Linux"],
    architecture:
      "A Bash script that checks for the presence of UFW and uses it if available, otherwise falling back to IPTables. It uses a series of commands to set the default policies and then add specific 'allow' rules for necessary services.",
    challenges:
      "Ensuring the script doesn't lock the user out (especially by blocking SSH), making the script work on different Linux distributions, and handling the complexity of raw IPTables rules.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "41",
    title: "Automated SSL Certificate Installer",
    subtitle: "Auto-Renew and Install SSL for Apache/Nginx",
    description:
      "A Bash script that automates the entire process of obtaining and installing a Let's Encrypt SSL certificate using Certbot. It can automatically detect the web server (Apache or Nginx) and configure it for SSL, including setting up auto-renewal.",
    features: [
      "Automates SSL certificate installation",
      "Uses Certbot and Let's Encrypt",
      "Automatically detects Apache or Nginx",
      "Configures the web server for HTTPS",
      "Sets up the Certbot auto-renewal cron job",
    ],
    tech_stack: ["Certbot", "Bash", "Let's Encrypt", "Apache", "Nginx"],
    architecture:
      "A shell script that first installs Certbot, then runs it with the appropriate plugin (`--apache` or `--nginx`). It takes a domain name as input and passes it to Certbot, which handles the rest of the process, including modifying the web server configuration.",
    challenges:
      "Handling the interactive prompts from Certbot in a non-interactive script, correctly detecting the web server, and verifying that the SSL installation was successful.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "42",
    title: "Email Notification System for System Alerts",
    subtitle: "Alerts for High CPU, Full Disk, or Failed Services",
    description:
      "A Python script that runs as a cron job to monitor critical system resources. It checks for conditions like CPU usage above 90%, low disk space, or a specific service being down, and sends an email alert if any threshold is breached.",
    features: [
      "Monitors CPU, memory, and disk usage",
      "Checks the status of critical services",
      "Configurable alert thresholds",
      "Sends email notifications via SMTP",
      "Lightweight and has minimal dependencies",
    ],
    tech_stack: ["Python", "SMTP", "psutil", "Cron", "Linux"],
    architecture:
      "A Python script that uses the `psutil` library to get system resource information. It compares these values against predefined thresholds. If a threshold is exceeded, it uses the `smtplib` library to connect to an SMTP server and send an alert email. A cron job runs the script every few minutes.",
    challenges:
      "Avoiding alert fatigue by setting sensible thresholds, securely storing SMTP credentials, and ensuring the monitoring script itself is reliable and doesn't consume too many resources.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "system-administration",
    github_link: "#",
  },
  {
    id: "43",
    title: "AI Portfolio Generator",
    subtitle: "Generate a Portfolio Website from Your Resume",
    description:
      "A web application where a user can input their resume text or professional details, and the OpenAI API generates a complete, styled HTML/CSS portfolio website. The generated site can then be downloaded.",
    features: [
      "Parses resume text to extract key information",
      "Uses OpenAI API to generate portfolio content and structure",
      "Creates a fully styled, responsive HTML/CSS website",
      "Multiple templates to choose from",
    ],
    tech_stack: ["OpenAI API", "Next.js", "Tailwind CSS", "Node.js"],
    architecture:
      "The backend uses Node.js to interact with the OpenAI API, generating the HTML, CSS, and JavaScript code for the portfolio website. The frontend allows users to input their resume and select a template.",
    challenges:
      "Generating high-quality, well-structured HTML/CSS code with the OpenAI API, handling different resume formats, and providing a user-friendly interface.",
    image_url: "/placeholder.svg?height=400&width=600",
    category: "ai",
    github_link: "#",
  },
]
