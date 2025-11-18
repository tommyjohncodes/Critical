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
        <VoiceSession
          simulationId={activeSimulation}
          onEnd={() => setActiveSimulation(null)}
          onComplete={() => {
            setActiveSimulation(null);
            setActivePage('analytics');
          }}
        />
      );
    }

    // Show main app layout
    return (
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