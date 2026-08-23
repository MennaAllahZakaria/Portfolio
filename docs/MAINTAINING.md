# Portfolio maintenance guide

This portfolio is a lightweight static site. Keep the separation below when making future changes so content, styling, behavior, and media remain easy to locate.

## File map

```text
.
├── index.html                 # Visible content, page sections, metadata, and links
├── assets/
│   ├── css/
│   │   └── styles.css         # Design tokens, layout, responsive rules, and motion
│   ├── js/
│   │   └── main.js            # Menu, filters, scroll state, reveal effects, and year
│   └── images/
│       ├── profile/           # Personal/profile photos
│       ├── featured/          # Images used by the large project cards
│       └── archive/           # Older project, certificate, and practice images
├── docs/
│   └── MAINTAINING.md         # This guide
└── README.md
```

## Where to edit content

All visible portfolio copy is in `index.html`. The `#work` section contains the featured cards followed by the compact project grid. Edit the project title, category, description, technologies, and link together.

The featured projects are currently ORB, Sheftaya, Swift Build, TrackAdemic, and CareNest. Keep a project in this section when it demonstrates important technical work, a real client engagement, or a meaningful product achievement. Use the compact grid for smaller experiments and supporting projects.

Descriptions should explain what the product does, the main functionality that was implemented, and the technical area owned by Menna. Avoid unsupported metrics or generic claims.

## Adding or replacing images

Use the correct folder:

| Asset | Location |
|---|---|
| Personal photo | `assets/images/profile/` |
| Featured project screenshot | `assets/images/featured/` |
| Older project or certificate image | `assets/images/archive/` |

Reference a file from `index.html` with a relative path:

```html
<img
  src="./assets/images/featured/project-name.png"
  alt="Project dashboard preview"
  loading="lazy"
>
```

Use descriptive filenames without spaces where possible, and always write useful alt text. Do not use a generic image as if it were a real project screenshot. CSS mockups should remain clearly illustrative.

## Where to edit the visual design

Use `assets/css/styles.css` for styling. The main palette lives at the top of the file under `:root`; update the tokens there before adding new hard-coded colors. The current direction uses a dark green base, warm off-white typography, and muted sage accents.

Project-specific visual classes are grouped near `.project-visual`. Responsive rules appear near the bottom of the file inside media queries. Check both desktop and mobile layouts after changing image dimensions, text length, or card spacing.

## Where to edit behavior

Use `assets/js/main.js` for interaction only. It controls the mobile menu, header scroll state, active navigation, project filters, reveal animations, and the current footer year. Keep visible project copy in `index.html`, not in JavaScript.

## Local preview

From the repository root, run:

```bash
npx --yes http-server -p 4173
```

Open `http://localhost:4173` in a browser. A local server is preferred over opening the HTML file directly because it matches deployed relative-path behavior more closely.

## Before pushing

Run the formatting check and inspect the working tree:

```bash
git diff --check
git status
```

Then commit and push:

```bash
git add index.html assets docs README.md
git commit -m "Describe the update"
git pull --rebase origin main
git push origin main
```

## Browser checklist

Before considering an update complete, confirm that all profile and featured images load, the mobile menu opens and closes, project filters show the correct cards, every public link opens the intended destination, and long descriptions do not overflow on mobile.

After deployment, test the production URL in a private window. If an old CSS or image version appears, perform a hard refresh.

## Safe repository rules

Do not add API keys, passwords, private client information, or unpublished screenshots to this public repository. Use placeholder data in visual mockups and keep client-sensitive material outside Git history.

Keep relative asset paths intact when moving the project between Netlify and Vercel. Compress new images and size them close to their rendered dimensions.

## Quick reference

| Need | Location |
|---|---|
| Change a project title or description | `index.html` → `#work` |
| Add a featured screenshot | `assets/images/featured/` and `index.html` |
| Replace the profile photo | `assets/images/profile/` and `index.html` |
| Change the color palette | `assets/css/styles.css` → `:root` |
| Change filters or menu behavior | `assets/js/main.js` |
| Update setup information | `README.md` |
| Update maintenance instructions | `docs/MAINTAINING.md` |

> The maintenance rule is simple: content belongs in `index.html`, styling belongs in `assets/css/styles.css`, behavior belongs in `assets/js/main.js`, and media belongs in `assets/images/`.

## Related links

- [Portfolio repository](https://github.com/MennaAllahZakaria/Portfolio)
- [Live portfolio](https://portfolio-menna-zakaria.netlify.app/)
- [GitHub profile](https://github.com/MennaAllahZakaria)
- [LinkedIn](https://www.linkedin.com/in/menna-zakaria-)
