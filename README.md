# Vigneshwar Balamurugan — Software Engineer Portfolio ⚡

A high-converting, modern, professional portfolio and engineering showcase engineered with zero bloated frameworks, zero npm dependencies, and pure HTML, CSS, and Vanilla JavaScript.

---

## 📁 Project Architecture & Skeleton

```
vigneshwar-campaign-site/
├── index.html                   # Core landing page (Modular sections with clear comment markers)
│   ├── #hero                    # Identity, core badges, stats strip, CTAs
│   ├── #about                   # Engineering profile, background & philosophy
│   ├── #capabilities            # 4 core engineering capability cards
│   ├── #experience               # Cognizant & Robert Bosch timelines with technical bullets
│   ├── #projects                # Filterable project showcase (Embedded, Backend, Edge AI)
│   ├── #skills                  # Categorized technical arsenal
│   ├── #honors                  # Google GDG winner, LeetCode, NCC 'A', certifications
│   └── #contact                 # 1-Click email copy button, phone, LinkedIn, GitHub
├── resume.html                  # Print-ready, ATS-compliant resume (Ctrl+P -> Save as PDF)
├── css/
│   └── style.css                # Modern styling, Dark/Light tokens, responsive media queries
├── js/
│   └── main.js                  # Theme switcher, project filters, copy-to-clipboard, scrollspy
├── assets/
│   ├── Vigneshwar_Balamurugan_Resume.md  # Universal markdown resume
│   └── Vigneshwar_Balamurugan_Resume.pdf # (Place your exported PDF here for 1-click download)
└── README.md                    # Deployment, domain connection & customization guide
```

---

## 🌐 Hosting & Domain Setup (`vigneshwar.co.in`)

You can connect `vigneshwar.co.in` directly to this site.

### Where should you host the site?
**Do not pay for hosting.** Modern static websites should be hosted for **100% FREE forever** on enterprise-grade edge CDNs with automatic SSL certificates (HTTPS):

| Platform | Difficulty | Best For | Price |
| :--- | :--- | :--- | :--- |
| **Vercel** *(Recommended)* | 🟢 2 Minutes | Instant drag-and-drop or GitHub integration, automatic SSL, blazing-fast Indian edge CDN | **Free forever** |
| **GitHub Pages** | 🟢 3 Minutes | If you already have a GitHub account (`vigneshwar.github.io`), 100% free | **Free forever** |
| **Cloudflare Pages** | 🟢 3 Minutes | Best DNS management and fastest global routing | **Free forever** |
| **Netlify** | 🟢 2 Minutes | Drag-and-drop folder upload | **Free forever** |

---

### Method A: Deploy on Vercel (Fastest — 2 Minutes)
1. Sign up for free at [vercel.com](https://vercel.com).
2. Install Vercel CLI via terminal (`npm i -g vercel`) OR simply push this folder to GitHub and import it on the Vercel dashboard.
3. Click **Deploy**. Your site is now live at `https://something.vercel.app`!

### Method B: Deploy on GitHub Pages
1. Create a new GitHub repository named `vigneshwar-portfolio` (or `vigneshwar.github.io`).
2. Push this folder's contents to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of engineering portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/vigneshwar-portfolio.git
   git push -u origin main
   ```
3. In GitHub repo settings: Go to **Settings** → **Pages** → Source: **Deploy from branch `main` / `root`** → Click **Save**.

---

## 🔗 Connecting Your Custom Domain (`vigneshwar.co.in`)

Once you purchase `vigneshwar.co.in`:

1. In your **Vercel** or **GitHub Pages** dashboard:
   - Go to **Settings** → **Domains**.
   - Type in `vigneshwar.co.in` and `www.vigneshwar.co.in`.
2. Open your domain registrar's DNS management page (where you bought `vigneshwar.co.in`) and add these two DNS records:

#### For Vercel:
- **Type:** `A` | **Name:** `@` | **Value:** `76.76.21.21`
- **Type:** `CNAME` | **Name:** `www` | **Value:** `cname.vercel-dns.com`

#### For GitHub Pages:
- **Type:** `A` | **Name:** `@` | **Value:** `185.199.108.153` (also `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
- **Type:** `CNAME` | **Name:** `www` | **Value:** `<your-username>.github.io`

*DNS changes typically reflect within 5 to 30 minutes. SSL certificates are generated automatically.*

---

## ✏️ How to Modify and Customize

Every file is structured with comment banners so you can find and modify sections easily:

### 1. Update Contact Information & Links
In `index.html`:
- Search for `bvignesh2025@gmail.com` to change your email.
- Search for `+91 75400 22142` to change your phone number.
- Search for `linkedin.com/in/vigneshwar-b-882503283` to update your LinkedIn profile.
- Search for `github.com/bvignesh2025` to update your GitHub link.

### 2. Add or Remove a Project
In `index.html`, navigate to `<!-- SECTION 5: FEATURED PROJECTS -->`:
- Each project is wrapped in `<div class="project-card card" data-category="...">`.
- To add a new project, copy an existing block, change the title, description, highlights, and tags.
- The `data-category` attribute controls filtering (`embedded`, `systems`, `ai`).

### 3. Customizing Theme Colors
In `css/style.css`:
- Search for `:root` and `[data-theme="dark"]` / `[data-theme="light"]`.
- Change `--accent-primary` to any color you prefer.

### 4. Generate & Link Your Resume PDF
1. Open `resume.html` in your browser.
2. Press `Ctrl + P` (or click the "Print / Save as PDF" button).
3. Export it as a PDF named `Vigneshwar_Balamurugan_Resume.pdf`.
4. Place `Vigneshwar_Balamurugan_Resume.pdf` inside the `assets/` folder.
