# Suvarna Rasoi 🍽️

A modern, elegant website for a premium Indian fine dining restaurant, built with React and TypeScript.

## About

Suvarna Rasoi (meaning "Golden Kitchen" in Hindi) is a web application showcasing the luxury dining experience of a high-end Indian restaurant. The site features smooth animations, interactive elements, and a carefully designed interface that reflects the sophistication of fine dining.

## Features

- 🎨 **Modern UI/UX** - Clean, responsive design with smooth animations
- 🍷 **Interactive Beverage Gallery** - Browse curated Indian beverages and premium spirits with filtering options
- 📖 **Tasting Menu** - Detailed course presentations with spotlight hover effects
- 👨‍🍳 **Chef's Profile** - Dedicated section for the executive chef's story and achievements
- 🎉 **Private Events** - Inquiry form for special occasions and private dining
- 📰 **Culinary Journal** - Blog section featuring stories about Indian cuisine and heritage
- 📸 **Photo Gallery** - Visual showcase of dishes and restaurant ambiance
- 📞 **Contact & Reservations** - Easy-to-use booking system

## Tech Stack

**Frontend:**
- React 18 with TypeScript
- Vite for blazing-fast development
- Tailwind CSS for styling
- Framer Motion for animations

**UI Components:**
- shadcn/ui component library
- Radix UI primitives
- Lucide icons

**Form & Data Management:**
- React Hook Form
- TanStack Query
- Zod validation

## Getting Started

### Prerequisites

Make sure you have Node.js (v16+) and npm installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd suvarna-rasoi
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The site will open at `http://localhost:8081`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Check code quality |
| `npm run test` | Run tests |

## Project Structure

```
suvarna-rasoi/
├── src/
│   ├── components/          # React components
│   │   ├── Navigation.tsx
│   │   ├── HeroSection.tsx
│   │   ├── TastingMenu.tsx
│   │   ├── ChefSpotlight.tsx
│   │   ├── WineCellar.tsx
│   │   ├── PrivateDining.tsx
│   │   ├── JournalSection.tsx
│   │   ├── FooterSection.tsx
│   │   └── ui/              # Reusable UI components
│   ├── pages/               # Page components
│   ├── assets/              # Images and media
│   ├── lib/                 # Utilities and helpers
│   ├── App.tsx              # Main app component
│   └── index.css            # Global styles
├── public/                  # Static assets
└── package.json
```

## Design Philosophy

The design focuses on creating a premium, luxurious feel through:

- **Golden Accents** - Warm gold gradients and highlights throughout
- **Dark Theme** - Sophisticated dark backgrounds with high contrast
- **Smooth Animations** - Subtle micro-interactions that enhance UX
- **Glassmorphism** - Modern frosted glass effects
- **Typography** - Elegant font pairings for readability and style
- **Responsive** - Mobile-first design that works on all devices

## Key Highlights

### Interactive Tasting Menu
Each course card features a spotlight effect on hover, creating an engaging browsing experience.

### Beverage Collection
Filter drinks by region (North India, South India, Pan-India) and type (Traditional, Fusion, Premium Spirits).

### Event Inquiry System
Elegant form with validation for private dining and special event bookings.

## Browser Compatibility

Tested and optimized for:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Development Notes

- Uses Vite for fast HMR (Hot Module Replacement)
- TypeScript for type safety
- ESLint configured for code quality
- Component-based architecture for maintainability

## Future Enhancements

- [ ] Online reservation system integration
- [ ] Multi-language support (Hindi, English)
- [ ] Customer reviews section
- [ ] Menu PDF download
- [ ] Instagram feed integration

## License

© 2025 Suvarna Rasoi. All rights reserved.

## Contact

For inquiries about the restaurant or this project, please use the contact form on the website.

---

Built with ❤️ for lovers of fine Indian cuisine
