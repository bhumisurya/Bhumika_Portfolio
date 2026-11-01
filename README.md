# Bhumika Devendra Suryawanshi — Personal AI/ML Engineer Portfolio

A premium, modern, animated, and responsive portfolio website designed for **Bhumika Devendra Suryawanshi**, showcasing hands-on experience in **Machine Learning**, **Deep Learning**, **Computer Vision**, and **Generative AI**.

Built with an editorial aesthetic featuring an off-white palette, deep charcoal typography, electric-violet and cobalt-blue accents, ambient neural-network canvas animations, and interactive case studies.

---

## 🌟 Key Features

- **Dark & Light Mode Switcher**: One-click theme toggle (Sun/Moon) in the navigation bar and mobile drawer with smooth animated transitions, system preference detection, and `localStorage` persistence.
- **Hero Section**: Two-column layout featuring your pure, clean portrait photo (with zero clutter or distracting overlays), availability badge (*"Open to suitable AI/ML opportunities"*), verified academic highlights (C-DAC PGCAI 79%), and quick action CTAs.
- **About Me**: Narrative grounded in computer science foundations and practical applied AI problem solving.
- **Technical Skills**: Interactive category filters and live search over verified competencies (Programming, ML, DL, GenAI, CV, Data Analytics, Backend, Databases, and Tools). No misleading percentage bars.

- **Featured Projects**: Exactly three verified capstones with interactive architecture diagrams and modal case studies:
  1. *Towards Responsible AI: Quantifying Cognitive Load in Human-AI Collaboration* (Multimodal AI)
  2. *Abnormal Activity Detection Using AI* (MediaPipe Pose & OpenCV)
  3. *Weather Prediction Using Machine Learning* (96%+ Accuracy, FastAPI REST API)
- **Education Timeline**: Structured cards covering C-DAC Mumbai (PGCAI, 79%), SPPU (B.E. Computer Science, CGPA 7.84), HSC (90%), and SSC (85%).
- **Verified Certifications & Interactive Viewer**: Comprehensive directory of all 14 analyzed certificates (C-DAC PGCAI, Elite NPTEL Big Data Computing, Skybrisk Python Internship, Sunbeam PreCAT, Great Learning AI & Cloud, LinkedIn Learning, FUEL Core Java & Aptitude, CyberFrat, and Energy Swaraj). Includes interactive category filters, search bar, and an in-browser modal document viewer for high-fidelity certificate inspection and downloads.
- **Dedicated Resume Hub**: Direct download CTA for `resume.pdf` plus an inline interactive PDF viewer.
- **Contact & Connect**: Direct contact details (Email, Phone, Nashik location, LinkedIn, GitHub) and a validated form with mailto dispatch.
- **Accessibility & UX**: Responsive on mobile, tablet, and desktop; subtle custom cursor; reduced-motion query compliance; back-to-top button.

---

## 🛠️ Technology Stack

