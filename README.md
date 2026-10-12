# Jackline Mutheu — Personal Portfolio

A responsive, static personal portfolio designed for GitHub Pages and job applications. It includes selected projects, skills, an approach section, contact links, and a lightweight portfolio FAQ assistant.

## Files
- `index.html` — page content and sections
- `styles.css` — responsive layout and visual styling
- `script.js` — mobile navigation and portfolio FAQ assistant

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a browser.
3. For a closer deployment preview, run a simple local server from this folder:
   - Python: `python -m http.server 8000`
   - Then open `http://localhost:8000`

No build tools, paid hosting, API key, or framework are required.

## Publish with GitHub Pages
1. Create or open the repository you want to use for the portfolio.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
5. Wait for GitHub Pages to publish the site.

If using the existing repository `Jacky-gif310/jackline-portfolio`, review its current files first and back them up before replacing anything.

## Important edits before publishing
1. In `index.html`, replace the email placeholder `href="mailto:"` with your real professional email, e.g. `href="mailto:you@example.com"`, and update the visible label.
2. Check every project link. The main GitHub profile and SHOPPULSE links are set to the supplied URLs. The other “Explore GitHub work” links currently go to your profile because a specific project repository URL was not available in the content used to build this starter.
3. Add a downloadable CV link if you want recruiters to download your latest PDF. Upload the PDF into the repository and link to it from the hero or contact section.
4. Keep project descriptions accurate. The opportunity queue uses illustrative scores, not live data.

## About the assistant
The built-in assistant is a small, local FAQ matcher in `script.js`. It answers common questions from a fixed set of portfolio information and does not send messages to an external service. It is not a full generative AI assistant. A real AI assistant would require a backend/serverless function and a securely stored API key; never place a private API key in front-end JavaScript.

## Design
- Newsreader headings and IBM Plex Sans body text
- Palette: `#2B4C5C`, `#14161A`, `#F7F8FA`, `#D8A24A`
- JM monogram with a small accent dot
