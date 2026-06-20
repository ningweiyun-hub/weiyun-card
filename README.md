# Wei-Yun Neve Ning — personal site

Personal portfolio / card site for **Wei-Yun (Neve) Ning**, product designer,
built with the **NEVE** design system.

No build step: a single self-contained `index.html` loads React + Babel from CDN
and renders the app inline. Published content lives in `src/published.js`; design
tokens and the component bundle live under `src/neve/`.

## Hosting (GitHub Pages)

Served as a static site. All asset paths are relative, so it works from a project
subpath such as `https://ningweiyun-hub.github.io/weiyun-card/`.

To enable: repo **Settings → Pages → Build and deployment → Deploy from a branch**,
branch `main`, folder `/ (root)`.

## Note

This is the **public build** — the content-editing admin panel is intentionally
not included.
