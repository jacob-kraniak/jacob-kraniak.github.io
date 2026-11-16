---
title: "Phase 1 — Omada SDN foundation"
description: "June 2026 network build. Omada gateway, switch, and APs, with five VLAN roles. The services host came later."
pubDate: 2026-06-14
project: datacenter-build
tags: [phase-1, omada]
draft: false
---
<!-- seed draft: review before merge -->

Phase 1 is the network, not the Proxmox box. The roadmap marks it complete in June 2026.

The hardware is a TP-Link Omada SDN: an ER605 V2 gateway, an SG2008P switch, and EAP225 coverage. Tagging is 802.1Q at the gateway. The VLAN roles are management, trusted, IoT, guest, and lab.

The phase note also records the rack move. Two racks: a network stack, and a separate place for the server hosts. NetBox objects (site, racks, device roles) were started in parallel. That copy was still in the cloud. Moving the inventory on-prem is Phase 2 work.

This is a segmented home network. It is not a finished security program.

## Sources

- [ROADMAP.md](https://github.com/jacob-kraniak/home-network-security/blob/main/docs/ROADMAP.md) — Phase 1, June 2026, complete
- [phase-1-completion.md](https://github.com/jacob-kraniak/home-network-security/blob/main/docs/phases/phase-1-completion.md) — rack move, last updated 2026-06-14
- [README](https://github.com/jacob-kraniak/home-network-security/blob/main/README.md) — gateway, switch, and AP models
