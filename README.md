<h1 align="center">✨ Layout ✨</h1>
<p align="center">
  <strong>A modern boilerplate for <em>React (Vite) + Tailwind</em> frontend and <em>Django + DRF</em> backend.</strong><br/>
  Build fast ⚡, Ship faster 🚀, Sleep less 😴
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React-blue?logo=react" />
  <img src="https://img.shields.io/badge/Styling-TailwindCSS-06B6D4?logo=tailwindcss" />
  <img src="https://img.shields.io/badge/Backend-Django-092E20?logo=django" />
  <img src="https://img.shields.io/badge/API-DRF%20%2B%20JWT-orange" />
  <img src="https://img.shields.io/badge/CORS-Enabled-success" />
</p>

---

## 🔥 What is Layout?
Layout is a **plug-and-play project starter** that combines a modern frontend with a robust backend:
- ⚡ Vite + React + Tailwind for blazing-fast UI
- 🛠 Django + DRF for APIs
- 🔐 JWT Authentication out-of-the-box
- 🌍 CORS pre-configured
- 🧩 Minimal yet powerful project structure

---

## ✨ Features
- 🧩 JWT Auth (login, register, refresh)
- 🎨 Tailwind styling
- ⚡ Hot reload (Vite + Django runserver)
- 🐳 Optional Docker support
- 🛠 Clean, developer-friendly setup

---

## 🚀 Quickstart

### Backend — Django
```bash
cd backend

# Create & activate virtual environment
python -m venv env
# Windows:
.\env\Scripts\activate
# macOS/Linux:
source env/bin/activate

# Install deps
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start server
python manage.py runserver

cd frontend

# Install dependencies
npm install   # or npm ci

# Start dev server
npm run dev
