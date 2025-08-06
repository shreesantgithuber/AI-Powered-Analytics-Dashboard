# 📊 Campaign Dashboard – NEP X

A responsive and interactive marketing dashboard built with **Next.js**, **Tailwind CSS**, and **TanStack Table**. This project provides real-time insights into campaign performance, including metrics, charts, and data management features.

---

## 🚀 Features

- ✅ Campaign listing with sorting, filtering, and pagination
- ✅ Add, edit, and delete campaigns with modal forms
- ✅ Dynamic charts: revenue line, conversion bar, demographics pie
- ✅ Glitch animation effects on scroll-triggered headings
- ✅ Responsive layout optimized for desktop and mobile
- ✅ Clean UI built with Tailwind CSS and Lucide icons

---

## 🛠 Tech Stack

- **Framework**: Next.js 13+ (App Router)
- **Styling**: Tailwind CSS
- **Table**: TanStack React Table
- **Charts**: Custom chart components (Line, Bar, Pie)
- **UI Components**: Custom Dialogs, Dropdowns, Buttons
- **Icons**: Lucide React

---

## 📁 Project Structure

AI-ANALYTICS-DASHBOARD/
├── .next/                  # Next.js build output
├── lib/                    # Utility functions and static data
├── node_modules/           # Project dependencies
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   └── app/
│       ├── components/     # Core dashboard components
│       │   ├── add-campaign-form.tsx
│       │   ├── bar-chart.tsx
│       │   ├── campaign-details-card.tsx
│       │   ├── data-table.tsx
│       │   ├── edit-campaign-form.tsx
│       │   ├── line-chart.tsx
│       │   ├── metric-card.tsx
│       │   ├── pie-chart.tsx
│       │   ├── theme-provider.tsx
│       │   └── theme-toggle.tsx
│       ├── components/ui/  # Reusable UI primitives
│       │   ├── badge.tsx
│       │   ├── button.tsx
│       │   ├── card.tsx
│       │   ├── dialog.tsx
│       │   ├── dropdown-menu.tsx
│       │   ├── form.tsx
│       │   ├── input.tsx
│       │   ├── label.tsx
│       │   ├── select.tsx
│       │   ├── skeleton.tsx
│       │   ├── sonner.tsx
│       │   ├── table.tsx
│       │   ├── tabs.tsx
│       │   ├── toggle-group.tsx
│       │   └── toggle.tsx
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── .gitignore
├── components.json
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json



---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/campaign-dashboard.git
cd campaign-dashboard

# Install dependencies
npm install

# Run the development server
npm run dev


