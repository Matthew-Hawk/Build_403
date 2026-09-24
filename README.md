# 403 Studio — static website concept

A responsive, framework-free website for a fictional digital studio offering custom websites and IT services. It includes a homepage, three fictional project pages, and a contact preview page.

## Files

- `index.html` — homepage sections and project cards.
- `forma.html`, `ritual.html`, `northline.html` — individual fictional project pages.
- `contact.html` — a contact form preview; it **does not send or store messages**.
- `style.css` — shared styling and responsive layouts.
- `script.js` — mobile navigation, scroll reveals, year, and demo form handling.
- `assets/` — locally stored imagery and SVG favicon.

## Preview locally

Open `index.html` in a browser, or run `python -m http.server 8000` from this folder and visit `http://localhost:8000`.

## Publish to Cloudflare Pages

Upload these files to a GitHub repository, connect the repository to Cloudflare Pages, select **no framework**, leave the build command blank, and set the output directory to `/` (repository root). If Pages requires an output directory, use `.`. Keep `index.html` at the repository root.

## Customize

Edit the site copy in each HTML page, adjust colors in the `:root` block of `style.css`, and replace the images in `assets/` while retaining their filenames or updating the HTML references. The project images and project descriptions are **fictional examples**. To enable the contact form later, add a real submission endpoint or form service and remove the demo interception in `script.js` and the preview notice in `contact.html`.

Generated image prompts: dark glass and neon-lit corridor for the hero; editorial architecture site for Forma; warm coffee storefront for Ritual; dark logistics dashboard for Northline. Generated with the built-in image tool and included locally as compressed WebP files.
