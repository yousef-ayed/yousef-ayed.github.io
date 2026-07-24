import {
  ShieldCheck,
  ServerCog,
  Radar,
  BrainCircuit,
  Network,
  Lock,
  ScanEye,
  Cpu,
} from 'lucide-react'

export const profile = {
  name: 'Yousef Ayed',
  role: 'Security Operations & Network Infrastructure Engineer',
  tagline:
    'Architecting, fortifying, and optimizing resilient enterprise network infrastructures and automated threat detection systems.',
  email: 'youssefayed404@gmail.com',
  github: 'https://github.com/yousef-ayed',
  linkedin: 'https://www.linkedin.com/feed/',
  
}

export const terminalLines = [
  { prompt: 'yousef@ops:~$', text: 'run system-diagnostics --full', delay: 0 },
  { text: 'Initializing perimeter checks...', type: 'muted' },
  { text: 'Firewall: ACTIVE', type: 'ok' },
  { text: 'IDS/IPS Ruleset: SYNCED', type: 'ok' },
  { text: 'VLAN Segmentation: ENFORCED', type: 'ok' },
  { text: 'SIEM Feed: LIVE', type: 'ok' },
  { text: 'Anomaly Model: MONITORING', type: 'ok' },
  { text: 'Status: SECURE', type: 'status' },
]

export const skills = [
  {
    icon: ShieldCheck,
    title: 'Network Architecture & Security',
    blurb: 'Designing perimeter and internal defenses that hold under load and under attack.',
    tags: ['Palo Alto', 'Fortinet', 'ACLs', 'VPNs', 'VLAN Segmentation', 'IDS/IPS Configuration'],
    accent: 'cyan',
  },
  {
    icon: ServerCog,
    title: 'Enterprise System Administration',
    blurb: 'Keeping the directory, the domain, and the virtualized fleet in lockstep.',
    tags: ['Windows Server', 'Active Directory (AD DS)', 'VMware / Hyper-V', 'DNS', 'DHCP'],
    accent: 'emerald',
  },
  {
    icon: Radar,
    title: 'Security Operations & Defense',
    blurb: 'Watching the signal, chasing the anomaly, closing the incident.',
    tags: ['Incident Response', 'SOC Operations', 'Defensive Monitoring', 'SIEM Analysis', 'Threat Hunting'],
    accent: 'cyan',
  },
  {
    icon: BrainCircuit,
    title: 'AI/ML in Security',
    blurb: 'Teaching models to read logs faster than any analyst could.',
    tags: ['Automated Threat Detection', 'Random Forest', 'Naive Bayes', 'Anomaly Detection'],
    accent: 'emerald',
  },
]

export const projects = [
  {
    id: 'threat-monitor',
    icon: ScanEye,
    title: 'Smart Automated Threat Monitoring & Detection System',
    overview:
      'Designed and engineered an automated threat monitoring platform utilizing ML classification algorithms to analyze security logs in real time and trigger proactive containment.',
    tags: ['Machine Learning', 'Random Forest', 'Security Monitoring', 'Log Analysis'],
    metrics: [
      { label: 'Detection Model', value: 'Random Forest' },
      { label: 'Log Pipeline', value: 'Real-Time' },
      { label: 'Response', value: 'Proactive Containment' },
    ],
  },
  {
    id: 'enterprise-perimeter',
    icon: Network,
    title: 'Enterprise Network Infrastructure & Perimeter Defense Setup',
    overview:
      'Engineered a fully segmented corporate network architecture featuring high-availability firewalls, granular ACL policies, and centralized Active Directory domain management.',
    tags: ['Network Architecture', 'Palo Alto', 'Active Directory', 'VLAN Segmentation'],
    metrics: [
      { label: 'Topology', value: 'Segmented VLANs' },
      { label: 'Firewalls', value: 'High-Availability' },
      { label: 'Domain', value: 'Centralized AD' },
    ],
  },
]

// Chronological — earliest to most recent. Order here is real information, not decoration.
export const timeline = [
  {
    date: '2023 — 2027',
    title: 'B.S. in Computer Science and Information',
    type: 'Degree',
    detail: 'Core coursework spanning systems, networking, and applied security fundamentals.',
  },
  {
    date: 'Jul 2025 — Jan 2026',
    title: 'Digital Egypt Pioneers Initiative (DEPI) Scholarship',
    type: 'Scholarship',
    detail: 'Selected training track under Egypt\u2019s national digital skills initiative.',
  },
  {
    date: 'Jul 2025',
    title: 'Standardized Network Routing & Switching Track',
    type: 'Certification',
    detail: 'Structured training in routing protocols and switching fundamentals.',
  },
  {
    date: 'Sep 2025',
    title: 'IT Specialist Credential & Network Device Configuration',
    type: 'Certification',
    detail: 'Validated competency in configuring and maintaining core network devices.',
  },
  {
    date: 'Dec 2025',
    title: 'Enterprise Firewall & Centralized Management Systems',
    type: 'Certification',
    detail: 'Focused track on firewall policy design and centralized security management.',
  },
  {
    date: 'Jun 2026',
    title: 'Windows Server System Administration & Infrastructure',
    type: 'Certification',
    detail: 'Server administration, directory services, and infrastructure operations.',
  },
  {
    date: '2026',
    title: 'Cyber Security Incident Response Analyst Track',
    type: 'Certification',
    detail: 'Applied incident handling, triage, and response methodology.',
  },
]

export const services = [
  {
    id: 'SVC-01',
    icon: Lock,
    title: 'Enterprise Network Design & Perimeter Hardening',
    detail: 'End-to-end network topology design with defense-in-depth at every layer of the perimeter.',
  },
  {
    id: 'SVC-02',
    icon: ShieldCheck,
    title: 'Firewall Policy Configuration & ACL Optimization',
    detail: 'Rule-base cleanup, least-privilege ACLs, and high-availability firewall deployment.',
  },
  {
    id: 'SVC-03',
    icon: Cpu,
    title: 'Systems Administration & Active Directory Architecture',
    detail: 'Domain structure, group policy, and virtualized infrastructure built to scale cleanly.',
  },
  {
    id: 'SVC-04',
    icon: Radar,
    title: 'Network Threat Analysis & Incident Response Readiness',
    detail: 'SIEM tuning, threat hunting playbooks, and incident response runbooks ready before you need them.',
  },
]
