# Megálló Pizzéria

A modern, responsive pizzeria website built with Next.js 14, featuring an interactive pizza creator, dynamic menu, and PWA support.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

### Pizza Creator
- Interactive ingredient selection with live preview
- Real-time price calculation
- Category-based ingredient organization (sauces, meats, vegetables, cheeses)
- Share your pizza creation via URL or native share API
- Submit custom pizza recipes

### Menu Section
- Tab-based category navigation
- Card grid layout with responsive design
- Search functionality (by name or ingredients)
- Sort by price (ascending/descending)
- Favorites system with localStorage persistence
- Popular/New badges with visual highlights

### Additional Features
- Scroll to top button
- Custom 404 page with animations
- PWA support (installable on mobile/desktop)
- Mobile-optimized responsive design
- Smooth Framer Motion animations
- Dark mode UI

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui |
| Animations | Framer Motion |
| Form Handling | React Hook Form + Zod |
| Icons | Lucide React |

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/skagraun/megallo-pizzeria.git

# Navigate to project directory
cd megallo-pizzeria

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── thank-you/         # Thank you page
│   └── not-found.tsx      # Custom 404 page
├── components/
│   ├── layout/            # Header, Footer
│   ├── pizza-creator/     # Pizza builder components
│   ├── sections/          # Page sections (Hero, Menu, Contact)
│   └── ui/                # shadcn/ui components
├── hooks/                 # Custom React hooks
├── lib/
│   └── data/             # Menu, ingredients, business data
└── types/                # TypeScript type definitions
```

## Environment Variables

Create a `.env.local` file for email functionality:

```env
RESEND_API_KEY=your_resend_api_key
EMAIL_TO=restaurant@example.com
```

## Screenshots

| Desktop | Mobile |
|---------|--------|
| Hero section with CTA | Responsive navigation |
| Interactive pizza creator | Compact menu cards |
| Tab-based menu | Touch-friendly favorites |

## License

MIT License - feel free to use this project for your own purposes.

## Author

**SkaSoft** - [skasoft.hu](https://www.skasoft.hu)
