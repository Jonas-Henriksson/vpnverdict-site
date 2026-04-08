import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    category: z.enum(['privacy', 'streaming', 'speed', 'security', 'business', 'gaming']),
    author: z.string().optional(),
    keywords: z.array(z.string()),
    featured: z.boolean().default(false),
    vpnRatings: z.object({
      nordvpn: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
      expressvpn: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
      surfshark: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
      cyberghost: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
      protonvpn: z.object({ name: z.string(), rating: z.number(), pros: z.array(z.string()), cons: z.array(z.string()), affiliateLink: z.string() }).optional(),
    }).optional(),
    affiliateLinks: z.array(z.object({ vpn: z.string(), url: z.string() })).optional(),
  }),
});

export const collections = { articles };
