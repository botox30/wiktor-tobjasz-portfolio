# Overview

This is a modern full-stack web application built as a personal portfolio website for Alex Rivera. The project showcases a creative developer and designer's work using a contemporary tech stack. It features a dark-themed, interactive single-page application with smooth animations and professional presentation of skills, projects, and contact information. The architecture follows a monorepo structure with separate client and server directories, using React for the frontend and Express.js for the backend, with PostgreSQL database integration via Drizzle ORM.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The client-side is built using **React 18** with **TypeScript** and follows a component-based architecture. The application uses **Vite** as the build tool and development server, providing fast hot module replacement and optimized builds. State management is handled through **TanStack Query** for server state and React's built-in hooks for local state.

The UI is constructed using **shadcn/ui** components built on top of **Radix UI** primitives, ensuring accessibility and consistent design patterns. **Tailwind CSS** provides utility-first styling with a custom dark theme configuration. The routing is handled by **Wouter**, a lightweight client-side router.

Key architectural decisions:
- Single-page application (SPA) with smooth scrolling navigation
- Component-driven development with reusable UI components
- Custom CSS properties for theme consistency
- Responsive design with mobile-first approach

## Backend Architecture
The server uses **Express.js** with **TypeScript** in ESM format. It follows a clean separation of concerns with distinct layers for routing, storage, and middleware. The application includes request logging middleware and error handling.

The storage layer is abstracted through an interface (`IStorage`) with a current in-memory implementation (`MemStorage`) that can be easily swapped for database persistence. API routes are prefixed with `/api` for clear separation from static content.

Key architectural decisions:
- Interface-based storage abstraction for flexibility
- Middleware-based request processing and logging
- Development and production environment separation
- Static file serving integrated with Vite in development

## Database Design
The application uses **Drizzle ORM** with **PostgreSQL** for data persistence. The schema defines a users table with basic authentication fields. Database migrations are managed through Drizzle Kit with a dedicated migrations directory.

The database connection uses **Neon Database** serverless driver for PostgreSQL, providing scalable cloud-based storage. The schema is defined using Drizzle's type-safe query builder with Zod validation schemas.

Key architectural decisions:
- Type-safe database operations with Drizzle ORM
- Schema validation using Zod
- Serverless database connection for scalability
- Migration-based database version control

## Styling and UI System
The application implements a comprehensive design system using **shadcn/ui** components with **Tailwind CSS**. The styling follows a dark theme with purple accents, custom CSS variables for consistent theming, and responsive design principles.

The component library includes over 30 UI components covering forms, navigation, feedback, and layout elements. Custom animations and transitions enhance the user experience with smooth interactions and visual feedback.

Key architectural decisions:
- Design system approach with reusable components
- CSS custom properties for theme flexibility
- Utility-first CSS with Tailwind
- Accessibility-first component design with Radix UI

# External Dependencies

## Frontend Dependencies
- **React 18** - Core UI library for component-based architecture
- **TypeScript** - Type safety and enhanced developer experience  
- **Vite** - Fast build tool and development server
- **TanStack Query** - Server state management and caching
- **Wouter** - Lightweight client-side routing
- **shadcn/ui** - Accessible component library built on Radix UI
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Icon library for consistent iconography

## Backend Dependencies
- **Express.js** - Web application framework for Node.js
- **Drizzle ORM** - Type-safe PostgreSQL ORM and query builder
- **Drizzle Kit** - Database migration and introspection tools
- **Neon Database Serverless** - PostgreSQL serverless driver
- **Zod** - Schema validation library
- **tsx** - TypeScript execution environment for development

## Development Tools
- **ESBuild** - Fast JavaScript bundler for production builds
- **PostCSS** - CSS processing with Autoprefixer
- **React Hook Form** - Form state management and validation
- **Class Variance Authority** - Utility for managing CSS class variants

## Database
- **PostgreSQL** - Primary database with Neon serverless hosting
- **connect-pg-simple** - PostgreSQL session store (configured but not actively used)

The application is designed to be deployed on platforms like Vercel or Netlify with the database hosted on Neon's serverless PostgreSQL platform.