import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Industries } from "./components/Industries";
import { SimulationPreview } from "./components/SimulationPreview";
import { FinalCTA } from "./components/FinalCTA";
import { Navigation } from "./components/Navigation";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { TrustedBy } from "./components/TrustedBy";
import { Testimonials } from "./components/Testimonials";
import { Login } from "./components/Login";
import { AppLayout } from "./components/AppLayout";
import { Dashboard } from "./components/Dashboard";
import { SimsLibrary } from "./components/SimsLibrary";
import { VoiceSession } from "./components/VoiceSession";
import { Analytics } from "./components/Analytics";
import { Admin } from "./components/Admin";
import { Settings } from "./components/Settings";
import { useState } from "react";
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

// Custom theme for Joy UI matching brand colors
const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#E8EDF5',
          100: '#C5D4E8',
          200: '#9EB8D9',
          300: '#779CCA',
          400: '#5A87BF',
          500: '#6082B6',  // Brand blue
          600: '#507AA8',
          700: '#436B94',
          800: '#375A80',
          900: '#2A4A6C',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
    },
  },
  fontFamily: {
    display: 'Inter, var(--joy-fontFamily-fallback)',
    body: 'Open Sans, var(--joy-fontFamily-fallback)',
  },
  components: {
    JoySheet: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<'admin' | 'user'>('user');
  const [activePage, setActivePage] = useState('dashboard');
  const [activeSimulation, setActiveSimulation] = useState<string | null>(null);

  // Show login page
  if (showLogin && !isLoggedIn) {
    return <Login onBack={() => setShowLogin(false)} onLogin={(role) => {
      setUserRole(role);
      setIsLoggedIn(true);
    }} />;
  }

  // Show app interface after login
  if (isLoggedIn) {
    // Show voice session if simulation is active
    if (activeSimulation) {
      return (
        <CssVarsProvider theme={theme} disableTransitionOnChange>
          <CssBaseline />
          <VoiceSession
            simulationId={activeSimulation}
            onEnd={() => setActiveSimulation(null)}
            onComplete={() => {
              setActiveSimulation(null);
              setActivePage('analytics');
            }}
          />
        </CssVarsProvider>
      );
    }

    // Show main app layout
    return (
      <CssVarsProvider theme={theme} disableTransitionOnChange>
        <CssBaseline />
        <AppLayout
          activePage={activePage}
          userRole={userRole}
          onNavigate={(page) => setActivePage(page)}
          onRoleToggle={() => setUserRole(userRole === 'admin' ? 'user' : 'admin')}
          onLogout={() => {
            setIsLoggedIn(false);
            setActivePage('dashboard');
            setUserRole('user');
          }}
        >
          {activePage === 'dashboard' && (
            <Dashboard 
              userRole={userRole}
              onNavigate={(page, simId) => {
                if (simId) {
                  setActiveSimulation(simId);
                } else if (page === 'session') {
                  setActiveSimulation('1');
                } else {
                  setActivePage(page);
                }
              }} 
            />
          )}
          {activePage === 'analytics' && <Analytics userRole={userRole} onRunSimulation={(simId) => setActiveSimulation(simId)} />}
          {activePage === 'sims' && (
            <SimsLibrary 
              userRole={userRole}
              onRunSimulation={(simId) => setActiveSimulation(simId)} 
            />
          )}
          {activePage === 'admin' && <Admin />}
          {activePage === 'settings' && <Settings />}
        </AppLayout>
      </CssVarsProvider>
    );
  }

  // Show landing page by default
  return (
    <div className="min-h-screen bg-white text-neutral-900 landing-section">
      <AnimatedBackground />
      <Navigation onLoginClick={() => setShowLogin(true)} />
      <Hero />
      <TrustedBy />
      <Features />
      <SimulationPreview />
      <Industries />
      <Testimonials />
      <FinalCTA />
    </div>
  );
}