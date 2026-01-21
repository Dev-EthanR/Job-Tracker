
# 📊 Job Application Tracker

A responsive, accessible job application tracking web app that helps users manage applications across multiple stages using a Kanban-style workflow.

Built as a **frontend-focused portfolio project** to demonstrate real-world UI architecture, drag-and-drop interactions, form handling, accessibility, and data visualization.

---

## ✨ Features

### 📋 Kanban Board

* Four application stages (Applied, Interview, Offer, Rejected)
* Drag & drop cards between columns
* Clear visual drag indicators
* Empty column states with helpful messaging
* Badge counters per column

### 🧾 Application Cards

* Company name, role, date, and status
* Context menu (⋯) for edit & delete actions
* Card details page with full application info
* Cards are removed instantly on delete (no ghost state)

### ➕ Add / Edit Applications

* Modal-based form
* Form validation with clear error states
* Keyboard accessible modals
* Focus trapping and ESC-to-close support

### 📊 Analytics Page

* Visual breakdown of applications by status
* Charts built with Chart.js
* Clean, readable presentation for quick insights

### ⚙️ Settings Page

* Frontend-only configuration
* Structured to scale for future preferences

### 🚫 404 Page

* Friendly error state
* Clear navigation back to the app

---

## ♿ Accessibility

Accessibility was a core focus throughout the project:

* Semantic HTML
* Full keyboard navigation
* Focus trapping for modals
* Correct tab order and focus cycling
* ESC key support
* ARIA attributes where appropriate
* Clear visual focus indicators

---

## 📱 Responsive Design

* **Mobile:** Single-column layout
* **Tablet:** Compact board layout
* **Desktop:** Full 4-column Kanban board

Built mobile-first and scaled up.

---

### 🛠 Tech Stack

**Frontend**
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss&logoColor=white)

**State & Forms**
![React Hook Form](https://img.shields.io/badge/React_Hook_Form-7-EC5990?logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-4-3E67B1?logo=zod&logoColor=white)

**Drag & Drop**
![dnd-kit](https://img.shields.io/badge/dnd--kit-Accessible-blue)

**Charts & Analytics**
![Chart.js](https://img.shields.io/badge/Chart.js-4-FF6384?logo=chartdotjs&logoColor=white)

**Routing & Accessibility**
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?logo=reactrouter&logoColor=white)
![Focus Trap](https://img.shields.io/badge/Focus--Trap-Accessibility-green)

**Tooling**
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)
![UUID](https://img.shields.io/badge/UUID-Unique_IDs-lightgrey)

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/job-tracker.git
cd job-tracker
npm install
npm run dev
```

---

## 🎯 Project Goals

* Build a realistic frontend application similar to real-world job trackers
* Demonstrate:

  * Component-driven React architecture
  * Drag-and-drop UX patterns
  * Accessible modal and form design
  * State management without a backend
  * Clean, maintainable TypeScript code
  * Focus on **usability and clarity over feature bloat**

---

## 🔮 Future Improvements

* Backend persistence
* User authentication

---

## 📸 Screenshots


| Desktop View | Analytics |
|--------------|-----------|
| ![](./screenshots/desktop.png) | ![](./screenshots/analytics.png) |

| Application Details | Add Modal |
|---------------------|------------------|
| ![](./screenshots/application-details.png) | ![](./screenshots/modal.png) |

| Drag  | Mobile View |
|-------------|-------------|
| ![](./screenshots/drag.png) | ![](./screenshots/mobile.png) |

---

## 👤 Author

**Ethan**
Frontend Developer
Portfolio Project – 2026

Just say the word 👌
