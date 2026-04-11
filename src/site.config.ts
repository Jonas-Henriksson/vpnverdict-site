export const siteConfig = {
  siteName: 'VPNVerdict',
  tagline: 'The VPN Testing Lab',
  domain: process.env.SITE_URL || 'https://vpnverdict.net',
  description: 'Comprehensive VPN reviews, comparisons, and guides. Find the best VPN for your needs with in-depth analysis and expert recommendations.',
  url: 'https://vpnverdict.net',
  logo: 'VPNVerdict',
  defaultAuthor: {
    name: 'VPNVerdict Team',
    bio: 'We test, compare, and review VPN services so you don\'t have to.',
  },
  author: 'VPNVerdict Team',
  email: 'info@vpnverdict.net',
  social: {
    twitter: 'https://twitter.com/vpnverdict',
    facebook: 'https://facebook.com/vpnverdict',
    linkedin: 'https://linkedin.com/company/vpnverdict',
  },
  nav: [
    { label: 'Reviews', href: '/#latest' },
    { label: 'Categories', href: '/#categories' },
    { label: 'Methodology', href: '/disclosure' },
  ],
  affiliatePrograms: {
    nordvpn: { name: 'NordVPN', affiliateUrl: 'https://vpnverdict.net/go/nordvpn', program: 'CJ', commission: '40% per sale', cookie: 30 },
    expressvpn: { name: 'ExpressVPN', affiliateUrl: 'https://vpnverdict.net/go/expressvpn', program: 'Impact', commission: 'Up to 45%', cookie: 30 },
    surfshark: { name: 'Surfshark', affiliateUrl: 'https://vpnverdict.net/go/surfshark', program: 'CJ', commission: '40% per sale', cookie: 30 },
    cyberghost: { name: 'CyberGhost', affiliateUrl: 'https://vpnverdict.net/go/cyberghost', program: 'Impact', commission: 'Up to 30%', cookie: 30 },
    protonvpn: { name: 'ProtonVPN', affiliateUrl: 'https://vpnverdict.net/go/protonvpn', program: 'Impact', commission: 'Up to 25%', cookie: 30 },
    nordpass: { name: 'NordPass', affiliateUrl: 'https://vpnverdict.net/go/nordpass', program: 'CJ', commission: '30% per sale', cookie: 30 },
    'proton-partners-program': { name: 'Proton Partners Program', affiliateUrl: 'https://vpnverdict.net/go/proton-partners-program', program: 'CJ', commission: '100.00%' },
      'iolo-system-mechanic': { name: 'Iolo System Mechanic', affiliateUrl: 'https://vpnverdict.net/go/iolo-system-mechanic', program: 'CJ', commission: 'USD 10.00' },
  },
  impactVerification: '0702cea6-0336-4910-b67c-a7671741e912',
  keywords: 'VPN reviews, VPN comparison, best VPN, VPN service, privacy VPN, fast VPN, VPN for streaming',
  og: { image: 'https://vpnverdict.net/og-image.png', type: 'website' },
};

export default siteConfig;
