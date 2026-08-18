# Break Your Own Site — Findings Log
**Jackline Mutheu**

Tested against the live site: `https://jacky-gif310.github.io/jackline-portfolio/`

---

## What I actually tested

- Fetched all four pages (Home, Case Studies, Process, About) directly and checked rendered content, not just that they "look right" in a browser
- Verified every internal nav link resolves to the correct page
- Verified external links (GitHub repo, two individual notebook links, LinkedIn, Calendly, CV PDF) point to real, correct targets
- Checked the contact form's actual submission code, not just its appearance
- Searched my own name and site directly, to check real findability
- Checked for meta description / social-share (Open Graph) tags across all pages

---

## Fix-now (found broken, actually fixed)

| # | What broke | How I found it | Fix |
|---|---|---|---|
| 1 | **No meta description or Open Graph tags anywhere.** Every page had only a `<title>` — no description for search results, no social-share preview image, so a shared link would show blank/generic. | Inspected the raw HTML source of all four pages directly. | Added a unique `<meta name="description">` and full Open Graph tag set (title, description, image, url) to all four pages, plus a real 1200×630 branded social-share image (`social-preview.png`), matching the identity kit palette. |
| 2 | **Contact form has no double-submit protection.** The submit button stays clickable while a request is in flight — a fast double-click fires two separate `fetch` requests before the first resolves, meaning **two emails from one message**. | Read the actual submission JavaScript, not just tested the UI once. | Disabled the button and changed its text to "Sending..." for the duration of the request, re-enabling it only after success or failure. |

## Known limitation (found, deliberately not "fixed," named honestly)

| # | What I found | Why I'm not fixing it now |
|---|---|---|
| 1 | **The site isn't findable in Google search yet.** Searching "Jackline Mutheu machine learning portfolio" returns unrelated people with the same name and generic articles — my actual site doesn't appear. A `site:` search for the domain returns nothing matching either. | This is expected for a brand-new site — Google indexing isn't instant, and I haven't submitted it to Search Console or built any inbound links yet. Adding meta tags (fix #1 above) helps *once indexed*, but doesn't force indexing to happen faster. I'm naming this rather than hiding it. |
| 2 | **Formspree's spam/garbage-input handling is out of my control.** I can't fully test what happens with genuinely malicious input (script injection attempts, etc.) without either risking real spam to my own inbox or trusting Formspree's own filtering, which I haven't independently verified. | This is a third-party service boundary — I control the form's client-side behavior, not Formspree's backend spam handling. Documenting it as a known limitation rather than claiming full coverage I can't verify. |
| 3 | **Not tested on Safari or a real mobile device browser (only checked via direct HTML fetch and Chrome).** The CSS uses fairly standard properties, so risk is low, but I haven't personally confirmed rendering on Safari/iOS. | Needs me to physically test on a device/browser I have access to — see action item below. |

---

## What I still need to do myself (can't verify this part remotely)

- [ ] Actually submit the contact form once for real, with a real message, and confirm the email lands in my inbox
- [ ] Try submitting it empty (should be blocked by the browser natively — the `required` attributes are already in place, but worth confirming in practice)
- [ ] Open the site specifically in Safari or on my phone's browser (not just re-check the same browser I always use)
- [ ] Run a free speed check: [PageSpeed Insights](https://pagespeed.web.dev/) — paste in the live URL, note the score and any flagged issues
- [ ] Click every single link on every page manually, including the two notebook links and the repo link, to visually confirm (not just HTTP-status-confirm) they land where expected

---

## Hardening review

*[To be completed after a mentor/peer review — same process as Survive the Crit. Post their feedback here, and note what was fixed as a result.]*
