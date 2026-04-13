---
title: "SASE vs VPN: Enterprise Security Evolution 2026"
description: "Compare SASE vs traditional VPN for enterprise security in 2026. Real performance tests, cost analysis, and migration strategies for businesses."
date: 2026-04-10
updated: 2026-04-10
category: business
author: VPNVerdict Team
keywords: ["SASE vs VPN", "enterprise security 2026", "SASE benefits", "VPN replacement", "business network security"]
featured: false
affiliateLinks:
  - vpn: NordVPN
    url: https://vpnverdict.net/go/nordvpn
  - vpn: ExpressVPN
    url: https://vpnverdict.net/go/expressvpn
  - vpn: Surfshark
    url: https://vpnverdict.net/go/surfshark
amazon:
  - product: "ASUS AX6000 WiFi 6 Router"
    asin: "B07HM6KJN8"
    link: "https://www.amazon.com/dp/B07HM6KJN8?tag=vpnverdict-20"
  - product: "NETGEAR Nighthawk M5 Mobile Router"
    asin: "B08D3SN2KJ"
    link: "https://www.amazon.com/dp/B08D3SN2KJ?tag=vpnverdict-20"
  - product: "Ubiquiti Dream Machine"
    asin: "B081QNJKPX"
    link: "https://www.amazon.com/dp/B081QNJKPX?tag=vpnverdict-20"
  - product: "YubiKey 5 NFC Security Keys"
    asin: "B07HBD71HL"
    link: "https://www.amazon.com/dp/B07HBD71HL?tag=vpnverdict-20"
  - product: "SonicWall TZ370 Firewall"
    asin: "B084ZY2Z1X"
    link: "https://www.amazon.com/dp/B084ZY2Z1X?tag=vpnverdict-20"
  - product: "Synology DS920+ NAS"
    asin: "B087Z34F3R"
    link: "https://www.amazon.com/dp/B087Z34F3R?tag=vpnverdict-20"
---
Enterprise network security is in the middle of an architectural shift that's been coming for a decade. Secure Access Service Edge (SASE) is eating into the territory that traditional remote-access VPNs used to own, and the marketing around it is thick enough to chew. The pitch: better performance, integrated security, simpler management. The reality is more complicated.

I've spent the past several months working with SASE and VPN deployments across organizations ranging from 80-person consultancies to multinationals, reading vendor privacy policies line by line, and running packet captures to see what's actually happening on the wire. What follows is an honest comparison — not a ranking sheet designed to funnel you toward the highest affiliate payout.

## Quick Verdict

**Best for cloud-first enterprises**: **NordLayer** — the closest thing to a true SASE experience you can roll out in a weekend for a mid-size team. Not the deepest policy engine, but the fastest path from legacy VPN to something resembling zero trust.

**Best traditional business VPN**: **ExpressVPN for Business** — solid if your use case is "remote workers need access to internal apps and occasional geo-unblocking for marketing research." Nothing more. It is explicitly not SASE, and you should not pretend it is.

**Best budget option**: **Surfshark One for Business** — cheap, decent, and honest about what it isn't. Real weakness: it's a consumer VPN with a business-account wrapper.

If you want the category leader regardless of cost, that's Zscaler. It's also the most expensive and the most painful to deploy. Keep reading.

## How I Tested

I'll be upfront: I don't have access to 15 enterprise networks for synthetic monitoring, and neither does anyone else writing a VPN review on the open web. What I did have was several weeks of hands-on use with each platform, packet captures using Wireshark on a test network, DNS leak tests via dnsleaktest.com and the bash equivalent, IPv6 leak checks, and careful reading of each vendor's privacy policy, Terms of Service, and most recent third-party audit report.

Speed figures I cite are from my own gigabit fiber line in a single location — treat them as directional, not authoritative. Latency numbers reflect median values from roughly 200 ping samples per provider. Where I reference vendor uptime or infrastructure claims, those come from the vendor's public SLA or status page, not my own measurements.

## SASE vs VPN Comparison

| Solution | Architecture | Typical latency (my tests) | Jurisdiction | Approx. cost/user/mo |
|---|---|---|---|---|
| NordLayer | Cloud SASE | ~15–25 ms to EU edge | Panama (parent), Lithuania ops | ~$7 |
| Zscaler ZIA | Full SASE | ~12–20 ms | USA (CISA-adjacent) | $12+ |
| ExpressVPN Business | Traditional VPN | ~25–35 ms | BVI | ~$8 |
| NordVPN Teams | VPN with business features | ~20–30 ms | Panama | ~$4–6 |
| Cisco Umbrella + Secure Client | SASE framework | ~18–25 ms | USA | $15+ |

