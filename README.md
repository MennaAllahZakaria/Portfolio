# Menna Zakaria — Portfolio

A responsive personal portfolio for Menna Zakaria, a Backend Developer focused on reliable APIs, real-time systems, and thoughtful full-stack products.

## Live site

[portfolio-menna-zakaria.netlify.app](https://portfolio-menna-zakaria.netlify.app/)

## About the project

This is a lightweight static portfolio built with semantic HTML, custom CSS, and vanilla JavaScript. It presents Menna's strongest backend, real-time, full-stack, and freelance work without requiring a build step.

The featured section highlights **ORB**, **Sheftaya**, **Swift Build**, **TrackAdemic**, and **CareNest**. The compact project grid contains additional APIs and applications with backend, full-stack, and frontend filters.

## Stack

- Semantic HTML5
- Custom CSS with responsive Grid and Flexbox layouts
- Vanilla JavaScript for navigation, filters, scroll state, and reveal animations
- Google Fonts and Boxicons
- Netlify/Vercel-compatible relative asset paths

## Run locally

```bash
git clone https://github.com/MennaAllahZakaria/Portfolio.git
cd Portfolio
npx --yes http-server -p 4173
```

Then open `http://localhost:4173` in a browser. A local server is recommended because it matches deployed relative-path behavior more closely than opening `index.html` directly.

## Project structure

```text
├── index.html                    # Page structure, copy, metadata, and project links
├── assets/
│   ├── css/
│   │   └── styles.css            # Colors, layout, responsive rules, and animations
│   ├── js/
│   │   └── main.js               # Menu, filters, active navigation, reveals, and year
│   └── images/
│       ├── profile/              # Personal/profile images
│       ├── featured/             # Images used by large featured project cards
│       └── archive/              # Older project, certificate, and practice images
├── docs/
│   └── MAINTAINING.md            # Detailed guide for future updates
└── README.md
```

## Making future updates

Visible content belongs in `index.html`. Styling belongs in `assets/css/styles.css`, interactions belong in `assets/js/main.js`, and media belongs in the appropriate `assets/images/` folder.

For a new featured screenshot, place the file in `assets/images/featured/`, reference it with a relative path such as `./assets/images/featured/project.png`, and add accurate alt text. For a profile image, use `assets/images/profile/`.

For a new project, update its title, description, category, technology labels, and public repository or live link together. Keep descriptions specific to the product and the work completed instead of using generic claims.

Read [docs/MAINTAINING.md](docs/MAINTAINING.md) before making structural changes.

## Quality checks

```bash
git diff --check
```

Before pushing, verify that all images load, the mobile menu opens and closes, filters work, links point to the intended destinations, and longer descriptions do not overflow on mobile.

## Author

**Menna Zakaria** — [GitHub](https://github.com/MennaAllahZakaria) · [LinkedIn](https://www.linkedin.com/in/menna-zakaria-) · [Email](mailto:mennazakaria2003@gmail.com)

## Security

Do not add API keys, passwords, private client information, or unpublished screenshots to this public repository.
