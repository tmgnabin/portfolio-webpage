# Nabin Tamang - Personal Portfolio Website

A clean, modern, recruiter-friendly, single-page personal portfolio website built with pure semantic **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed with light/dark theme toggle, smooth scroll animations, accessible typography, and fast loading performance.

---

## 🚀 Live Demo & Repository
- **GitHub Repository**: [https://github.com/tmgnabin](https://github.com/tmgnabin)
- **Live Deployment**: Hosted on GitHub Pages (see instructions below)

---

## 📁 Project Structure

```plaintext
portfolio.2.0/
├── index.html                 # Main HTML structure with SEO & Open Graph meta tags
├── css/
│   └── style.css              # Custom styling, dark/light theme CSS variables, responsive design
├── js/
│   └── script.js              # Theme switcher, mobile nav, scroll-spy, copy email, form handling
├── assets/
│   ├── images/
│   │   ├── profile.jpg        # Profile photo / headshot
│   │   ├── expense-tracker.jpg# Project screenshot / UI mockup
│   │   └── favicon.svg        # Modern vector favicon for browser tab
│   └── resume.pdf             # Resume file (downloaded & viewed across navbar, hero, & contact)
└── README.md                  # Documentation and setup instructions
```

---

## 🛠️ Built With
- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3**: Custom design tokens, Flexbox, CSS Grid, Glassmorphism, animations
- **Vanilla JavaScript**: Zero external dependencies; instant page load
- **Google Fonts**: Inter, Plus Jakarta Sans, JetBrains Mono

---

## ⚡ How to Run Locally

You can preview the website locally using any standard static file server or browser.

### Option 1: Using Node.js (Quick Server)
Open terminal in the project folder and run:
```bash
npx serve .
# or
npx http-server .
```
Then open the local URL (typically `http://localhost:3000` or `http://localhost:8080`) in your browser.

### Option 2: Using VS Code Live Server
1. Open this folder in **VS Code**.
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Direct File Opening
Double-click `index.html` to open it directly in Google Chrome, Microsoft Edge, Firefox, or Safari.

---

## 📝 How to Customize & Update Your Content

### 1. Update Your Resume (`assets/resume.pdf`)
- Save your updated resume as a PDF file named **`resume.pdf`**.
- Place it directly into the `assets/` folder:
  ```
  assets/resume.pdf
  ```
- All three resume buttons across the website (Navbar, Hero section, and Contact section) are already wired to this path:
  - **Download Resume**: Triggers a direct download (`Nabin_Tamang_Resume.pdf`).
  - **View Resume**: Opens the PDF in a new tab for instant reading.

### 2. Update Your Profile Photo (`assets/images/profile.jpg`)
- Save your portrait or headshot as **`profile.jpg`** (or `.png`).
- Place it into:
  ```
  assets/images/profile.jpg
  ```
- If your image has a different name or extension (e.g., `my-photo.png`), open `index.html` and update the `src` attribute around line 150:
  ```html
  <img src="assets/images/my-photo.png" alt="Nabin Tamang">
  ```

### 3. Update Projects & Links
- Open `index.html` and find `<section id="projects">`.
- You can duplicate the `<article class="project-card">` block to add more projects as you build them.
- Update GitHub links, technology tags, and feature bullet points to match your latest work.

### 4. Optional: Connecting the Contact Form to Formspree
Right now, submitting the contact form opens your default email client via `mailto:`. If you want messages sent directly to your inbox without opening an email client:
1. Sign up for free at [Formspree.io](https://formspree.io).
2. Create a new form and copy your Form ID (e.g., `https://formspree.io/f/mqkopwxy`).
3. In `index.html`, update the `<form id="contact-form">`:
   ```html
   <form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

---

## 🌐 How to Deploy for Free on GitHub Pages

Deploying your portfolio to GitHub Pages takes under 3 minutes:

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Nabin Tamang Portfolio"
   ```

2. **Create a GitHub Repository**:
   - Go to [github.com/new](https://github.com/new).
   - Name the repository `tmgnabin.github.io` (for a custom user domain: `https://tmgnabin.github.io`) OR name it `portfolio` (will be available at `https://tmgnabin.github.io/portfolio`).
   - Leave it **Public**.

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/tmgnabin/<repository-name>.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - In your GitHub repository, click **Settings** (top menu).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
   - Wait 1-2 minutes. GitHub will provide your live URL!

---

## 👤 Author
**Nabin Tamang**
- Degree: BCA (Honors), Don Bosco College (Autonomous) Maram
- Email: [tmgnabin932@gmail.com](mailto:tmgnabin932@gmail.com)
- GitHub: [github.com/tmgnabin](https://github.com/tmgnabin)
- LinkedIn: [linkedin.com/in/nabin-tamang-7bb16a444](https://www.linkedin.com/in/nabin-tamang-7bb16a444)

---

## 📄 License
This project is open-source and free to use under the MIT License.
