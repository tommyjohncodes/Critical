# Critical - AI Voice Simulation Platform

## Overview
Critical is a React-based web application for AI-powered voice simulation training. It's built with Vite, React 18, TypeScript, and Tailwind CSS, featuring a comprehensive UI component library using Radix UI primitives.

## Project Information
- **Original Design**: [Figma Design](https://www.figma.com/design/A3DQwqGR14989OtDg4t1gT/Critical)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI, shadcn/ui components
- **Deployment**: Configured for Replit deployment

## Project Structure
```
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Reusable UI components (Radix-based)
│   │   ├── figma/         # Figma-specific components
│   │   ├── Admin.tsx      # Admin dashboard
│   │   ├── Analytics.tsx  # Analytics view
│   │   ├── Dashboard.tsx  # Main dashboard
│   │   ├── Login.tsx      # Authentication
│   │   └── ...            # Other feature components
│   ├── assets/            # Static assets
│   ├── styles/            # Global styles
│   │   └── globals.css    # Tailwind theme and global styles
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Application entry point
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Key Features
- **Voice Simulation Sessions**: Interactive AI training simulations
- **Analytics Dashboard**: Track performance and metrics
- **Simulation Library**: Browse and manage training scenarios
- **Admin Panel**: Manage users and simulations
- **Role-Based Access**: Admin and user role support
- **Dark Mode**: Full dark mode support with theme switching

## Development Setup

### Running the App
The app runs on port 5000 with hot module reloading:
- **Development Server**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`

### Configuration
- **Port**: 5000 (configured for Replit webview)
- **Host**: 0.0.0.0 (allows Replit proxy access)
- **Allowed Hosts**: true (required for Replit's dynamic proxy URLs)
- **HMR**: Configured for port 5000

## Technology Stack

### Core
- React 18.3.1
- TypeScript
- Vite 6.3.5

### UI & Styling
- Tailwind CSS v4
- Radix UI Components
- Framer Motion for animations
- Lucide React icons
- next-themes for dark mode

### Data Visualization
- Recharts for charts and graphs

### Forms
- react-hook-form for form management
- input-otp for OTP inputs

### Other Libraries
- embla-carousel-react
- sonner (toast notifications)
- vaul (drawer component)

## Recent Changes
- **2025-11-16**: Initial Replit environment setup
  - Configured Vite for port 5000 with 0.0.0.0 host
  - Added `allowedHosts: true` to allow Replit's dynamic proxy URLs
  - Configured Tailwind CSS v4 with `@tailwindcss/postcss`
  - Added TypeScript configuration with React JSX support
  - Set up development workflow and deployment configuration
  - Added .gitignore and project documentation

## Deployment
Configured for Replit autoscale deployment:
- Build command: `npm run build`
- Run command: Production-ready server on port 5000

## Notes
- The app uses Tailwind CSS v4 with inline theme configuration
- Custom fonts: Inter (headings), Open Sans (body), Satoshi (landing pages)
- All components follow shadcn/ui patterns
- Dark mode managed through CSS variables and class switching
