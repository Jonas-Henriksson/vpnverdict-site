---
title: VPN Speed Test Results 2026 - Which VPN Is Fastest?
description: Comprehensive VPN speed comparison. Test results for NordVPN, ExpressVPN, Surfshark, CyberGhost, and ProtonVPN with real-world performance data and analysis.
date: 2026-03-22
category: speed
author: "Marcus Reid"
keywords: [VPN speed test, fastest VPN, VPN speed comparison, VPN performance 2026]
featured: false
score: 9.0
badge: tested
verdict: "ExpressVPN dominates speed tests with 92.5% average baseline retention. NordVPN close behind with excellent consistency."
winner: ExpressVPN
vpnRatings:
  expressvpn:
    name: ExpressVPN
    rating: 4.8
    pros: [Fastest speeds consistently, Lightway protocol, Excellent performance, 4K capable, Gaming friendly]
    cons: [Premium pricing, Smaller server network, Limited features]
    affiliateLink: https://vpnverdict.net/go/expressvpn
  nordvpn:
    name: NordVPN
    rating: 4.6
    pros: [Consistent speeds, Good optimization, Large network, Stable performance, Excellent support]
    cons: [Slightly slower than ExpressVPN, Occasional throttling]
    affiliateLink: https://www.awin1.com/cread.php?awinmid=15132&awinaffid=2845746&clickref=vpn-speed-comparison
  surfshark:
    name: Surfshark
    rating: 4.5
    pros: [Good speed optimization, Reasonable pricing, Modern architecture, Excellent for browsing]
    cons: [Variable speeds, Performance depends on server load]
    affiliateLink: https://vpnverdict.net/go/surfshark
affiliateLinks:
  - vpn: ExpressVPN
    url: https://vpnverdict.net/go/expressvpn
  - vpn: NordVPN
    url: https://www.awin1.com/cread.php?awinmid=15132&awinaffid=2845746&clickref=vpn-speed-comparison
  - vpn: Surfshark
    url: https://vpnverdict.net/go/surfshark
ogImage: "/og/vpn-speed-comparison.jpg"
---

## How We Tested

Speed tests are the easiest part of a VPN review to fake. Anyone can plug numbers into a table and call it "comprehensive." So before the numbers, here's what we actually did — and what we couldn't.

We ran every VPN on the same machine, wired to a gigabit fiber connection, over two weeks in March 2026. We used the official apps on Windows 11 and macOS 15, tested at peak (roughly 20:00–22:00 local) and off-peak (03:00–05:00), and ran each server multiple times rather than cherry-picking a single spike. Latency came from ICMP pings to the far endpoint, not the VPN gateway. Throughput came from a mix of Speedtest.net (multiple servers, not just the default) and bulk file transfers from a known-fast CDN, because relying on a single Ookla result is how you end up with headline numbers that don't survive contact with reality.

What we did **not** do: rent a datacenter, run captive fiber to five continents, or claim statistically significant sample sizes we can't back up. These are residential gigabit results from one location. Your mileage will vary — possibly by a lot — depending on your ISP, last-mile congestion, and which city's POP your traffic lands in.

### Protocols

Each VPN was tested on its default modern protocol (WireGuard or WireGuard-derivative), because that's what actually ships to users now. Where the vendor has a proprietary variant — Lightway for ExpressVPN, NordLynx for NordVPN — we used that. OpenVPN results are included only for CyberGhost, where it's still the most common default some users end up on.

A note worth internalizing: WireGuard is generally faster than OpenVPN because of its smaller cryptographic footprint and kernel-level implementation on Linux, not because of any marketing magic. IKEv2 is competitive on mobile and handles reconnections well but is a poor choice if you're worried about passive fingerprinting. OpenVPN over TCP is the slowest option you can pick and should be reserved for restrictive networks that block UDP.

## Aggregate Results

Speeds below are percentages of our 1 Gbps baseline, averaged across all test runs on a given provider's network. Treat these as a rough ranking, not a leaderboard. The gap between the top three is smaller than any single day's variance on most servers.

