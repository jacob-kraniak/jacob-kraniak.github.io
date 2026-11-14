# jacob-kraniak.github.io

Personal site for Jacob Kraniak. The layout is Astro with the hybrid lab-notes theme (adapted from [Astrofy](https://github.com/manuelernestog/astrofy), MIT — see `LICENSE`).

A push to `main` rebuilds the site and deploys it to GitHub Pages. The deploy usually finishes in a minute or two.

## Edit content

Copy lives in plain files under `src/data/`. You do not need a local checkout.

On GitHub, press `.` to open github.dev, edit the file, and commit to `main`. The web editor works too: open the file, click the pencil, and commit.

| What you want to change | File |
| --- | --- |
| Name, nav labels, sidebar status, footer social links | `src/data/site.yml` |
| Home intro, quotes, featured projects, stack | `src/data/home.yml` |
| Projects page intro | `src/data/projects.yml` |
| Project cards | `src/data/projects.json` |
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

### Project cards (`src/data/projects.json`)

A JSON array, one object per project:

- `id` — short id. `featured` in `home.yml` chooses which cards appear on the home page, in that order.
- `repo` — GitHub repository name under your user, or `null` when there is no public repo yet.
- `title`, `tag`, `status`, `summary` — the card.
- `notes` — bullets on the projects page.
- `next` — the "next:" line.
- `stack` — chips.
- `placeholder` — `true` keeps the summary amber.

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
