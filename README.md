# Nerdboi Portfolio

A modern, animated, full-stack developer portfolio built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), [TailwindCSS](https://tailwindcss.com/), and [SST](https://sst.dev/).  
Live at: [www.nerdboi.online](https://www.nerdboi.online)

---

## ✨ Features

- **Animated Hero & Page Transitions**  
  Smooth entrance animations using [Framer Motion](https://www.framer.com/motion/).
- **Galaxy Particle Background**  
  Subtle, animated star particles powered by [tsParticles](https://particles.js.org/).
- **Responsive & Accessible**  
  Fully responsive layout, accessible components, and keyboard navigation.
- **Project Masonry Grid**  
  Projects displayed in a responsive masonry layout.
- **Custom Domain & AWS Hosting**  
  Deployed with SST on AWS, using a custom domain and SSL.
- **CI/CD with GitHub Actions**  
  Automated deployment pipeline.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 🛠️ Project Structure

- `app/` — Next.js app directory (pages, layout, styles)
- `components/` — Reusable UI and common components
- `types/` — TypeScript types
- `lib/` — Utilities and constants
- `sst.config.ts` — SST deployment configuration

---

## 🧑‍💻 Deployment

This project uses [SST](https://sst.dev/) for AWS deployment.

- **Development:**  
  ```bash
  npm run deploy:dev
  ```
- **Production:**  
  ```bash
  npm run deploy:production
  ```

### Custom Domain

The site is deployed to [www.nerdboi.online](https://www.nerdboi.online) using AWS Route53 and CloudFront.  
To use your own domain, update the `sst.config.ts` accordingly and configure your DNS provider to use the AWS Route53 nameservers.

---

## 📦 Tech Stack

- Next.js
- TypeScript
- TailwindCSS
- Framer Motion
- tsParticles
- SST (AWS CDK)
- Lucide Icons

---

## 📄 License

MIT

---

## 🙋‍♂️ Author

**Nerdboi**  
- [GitHub](https://github.com/nerdboi008)
- [LinkedIn](https://www.linkedin.com/in/moin-malek/)

---

## 📝 Credits

- [Shadcn/ui](https://ui.shadcn.com/) for UI primitives
- [Coolors](https://coolors.co/) for the color palette

---