| Provider | Rough % of baseline (nearby server) | Consistency |
|---|---|---|
| ExpressVPN (Lightway) | ~90% | Very consistent |
| NordVPN (NordLynx) | ~88% | Very consistent |
| Surfshark (WireGuard) | ~85% | Moderate variance |
| ProtonVPN (WireGuard) | ~80% | Moderate variance |
| CyberGhost (WireGuard) | ~75% | Noticeable variance |

If you're seeing review sites that list precise numbers like "92.5% retention" or rank providers to the decimal, treat that as a red flag. VPN throughput depends on which specific server you land on, how loaded it is, the route your ISP takes to reach it, and whether the provider's backend is having a bad Tuesday. Anyone who tells you differently is selling something — quite possibly an affiliate link.

## Distance Testing

Latency is physics. Every ~1,000 miles of fiber adds roughly 8 ms of one-way latency just from the speed of light in glass, and real routes are never straight lines. No VPN can beat this. What a VPN can do is avoid *adding* unnecessary overhead on top of it.

### Nearby (same region)

On local servers — a few hundred miles at most — all five providers delivered speeds high enough that you won't notice the VPN is there. ExpressVPN and NordVPN were the tightest grouping, landing in the high 800s of Mbps. Surfshark was a hair behind. ProtonVPN and CyberGhost were mid-pack. Latency on all of them stayed under 20 ms, which is functionally irrelevant for anything short of competitive shooters.

### Mid-range (transatlantic)

This is where separation starts. All providers lost some throughput crossing the Atlantic, and real-time latency climbed into the 40–70 ms range. ExpressVPN's Lightway and NordVPN's NordLynx held up best, but the difference between them and Surfshark was small enough that you'd struggle to notice in practice. CyberGhost's European routing was uneven — one Frankfurt server gave us solid numbers, another in the same city was clearly congested.

### Long-haul (Singapore, Australia)

At extreme distances, throughput drops substantially across the board, and latency makes interactive applications unpleasant regardless of provider. If you're routinely connecting from the US to Singapore and expecting fast performance, no consumer VPN is going to save you — your problem is the routing, not the encryption. ExpressVPN maintained the highest percentage of baseline here, but we're talking about the difference between "usable for downloads" and "slightly more usable for downloads." Gaming at that distance is miserable on any of them.

## Protocol Notes

**Lightway (ExpressVPN)** is a wolfSSL-based protocol ExpressVPN open-sourced in 2021. It's genuinely fast and connects quickly. The catch: it's proprietary in the sense that ExpressVPN controls the roadmap, and it hasn't had the years of public cryptographic scrutiny WireGuard has. For most users this doesn't matter. For the paranoid, it should.

**NordLynx (NordVPN)** is WireGuard with a double-NAT system bolted on to address WireGuard's static-IP privacy issue. The performance cost of the NAT layer is small.

**WireGuard (Surfshark, ProtonVPN, CyberGhost)** is the modern baseline. If a provider doesn't support it in 2026, that's a red flag.

**OpenVPN** is still around, still works, still slower. Use it when you need to tunnel through a network that's actively blocking UDP.

**IKEv2** is fine on mobile for its reconnection behavior. It's not what you want on a desktop.

## Real-World Scenarios

Tables with 50-row throughput numbers are only useful if you translate them into "will this work for what I actually do."

**Web browsing**: All five are fine. Even ProtonVPN's slowest measured server was faster than any web page needs. If a provider is making browsing feel slow, the culprit is usually DNS resolution latency, not encryption overhead — worth checking with `dig` before blaming the VPN.

**1080p and 4K streaming**: Anything above ~25 Mbps handles 4K, and all five clear that bar on nearby servers. It gets dicier at long distance. We saw buffering on CyberGhost and occasional re-buffering on ProtonVPN when connecting from the US to servers in Australia, though neither was unusable. Netflix geo-unblocking is a separate question from speed and worth noting: results change month to month as streaming services iterate their detection, and any review claiming a VPN "unblocks everything" is one algorithm update away from being wrong.

**Gaming**: Latency matters more than throughput. On regional servers ExpressVPN and NordVPN felt best, but honestly, if you're serious about competitive gaming, you shouldn't be running a VPN at all. The latency cost is never zero.

**Large downloads**: This is where the top three genuinely pull away from the bottom two, but unless you're moving tens of gigabytes regularly, the difference is a minute or two and not worth optimizing around.

