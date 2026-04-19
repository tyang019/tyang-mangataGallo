# Mangata & Gallo Jewelry Web Application

Mangata & Gallo is a modern, responsive web application built to showcase a luxury jewelry brand through an elegant and user-friendly interface. This project focuses on delivering a seamless front-end experience while integrating dynamic product data with modern web technologies.

## 🚀 Features

- Responsive design optimized for desktop and mobile devices
- Dynamic product rendering using REST APIs
- Reusable and scalable React components
- Form validation using React hooks
- Clean UI based on Figma wireframes

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript (ES6+), HTML5, CSS3
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **Tooling:** Git, GitHub, VS Code, Figma, ESLint, Vitest

## 🎯 Purpose

This project was developed to strengthen full-stack development skills, focusing on component-based architecture, UI/UX consistency, and modern front-end workflows.

---

## ⚙️ Setup

### 1) Prerequisites

- Node.js 18+
- npm 9+

### 2) Clone and install

```bash
git clone <your-repo-url>
cd tyang-mangataGallo
npm install
```

### 3) Run locally

```bash
npm run dev
```

App runs on the local Vite URL shown in your terminal (typically `http://localhost:5173`).

### 4) Quality checks

```bash
npm run lint
npm run test
npm run build
```

---

## 🏗️ Architecture

Current application layers are organized around:

- **App shell and routing:** top-level app composition, route declarations, and global providers.
- **Pages:** route-level user experiences (home, products, categories, bag, user, contact).
- **Reusable components:** shared UI blocks (header, navigation, cards, footer, inputs, buttons).
- **Data/services:** product/category fetching and auth-related service modules.
- **State management:** cart/bag state via context provider and reducer logic.

### High-level flow

1. User opens app and navigates through route-based pages.
2. Product/category modules fetch and normalize API data.
3. Components render data and handle user actions.
4. Bag state is managed in context and reflected across UI.

> Planned evolution: migrate toward a stronger feature-based architecture (`features/*`, `shared/*`, `app/*`) and TypeScript-first modules.

---

## 🗺️ Roadmap

### Near-term (Project Hygiene)

- [ ] Standardize docs and contribution workflows
- [ ] Reduce duplicate JS/TS module drift
- [ ] Add CI workflow for lint/test/build

### Mid-term (Scalability)

- [ ] Feature-based folder architecture
- [ ] Improved API client abstraction and error handling
- [ ] Expanded automated testing (integration + E2E)

### Long-term (Production Readiness)

- [ ] Backend service for auth and business logic
- [ ] Persistent data store for users/orders/cart
- [ ] Monitoring, analytics, and performance budgeting

---

## 📸 Screenshots

Place current UI screenshots in a `docs/screenshots/` folder and reference them here:

- Home page
- Product listing
- Category detail
- Shopping bag

_Example markdown once images are added:_

```md
![Home](docs/screenshots/home.png)
![Products](docs/screenshots/products.png)
```

---

## 🚢 Deployment

### Preview build

```bash
npm run build
npm run preview
```

### Suggested hosting

- **Frontend:** Vercel or Netlify
- **(Future) API/backend:** Render/Fly/Railway
- **(Future) database:** Managed Postgres

### Environment variables

Create a `.env` (or use hosting platform env settings) for any runtime secrets/config values as the project grows.

---

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for branch, commit, PR, and review expectations.