- **Framework**: [React 18](https://react.dev/) + [Vite 6](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Beginner-Friendly Windows Quickstart

### 1. Prerequisites (If Node.js is not yet installed)
1. Download Node.js (v20+ or v24 LTS recommended) from [nodejs.org](https://nodejs.org/).
2. Run the Windows `.msi` installer and accept default options.
3. Open PowerShell or Command Prompt and verify:
   ```powershell
   node -v
   npm -v
   ```

### 2. Opening the Project in VS Code
1. Open Visual Studio Code.
2. Select **File > Open Folder...** (or press `Ctrl + K, Ctrl + O`).
3. Navigate to `C:\Users\bhumi\Downloads\Portfolio` and click **Select Folder**.
4. Open the integrated terminal in VS Code with `` Ctrl + ` `` (Backtick).

### 3. Installing Dependencies
Run the following in the project root:
```powershell
npm install
```
*(Note: A `.npmrc` file with `strict-ssl=false` is already included to prevent network SSL certificate inspection errors on Windows).*

### 4. Running the Development Server
Start the local development server:
```powershell
npm run dev
```
Open your browser at `http://localhost:5173`. Any changes you make to the code will immediately update with Hot Module Replacement (HMR).

### 5. Building for Production
To create an optimized production build:
```powershell
npm run build
```
The output files will be compiled into the `dist/` folder.

To preview the built website locally:
```powershell
npm run preview
```
Visit `http://localhost:4173` to test the production bundle.

---

## 📂 Project Structure

```
Portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpg           # Bhumika's portrait photo
│   ├── favicon.svg               # Neural network vector favicon
│   ├── resume.pdf                # Actual resume PDF
│   └── Bhumika_AIML_resume.pdf   # Fallback named PDF
├── src/
│   ├── components/
│   │   ├── About.tsx             # Background, philosophy & 4 pillars
│   │   ├── Certifications.tsx    # Certifications & languages
│   │   ├── Contact.tsx           # Contact details & validated form
│   │   ├── CustomCursor.tsx      # Desktop subtle cursor
│   │   ├── Education.tsx         # Educational timeline
│   │   ├── Footer.tsx            # Personal branding & back-to-top
│   │   ├── Hero.tsx              # Main headline, photo & CTAs
│   │   ├── Navbar.tsx            # Sticky header & mobile drawer
│   │   ├── NeuralBackground.tsx  # Ambient animated canvas
│   │   ├── ProjectModal.tsx      # Case study deep-dive dialog
│   │   ├── Projects.tsx          # 3 featured project cards
│   │   ├── ResumeSection.tsx     # Resume download & inline preview
│   │   └── Skills.tsx            # Filterable skill cards
│   ├── data/
│   │   └── portfolioData.ts      # Single source of truth for portfolio data
│   ├── types/
│   │   └── index.ts              # TypeScript interfaces
│   ├── App.tsx                   # Main layout coordinator
│   ├── index.css                 # Custom CSS & Tailwind base
│   └── main.tsx                  # React DOM entry point
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                   # Vercel deployment rewrite rules
└── vite.config.ts
```

---

## ✏️ Customizing Content

All data is cleanly centralized in a single file:
👉 **`src/data/portfolioData.ts`**

### How to:
1. **Update contact info or headline**:
   Edit the `personalInfo` object in `src/data/portfolioData.ts`.
2. **Replace your profile photo**:
   Replace `public/images/profile.jpg` with a new square or 3:4 portrait photo (keeping the same filename).
3. **Replace your resume PDF**:
   Replace `public/resume.pdf` with your updated PDF file.
4. **Update or add projects**:
   Edit the `projectsData` array in `src/data/portfolioData.ts`.
5. **Update skills or certifications**:
   Edit `skillGroups` or `certificationsData` in `src/data/portfolioData.ts`.

---

## 🌐 Deploying to Vercel (Free & Fast)

### Option A: Deploy via GitHub (Recommended for automatic updates)

1. **Initialize Git and commit**:
   In PowerShell within `C:\Users\bhumi\Downloads\Portfolio`:
   ```powershell
   git init
   git add .
   git commit -m "Initial portfolio release"
   ```

2. **Push to GitHub**:
   - Go to [github.com/new](https://github.com/new) and create a repository named `bhumika-portfolio`.
   - Run:
     ```powershell
     git branch -M main
     git remote add origin https://github.com/bhumisurya/bhumika-portfolio.git
     git push -u origin main
     ```

3. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
   - Click **Add New... > Project**.
   - Select the `bhumika-portfolio` repository.
   - Vercel automatically detects **Vite**:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
   - Click **Deploy**.
   - Your site will be live at `https://bhumika-portfolio.vercel.app` (or your custom domain) within ~45 seconds!
   - Every time you `git push`, Vercel will automatically redeploy the latest changes.

### Option B: Deploy via Vercel CLI (Without pushing to GitHub yet)

1. Install Vercel CLI:
   ```powershell
   npm install -g vercel
   ```
2. Run deployment command:
   ```powershell
   vercel
   ```
3. Follow the CLI prompts to log in and select standard defaults.
4. To deploy to production:
   ```powershell
   vercel --prod
   ```

---

## 📄 License & Attribution

Designed and maintained for **Bhumika Devendra Suryawanshi**.
Licensed under the MIT License.
