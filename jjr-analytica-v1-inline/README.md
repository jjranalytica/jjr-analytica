# JJR Analytica — Version 1.1

A static institutional-style research site for JJR Analytica.

## Included pages
- `index.html` — landing page
- `research.html` — research library / study index
- `methodology.html` — high-level research framework
- `study-logic.html` — function logic and study pipeline
- `math-framework.html` — probability and expectancy math page
- `function-walkthrough.html` — step-by-step build of a sample study
- `about.html` — company / mission page
- `disclosures.html` — draft legal disclosures
- `studies/*.html` — starter study pages

## Notes
- The statistics and results in this starter site are placeholders.
- Replace all sample study values with your verified outputs before publishing.
- Preview design references are stored in `assets/previews/`.

## Run locally
Because this is a static site, you can preview it several ways.

### Option A — double-click
Open `index.html` directly in your browser.

### Option B — VS Code Live Server
1. Open the folder in VS Code.
2. Install the “Live Server” extension.
3. Right-click `index.html` and choose **Open with Live Server**.

### Option C — Python local server
From the project folder run:

```bash
python -m http.server 8000
```

Then open:

`http://localhost:8000`

## Deploy cheaply
Recommended options:
- Vercel
- Cloudflare Pages
- Netlify
- GitHub Pages (works best if you are comfortable with Git)

A step-by-step deployment plan is provided separately in the chat response.


## If the page looks like plain white HTML
That means the stylesheet did not load. This v1.2 package inlines the CSS inside each HTML page, so double-click preview should work even if your browser is strict about local file paths.

Use `index.html` from this extracted folder, not the HTML file inside the zip preview.
