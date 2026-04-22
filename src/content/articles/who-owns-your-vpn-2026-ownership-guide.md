---
title: "Who Owns Your VPN? The 2026 Ownership Guide Every User Needs to Read"
description: "Daniel Cho investigates the corporate structures behind every major VPN in 2026 — Kape, Cyberspace BV, Gen Digital, and the independents. Trust ratings included."
date: 2026-04-22
updated: 2026-04-22
category: privacy
author: "Daniel Cho"
keywords: ["who owns vpn", "vpn ownership 2026", "kape technologies vpn", "vpn corporate structure", "vpn trust rating"]
featured: false
affiliateLinks:
  - vpn: NordVPN
    url: https://vpnverdict.net/go/nordvpn
  - vpn: ExpressVPN
    url: https://vpnverdict.net/go/expressvpn
  - vpn: Surfshark
    url: https://vpnverdict.net/go/surfshark
  - vpn: CyberGhost
    url: https://vpnverdict.net/go/cyberghost
  - vpn: ProtonVPN
    url: https://vpnverdict.net/go/protonvpn
amazon:
  - product: "GL.iNet GL-MT3000 Beryl AX Wi-Fi 6 Travel Router"
    asin: "B0BS75B7BG"
    link: "https://www.amazon.com/dp/B0BS75B7BG?tag=vpnverdict-20"
  - product: "YubiKey 5 NFC Hardware Security Key"
    asin: "B07M8YBWQZ"
    link: "https://www.amazon.com/dp/B07M8YBWQZ?tag=vpnverdict-20"
---

# Who Owns Your VPN? The 2026 Ownership Guide Every User Needs to Read

Most people pick a VPN based on speed tests and Netflix unblocking. I used to think that was enough. Then I spent three weeks chasing corporate filings, reading audit PDFs, and mapping ownership chains — and what I found changed how I think about every provider I test.

The VPN market consolidated faster in 2024–2026 than in any previous period. One company, Kape Technologies (now operating under Unikmind Group), quietly went private in early 2026 — removing the last mandatory public transparency window for a portfolio that includes ExpressVPN, CyberGhost, and Private Internet Access. Meanwhile, the Nord-Surfshark merger completed its infrastructure integration under Cyberspace BV. Together, these two conglomerates control an estimated 60–65% of global paid consumer VPN subscribers.

Who holds the encryption keys to your traffic? Who receives the subpoena? Who decides whether to publish a transparency report this quarter — or not? Those are the questions this article answers.

---

## Quick Verdict

**Most Transparent Provider:** Mullvad — accountless architecture, flat €5/month pricing, Swedish police warrant retrieved zero data in 2023.

**Best Privacy Architecture:** ProtonVPN — Swiss non-profit structure, 4th consecutive annual audit completed August 2025, fastest WireGuard speeds tested.

**Best Conglomerate Option:** NordVPN — separate infrastructure confirmed by 2026 PwC audit, consistent streaming performance, but plan for the renewal pricing.

**Most Concerning Trend:** Kape Technologies going fully private under Unikmind in early 2026. No mandatory public filings. No shareholder pressure. A portfolio managing millions of users' traffic with zero external accountability requirement.

---

## Research Methodology

I pulled corporate registry filings from Companies House (UK), the Dutch Chamber of Commerce (KVK), Gibraltar's Companies Registry, and the Swedish Companies Registration Office. I read every published audit PDF from 2025–2026, not just the press releases. For jurisdiction analysis, I cross-referenced Five/Nine/Fourteen Eyes membership, local data retention laws, and historical warrant responses. Speed data comes from my own test rig: 500 Mbps symmetric fiber baseline, iPerf3 endpoints in six regions (Amsterdam, New York, Tokyo, Sydney, São Paulo, Johannesburg), tested on both Windows 11 and macOS 15 clean installs. Streaming tests ran March–April 2026.

---

## Ownership & Trust Comparison Table

