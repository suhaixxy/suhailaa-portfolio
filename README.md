# Suhaila Binte Akbar Ali — Portfolio

A responsive, static portfolio built with HTML, CSS and JavaScript. It is compatible with GitHub Pages and uses no build step or framework.

## Preview locally

Open `index.html` in a browser, or run a local static server from this folder:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Project screenshots

The project cards currently show designed add-your-own-image panels, not broken or stock screenshots. Add your screenshots to `images/` with these filenames, then replace the corresponding `<figure class="screenshot-placeholder">` in `index.html` with an `<img>` and descriptive alt text:

- `gym-calorie-analysis.png`
- `efar-payroll.png`
- `whatsup-app.png`
- `data-wrangling.png`
- `nirvana-ux.png`

## Resume

The supplied one-page resume is included at `assets/resume.pdf` and linked from the hero and contact section. Replace it with an updated copy at the same path when needed.

## Publish with GitHub Pages

1. In the project folder, run `git status` and review the changes.
2. Stage and commit the updated files: `git add index.html style.css script.js README.md assets/resume.pdf` then `git commit -m "Redesign portfolio for data analytics and AI"`.
3. Push your branch with `git push`.
4. In the repository on GitHub, open **Settings → Pages** and confirm the configured branch and folder (usually `main` and `/ (root)`). Wait for the Pages deployment to finish, then open the published URL and check the mobile navigation, project panels and resume link.

## Before publishing

- Check that the phone/email/contact information shown in the resume is the version you want public. Add a clickable email link to the contact section if desired.
- Confirm project results, certification dates and the project scope descriptions against your final records.
- Add screenshots you have permission to share and verify they do not expose private data.
