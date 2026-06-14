# Parthasarathy Portfolio

A minimalist, architectural portfolio site for Parthasarathy K, built with React, Vite, TypeScript, Tailwind CSS, and Motion. The site presents projects, skills, experience, education, and contact details through an editorial "Engineered Elegance" aesthetic.

## Overview

This portfolio is designed to feel like a beautifully typeset technical paper — precise, architectural, and crafted. It uses a sophisticated color palette of Midnight Slate, Gold, Violet, and Teal, with sharp typography (Cormorant Garamond + DM Sans) and a unique architectural grid reveal signature animation.

## Features

- Hero section with availability status and architectural stats.
- Project showcase with temporal context (year stamps) and status tracking.
- Technical stack presented as structured "Technical Specification" containers.
- Experience and education sections with a clean, structural timeline.
- Signature "Architectural Grid Reveal" on-scroll animations.
- Responsive design optimized for high-end readability across all devices.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Motion
- Lucide React

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Type check

```bash
npm run lint
```

## Project Structure

```text
.
├── index.html
├── package.json
├── src/
│   ├── App.tsx
│   ├── data.ts          (Central Data Hub)
│   ├── data/            (JSON Data Folder)
│   │   ├── personalInfo.json
│   │   ├── projects.json
│   │   ├── skills.json
│   │   ├── experience.json
│   │   ├── education.json
│   │   └── certifications.json
│   ├── index.css
│   ├── main.tsx
│   ├── types.ts
│   └── components/
│       ├── BackgroundEffect.tsx
│       ├── Header.tsx
│       ├── ProjectCard.tsx
│       └── SkillMeter.tsx
└── README.md
```

## Content Sections

- Hero: name, role, availability pill, CTA buttons, and high-level metrics.
- Projects: highlighted work with year stamps, status badges, and technology tags.
- Skills: structured containers presenting technical stack categorizations.
- Experience: professional history with structural markers.
- Education: academic background with institutional details.
- Contact: direct communication channels and secure message terminal.

## Design Philosophy

The site follows an "Engineered Elegance" concept, moving from decorative to semantic design. Every color and element has a purpose. Gold is reserved for interaction, Violet for structure, and Teal for success/availability. The typography pairing of Cormorant Garamond and DM Sans provides a high-end editorial voice.

## Implementation Notes

- Global styling lives in `src/index.css` using Tailwind v4 theme variables.
- Page content is fully JSON-driven, with individual files stored in `src/data/`.
- `src/data.ts` serves as the centralized hub for exporting all structured data.
- Shared content models are defined in `src/types.ts`.
- The main experience is assembled in `src/App.tsx`.

## Deployment

This project is a standard Vite app. Build it with `npm run build` and deploy the generated `dist` folder to any static hosting provider.
