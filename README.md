Notion Clone
A responsive, dynamic React/Next.js clone of Notion’s header and navigation system, featuring:

Server-driven menu data fetched dynamically from a Next.js API route

Fully responsive layout with desktop dropdown menus and a mobile hamburger overlay menu

Custom dropdown interactions and animations built with Tailwind CSS

Lightweight client-side logic for menu toggling and interaction handling

Built with Next.js 13 app directory conventions and React hooks for clean structure

Features
Dynamic Menu Data: Menu items and dropdown data are fetched from a Next.js API route (/api/menu), enabling easy updates without code changes

Desktop Navigation: Hover and focus accessible dropdown menus with animated fade-in effect

Mobile Navigation: Hamburger menu toggles a full-screen overlay with smooth open/close and responsive menu items

Accessible: Keyboard navigable dropdown and aria attributes for screen readers

Responsive Design: Tailwind CSS ensures smooth scaling and layout across all device sizes

Custom Analytics Ready: Dropdown items include attributes for custom interaction tracking (optional integration)

Performance Optimized: Minimal client-side state and efficient event handling

Installation
Clone the repo and install dependencies:

bash
git clone https://github.com/nihal9956/Notion-clone.git
cd notion-clone
## npm install
Run the development server:

bash
## npm run dev
Access the app at http://localhost:3000

Project Structure
app/api/menu/route.ts: API route serving menu data as JSON

app/components/Header.tsx: Header React component implementing desktop and mobile menus

public/: Static assets like images and logos (notion.png, header-img.avif, etc.)

styles/ or inline styles within Header for animations and responsive tweaks

Customization
Update menu data in app/api/menu/route.ts to modify navigation items

Modify Tailwind CSS classes in Header.tsx to adjust styling and layout

Add custom analytics by enhancing event handlers on dropdown elements using the included data-analytics-label attributes

Notes
The project uses Next.js 13 app directory routing conventions — API routes require files named route.ts inside appropriately named folders

Client-side rendering is limited to interactive parts to benefit from Server Components performance advantages

Screenshots and assets mimic Notion’s branding but can be replaced freely

License
This project is for educational and personal use. No affiliation with Notion Labs.
Please use responsibly and do not replicate proprietary content beyond learning purposes.