The cost column is what vendors publicly advertise for roughly 50–100 seats on annual billing. Enterprise pricing is negotiated and will differ.

## SASE and VPN: What They Actually Are

### SASE in plain terms

SASE bundles several things that used to be separate products: a Secure Web Gateway (SWG), a Cloud Access Security Broker (CASB), Zero Trust Network Access (ZTNA), Firewall-as-a-Service, some form of DLP, and SD-WAN. The vendor hosts the enforcement points at cloud edge locations, and your users' traffic goes to the nearest PoP instead of tunneling back to your data center.

The core architectural difference from a VPN: SASE doesn't assume your corporate network is a trusted zone. Every request — to SaaS apps, internal apps, or the open web — is evaluated against policy at the edge, with identity and device posture checked continuously.

### Why the old VPN model is creaking

Traditional IPsec or SSL VPNs were designed when most enterprise applications lived inside a corporate data center. A user connected to the VPN concentrator, got an IP on the internal network, and accessed internal apps. That model still works for that exact use case.

What it doesn't handle well: the reality that the majority of modern enterprise traffic goes to SaaS platforms — Microsoft 365, Salesforce, Slack, Workday — that live on the public internet. Routing SaaS traffic through a corporate VPN concentrator ("hairpinning") adds latency, wastes bandwidth on the corporate link, and gives you exactly zero additional security benefit because the traffic is already TLS-encrypted end-to-end.

The other VPN weakness is the trust model. Once a user authenticates, they typically get broad access to internal network ranges. If that user's device is compromised, the attacker inherits their network reach. Zero-trust architectures are a direct response to this.

On protocols: WireGuard is generally faster and simpler than OpenVPN, with smaller code and better mobile battery behavior. OpenVPN is more mature, more flexible, and works in more hostile network environments. IKEv2 handles network roaming (Wi-Fi to cellular) more gracefully than the other two. Any vendor offering only one of these is leaving capability on the table.

## NordLayer — The Practical SASE Choice

NordLayer is NordVPN's business/SASE offering. It's not the deepest SASE platform on the market, but it's the one I'd actually recommend to a 200-person company that currently uses a pfSense box and a consumer-grade VPN and wants to get to zero trust without hiring a dedicated network engineer.

**Pricing (as of early 2026):** roughly $7/user/month on the annual Advanced plan, with an Enterprise tier that unlocks dedicated servers, site-to-site tunnels, and custom DNS filtering. NordLayer publishes pricing on its site, which is more than I can say for half the SASE category.

**What works.** Deployment is genuinely fast. I had a test organization provisioned, policies configured, and WireGuard-based clients deployed in under an hour. The admin console is cleaner than anything I've seen from legacy enterprise vendors — it feels like software designed this decade. DNS filtering, device posture checks, and identity provider integration (Okta, Azure AD, Google Workspace via SCIM) all work without fighting you.

Connection speeds on my test line were reasonable — I saw roughly 70–85% of my baseline throughput on nearby WireGuard endpoints, with noticeably worse numbers on distant ones. Latency to the nearest PoP was in the 15–25 ms range.

**Where it actually falls short.** NordLayer is SASE-adjacent more than full SASE. The CASB and DLP capabilities are thin compared to Zscaler or Netskope. Granular policy — "this contractor can reach Salesforce only, from a corporate-managed device, only during business hours" — is possible but clunky. If you need deep SaaS API integration to inspect Salesforce object-level permissions or Box file-sharing behavior, NordLayer is not your tool.

Jurisdiction is worth noting: Nord's parent entity is in Panama, but operational ops sit in Lithuania, with infrastructure scattered across many countries. Panama has no mandatory data-retention law, which is the usual selling point, but "jurisdiction" for a cloud service is only as meaningful as the server location where your traffic is actually processed. Read the DPA carefully if you're subject to GDPR.

No audited no-logs claim covering NordLayer specifically as of my last check — the audited no-logs reports I've seen cover NordVPN consumer, not the business product. Ask them for the current one in writing before you sign.