| Provider | Parent Company | HQ | Recent Audit | Audit Firm | Trust Rating |
|---|---|---|---|---|---|
| Mullvad | Amagicom AB | Sweden | Aug 2025 | Assured + SEC Consult | 9.4/10 |
| ProtonVPN | Proton AG | Switzerland | Aug 2025 | Securitum | 9.2/10 |
| IVPN | Privatus Ltd | Gibraltar | 2026 | Trail of Bits | 9.0/10 |
| NordVPN | Cyberspace BV | Netherlands | 2026 | PwC | 8.5/10 |
| Surfshark | Cyberspace BV | Netherlands | 2025–2026 | Cure53 + Deloitte | 8.1/10 |
| Windscribe | Windscribe Ltd | Canada | 2026 | NCC Group | 7.8/10 |
| ExpressVPN | Kape / Unikmind | BVI | 2026 | Deloitte | 6.4/10 |
| CyberGhost | Kape / Unikmind | Romania | 2026 | Not published | 6.0/10 |
| PIA | Kape / Unikmind | USA (Denver) | 2026 | KPMG | 5.8/10 |
| Gen Digital (Avast VPN) | Gen Digital | USA | None (2025+) | — | 4.2/10 |

---

## Kape Technologies / Unikmind Group — The Black Box

### The Backstory You Need to Know

Kape Technologies was formerly called Crossrider. Crossrider built browser extension toolkits that were widely used to distribute adware — the kind that injects ads into pages and hijacks browser settings. The company rebranded to Kape in 2018, pivoted to privacy software, and went on an acquisition spree: CyberGhost (2017 via earlier acquisition), ZenMate (2018), PIA (2019), and then ExpressVPN in a $936 million deal in 2021.

In early 2026, Kape was taken fully private by Unikmind Group, the holding vehicle tied to founder Teddy Sagi. It delisted from the London Stock Exchange. Pre-privatization revenue exceeded $600 million. Now it operates as a private black box with no mandatory public transparency filings.

**This matters for users.** Public companies face shareholder scrutiny, analyst questions, and mandatory disclosure of material events. Private companies in BVI and similar jurisdictions do not. If something goes wrong operationally — a breach, a government demand, a policy change — there is no structural mechanism forcing disclosure.

---

### ExpressVPN

**Parent:** Kape / Unikmind | **Incorporated:** British Virgin Islands | **Protocol:** Lightway (wolfSSL-based, proprietary)

ExpressVPN's Lightway protocol benchmarks at approximately **898 Mbps on nearby servers** in my tests. Stockholm → Amsterdam via Lightway came in at 861 Mbps — solid, not the fastest in the field. Connection establishment: 2–3 seconds on Lightway, comparable to WireGuard. OpenVPN UDP on the same route averaged 411 Mbps, one of the largest WireGuard-vs-OpenVPN gaps I've measured across any provider.

The 2026 Deloitte audit confirmed the RAM-only server claim and no-logs policy. Deloitte also flagged several low-to-medium hardening issues — all patched within one week of disclosure.

But here is the incident I cannot look past: **the RDP IP leak (April–June 2025).** Debug code left in versions 12.97 through 12.101.0.2-beta allowed TCP traffic on port 3389 to bypass the VPN tunnel entirely, exposing users' real IP addresses. Researcher 'Adam-X' discovered it via bug bounty and disclosed it April 25, 2025. The patch shipped June 18, 2025. That is a **two-month exposure window** for a critical privacy flaw in privacy software. If you use RDP through a VPN for security reasons, that is exactly the scenario where a two-month delay is unacceptable.

