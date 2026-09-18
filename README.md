# Amir Karami — CV / Portfolio (HTML5 + Printable)

A lightweight, static CV/portfolio website built with semantic HTML, modern CSS, and minimal JavaScript.

## Features

- Responsive, mobile-friendly layout
- Accessible semantic structure and keyboard-focus styles
- Print-first A4 stylesheet for professional browser **Print / Save as PDF** export
- `Download / Export PDF` button that opens the browser print dialog (`window.print()`)
- No backend and no paid PDF service required

## Local preview

Because this is a static site, you can open `index.html` directly in your browser.

Optional local server examples:

- Python:

  ```bash
  cd /home/runner/work/cv/cv
  python -m http.server 8080
  ```

- Node (if `npx` is available):

  ```bash
  cd /home/runner/work/cv/cv
  npx serve .
  ```

Then open `http://localhost:8080` (or the URL printed by your server).

## Edit CV content

Main files:

- `/home/runner/work/cv/cv/index.html` — CV structure/content
- `/home/runner/work/cv/cv/styles.css` — screen + print styling (`@media print`)
- `/home/runner/work/cv/cv/script.js` — print/PDF button behavior

### Verified data currently included

- Name: **Amir Karami**
- Role: **Full-stack developer**
- Email: `amirkarami.dev@gmail.com`

### Project data note

The environment could not access `https://japra.ir/en/` during implementation, and the provided repository `https://github.com/amirkarami-dev/japra-website` also returned `404` from current access. Because of that, project details were left as clearly labeled placeholders in the **Selected Projects** section. Replace placeholders with verified project names, technologies, outcomes, and links.

## Export to PDF

1. Open the site in a browser.
2. Click **Download / Export PDF**.
3. In the print dialog, choose **Save to PDF**.

The print stylesheet is optimized for A4 pages, removes nonessential UI, preserves section readability, and appends useful URLs in print output.

## GitHub Pages deployment

This repository is static and compatible with GitHub Pages without a build step.

- In GitHub: **Settings → Pages**
- Set Source to deploy from this branch/root (or your preferred Pages source)

No extra workflow is required for the current static setup.