## Consistency vs. Peak

Peak speed in a table is less useful than whether the VPN gives you the same speed twice in a row. NordVPN and ExpressVPN were the most predictable — we could connect to the same server eight hours apart and see similar numbers. Surfshark was close. CyberGhost swung meaningfully depending on which specific server we hit, which is a problem because their app often routes you to a "recommended" node you don't choose. ProtonVPN was variable on its standard tier but noticeably better on their Plus tier's premium servers, which tells you something about how server load actually drives these results.

## What Actually Matters — and the Parts Not In the Tables

Speed rankings are the part of a VPN review you can measure. They're also the part that matters least once you get above "good enough." If you're picking a VPN on throughput alone, you're probably picking wrong. Here's the context the speed numbers don't capture:

**ExpressVPN** is owned by Kape Technologies, which also owns CyberGhost, Private Internet Access, and Zenmate. Kape's predecessor company, Crossrider, had a history in ad-injection software that ExpressVPN's current leadership is not responsible for but which is worth knowing. Separately, ExpressVPN's former CIO Daniel Gericke was one of three ex-US intelligence contractors who settled with the DOJ in 2021 over work for the UAE's Project Raven hacking operation. ExpressVPN kept him. Their no-logs claims have been audited by PwC and their infrastructure runs on RAM-only servers, which means a server seizure yields nothing persistent — this is a meaningful technical commitment. Still, if your threat model includes "who owns this company and who do they hire," that context belongs in your decision.

**NordVPN** is based in Panama via Tefincom and merged with Surfshark's parent in 2022 — so two of the five providers here are technically under the same corporate umbrella, though they operate independently. Nord has had independent no-logs audits and runs RAM-only infrastructure. Their 2018 server breach at a third-party datacenter in Finland, which they disclosed in 2019, is still the most useful case study in how to read a VPN incident: embarrassing, but the design meant no user logs existed to leak.

**Surfshark** runs on WireGuard with modern infrastructure and is noticeably cheaper than the top two. The weakness: as a smaller operation (now under the Nord umbrella), their server network is leaner, and we saw more variance between individual servers than on NordVPN's network. Their Netherlands jurisdiction is EU-adjacent, which is neither particularly good nor bad, but "privacy-friendly jurisdiction" is mostly marketing — what matters is whether you can be compelled to log, and no jurisdiction makes that impossible if a court order shows up.

**CyberGhost** is the weakest of the five, and this is where we break from the affiliate-review convention. Kape-owned, Romania-based, acceptable speeds on a good day, variable on others. Their apps bury useful features behind "smart" defaults, their server-picker consistently suggested loaded servers during our testing, and the experience feels dated compared to the top three. There's nothing egregiously wrong, but there's no category where it actually wins, and "we review it because we get paid to" is not a reason to recommend it.

**ProtonVPN** has the most credible privacy story of the five. It's Swiss, built by the Proton Mail team, runs an open-source client, and publishes genuinely detailed transparency reports. Their "no-logs" claim is backed by a Swiss legal framework that has, in at least one well-known case, still resulted in logging at the government's request (the 2021 Climate activist case, though that was Proton Mail, not VPN) — which is why you should read warrant canaries with skepticism generally. They're not as fast as ExpressVPN or Nord on long-haul routes, and their free tier is slow by design to push you to paid. But for users whose actual threat model is "nation-state or legal adversary" rather than "Netflix geo-blocks," the privacy tradeoff is on their side, not ExpressVPN's.

## Bottom Line

If speed is the only thing you care about, ExpressVPN and NordVPN are interchangeable within the margin of error, and both are fast enough that you will never notice the encryption on anything short of long-haul transcontinental routes. Pick based on price and which app ecosystem you prefer.

If you care about the privacy story behind the speed numbers, ProtonVPN is the honest recommendation and always has been — even if it lost the throughput race in this review.

If you want a solid WireGuard implementation at a lower price, Surfshark is fine. CyberGhost is the one you can skip.

And a reminder that never gets old: the fastest VPN in the world is still slower than no VPN. If your threat model doesn't actually require one, the best speed optimization is to turn it off.
