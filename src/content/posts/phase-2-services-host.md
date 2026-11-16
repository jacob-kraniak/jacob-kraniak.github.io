---
title: "Phase 2 — one-box services host"
description: "Proxmox on a ThinkCentre Tiny. Wazuh, Portainer, and on-prem NetBox. A full disk took Wazuh down. CT 101 was grown before NetBox moved in."
pubDate: 2026-09-21
project: datacenter-build
tags: [phase-2, proxmox, wazuh, netbox]
draft: false
---
<!-- seed draft: review before merge -->

Phase 2 is in progress. It is the services host on one small PC. It is not a SOC, and it is not a router replacement. Off-LAN access and OPNsense stay in Phase 3.

The machine is a Lenovo ThinkCentre M715q Tiny running Proxmox VE. Two containers do the work. CT 100 runs Wazuh. CT 101 runs Portainer, and that is where the other stacks go. There is no separate repo for those containers. The issues stay in [home-network-security](https://github.com/jacob-kraniak/home-network-security).

The 2026-08-29 baseline is an outage note. The vulnerability feed filled the Wazuh container disk and the manager was down. It came back after that disk was enlarged. That is a repair, not a finished SIEM.

CT 101 was the next limit. The 2026-09-16 checkpoint says the container was grown on 2026-09-15, and that the choice was to grow CT 101 rather than add another one. NetBox Community was up on that same container the next day. The disk was enlarged before NetBox moved in.

On 2026-09-21 the docs flip the source of truth. On-prem NetBox is authoritative for IPAM. The cloud copy is an archive, and reconcile of that archive is still open. Issue [#28](https://github.com/jacob-kraniak/home-network-security/issues/28) closed on 2026-09-22 as the platform deploy. Closing it did not close Phase 2.

The Omada controller left the vendor cloud for CT 101 on 2026-09-14. The gateway, switch, and APs stayed the same hardware. Admin interfaces are not published on the WAN.

## Sources

- [ROADMAP.md](https://github.com/jacob-kraniak/home-network-security/blob/main/docs/ROADMAP.md) — Phase 2 in progress, controller move, Phase 3 later
- [phase-2 baseline, 2026-08-29](https://github.com/jacob-kraniak/home-network-security/blob/main/docs/phases/phase-2-baseline-2026-08-29.md) — disk-full Wazuh outage
- [phase-2 checkpoint, 2026-09-16](https://github.com/jacob-kraniak/home-network-security/blob/main/docs/phases/phase-2-checkpoint-2026-09-16.md) — CT 101 grown 2026-09-15, NetBox up 2026-09-16
- [phase-2 close definition](https://github.com/jacob-kraniak/home-network-security/blob/main/docs/phases/phase-2-close-linkedin.md) — services host, not a SOC, not a router replacement
- [issue #28](https://github.com/jacob-kraniak/home-network-security/issues/28) — NetBox deploy, closed 2026-09-22