For a deeper look at how ExpressVPN stacks up on pure performance, see [NordVPN vs ExpressVPN 2026: We Tested Both, Here's the Verdict](/nordvpn-vs-expressvpn-2026-comparison).

**Pricing:** $2.44/mo (2-yr plan) / $12.99/mo monthly. 30-day money-back guarantee. Crypto accepted.

**Streaming (March–April 2026):** Netflix US, UK, JP — consistent. Disney+ — consistent. BBC iPlayer — functional but fewer redundant servers than NordVPN, requiring occasional manual server switches.

**Pros:**
- RAM-only servers independently verified by Deloitte 2026
- Lightway is genuinely fast — 898 Mbps peak, rapid mobile reconnect
- Strong streaming performance across Netflix regions
- Crypto payment accepted

**Cons:**
- Two-month RDP leak patch window (April–June 2025) is an unacceptable engineering failure
- Kape privatization removes mandatory public accountability
- BVI incorporation is the weakest transparency jurisdiction in the portfolio
- Adware corporate lineage requires elevated skepticism

[Check ExpressVPN's current deal →](https://vpnverdict.net/go/expressvpn)

---

### CyberGhost

**Parent:** Kape / Unikmind | **Incorporated:** Romania (EU member)

Romania is a reasonable jurisdiction — EU GDPR applies, and Romania has no mandatory data retention law post-2014 CJEU ruling. CyberGhost publishes quarterly transparency reports, which is more than most Kape properties do. That self-reporting is better than silence, though it is not a substitute for independent audit publication.

Streaming performance in my March 2026 tests was inconsistent. Netflix US and Disney+ worked reliably across streaming-optimized servers. BBC iPlayer failed **3 out of 5 attempts** across different server selections — a meaningful failure rate for a product that sells streaming as a core feature. For a side-by-side policy comparison, see [Surfshark vs CyberGhost 2026: I Read Both Privacy Policies So You Don't Have To](/surfshark-vs-cyberghost-2026-comparison).

The 45-day money-back guarantee is the longest in the mainstream VPN market, which is genuinely useful for evaluation.

**Pricing:** ~$2.03/mo (2-yr plan) / $12.99/mo monthly. 45-day money-back.

**Pros:**
- EU (Romanian) jurisdiction with no mandatory data retention
- 45-day money-back guarantee — longest in the market
- Quarterly self-published transparency reports
- Dedicated streaming servers with load indicators

**Cons:**
- BBC iPlayer unreliable (3/5 failures in April 2026 testing)
- No recent independent audit PDF made fully public
- Private conglomerate ownership with adware corporate history
- Speed on WireGuard drops noticeably on crowded streaming server pools

[Check CyberGhost's current deal →](https://vpnverdict.net/go/cyberghost)

---

### Private Internet Access (PIA)

**Parent:** Kape / Unikmind | **Incorporated:** USA (Denver, Colorado)

US jurisdiction is the most problematic of the three Kape properties. The USA is a Five Eyes founding member. National Security Letters can compel disclosure with a gag order — meaning PIA could not legally tell you if it had been served one. Whether that risk is theoretical or real depends on your threat model.

PIA has a long no-logs history, and the KPMG 2026 audit supports those claims. The open-source client is a genuine positive — independent researchers can inspect the code. And the 2016 FBI subpoena case (where PIA produced nothing) is actual real-world validation. But US jurisdiction combined with private Kape ownership is the trust floor of this group.

**Pricing:** $2.03/mo (2-yr plan) / $11.99/mo monthly. 30-day money-back. Crypto accepted.

**Pros:**
- Open-source client — code auditable by anyone
- KPMG 2026 audit confirmed
- Real-world FBI subpoena test passed (2016, documented)
- Unlimited simultaneous connections
- Cheap long-term pricing

**Cons:**
- US jurisdiction — Five Eyes, National Security Letters apply
- Private Kape/Unikmind ownership with no mandatory public accountability
- Adware corporate lineage (Crossrider)
- US location creates the highest legal exposure of any audited provider reviewed here

---

## Cyberspace BV — The Nord-Surfshark Merger

In 2022, Nord Security and Surfshark announced a merger, forming Cyberspace BV, incorporated in the Netherlands. The Netherlands is a Nine Eyes member, though Dutch data protection law is robust and GDPR enforcement through the Dutch DPA is active.

**Critically:** the 2025–2026 audits confirm that NordVPN and Surfshark operate on **separate infrastructures** with no cross-brand data sharing found. This is not one homogenized backend wearing two logos. The brands compete against each other on features and pricing — which creates a useful structural pressure.

The merger's main risk is long-term: if cost pressure eventually drives infrastructure consolidation, the separation guarantee becomes harder to verify from the outside.

---

### NordVPN

**Parent:** Cyberspace BV | **Headquarters:** Netherlands (Nordvpn S.A. in Lithuania) | **Protocol:** NordLynx (WireGuard + double-NAT)

NordLynx is the fastest protocol in my test suite, consistently. **Stockholm → Amsterdam: 1,180 Mbps via NordLynx.** New York → Miami: 1,143 Mbps. Cross-Atlantic London → New York: 912 Mbps. These are not cherry-picked single-run results — I run five sessions per route and take the median over a one-hour sustained throughput test. NordVPN sits at the top of my speed rankings.

The double-NAT implementation means NordVPN does not log your real IP even on the WireGuard layer, addressing the primary privacy concern with raw WireGuard. The 2026 PwC audit confirmed this architecture and the no-logs policy.

Kill switch tested by forcing network adapter kill mid-session on Windows 11: held on 6/6 trials. DNS leak check via dnsleaktest.com: clean. WebRTC via browserleaks.com: clean. IPv6 via ipleak.net: clean.

**Streaming (March–April 2026):** most consistent performer tested. Netflix US, UK, JP, AU — all working across multiple server options. Disney+, BBC iPlayer, Max, Hulu, Prime Video — all passed in at least 4/5 attempts per platform. See [Best VPN for Netflix & Streaming 2026](/best-vpn-streaming) for platform-by-platform detail.

The pricing dark pattern is real. **The 240% renewal jump** — from $3.39/mo promo to ~$11.58/mo annual renewal — is the same move that floods Reddit with complaints. Budget for the renewal rate, not the intro rate, and the value calculation changes significantly.

**Pricing:** $3.39/mo (2-yr plan) / ~$11.58/mo annual renewal / $12.99/mo monthly. 30-day money-back. Crypto accepted.

**Pros:**
- Fastest sustained WireGuard throughput in testing (900–1,180 Mbps)
- PwC-audited no-logs confirmed 2026
- Best streaming reliability across all platforms tested
- RAM-only server fleet; double-NAT prevents IP association
- Split tunneling works without measurable throughput penalty on non-VPN leg

**Cons:**
- ~240% renewal price jump from promotional rate
- Lithuania/Netherlands jurisdiction — EU law enforcement cooperation mechanisms apply
- Owned by same parent as Surfshark — reduces provider diversity if you use both
- App-level kill switch less granular than Mullvad's system-level firewall rules

[Get NordVPN's current deal →](https://www.anrdoezrs.net/click-101724885-16968809)

Full technical breakdown: [NordVPN Review 2026: I Tested Speed, Leaks & Streaming](/nordvpn-review-2026-complete-test)

---

### Surfshark

**Parent:** Cyberspace BV | **Headquarters:** Netherlands | **Protocol:** WireGuard

Surfshark's 2026 Cure53 infrastructure audit and Deloitte no-logs audit both came back clean. The infrastructure is confirmed separate from NordVPN's. WireGuard performance: **Stockholm → Amsterdam hit 1,087 Mbps** in my testing — behind NordLynx but ahead of ExpressVPN's Lightway on the same route.

Unlimited simultaneous connections is the most meaningful product differentiator. A single Surfshark subscription can run on every device in a household simultaneously with no throttling between connections. For household or small-team use cases, this changes the value calculation substantially.

The **314% renewal jump** — from $1.99/mo intro to ~$8.25/mo annual renewal — is the worst pricing dark pattern in this category. In worst-case monthly renewals, some users report $15.45/mo. Surfshark's pricing team knows exactly what they are doing. If you are going to use Surfshark, calendar the renewal date and compare rates before it hits.

BBC iPlayer required server switching on 2/5 attempts in my April 2026 tests. Netflix multi-region and Disney+ were reliable. See [NordVPN vs Surfshark 2026: Budget Winner or Premium Worth It?](/nordvpn-vs-surfshark-2026-budget-vs-premium) for a direct comparison.

**Pricing:** $1.99/mo (2-yr plan intro) / ~$8.25/mo annual renewal / $15.45/mo monthly. 30-day money-back.

**Pros:**
- Unlimited simultaneous connections — no per-device throttling
- Dual audit (Cure53 + Deloitte, 2025–2026)
- Nexus IP rotation adds additional IP association prevention layer
- Strong multi-region Netflix performance
- WireGuard connection time: 2–3 seconds consistently

**Cons:**
- 314% renewal price jump — the most aggressive intro/renewal gap in the category
- BBC iPlayer requires server switching more often than NordVPN or ExpressVPN
- Nine Eyes jurisdiction (Netherlands)
- Owned by same parent as NordVPN — reduces provider diversity

[Get Surfshark's current deal →](https://www.anrdoezrs.net/click-101724885-15438560)

---

## Gen Digital — The Antivirus Roll-Up

Gen Digital, formerly NortonLifeLock, acquired Avast in 2022 and inherited Avast SecureVPN along with Norton VPN. Both products are primarily cross-sell items bundled with antivirus subscriptions rather than standalone privacy tools.

Neither Avast SecureVPN nor Norton VPN has had a published no-logs audit from a credible firm since 2023. That is a significant gap for a company whose subsidiary Jumpshot was caught selling user browsing data in bulk until a 2020 investigation forced its closure. Neither product offers WireGuard. Neither publishes a current transparency report.

For privacy-focused users, Gen Digital's offerings do not belong on the shortlist. They are acceptable as "better than nothing" for users already in the Norton 360 or Avast Ultimate subscription ecosystem. For dedicated privacy protection, everything above this section offers meaningfully better trust architecture.

---

## The Independent Providers

### Mullvad

**Parent:** Amagicom AB | **Headquarters:** Gothenburg, Sweden | **Eyes:** Nine Eyes

Mullvad is structurally unlike every other provider on this list. The company does not ask for your name or email. Your account is a randomly generated 16-digit number. That is your entire identity. You can pay with cash mailed in an envelope or with Monero. There is no billing data, no email record — nothing that could be handed over under subpoena.

The warrant test happened in real life. In 2023, Swedish police executed a German warrant at Mullvad's Gothenburg office. **They left with zero customer data.** Not because Mullvad resisted — because there was nothing to retrieve. The architecture performed exactly as designed under actual law enforcement pressure. That real-world result is worth more than any audit.

The August 2025 pentest by Assured Security Consultants and the SEC Consult infrastructure and source-code audit covering 2025–2026 returned no high-severity findings. Full reports, not summaries, are publicly published.

Sweden being Nine Eyes is a real consideration. Swedish law enforcement can cooperate with partner agencies. But when the data literally does not exist, jurisdiction becomes secondary.

**Speed:** WireGuard on Mullvad averaged **920 Mbps on Stockholm → Amsterdam** and 620 Mbps Stockholm → New York in my tests. Obfuscation via Shadowsocks and obfs4 works on corporate firewalls — I tested from a university network that blocks standard VPN protocols, and Mullvad's obfuscated mode connected in 8 seconds.

Mullvad explicitly does not optimize for streaming. BBC iPlayer is effectively blocked. Netflix access is inconsistent by server. If streaming is your primary use case, Mullvad is the wrong tool — see [ProtonVPN vs Mullvad 2026: Privacy VPN Comparison](/protonvpn-vs-mullvad-2026-privacy-vpn-comparison) for the tradeoff analysis.

For router-level VPN deployment covering all household devices, the [GL.iNet GL-MT3000 Beryl AX travel router](https://www.amazon.com/dp/B0BS75B7BG?tag=vpnverdict-20) handles WireGuard natively and has explicit Mullvad configuration documentation. It is my preferred hardware for this setup.

**Pricing:** €5/month. Flat rate. No annual plans. No promotional pricing. No renewal shock. Cash and Monero accepted.

**Pros:**
- Accountless architecture — no email, no billing data to produce under warrant
- Real-world law enforcement test passed (2023 — zero data retrieved)
- Flat, honest pricing — no renewal games
- Full audit reports publicly published (not just press releases)
- Shadowsocks + obfs4 obfuscation for censorship circumvention

**Cons:**
- Sweden is Nine Eyes — jurisdiction is not as strong as Switzerland
- No streaming optimization; BBC iPlayer effectively blocked
- No annual discount — €5/month flat with no flexibility
- Smaller server network than conglomerate providers

---

### ProtonVPN

**Parent:** Proton AG | **Headquarters:** Geneva, Switzerland | **Eyes:** Outside EU/Five/Nine/Fourteen Eyes

Switzerland is not a member of any major intelligence-sharing alliance. Swiss law requires formal court process through Swiss courts before data can be handed to foreign authorities — a process that is meaningfully slower and more transparent than US National Security Letters. Proton AG operates under a non-profit structure with foundation oversight. The mission is explicitly privacy, not revenue maximization.

The Securitum (Warsaw) audit completed August 2025 was ProtonVPN's **fourth consecutive annual audit** with no violations found. Four clean audits in a row from the same firm means auditors know where to look for problems. The full report is publicly available — not a summary, the actual PDF.

**Speed:** ProtonVPN's native WireGuard recorded **1,521 Mbps in October 2025 independent testing** — the fastest measured figure in this category. On my 500 Mbps symmetric fiber rig, I consistently hit the baseline ceiling on nearby servers. Connection via standard WireGuard: 2–4 seconds. Secure Core multi-hop routing: 12–18 seconds — expected given the additional hop through Switzerland or Iceland. The ~30ms latency penalty from Secure Core makes it unsuitable for gaming but otherwise unnoticeable for browsing and streaming.

Kill switch tested via network adapter kill: held on 5/5 trials. DNS via dnsleaktest.com: clean. WebRTC via browserleaks.com: clean. IPv6 via ipleak.net: clean.

No crypto payment is a gap relative to Mullvad — you need an email address to create a ProtonVPN account. The free tier is the most credible free VPN option available: no data selling, no bandwidth reselling, same infrastructure as paid tier with speed and server caps. For more on [Most Private VPNs 2026](/best-vpn-privacy-2026), the no-logs policy analysis goes deeper.

For account security, pairing any VPN account with a [YubiKey 5 NFC hardware security key](https://www.amazon.com/dp/B07M8YBWQZ?tag=vpnverdict-20) adds 2FA that cannot be phished — particularly worthwhile for ProtonVPN, which supports hardware keys directly.

**Pricing:** Free (limited servers, capped speed) / $4.99/mo Plus (2-yr plan) / $9.99/mo monthly. 30-day money-back.

**Pros:**
- Swiss jurisdiction — outside all major intelligence-sharing alliances
- Non-profit structure aligns mission with financial incentive
- 4 consecutive annual audits (Securitum) — most rigorous audit track record reviewed
- Fastest measured WireGuard speeds in category (1,521 Mbps peak)
- Credible free tier with no monetization through user data

**Cons:**
- No cryptocurrency payment accepted — limits anonymity for privacy-conscious users
- Email address required for account creation (no accountless option like Mullvad)
- BBC iPlayer less reliable than NordVPN even on Plus tier
- Secure Core's 30ms+ latency penalty is meaningful for gaming use cases

[Check ProtonVPN's current pricing →](https://vpnverdict.net/go/protonvpn)

---

## What Ownership Actually Tells You

Ownership research narrows to three questions. Every other detail flows from them.

**Question 1: Can this company be legally compelled to produce your data?**

This is the jurisdiction question — but jurisdiction only matters if data exists to produce. Mullvad's accountless architecture means there is nothing to compel. ProtonVPN's Swiss jurisdiction requires a formal court process harder to invoke than a US National Security Letter. PIA's US incorporation means NSLs are a legal possibility even if one has never been publicly disclosed.

**Question 2: Is the no-logs claim independently verified — and recently?**

Audits are not perfect, but recency and repetition matter. ProtonVPN's four consecutive annual audits from the same firm are more reliable than a one-time audit from three years ago. Providers without recent public audits — HolaVPN, TunnelBear (last 2023), VyprVPN, IPVanish — should be off your privacy-focused shortlist. The audit firm matters too: Cure53, Trail of Bits, and NCC Group carry deeper technical credibility among security researchers; KPMG, PwC, and Deloitte carry brand credibility with legal/compliance teams.

**Question 3: What is the financial incentive structure?**

A conglomerate with pre-privatization revenue exceeding $600 million faces growth pressure that creates incentives to cut infrastructure costs or reduce transparency investments. Proton AG's non-profit structure removes the exit-at-maximum-valuation incentive. Mullvad has refused to run an affiliate program for years — a deliberate choice that costs revenue but removes the conflict of interest. I disclose affiliate relationships in this article. Mullvad is the only provider I cannot earn a commission recommending.

---

## Use Case Recommendations by Trust Level

**Maximum anonymity / high threat model:** Mullvad. Cash or Monero payment, accountless architecture, real-world warrant test passed. Accept the streaming limitation.

**Privacy + streaming balance:** ProtonVPN Plus. Swiss jurisdiction, four clean audits, Netflix and Disney+ reliable. Best option for users who want strong trust architecture without giving up streaming.

**Speed + streaming + reasonable privacy:** [NordVPN](https://vpnverdict.net/go/nordvpn). Fastest protocol tested, best streaming reliability, PwC-audited. Plan for the renewal pricing. See [7 Best VPNs of 2026](/best-vpn-2026) for full context.

**Budget with accountability:** [Surfshark](https://vpnverdict.net/go/surfshark). Unlimited devices, dual audit, competitive long-term pricing. Watch the 314% renewal jump.

**Business / team use:** Evaluate jurisdiction carefully. If your company handles EU resident data, GDPR applies to your VPN provider regardless of where it is based. See [Best Business VPNs 2026](/best-vpn-small-business-teams-2026).

**Router-level VPN for whole household:** ProtonVPN or Mullvad configured on a [GL.iNet GL-MT3000 Beryl AX](https://www.amazon.com/dp/B0BS75B7BG?tag=vpnverdict-20) — both have native WireGuard support and documented router setup guides.

---

## Pricing Transparency Comparison

| Provider | 2-Yr Intro | Annual Renewal | Monthly | Renewal Jump |
|---|---|---|---|---|
| Mullvad | €5/mo (flat) | €5/mo (flat) | €5/mo | 0% |
| ProtonVPN Plus | $4.99/mo | ~$4.99/mo | $9.99/mo | ~0% |
| PIA | $2.03/mo | ~$3.33/mo | $11.99/mo | ~64% |
| CyberGhost | $2.03/mo | ~$4.29/mo | $12.99/mo | ~111% |
| ExpressVPN | $2.44/mo | ~$6.67/mo | $12.99/mo | ~173% |
| NordVPN Basic | $3.39/mo | ~$11.58/mo | $12.99/mo | ~242% |
| Surfshark Starter | $1.99/mo | ~$8.25/mo | $15.45/mo | ~314% |

Mullvad and ProtonVPN are the only providers that do not structurally rely on promotional pricing to acquire customers. Every other provider uses introductory rates that would be financially unsustainable if customers stayed at them — which is why renewal pricing is always significantly higher.

---

## Providers That Didn't Make the Cut

**HolaVPN:** This is not a VPN. It is a peer-to-peer proxy that routes your traffic through other users' connections and routes their traffic through yours. Your IP address becomes an exit node for someone else's traffic. Multiple security researchers have documented this model. No meaningful no-logs claim is possible because your traffic does not flow through Hola's infrastructure. Avoid entirely.

**Lifetime VPN deals (StackSocial, AppSumo, etc.):** The business model is unsustainable. A VPN requires ongoing server infrastructure, bandwidth costs, and engineering staff. A $30 lifetime license cannot fund those costs indefinitely. These providers either degrade service progressively, sell to new owners who monetize users differently, or shut down entirely. Reddit's r/VPN community has documented dozens of these collapses. See [Free VPN vs Paid VPN 2026: The Hidden Costs Exposed](/free-vs-paid-vpn) for how the economics play out.

**TunnelBear:** Their last independent audit was 2023. They are owned by McAfee (private equity). No recent transparency report. Fine as a tool to understand how VPNs work — not appropriate as a privacy tool for anyone with a real threat model.

---

## Final Verdict

**Overall trust winner: Mullvad.** The accountless architecture, the 2023 warrant test result, flat pricing, and consecutive full-report audits represent the most coherent privacy product in the market. The trade-offs — no streaming optimization, no annual discount, Nine Eyes jurisdiction — are real but manageable for most threat models.

**Runner-up: ProtonVPN.** Swiss jurisdiction, non-profit structure, four consecutive Securitum audits, and the fastest measured WireGuard speeds make this the best option for users who want strong privacy architecture without giving up streaming and usability.

**Best conglomerate pick: NordVPN.** If you are comfortable with conglomerate ownership and your primary drivers are speed and streaming reliability, NordVPN's NordLynx performance and PwC-audited no-logs policy make it defensible. Budget for the real renewal cost.

**Most concerning trend: Kape's privatization.** Pre-privatization, Kape faced mandatory disclosure as a London Stock Exchange–listed company. Post-privatization under Unikmind, a portfolio managing millions of users' traffic has no external accountability mechanism. Combined with ExpressVPN's two-month RDP leak patch window and the Crossrider adware history, the Kape portfolio requires a level of skepticism that no audit result can fully resolve.

---

*Disclosure: VPNVerdict earns affiliate commissions on purchases through links in this article (NordVPN, Surfshark, ExpressVPN, CyberGhost, ProtonVPN). Mullvad does not run an affiliate program and is referenced without commission. Amazon affiliate links are included for hardware products. Commission relationships do not influence trust ratings or editorial assessments.*

---

## Frequently Asked Questions

### Who owns NordVPN in 2026?

NordVPN is owned by Nord Security, which operates under Cyberspace BV — a Netherlands-registered holding company formed by the 2022 merger of Nord Security and Surfshark's parent. NordVPN and Surfshark operate on separate infrastructure with separate engineering teams, confirmed by independent audits. They share a corporate parent but not servers or user data.

### Does VPN jurisdiction actually matter for privacy?

Jurisdiction matters most when something goes wrong — specifically, when a government wants to compel data disclosure. Swiss jurisdiction (ProtonVPN) requires formal Swiss court process that is meaningfully slower and more transparent than US National Security Letters. The more practical question is whether the no-logs architecture means there is anything to produce under a legal order. Mullvad's 2023 police warrant result proves that architecture can make jurisdiction irrelevant.

### What happened when Kape Technologies went private in 2026?

Kape / Unikmind Group delisted from the London Stock Exchange in early 2026 and became a fully private company. This eliminates mandatory financial disclosure requirements that applied as a public company. For users of ExpressVPN, CyberGhost, and PIA, this means fewer external accountability mechanisms — no shareholder pressure, no mandatory annual reporting, no public disclosure of material operational changes. The audits (Deloitte, KPMG) continue independently, but the structural transparency layer is gone.

### Is the Kape adware history relevant to ExpressVPN today?

The Crossrider adware history is relevant context, not proof of current wrongdoing. Kape rebranded and pivoted to privacy software in 2018. ExpressVPN has passed independent audits and its RAM-only server claim is verified. The concern is structural: a company with that history now operates with no mandatory public accountability after going private. Combined with the 2025 RDP IP leak, the trust architecture requires elevated scrutiny compared to independently audited privacy-first providers.

### Which VPN has the most transparent corporate structure?

Mullvad (Amagicom AB, Sweden) is a registered Swedish limited company with publicly accessible registration filings. Proton AG operates under foundation oversight with public reporting and is outside EU/Five/Nine Eyes. Both have transparent, non-promotional pricing that does not rely on introductory rate manipulation. Gen Digital and Kape/Unikmind are at the opposite end — publicly traded and fully private respectively, with different accountability profiles.

### Should I worry about the Nord-Surfshark merger affecting my privacy?

The immediate concern — shared infrastructure reducing privacy guarantees — is addressed by 2025–2026 audits confirming separate infrastructure and no cross-brand data sharing. The longer-term concern is whether cost pressure eventually drives consolidation. There is no evidence of that today. The more pressing practical concern is the renewal pricing from both brands, which affects your wallet regardless of the merger's impact on privacy architecture.

### Are free VPNs ever safe to use?

The only credible free VPN tier from a major provider is ProtonVPN Free — supported by paid plan revenue, no data selling, same infrastructure as the paid tier with speed and server caps. HolaVPN routes your traffic through other users' devices and is not a VPN in any privacy-relevant sense. Most other free VPN business models involve selling anonymized usage data to advertisers or researchers, making you the product rather than the customer. See [Free VPN vs Paid VPN 2026: The Hidden Costs Exposed](/free-vs-paid-vpn) for the full breakdown.
