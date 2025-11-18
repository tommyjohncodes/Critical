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
    <div className="min-h-screen bg-white flex">
      {/* Sidebar */}
      <aside
        className="w-64 bg-neutral-50 border-r border-neutral-200 flex flex-col fixed h-screen z-40"
      >
        {/* Logo with Admin Badge */}
        <div className="p-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-neutral-900 rounded-md flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div className="flex-1">
              <h1 className="text-sm font-semibold text-neutral-900">Critical AI</h1>
              <p className="text-xs text-neutral-500">Training Platform</p>
            </div>
          </div>
          {isAdmin && (
            <div
              className="mt-3 px-2.5 py-1.5 bg-neutral-200 border border-neutral-300 rounded-md"
            >
              <p className="text-xs text-neutral-700 flex items-center gap-1.5">
                <Shield className="w-3 h-3" />
                Admin Mode
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md transition-all text-sm ${
                  isActive
                    ? 'bg-neutral-200 text-neutral-900'
                    : 'text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
                {item.id === 'admin' && isAdmin && (
                  <Shield className="w-3 h-3 ml-auto opacity-60" />
                )}
              </button>
            );
          })}
        </nav>

        {/* User section */}
        <div className="p-3 border-t border-neutral-200">
          {/* Role Toggle (Development Only) */}
          {onRoleToggle && (
            <button
              onClick={onRoleToggle}
              className="w-full flex items-center justify-between px-3 py-2 mb-2 rounded-md transition-all text-sm bg-neutral-200 border border-neutral-300 text-neutral-700 hover:bg-neutral-300"
            >
              <span className="flex items-center gap-2 text-xs">
                <Shield className="w-3.5 h-3.5" />
                {isAdmin ? 'Switch to User' : 'Switch to Admin'}
              </span>
              <span className="text-[10px] opacity-60">DEV</span>
            </button>
          )}
          
          <div className="flex items-center gap-3 px-3 py-2.5 mb-1.5 rounded-md bg-neutral-100">
            <div className="w-7 h-7 rounded-full bg-neutral-900 flex items-center justify-center">
              <span className="text-[11px] font-medium text-white">JD</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-neutral-900 truncate">John Doe</p>
              <p className="text-[11px] text-neutral-500 truncate">john@company.com</p>
            </div>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-neutral-600 hover:bg-red-50 hover:text-red-600 transition-all text-sm"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 bg-white">
        {children}
      </main>
    </div>
  );
}
