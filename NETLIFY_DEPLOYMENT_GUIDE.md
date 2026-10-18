# Nasir Real Estate - Netlify Deployment Guide 🚀

This project is fully configured and ready for 1-click or automated deployment on **Netlify**.

---

## ⚡ Deployment Settings Summary

| Setting | Value |
|---|---|
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |
| **Node Version** | `20` (already set in `netlify.toml`) |
| **SPA Redirects** | Configured via `netlify.toml` and `public/_redirects` |
| **Routing** | `/* -> /index.html (200)` |

---

## Option A: Drag & Drop (Fastest - No Git Required, ~1 Minute)

1. **Build the production bundle:**
   Run in your terminal:
   ```bash
   npm run build
   ```
   This generates the optimized `dist` folder.

2. **Open Netlify Drop:**
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop) (log in or sign up for free).

3. **Deploy:**
   - Drag and drop your **`dist`** folder into the browser window.
   - Netlify will immediately upload and assign you a live URL (e.g. `https://nasir-real-estate.netlify.app`).

---

## Option B: Deploy via GitHub / GitLab (Recommended for Automatic Updates)

With this method, every time you push changes to your repository, Netlify automatically rebuilds and deploys your website.

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: Nasir Real Estate website ready for Netlify"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nasir-real-estate.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Log into [Netlify](https://app.netlify.com).
   - Click **"Add new site"** → **"Import an existing project"**.
   - Select **GitHub** (authorize Netlify to access your repository).
   - Pick your repository: `nasir-real-estate`.

3. **Verify Build Settings:**
   Netlify automatically detects `netlify.toml`, so the settings will be pre-filled:
   - **Branch to deploy:** `main`
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

4. **Click "Deploy Site":**
   - In 30–60 seconds, your site will be live worldwide on Netlify's high-speed CDN.

---

## 🌐 Connecting a Custom Domain (e.g. `nasirrealestate.pk` or `.com`)

1. Go to your site dashboard on Netlify.
2. Navigate to **Site configuration** → **Domain management** → **Add a domain**.
3. Enter your domain name (e.g., `nasirrealestate.pk`).
4. In your domain registrar (GoDaddy, PKNIC, Namecheap, etc.):
   - Set an **A Record** pointing `@` to `75.2.60.5`
   - Set a **CNAME Record** pointing `www` to your Netlify subdomain (e.g., `your-site.netlify.app`).
5. **HTTPS / SSL:**
   - Scroll down to the **HTTPS** section in Netlify Domain management and click **"Verify DNS configuration"**.
   - Netlify will automatically provision a free, auto-renewing Let's Encrypt SSL certificate.

---

## 📁 What is Already Configured in This Project:
- `netlify.toml`: Pre-configured build commands, publish folder, Node 20 environment, asset caching headers, and security headers.
- `public/_redirects`: Guarantees single-page application (SPA) routing works without 404 errors when reloading pages or following deep links.
- `public/robots.txt`: Search engine crawler guidelines.
- `public/sitemap.xml`: Complete search engine index map.
- SEO meta tags and Schema.org structured data in `index.html`.
