# Wiktor Tobjasz - Portfolio Website

A modern, dark-themed portfolio website showcasing web development projects with animated snowflake effects and purple accent colors.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Dark theme with purple accents and glass-card effects
- **Animated Effects**: Floating snowflake particles and smooth transitions
- **Project Showcase**: Interactive portfolio section with GIF demonstrations
- **Skills Display**: Comprehensive technology stack presentation
- **Smooth Navigation**: Single-page application with smooth scrolling

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, shadcn/ui components
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Icons**: Lucide React, Font Awesome

## 🎯 Projects Featured

1. **Barbershop Website** - Polish barbershop with appointment booking system
2. **Italian Restaurant** - "Bella Vista" restaurant with menu and reservations
3. **Beauty Salon** - "Bella Beauty" salon with Polish interface and booking

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions and configs
│   │   └── hooks/          # Custom React hooks
├── server/                 # Backend Express.js application
├── shared/                 # Shared types and schemas
└── public/                 # Static assets
```

## 🚀 Quick Start

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- PostgreSQL database (optional)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/wiktor-tobjasz-portfolio.git
cd wiktor-tobjasz-portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (optional):

```bash
cp .env.example .env
# Edit .env with your database configuration
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5000`

## 🌐 Deployment

### GitHub Pages Deployment

1. Build the project:

```bash
npm run build
```

2. The built files will be in the `dist` directory
3. Deploy to GitHub Pages using the Actions workflow (see `.github/workflows/deploy.yml`)

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set the build command to `npm run build`
3. Set the output directory to `dist`
4. Deploy automatically on every push to main branch

### Netlify Deployment

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

## 🎨 Customization

### Colors

Edit the color variables in `client/src/index.css`:

```css
:root {
  --primary: hsl(260, 100%, 70%);
  --accent: hsl(260, 86%, 69%);
  /* Add your custom colors */
}
```

### Content

- Update personal information in `client/src/components/hero-section.tsx`
- Modify project details in `client/src/components/portfolio-section.tsx`
- Edit skills in `client/src/components/skills-section.tsx`

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

_Built with ❤️ and lots of coffee_
