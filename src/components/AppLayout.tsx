import { 
  LayoutDashboard, 
  BarChart3, 
  PlayCircle, 
  Shield, 
  Settings, 
  LogOut,
  Zap,
  Menu as MenuIcon
} from "lucide-react";
import { ReactNode } from "react";
import Box from '@mui/joy/Box';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import IconButton from '@mui/joy/IconButton';
import GlobalStyles from '@mui/joy/GlobalStyles';
import { toggleSidebar, closeSidebar } from '../utils/layout';

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
    <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
      <GlobalStyles
        styles={{
          ':root': {
            '--Header-height': '52px',
            '--Sidebar-width': '256px',
          },
          '@media (min-width: 900px)': {
            ':root': {
              '--Header-height': '0px',
            },
          },
        }}
      />
      
      {/* Mobile Header */}
      <Sheet
        sx={{
          display: { xs: 'flex', md: 'none' },
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'fixed',
          top: 0,
          width: '100vw',
          height: 'var(--Header-height)',
          zIndex: 9995,
          p: 2,
          gap: 1,
          borderBottom: '1px solid',
          borderColor: 'divider',
          boxShadow: 'sm',
        }}
      >
        <IconButton
          onClick={toggleSidebar}
          variant="outlined"
          color="neutral"
          size="sm"
        >
          <MenuIcon />
        </IconButton>
        <Typography level="title-md" sx={{ fontWeight: 600 }}>
          Critical AI
        </Typography>
        <Box sx={{ width: 40 }} /> {/* Spacer for centering */}
      </Sheet>

      {/* Sidebar */}
      <Sheet
        id="sidebar"
        sx={{
          position: { xs: 'fixed', md: 'sticky' },
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
            md: 'none',
          },
          transition: 'transform 0.4s, width 0.4s',
          zIndex: 9998,
          height: '100dvh',
          width: 'var(--Sidebar-width)',
          top: 0,
          p: 2,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRight: '1px solid',
          borderColor: 'divider',
          backgroundColor: '#E5E4E2',
          '&.sidebar-open': {
            '--SideNavigation-slideIn': '1',
          },
        }}
      >
        {/* Logo with Admin Badge */}
        <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
          <Sheet
            sx={{
              width: 36,
              height: 36,
              borderRadius: 'sm',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#6082B6',
            }}
          >
            <Zap size={16} color="white" />
          </Sheet>
          <Box sx={{ flex: 1 }}>
            <Typography level="title-sm" sx={{ fontWeight: 600 }}>
              Critical AI
            </Typography>
            <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
              Training Platform
            </Typography>
          </Box>
        </Box>

        {isAdmin && (
          <Sheet
            variant="soft"
            color="neutral"
            sx={{
              p: 1,
              borderRadius: 'sm',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Shield size={12} />
            <Typography level="body-xs" sx={{ fontWeight: 500 }}>
              Admin Mode
            </Typography>
          </Sheet>
        )}

        {/* Navigation */}
        <List
          size="sm"
          sx={{
            gap: 0.5,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            
            return (
              <ListItem key={item.id}>
                <ListItemButton
                  selected={isActive}
                  onClick={() => {
                    onNavigate(item.id);
                    closeSidebar();
                  }}
                  sx={{
                    backgroundColor: isActive ? '#e7e5dc' : 'transparent',
                    '&:hover': {
                      backgroundColor: isActive ? '#e7e5dc' : 'neutral.100',
                    },
                  }}
                >
                  <Icon size={16} />
                  <ListItemContent>
                    <Typography level="title-sm">{item.label}</Typography>
                  </ListItemContent>
                  {item.id === 'admin' && isAdmin && (
                    <Shield size={12} style={{ opacity: 0.6 }} />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        {/* User section */}
        <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 1 }}>
          {/* Role Toggle (Development Only) */}
          {onRoleToggle && (
            <Sheet
              variant="soft"
              color="neutral"
              sx={{
                p: 1.5,
                borderRadius: 'sm',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'neutral.200',
                },
              }}
              onClick={onRoleToggle}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Shield size={14} />
                  <Typography level="body-xs" sx={{ fontWeight: 500 }}>
                    {isAdmin ? 'Switch to User' : 'Switch to Admin'}
                  </Typography>
                </Box>
                <Typography level="body-xs" sx={{ opacity: 0.6, fontSize: 10 }}>
                  DEV
                </Typography>
              </Box>
            </Sheet>
          )}
          
          <Sheet
            variant="soft"
            color="neutral"
            sx={{
              p: 1.5,
              borderRadius: 'sm',
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
            }}
          >
            <Sheet
              sx={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#6082B6',
              }}
            >
              <Typography level="body-xs" sx={{ color: 'white', fontWeight: 600, fontSize: 11 }}>
                JD
              </Typography>
            </Sheet>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography level="title-sm" sx={{ fontSize: 12, fontWeight: 500 }}>
                John Doe
              </Typography>
              <Typography level="body-xs" sx={{ fontSize: 11, color: 'text.secondary' }}>
                john@company.com
              </Typography>
            </Box>
          </Sheet>
          
          <ListItemButton
            onClick={onLogout}
            sx={{
              gap: 1.5,
              '&:hover': {
                backgroundColor: 'danger.50',
                color: 'danger.600',
              },
            }}
          >
            <LogOut size={16} />
            <Typography level="title-sm">Sign Out</Typography>
          </ListItemButton>
        </Box>
      </Sheet>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100dvh',
          gap: 1,
          backgroundColor: 'background.surface',
          px: { xs: 2, md: 3 },
          pt: {
            xs: 'calc(12px + var(--Header-height))',
            md: 2,
          },
          pb: { xs: 2, md: 3 },
          overflow: 'auto',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
