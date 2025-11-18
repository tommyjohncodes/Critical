# Critical - AI Voice Simulation Platform

## Overview
Critical is a React-based web application for AI-powered voice simulation training. It's built with Vite, React 18, TypeScript, and **MUI Joy UI**, featuring a modern, professional enterprise UI design.

## Project Information
- **Original Design**: [Figma Design](https://www.figma.com/design/A3DQwqGR14989OtDg4t1gT/Critical)
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6.3.5
- **UI Framework**: MUI Joy UI (migrated from Tailwind CSS)
- **Styling**: Emotion CSS-in-JS with Joy UI theming
- **Icons**: Lucide React
- **Deployment**: Configured for Replit deployment

## Project Structure
```
├── src/
│   ├── components/         # React components (Joy UI)
│   │   ├── AppLayout.tsx   # Main app layout with sidebar
│   │   ├── Admin.tsx       # Admin dashboard
│   │   ├── Analytics.tsx   # Analytics view
│   │   ├── Dashboard.tsx   # Main dashboard
│   │   ├── Settings.tsx    # User settings
│   │   ├── SimsLibrary.tsx # Simulation library
│   │   ├── VoiceSession.tsx # Voice simulation session
│   │   ├── SimulationBuilder.tsx # Simulation creation
│   │   ├── Login.tsx       # Authentication (unchanged)
│   │   └── ...            # Landing page components (unchanged)
│   ├── utils/
│   │   └── layout.ts       # Layout utility functions
│   ├── assets/            # Static assets
│   ├── styles/
│   │   └── globals.css    # Minimal global styles and fonts
│   ├── App.tsx            # Main app component with CssVarsProvider
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
- **Responsive Design**: Mobile-first with responsive breakpoints
- **Modern UI**: Clean, professional Joy UI components

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
- **MUI Joy UI** - Complete component library with theming
- **Emotion** (@emotion/react, @emotion/styled) - CSS-in-JS styling
- **Lucide React** - Icon library
- **Brand Colors**: Primary #6082B6 (blue), Sidebar #E5E4E2 (platinum gray)

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

### **2025-11-18**: Complete UI Migration to MUI Joy UI
- **Migrated entire app from Tailwind CSS to MUI Joy UI**
  - Installed @mui/joy, @emotion/react, @emotion/styled, @mui/icons-material
  - Created custom Joy UI theme with brand colors (#6082B6 primary blue)
  - Configured CssVarsProvider with Inter/Open Sans typography
  
- **Component Migrations**:
  - AppLayout: Migrated to Joy UI with Sheet, Box, List components; added mobile Header
  - Dashboard: Converted to Card, Typography, LinearProgress components
  - Analytics: Migrated filters to Joy UI Select/Input, wrapped charts in Cards
  - SimsLibrary: Converted to Card components with Chip status badges
  - Admin: Migrated tables to Sheet/Box layout with Joy UI components
  - Settings: Converted all form controls to Joy UI Input, Select, Switch
  - VoiceSession: Migrated control panels to Card/Sheet with Modal
  - SimulationBuilder: Converted modal to Joy UI Modal with FormControl components

- **Removed Tailwind CSS**:
  - Uninstalled tailwindcss, @tailwindcss/postcss, autoprefixer
  - Removed tailwind.config.js and postcss.config.js
  - Cleaned globals.css to keep only fonts and minimal global styles

- **Preserved Functionality**:
  - Landing page and login page remain unchanged (Tailwind-based)
  - All business logic, state management, and routing preserved
  - All existing features and interactions maintained

- **Created utility helpers**:
  - src/utils/layout.ts for sidebar toggle and responsive helpers
  - Implemented CSS variables (--Header-height, --Sidebar-width)

### **2025-11-16**: Initial Replit environment setup
- Configured Vite for port 5000 with 0.0.0.0 host
- Added `allowedHosts: true` to allow Replit's dynamic proxy URLs
- Added TypeScript configuration with React JSX support
- Set up development workflow and deployment configuration
- Added .gitignore and project documentation

## UI Design System

### Color Scheme
- **Primary**: #6082B6 (Brand Blue) - used for buttons, accents, active states
- **Sidebar Background**: #E5E4E2 (Platinum Gray)
- **Selected Item**: #e7e5dc (Warm Beige)
- **Neutral Palette**: Joy UI default grays for text and backgrounds

### Typography
- **Headings**: Inter font family
- **Body Text**: Open Sans font family
- **Landing Page**: Satoshi font family (preserved from original)

### Components
All app components use MUI Joy UI primitives:
- Box, Card, Sheet for layouts
- Typography for text
- Button, IconButton for actions
- Input, Select, Switch, Textarea for forms
- Chip for status badges
- Modal, ModalDialog for overlays
- List, ListItem, ListItemButton for navigation
- LinearProgress for progress indicators

### Responsive Design
- Mobile-first approach with `sx` prop breakpoints
- Mobile header visible on xs/sm screens
- Sidebar persistent on md+ screens, drawer on mobile
- Grid layouts adapt: `gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }`

## Deployment
Configured for Replit autoscale deployment:
- Build command: `npm run build`
- Run command: Production-ready server on port 5000

## Notes
- **App section** uses MUI Joy UI with Emotion CSS-in-JS
- **Landing/Login sections** preserve original Tailwind CSS styling
- Custom fonts: Inter (headings), Open Sans (body), Satoshi (landing pages)
- All app components follow Joy UI patterns for consistency
- Theme configuration in App.tsx with CssVarsProvider
