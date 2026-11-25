# 🚀 React Development Guide (Sociapa Project)
*Yeh file aapke reference ke liye banayi gayi hai taaki aap asani se kisi bhi page mein changes kar sakein.*

---

## 📂 1. Project Folder Structure (Kahan Kya Milega?)

```text
sociapareact/
│
├── public/                          <-- Saare Photos, Banners aur PDF files
│   └── images/
│       └── banners/                 <-- Sabhi pages ke banners (about, services, blog, etc.)
│
├── src/
│   ├── components/                  <-- Common Components
│   │   ├── Navbar.jsx               <-- Top Menu / Header Bar
│   │   └── Footer.jsx               <-- Bottom Footer
│   │
│   ├── pages/                       <-- Saare Pages (Text & Designs)
│   │   ├── Home.jsx & Home.css
│   │   ├── AboutUs.jsx & AboutUs.css
│   │   ├── Services.jsx & Services.css
│   │   ├── DigitalMarketing.jsx & DigitalMarketing.css
│   │   ├── ContentDevelopment.jsx & ContentDevelopment.css
│   │   ├── Influencer.jsx & Influencer.css
│   │   ├── Blog.jsx & Blog.css
│   │   ├── Sitemap.jsx & Sitemap.css
│   │   └── ...
│   │
│   ├── styles/
│   │   └── global.css               <-- Poori website ki Common CSS
│   │
│   ├── App.jsx                      <-- Website ke Saare Page Routes (Links)
│   └── main.jsx
│
└── package.json
```

---

## 💻 2. Terminal Commands (Kaise Run Karein?)

Apne project folder (`c:\xampp\htdocs\sociapareact`) mein terminal / command prompt kholiye:

### 🟢 A. Website Ko Live Chalane Ke Liye (Development Server):
```bash
npm run dev
```
- **Browser URL:** `http://localhost:3000/sociapareact/`
- **Auto-Refresh:** Aap jaise hi VS Code mein file save (`Ctrl + S`) karenge, browser mein bina refresh kiye khud-b-khud update ho jayega!

### 🔍 B. Production Build & Apache Update:
```bash
npm run build
```
- Agar screen par `✓ built in ...` aa gaya, iska matlab **0 errors** hain aur code 100% build ho chuka hai.

### 🌐 C. XAMPP (Apache) Par Website + Admin Dono Chalana:
- **Main Website URL:** `http://localhost/sociapareact/`
- **Admin Panel URL:** `http://localhost/sociapareact/admin`
- **Admin API:** `http://localhost/sociapareact/admin/api/v1/`
- Jab bhi aap React files (`src/`) mein koi change karein aur Apache link (`localhost/sociapareact/`) par dekhna ho, terminal mein bas ek baar `npm run build` run karein.
- Fast coding aur auto-reload ke liye `npm run dev` (`http://localhost:3000/sociapareact/`) use kar sakte hain.

---

## ✍️ 3. React (JSX) Ke 4 Golden Rules

HTML aur React lagbhag ek jaise hote hain, bas yeh 4 baatein dhyan rakhein:

### Rule 1: `class` ki jagah `className` likhein
```jsx
❌ Galat:  <div class="service-card">
✅ Sahi:   <div className="service-card">
```

### Rule 2: Har Tag ko Band (Close) karein
HTML mein `<img ...>` chhod dete hain, lekin React mein last mein `/>` lagana zaroori hai:
```jsx
❌ Galat:  <img src="..." alt="...">
✅ Sahi:   <img src="..." alt="..." />

❌ Galat:  <br>  ya  <input type="text">
✅ Sahi:   <br /> ya  <input type="text" />
```

### Rule 3: Image / Banner ka Path aise likhein
Hamesha `${base}` ya `${import.meta.env.BASE_URL}` ke saath path likhein:
```jsx
const base = import.meta.env.BASE_URL;

// Usage:
<img src={`${base}images/banners/about/about_us.png`} alt="About Us" />
```

### Rule 4: HTML Entities (Quotes, Ampersand)
```jsx
❌ Galat:  I'm a Brand & Creators
✅ Sahi:   I&apos;m a Brand &amp; Creators   (ya normal quotes ke sath)
```

---

## 🖼️ 4. Naye Page Par Banner Lagane Ka Standard Template

Jab bhi kisi page ke top par full-bleed banner lagana ho:

### Step 1: `PageName.jsx` ke top par ye code daalein:
```jsx
{/* ── FULL BLEED HERO BANNER ── */}
<div className="serInsideBnr">
  <div className="row">
    <picture>
      <img
        src={`${base}images/banners/YOUR_FOLDER/YOUR_BANNER.png`}
        alt="Page Banner"
        className="responsive-img w-100"
      />
    </picture>
  </div>
</div>
```

### Step 2: `PageName.css` ke top par ye CSS daalein:
```css
/* ── Full-Bleed Top Banner (Desktop: Under Transparent Navbar, Mobile: Under 56px Navbar) ── */
.serInsideBnr {
  margin-top: 0 !important;
  padding-top: 0 !important;
  width: 100%;
  position: relative;
  line-height: 0;
  background: transparent;
}

@media (max-width: 768px) {
  .serInsideBnr {
    margin-top: 56px !important;
  }
}

.serInsideBnr .row {
  margin: 0 !important;
  padding: 0 !important;
  max-width: 100% !important;
}

.serInsideBnr img {
  width: 100%;
  height: auto;
  display: block;
}
```

---

## 🛠️ 5. Common Errors & Unka 1-Minute Fix

| Error Message | Reason (Kyu Aaya?) | Solution (Kaise Theek Karein?) |
|---|---|---|
| `Expected corresponding JSX closing tag` | Koi `<div>` ya `<section>` open reh gaya ya band nahi hua. | Check karein ki saare khule hue tags `</div>` se band hain. |
| `Unterminated JSX contents` | Kisi tag ka `>` ya `/>` miss ho gaya. | Last mein check karein `<img ... />` sahi band hai. |
| `EBUSY: resource busy or locked` | Windows ne kisi file ko temporarily lock kar diya. | Terminal mein `npm run dev` dobara chala dein. |
| `Image not showing (Broken icon)` | Image ka path galat hai ya file name mein spelling mistake hai. | `public/images/...` mein jakar exact file name aur spelling match karein. |

---

## 🎯 Quick Workflow (Kaam Karne Ka Asaan Step)

1. **VS Code mein file kholein** (jaise `src/pages/ContentDevelopment.jsx`).
2. Jo bhi text ya image badalna hai badle aur **Save (`Ctrl + S`)** karein.
3. Browser mein `http://localhost:3000/sociapareact/` par result dekhein.
4. Terminal mein `npm run build` chala kar confirm kar lein.
