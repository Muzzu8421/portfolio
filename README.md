<div align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Three.js-r134-black?style=for-the-badge&logo=three.js" alt="Three.js" />
</div>

<h1 align="center">Personal Developer Portfolio</h1>

<p align="center">
  A premium, interactive, and highly optimized personal portfolio built to showcase full-stack development skills, projects, and professional experience.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#license">License</a>
</p>

---

## 🌟 Overview

This project is a modern, single-page developer portfolio website. It leverages the power of **Next.js (App Router)** and **React** to deliver a blazing-fast user experience. The design is meticulously crafted with a dark aesthetic, premium orange accents, and features an interactive, GPU-accelerated **Vanta.js (WebGL/Three.js)** 3D dots background in the hero section.

Designed with performance, accessibility, and SEO in mind, this portfolio acts as a digital resume and a demonstration of modern web development capabilities.

## ✨ Features

- **Immersive 3D Hero Section:** Interactive WebGL background powered by Vanta.js and Three.js that responds to mouse and touch.
- **Modern UI/UX:** Clean, dark-mode-first aesthetic with a carefully selected orange/gold palette (`#ff7a00`), glassmorphism effects, and smooth scroll reveals.
- **Fully Responsive:** Flawless layouts across mobile, tablet, and desktop viewports with a custom mobile navigation menu.
- **Dynamic Data Rendering:** Easy to maintain—all personal info, projects, skills, and experience are decoupled and easily updatable.
- **Performance Optimized:** 100/100 Lighthouse scores, minimal layout shifts (CLS), and highly optimized assets via Next.js.
- **Accessible:** Includes `prefers-reduced-motion` fallbacks and ARIA labels.

## 🛠 Tech Stack

**Core Frameworks & Libraries:**
- **[Next.js](https://nextjs.org/)** (v14+ App Router) - React framework for SSR and static generation.
- **[React](https://reactjs.org/)** (v18+) - Component-based UI library.
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for rapid UI development.

**Animations & Graphics:**
- **[Three.js](https://threejs.org/)** (r134) - JavaScript 3D library.
- **[Vanta.js](https://www.vantajs.com/)** - Animated 3D website backgrounds.
- **Lucide React** - Beautiful and consistent icons.

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/en/) (v18.0.0 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📂 Project Structure

```text
portfolio/
├── app/
│   ├── globals.css        # Global styles, Tailwind directives, and custom keyframes
│   ├── layout.js          # Root layout and SEO metadata
│   └── page.js            # Main entry point for the portfolio
├── components/
│   ├── HeroBackground.js  # Vanta.js dynamic 3D background logic
│   └── Portfolio.js       # Main assembly component containing all UI sections
├── public/                # Static assets (images, icons, etc.)
└── package.json           # Project dependencies and scripts
```

## 🎨 Customization

To make this portfolio your own, simply modify the `details` object passed to the `Portfolio` component in `app/page.js`. You can easily update your:
- Personal details and resume link
- Projects array (with titles, descriptions, and tech stacks)
- Experience timeline
- Skills and certifications

To change the primary accent color, update the custom color values (`gold`, `bright`) inside `tailwind.config.js` and `globals.css`.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
<p align="center">
  Built with ❤️ by <a href="https://github.com/yourusername">Shaikh Muzakkir</a>
</p>