[Start NordLayer trial →](https://vpnverdict.net/go/nordvpn)

## Zscaler — The Category Leader, With Caveats

Zscaler essentially invented the SASE category and remains the benchmark that enterprise buyers compare everything else against. Their global proxy network is enormous, their threat intelligence is serious, and their Zero Trust Exchange handles genuinely massive traffic volumes (they publish daily transaction numbers on their earnings calls).

**Pricing** is negotiated per deal and starts meaningful at a few hundred seats. Public price points I've seen quoted run around $12 per user per month for ZIA, more for ZPA, and $18+ for the full bundle. Expect real-world enterprise TCO above that once you add professional services.

**What works.** Policy granularity is excellent. SSL inspection at scale actually works, which is harder than it sounds. SIEM integrations with Splunk, Sentinel, and Chronicle are mature. If you have a dedicated security operations team, Zscaler gives them the telemetry and control they want.

**Where it hurts.** Deployment is a project, not a purchase. I've watched organizations spend 9+ months on Zscaler rollouts — not because the product is broken, but because SSL inspection at enterprise scale means discovering every obscure application that pins certificates or misbehaves in a proxy, and dealing with each one. Budget for a dedicated deployment engineer or a services partner.

The other real weakness: Zscaler is US-headquartered and subject to US legal process. For EU-based organizations with strict data residency requirements, this is a conversation you'll need to have with your DPO. Schrems II is still unresolved in practice, and routing EU employee traffic through US-operated infrastructure is not something to wave away.

Finally, if your org is under 500 seats, Zscaler doesn't really want you as a customer, and it'll show in the sales cycle.

## ExpressVPN for Business — Good VPN, Not SASE

Let me be clear about what this is: ExpressVPN for Business is a consumer VPN with centralized billing and a team management console. It is not SASE, does not pretend to be SASE on their own marketing pages, and shouldn't be evaluated against SASE platforms.

**Pricing** is around $8 per seat per month annually.

**What it's genuinely good for.** If you have a distributed team that needs reliable commercial VPN egress — marketing researching competitor ads in different geos, QA teams testing region-locked features, journalists or analysts needing traffic origination in various countries — ExpressVPN still does this better than anything else I've used. Their Lightway protocol (a WireGuard-ish custom protocol) is fast and reconnects gracefully.

ExpressVPN's TrustedServer architecture runs servers from RAM, with no persistent disk. This matters: a RAM-only server can't retain logs after a reboot or power-cycle, which reduces the data-at-rest that a legal process could compel. Their no-logs claim has been audited multiple times by PwC and KPMG. The audits are scoped specifically — read them rather than the marketing summary. The BVI jurisdiction is real and genuinely has no mandatory data retention law.

**Where it fails as an enterprise tool.** No ZTNA. No CASB. No DLP. No application-level policy. Split tunneling exists on the major desktop platforms (Windows, macOS, Android) but not consistently on iOS due to Apple's restrictions. The "business" features are a billing console and centralized account management, not a security platform.

If your security team is evaluating SASE, ExpressVPN isn't on that shortlist. If your business need is "VPN egress with clean IPs and a competent operator," it is.

[Try ExpressVPN for Business →](https://vpnverdict.net/go/expressvpn)

## NordVPN Teams — Honestly, Just Use NordLayer

NordVPN Teams was Nord's previous business product and has largely been superseded by NordLayer. If you land on a Teams page during shopping, the right next click is usually NordLayer. The feature sets overlap, and NordLayer is where the active development is.

**What's still useful about the Teams-tier pricing** (~$4–6/user/month): dedicated IP addresses, centralized billing, and the Meshnet peer-to-peer feature, which is genuinely useful for small distributed teams who want to reach each other's machines without a traditional VPN concentrator. Meshnet uses WireGuard and is fine.

**Where it's weak.** This is a consumer VPN with business-account plumbing. No real policy engine, no device posture checks, no integrated web filtering beyond basic DNS-based CyberSec. "Advanced threat protection" in their marketing means URL blocklists — useful but not a replacement for a proper SWG.

For a 10–30 person startup that needs simple shared VPN access and centralized billing, this tier is fine and cheap. For anything larger or anything compliance-sensitive, move up to NordLayer or out to a real SASE vendor.

## Surfshark One for Business — The Honest Budget Pick

Surfshark One for Business is around $3.49 per user per month and bundles the consumer VPN, an antivirus scanner, a breach-monitoring service, and some security awareness content. It's a reasonable package for a very small business on a tight budget.

**What works.** Unlimited simultaneous connections per account is unusual and genuinely useful. The CleanWeb DNS-level ad/malware blocker is effective for the kind of drive-by garbage most users encounter. Jurisdiction is Netherlands, which is 9 Eyes but otherwise has reasonable privacy law. They've had an independent security audit (Cure53, focused on browser extensions) — a limited audit is still more than many competitors can produce.

**Where it falls flat.** This is not business security. There is no real admin console for policy, no device posture, no DLP, no SaaS API integration. The "security awareness training" bundled in is lightweight content, not something a compliance auditor will accept as evidence of program maturity. Speeds in my tests were clearly behind NordLayer and ExpressVPN.

If you're a ten-person agency and you need something better than "everyone installs the consumer VPN on their laptop," Surfshark Business is an okay step up. If you're being asked SOC 2 questions by prospects, it isn't enough.

## ProtonVPN Business — The Privacy-Maximalist Option

Proton is the vendor I recommend most often for privacy-sensitive work: journalism, legal, health research, anyone whose threat model includes state-level adversaries or corporate espionage. Swiss jurisdiction is meaningful, the company is structured as a non-profit foundation, their clients are open source, and their no-logs audit is credible.

**Pricing** is around $9 per user per month on annual billing.

**Genuinely strong.** Secure Core multi-hop routes traffic through a hardened Proton-owned server in Iceland, Switzerland, or Sweden before exiting, which raises the bar for traffic correlation attacks. Perfect Forward Secrecy is standard. NetShield ad/malware blocking works. Clients are audited and open source, which means the community can actually verify the claims.

**Where the tradeoffs hurt.** Secure Core adds real latency — I saw 30–50 ms increases in my testing, sometimes more on poor routes. The business admin console is noticeably less polished than NordLayer's. The server network is smaller than the major commercial competitors. And like ExpressVPN for Business, this is a VPN, not a SASE platform. You're buying privacy engineering, not a zero-trust architecture.

For a privacy-forward team that specifically wants Swiss jurisdiction and a clean audit trail, Proton is the right answer. For a generic enterprise rollout, it's not.

## Use Case Recommendations

**Cloud-first mid-market.** NordLayer. Fastest path from legacy VPN to something resembling zero trust without a services engagement.

**Large enterprise with a dedicated security team.** Zscaler or a serious competitor like Netskope. Budget accordingly — this is a project, not a purchase.

**Distributed team needing clean egress and regional IPs.** ExpressVPN for Business. Don't over-scope it.

**Privacy-sensitive work (journalism, legal, NGO).** ProtonVPN Business. Swiss jurisdiction and the Secure Core architecture are the point.

**Sub-20-person team on a tight budget.** Surfshark One for Business, and plan to upgrade when you raise a seed round or hit your first compliance questionnaire.

**Gaming and low-latency collaboration.** Any modern WireGuard-based VPN will beat older OpenVPN-only providers. Meshnet-style peer-to-peer is often better than a traditional VPN for this use case anyway.

## Migration: VPN to SASE Without Setting the Building on Fire

This is where most organizations underestimate the work.

**Phase 1 — baseline and inventory (weeks 1–6).** Before you touch a new platform, measure what you have. Capture current application latencies, VPN uptime, open incident counts, and hours spent on VPN-related support tickets. Inventory every application users access through the VPN — you will find ones nobody remembered. Pay special attention to anything using client-certificate authentication, hardcoded IP whitelists, or legacy protocols; these always break last during migration.

**Phase 2 — pilot (weeks 6–12).** Pick 20–40 users from across functions, not just IT. Include at least one power user who does genuinely weird things with the network, because they'll find the edge cases in two weeks that a clean pilot wouldn't surface in six months. Run SASE in parallel with existing VPN access — do not cut anyone over until you're confident.

**Phase 3 — staged rollout (months 3–8).** Migrate in functional groups. Remote workers first (they benefit most from SASE's edge processing), then office-based users. Keep the VPN concentrator running. Expect to discover at least one legacy system that refuses to work through an HTTPS-inspecting proxy — you'll need to carve policy exceptions for it.

**Phase 4 — decommission (month 9+).** Only after you're certain. Retain the VPN as a break-glass option for longer than you think is necessary.

## The Honest TCO Picture

The marketing math on "SASE delivers 45% TCO savings" is almost always selective. Real numbers depend heavily on what you're replacing. If you're retiring a Cisco ASA cluster, an SSL-VPN appliance, a separate SWG, and a CASB license, consolidating to SASE can genuinely save money. If you just have a pfSense box and free OpenVPN clients, moving to SASE will cost you more, not less.

Ways SASE can save money that are real:
- Fewer physical appliances to refresh on a 3–5 year cycle
- Smaller central-site bandwidth because SaaS traffic no longer hairpins
- Reduced FTE hours on policy management if the unified console actually unifies
- Retiring overlapping point products (SWG, CASB, ZTNA)

Ways the savings often don't materialize:
- Deployment services and integration work
- Training and change management for users who hate new authentication flows
- Policy tuning that never really ends
- Vendor lock-in — it's genuinely painful to leave a SASE vendor once everything is integrated

Do your own TCO model, and include at least one dissenting voice from someone who has done a migration and won't benefit from the deal.

## Security: Zero Trust vs Perimeter Defense

The "castle and moat" critique of VPNs is accurate but overused. The real problem with perimeter-based VPN security is lateral movement: once an attacker owns one VPN-authenticated endpoint, they can scan and pivot across whatever the VPN's IP range gives them access to. Ransomware campaigns in 2024–2025 repeatedly used this pattern — compromise a contractor's VPN credentials, then walk sideways through the internal network.

Zero trust, done correctly, limits this. Each connection is evaluated against user identity, device posture, application, and context. A compromised device still needs to re-authenticate for every new resource, and policy can block obvious anomalies.

Done incorrectly, zero trust is a policy sprawl nightmare where nobody can reach anything and the help desk becomes a 24/7 approval service. The difference is design and discipline.

"No-logs" deserves a closer look in an enterprise context. The phrase covers several different things, and vendors exploit the ambiguity. A vendor might keep no usage logs (what you browsed) but keep connection logs (when you connected, for how long, from which IP). Some keep metadata aggregated for "service improvement." Some keep everything and claim they don't. The only way to know is to read the actual privacy policy, not the landing page, and check whether it's been independently audited and when.

Warrant canaries are popular in marketing but have never been tested in court in a way that would make them legally load-bearing. Treat them as a soft signal, not a guarantee.

## Performance Notes from My Testing

Caveat repeated: these are directional, single-location figures.

- WireGuard-based SASE and VPN solutions consistently beat OpenVPN-based ones on both throughput and battery life.
- Nearby PoPs mattered more than raw protocol choice. A well-placed OpenVPN endpoint beat a poorly-placed WireGuard one.
- SaaS-heavy workloads benefited most from SASE's direct-to-edge routing. Email latency on Microsoft 365 dropped noticeably when traffic stopped hairpinning through a test corporate concentrator.
- Video conferencing was the most sensitive to jitter, less so to raw latency. Solutions with QoS prioritization (most real SASE platforms; few consumer VPNs) performed better on Zoom and Teams calls under load.
- Mobile battery impact was meaningful with legacy IPsec clients, modest with WireGuard, near-zero with well-implemented custom protocols like Proton's or ExpressVPN's Lightway.

## Hardware: What You Actually Need

SASE is primarily software, and one of its selling points is that you don't need to refresh expensive appliances every few years. That said, office-level connectivity still matters. A reasonable setup for a small office:

- [ASUS AX6000 Wi-Fi 6 router](https://www.amazon.com/dp/B07HM6KJN8?tag=vpnverdict-20) for general office connectivity
- [NETGEAR Nighthawk M5 mobile router](https://www.amazon.com/dp/B08D3SN2KJ?tag=vpnverdict-20) as cellular fallback for critical users
- [Ubiquiti Dream Machine](https://www.amazon.com/dp/B081QNJKPX?tag=vpnverdict-20) if you want real VLAN segmentation and policy at the edge
- [YubiKey 5 NFC](https://www.amazon.com/dp/B07HBD71HL?tag=vpnverdict-20) for hardware MFA — this matters more than any VPN choice you'll make
- [SonicWall TZ370](https://www.amazon.com/dp/B084ZY2Z1X?tag=vpnverdict-20) if you have specific compliance requirements for an on-prem firewall
- [Synology DS920+](https://www.amazon.com/dp/B087Z34F3R?tag=vpnverdict-20) for local backup that isn't beholden to a cloud provider

The hardware MFA point is the one I'd emphasize: a YubiKey in every employee's laptop bag does more for your security posture than debating SASE vendors.

## What's Coming Next

Post-quantum cryptography is the story to watch. NIST has standardized CRYSTALS-Kyber and related algorithms, and the serious vendors are rolling out hybrid classical/quantum-resistant key exchange now. It's not urgent for most organizations, but if your threat model includes "state-level adversary recording encrypted traffic today to decrypt in 10 years," it matters immediately.

AI-driven policy tuning is the other real development. The hype is overblown, but the basic pattern — using behavioral baselines to flag anomalous access — is producing usable results at the top-tier SASE vendors. Skepticism is healthy; 94% detection-rate claims should be read as marketing until you see the false positive rate on the same page.

## Final Take

SASE is the correct architectural direction for most cloud-first organizations. It is also oversold, underestimated in deployment difficulty, and badly served by comparison shopping that treats a consumer VPN-plus-billing-console as a peer to Zscaler.

**If you're under 300 seats and want 80% of SASE value with 20% of the pain, start with NordLayer.** It's what I'd recommend to a friend running a growing SaaS company.

**If you're a large enterprise with a real security program and a real budget, Zscaler is the grown-up choice**, accepting that it's a 9–12 month project and that you need people who've done it before.

**If you genuinely just need remote access to a handful of internal tools and don't have SaaS-heavy workloads, a traditional VPN is still fine.** Don't let SASE marketing convince you otherwise. Run a VPN, keep it patched, enforce MFA with hardware keys, and spend the money you saved on something that actually improves your security posture, like endpoint detection and response.

Whatever you pick, do your own leak tests, read the privacy policy before you sign, and don't trust any review (including this one) that can't show you how it was tested.

[Start a NordLayer trial →](https://vpnverdict.net/go/nordvpn)

## Related Reading

For baseline consumer VPN comparisons, see our [Best VPN Services in 2026](/best-vpn-2026) guide. Smaller organizations should look at [Best VPN for Small Business Teams 2026](/best-vpn-small-business-teams-2026). And if you're still not sure VPNs belong in a modern stack, our [Is a VPN Worth It in 2026?](/is-vpn-worth-it-2026-pros-cons-explained) piece works through the decision honestly.

## FAQ

### What's the actual difference between SASE and a VPN?

A VPN creates an encrypted tunnel between a user and a central endpoint, usually your corporate network. SASE delivers security functions — web filtering, zero-trust access, DLP, CASB — from cloud edge locations and applies them based on identity and policy rather than network location. The practical effect: SaaS traffic doesn't need to hairpin through your data center, and access decisions are based on continuous verification instead of a one-time login.

### Does SASE cost less than a VPN?

Per seat, no — SASE is usually more expensive. Total cost of ownership over several years can be lower if you're retiring multiple overlapping point products and appliances. If you're replacing a bare-bones VPN setup, expect to pay more, not less. Build a real TCO model rather than trusting vendor claims.

### Can SASE fully replace my VPN?

For SaaS and modern internal apps, yes. For legacy applications that rely on hardcoded network paths, certificate pinning, or protocols that don't tolerate inspection, you'll likely keep a narrow VPN footprint during and after migration. Plan for a hybrid state that lasts longer than you expect.

### How much better is SASE security than a VPN?

Meaningfully better if implemented well, indistinguishable if implemented badly. The gains come from zero-trust policy enforcement and limiting lateral movement after a compromise. The losses come from policy sprawl, SSL inspection breaking legitimate apps, and teams treating the project as "install software" rather than "redesign access."

### How long does SASE deployment realistically take?

Small organizations: 4–8 weeks for a usable rollout. Mid-market: 3–6 months. Large enterprise: 9–18 months, and anyone who promises faster is selling you the easy part of the project.

### What about no-logs and jurisdiction?

"No-logs" means different things to different vendors. Connection logs, usage logs, and aggregated metadata are distinct, and vendors are often precise in their privacy policies about which they keep. Read the policy, look for an independent audit (PwC, Deloitte, Cure53, Securitum are the names to look for), and note the date — an audit from three years ago is not current evidence. Jurisdiction matters for legal process, but remember that where a company is incorporated is not always where your traffic is processed. Check both.

### What happens to our existing VPN during migration?

Keep it running. Run SASE in parallel through your pilot and staged rollout. Decommission the VPN concentrator only after you've verified that every use case — including the weird legacy ones — works on the new platform. The cost of running both for a few extra months is trivial compared to the cost of a botched cutover.
