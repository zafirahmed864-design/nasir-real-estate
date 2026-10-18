# Nasir Real Estate — Hostinger Deployment Guide

This project is fully production-ready and designed for direct deployment on **Hostinger Web Hosting**, **Cloud Hosting**, or **cPanel**.

Because this application compiles to static HTML, CSS, and JavaScript, it does **not** require any Node.js background process, complex database engine, or external server configurations.

---

## 1. Quick Build Command

Run the production build in your terminal:

```bash
npm run build
```

This compiles the source code into the `dist/` folder containing:
* `index.html`
* `assets/` (bundled JS, CSS, and optimized images)

---

## 2. Deploying via Hostinger hPanel File Manager

1. Log in to your **Hostinger Dashboard (hPanel)**.
2. Under **Websites**, click **Manage** next to your domain.
3. In the sidebar, search for and open **File Manager**.
4. Open the `public_html/` folder of your target website.
5. If there is a default `default.php` file from Hostinger, delete or rename it.
6. Upload all files from your local `dist/` directory into `public_html/`:
   * Drag & drop `index.html` and the `assets/` folder directly into `public_html/`.
   * Alternatively, zip the contents of `dist/` (`dist.zip`), upload it to `public_html/`, and click **Extract**.

---

## 3. Recommended `.htaccess` for Hostinger (Clean URLs & Caching)

Hostinger uses LiteSpeed / Apache. A simple `.htaccess` inside `public_html/` ensures client-side routing and fast asset caching:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Browser Caching for Fast Loading
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 4. Contact & WhatsApp Integration

All WhatsApp buttons are pre-configured to launch:
* **WhatsApp**: `https://wa.me/923163370864`
* **Phone Call**: `tel:+923163370864`
* **Location**: Chenab Nagar, Chiniot
* **Chamber**: Chamber of Faisalabad

No third-party email API key is required — user inquiries in the contact form are formatted directly into WhatsApp messages for instant conversion.
