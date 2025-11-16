import { motion } from "motion/react";
import { 
  LayoutDashboard, 
  BarChart3, 
  PlayCircle, 
  Shield, 
  Settings, 
  LogOut,
  Zap
} from "lucide-react";
import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
  activePage: string;
  userRole: 'admin' | 'user';
  onNavigate: (page: string) => void;
  onLogout: () => void;
  onRoleToggle?: () => void;
}

export function AppLayout({ children, activePage, userRole, onNavigate, onLogout, onRoleToggle }: AppLayoutProps) {
  const baseNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'sims', label: 'Sims', icon: PlayCircle },
    { id: 'analytics', label: 'Results', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];
  
  const adminNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'sims', label: 'Sims', icon: PlayCircle },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'admin', label: 'Admin', icon: Shield },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const navItems = userRole === 'admin' ? adminNavItems : baseNavItems;
  const isAdmin = userRole === 'admin';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 flex">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        className={`w-64 ${isAdmin ? 'bg-gradient-to-b from-green-50 to-white' : 'bg-white'} border-r ${isAdmin ? 'border-green-200' : 'border-neutral-200'} flex flex-col fixed h-screen z-40`}
      >
        {/* Logo with Admin Badge */}
        <div className={`p-6 border-b ${isAdmin ? 'border-green-200' : 'border-neutral-200'}`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${isAdmin ? 'bg-gradient-to-br from-green-900 to-green-800' : 'bg-gradient-to-br from-blue-900 to-blue-800'} rounded-xl flex items-center justify-center shadow-lg ${isAdmin ? 'shadow-green-900/20' : 'shadow-blue-900/20'}`}>
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-lg text-neutral-900">Critical AI</h1>
              <p className="text-xs text-neutral-500">Training Platform</p>
            </div>
          </div>
          {isAdmin && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 px-3 py-1.5 bg-green-100 border border-green-200 rounded-lg"
            >
              <p className="text-xs text-green-900">
                <Shield className="w-3 h-3 inline mr-1" />
                Admin Mode
              </p>
            </motion.div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? isAdmin 
                      ? 'bg-green-50 text-green-700 shadow-sm'
                      : 'bg-blue-50 text-blue-700 shadow-sm'
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
                {item.id === 'admin' && (
                  <Shield className="w-3 h-3 ml-auto text-green-700" />
                )}
              </motion.button>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-neutral-200">
          {/* Role Toggle (Development Only) */}
          {onRoleToggle && (
            <motion.button
              onClick={onRoleToggle}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full flex items-center justify-between px-4 py-2.5 mb-3 rounded-xl transition-all text-sm ${
                isAdmin
                  ? 'bg-green-100 border border-green-200 text-green-900 hover:bg-green-200'
                  : 'bg-blue-100 border border-blue-200 text-blue-900 hover:bg-blue-200'
              }`}
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                {isAdmin ? 'Switch to User' : 'Switch to Admin'}
              </span>
              <span className="text-xs opacity-70">DEV</span>
            </motion.button>
          )}
          
          <div className="flex items-center gap-3 px-4 py-3 mb-2 rounded-xl bg-neutral-50">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center">
              <span className="text-xs text-white">JD</span>
            </div>
            <div className="flex-1">
              <p className="text-sm text-neutral-900">Critical AI</p>
              <p className="text-xs text-neutral-500">Training Platform</p>
            </div>
          </div>
          <motion.button
            onClick={onLogout}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-neutral-600 hover:bg-red-50 hover:text-red-600 transition-all text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </motion.button>
        </div>
      </motion.aside>

      {/* Main content */}
      <main className="flex-1 ml-64">
        {children}
      </main>
    </div>
  );
}