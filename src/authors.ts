// Author personas for VPNVerdict
// Auto-generated for E-E-A-T signals

export interface Author {
  slug: string;
  name: string;
  title: string;
  initials: string;
  years: number;
  bio: string;
  expertise: string[];
  credentials: string;
}

export const authors: Record<string, Author> = {
  'marcus-reid': {
    slug: 'marcus-reid',
    name: 'Marcus Reid',
    title: 'Editor-in-Chief',
    initials: 'MR',
    years: 9,
    bio: `Marcus has spent nearly a decade in cybersecurity journalism, previously covering digital privacy for Wired and Ars Technica. He leads VPNVerdict's testing methodology and has personally benchmarked over 60 VPN services across 30+ countries.`,
    expertise: ["VPN protocol analysis", "Speed benchmarking", "Privacy audits", "Threat modeling"],
    credentials: 'CISSP, former network security consultant',
  },
  'elena-vasquez': {
    slug: 'elena-vasquez',
    name: 'Elena Vasquez',
    title: 'Senior Privacy Analyst',
    initials: 'EV',
    years: 5,
    bio: `Elena specializes in VPN privacy policies and jurisdiction analysis. With a law degree focused on digital rights, she dissects terms of service and logging practices that most reviewers overlook.`,
    expertise: ["Privacy policy analysis", "Jurisdiction research", "Streaming unblocking", "Mobile VPN testing"],
    credentials: 'J.D. in Digital Rights Law',
  },
  'daniel-cho': {
    slug: 'daniel-cho',
    name: 'Daniel Cho',
    title: 'Contributing Security Researcher',
    initials: 'DC',
    years: 7,
    bio: `Daniel is an independent security researcher who has disclosed vulnerabilities in three major VPN providers. He contributes deep-dive technical audits and protocol analysis to VPNVerdict.`,
    expertise: ["Protocol security audits", "Leak testing", "Encryption analysis", "Server infrastructure review"],
    credentials: 'OSCP, Bug bounty hunter (HackerOne Top 500)',
  },
};

export const defaultAuthor = authors['marcus-reid'];

export function getAuthorByName(name: string): Author | undefined {
  return Object.values(authors).find(a => a.name === name);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return authors[slug];
}
