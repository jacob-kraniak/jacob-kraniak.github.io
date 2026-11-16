---
title: "Build log — Omada syslog decoders and a Cronitor relay"
description: "Controller syslog decoders merged into the public repo on 2026-11-01. A Cronitor relay for GitHub Actions landed on 2026-11-08."
pubDate: 2026-11-08
project: datacenter-build
tags: [omada, wazuh, github-actions]
draft: false
---
<!-- seed draft: review before merge -->

Two small things from the public repo. Neither one finishes Phase 2.

Omada syslog was already arriving at Wazuh by the 2026-10-04 note. Access-point traffic is decoded and kept quiet. A wireless-IDS rule is blocked on the current EAP225 hardware. That limit was checked on 2026-10-06. The roadmap says those APs have to be replaced before the rule is useful.

On 2026-11-01 two pulls merged. [#43](https://github.com/jacob-kraniak/home-network-security/pull/43) adds the Omada controller 6.3 syslog decoders and rules to the repo. [#54](https://github.com/jacob-kraniak/home-network-security/pull/54) links the access-point traffic decoder from the config docs. The syslog note still says copying the latest rules onto the live manager was pending. Merged in git is not the same as running on the box.

The 2026-11-02 roadmap line also says the Wazuh upgrade, issue [#44](https://github.com/jacob-kraniak/home-network-security/issues/44), had not been started.

Separately, [commit 1366e39](https://github.com/jacob-kraniak/home-network-security/commit/1366e3986fe0864458836e3fa0dc2f9ac3d2d4a5) on 2026-11-08 adds a Cronitor relay for GitHub Actions. It reports workflow runs. It is not a detection rule. The same relay shows up that day on the certification tracker and the research repo.

## Sources

- [wazuh-omada-syslog.md](https://github.com/jacob-kraniak/home-network-security/blob/main/docs/services/wazuh-omada-syslog.md) — onboarded 2026-10-04, EAP225 limit 2026-10-06
- [PR #43](https://github.com/jacob-kraniak/home-network-security/pull/43) — merged 2026-11-01
- [PR #54](https://github.com/jacob-kraniak/home-network-security/pull/54) — merged 2026-11-01
- [ROADMAP.md](https://github.com/jacob-kraniak/home-network-security/blob/main/docs/ROADMAP.md) — updated 2026-11-02
- [CronitorRelay.yml](https://github.com/jacob-kraniak/home-network-security/blob/main/.github/workflows/CronitorRelay.yml)
- [commit 1366e39](https://github.com/jacob-kraniak/home-network-security/commit/1366e3986fe0864458836e3fa0dc2f9ac3d2d4a5) — 2026-11-08
