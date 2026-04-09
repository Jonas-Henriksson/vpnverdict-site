import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['privacy', 'streaming', 'speed', 'security', 'business', 'gaming']),
    author: z.string().optional().default('VPNVerdict Team'),
    keywords: z.array(z.string()).optional().default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().optional().default(false),
    tableOfContents: z.boolean().optional().default(true),
    vpnRatings: z.object({
      nordvpn: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
      expressvpn: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
      surfshark: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
      cyberghost: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
      protonvpn: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
    }).optional(),
    affiliateLinks: z.array(z.object({ vpn: z.string(), url: z.string() })).optional(),
    // Arena fields
    score: z.number().min(0).max(10).optional(),
    badge: z.enum(['editors-pick', 'best-value', 'top-rated', 'tested']).optional(),
    verdict: z.string().optional(),
    winner: z.string().optional(),
  }),
});

export const collections = { articles };
