# jacob-kraniak.github.io

Personal site for Jacob Kraniak. The layout is Astro with the hybrid lab-notes theme (adapted from [Astrofy](https://github.com/manuelernestog/astrofy), MIT — see `LICENSE`).

A push to `main` rebuilds the site and deploys it to GitHub Pages. The deploy usually finishes in a minute or two.

## Edit content

Copy lives in plain files under `src/data/` and `src/content/posts/`. You do not need a local checkout.

On GitHub, press `.` to open github.dev, edit the file, and commit to `main`. The web editor works too: open the file, click the pencil, and commit.

| What you want to change | File |
| --- | --- |
| Name, nav labels, sidebar status, footer social links | `src/data/site.yml` |
| Home intro, quotes, featured cards, stack | `src/data/home.yml` |
| Datacenter Build initiative | `src/data/datacenter-build.yml` |
| Build log posts | `src/content/posts/*.md` |
| Build log index wording | `src/data/posts.yml` |
| Other repos (`/projects`) | `src/data/repos.yml` |
| Certifications page intro and roadmap notes | `src/data/certs.yml` |
| Certification rows, Credly links, what's next | `src/data/certs.json` |
| Long Island EVs | `src/data/li-evs.yml` |
| Research and bug bounty | `src/data/research.yml` |
| Open source | `src/data/oss.yml` |
| CV | `src/data/cv.yml` |
| Contact | `src/data/contact.yml` |

Lines that contain `[PLACEHOLDER` are still waiting on copy. They show up amber. Replace the whole placeholder, brackets included. In YAML, quote any value that starts with `[` or contains a colon.

On the Long Island EVs page, write a link as `[label](https://example.com)`.

`docs/CONTENT-OUTLINE.md` is an internal outline. It is not rendered on the site.

The public site URL is `url` in `src/data/site.yml`. The sitemap uses that value.

Components in `src/components` and `src/layouts` are the layout. Leave them alone unless the design itself is changing.

### Add a build-log post

Create `src/content/posts/my-note.md`. Markdown only, not MDX. Example:

```markdown
---
title: Short title
description: One sentence for the index and the RSS feed.
pubDate: 2026-11-16
project: datacenter-build
tags: [phase-2, wazuh]
draft: true
---

The note. Link a repo or PR inline when you have one.
```

`project` and each `tag` get their own static page (`/posts/project/datacenter-build`, `/posts/tag/wazuh`). Those routes are generated at build time. They are not `?tag=` query strings, so they work on GitHub Pages.

`draft: true` is left out of `npm run build`, the RSS feed, and the initiative's recent notes. `npm run dev` still shows it, so you can read it locally before flipping `draft` to `false` or deleting the line.

The feed is `/rss.xml`.

### Datacenter Build (`src/data/datacenter-build.yml`)

Phase blurbs, the three threads (repo, CT 101 apps, project board), and the scope line. Recent notes are not pasted here. The page lists posts whose `project` is `datacenter-build`.

### Other repos (`src/data/repos.yml`)

`/projects` is this list. Each item has `status`: `active`, `quiet`, or `idea`. `home-network-security` is not in the list. It is the initiative. The book-of-secret-knowledge fork is on the open-source page.

Home `featured` entries are `{ kind: initiative, id }` or `{ kind: repo, id }`. `kind: repo` must match an `id` in `repos.yml`.

### Certifications (`src/data/certs.json`)

- `profile` — Credly profile URL.
- `next` — upcoming certs, in order. The home page, the certs page, and the sidebar all read this list.
- `certs` — one object per credential: `name`, `short`, `issuer`, `status` (`active` or `expired`), `issued` (`YYYY-MM-DD`), `expires` (`YYYY-MM-DD` or `null`), `img` (a file in `public/`), `credly`, `tracker`.

Badge images live in `public/` next to `avatar.jpg`.

## Preview locally

Node.js 18.20.8 or newer (22 is a good choice).

```bash
npm ci
npm run dev
```

`npm run dev` starts hot reload at <http://localhost:4321>. `npm run build` writes the static site to `dist/`.

If a push fails in the Actions tab, the usual cause is a YAML typo: bad indentation, or an unquoted `[` at the start of a value.
