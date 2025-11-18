import { User, Bell, Lock, Palette, Shield } from "lucide-react";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Switch from '@mui/joy/Switch';

export function Settings() {
  const settingsSections = [
    {
      title: 'Profile',
      icon: User,
      items: [
        { label: 'Full Name', value: 'John Doe', type: 'input' },
        { label: 'Email', value: 'john@company.com', type: 'input' },
        { label: 'Job Title', value: 'Training Specialist', type: 'input' },
        { label: 'Department', value: 'Customer Service', type: 'select' },
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      items: [
        { label: 'Email Notifications', value: true, type: 'toggle' },
        { label: 'Session Reminders', value: true, type: 'toggle' },
        { label: 'Performance Updates', value: false, type: 'toggle' },
        { label: 'Weekly Summary', value: true, type: 'toggle' },
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        { label: 'Two-Factor Authentication', value: false, type: 'toggle' },
        { label: 'Session Recording', value: true, type: 'toggle' },
        { label: 'Data Sharing', value: false, type: 'toggle' },
      ]
    },
  ];

  return (
    <Box sx={{ p: 4, maxWidth: '1000px', mx: 'auto' }}>
      <Box sx={{ mb: 4 }}>
        <Typography level="h2" sx={{ mb: 0.5 }}>
          Settings
        </Typography>
        <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
          Manage your account preferences and settings
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {settingsSections.map((section) => {
          const Icon = section.icon;
          return (
            <Card key={section.title} variant="outlined">
              <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={20} />
                </Sheet>
                <Typography level="title-md">{section.title}</Typography>
              </Box>

              <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
                {section.items.map((item) => (
                  <Box
                    key={item.label}
                    sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
                  >
                    <Box sx={{ flex: 1 }}>
                      <Typography level="body-sm">{item.label}</Typography>
                    </Box>
                    
                    {item.type === 'input' && (
                      <Input
                        defaultValue={item.value as string}
                        sx={{ width: 256 }}
                        size="sm"
                      />
                    )}

                    {item.type === 'select' && (
                      <Select
                        defaultValue={item.value as string}
                        sx={{ width: 256 }}
                        size="sm"
                      >
                        <Option value={item.value as string}>{item.value as string}</Option>
                        <Option value="Sales">Sales</Option>
                        <Option value="Medical">Medical</Option>
                        <Option value="Banking">Banking</Option>
                      </Select>
                    )}

                    {item.type === 'toggle' && (
                      <Switch
                        defaultChecked={item.value as boolean}
                        sx={{
                          '--Switch-thumbSize': '20px',
                          '--Switch-trackWidth': '48px',
                          '--Switch-trackHeight': '24px',
                          '--Switch-trackBackground': (theme) =>
                            item.value ? '#6082B6' : theme.vars.palette.neutral[300],
                          '&:hover': {
                            '--Switch-trackBackground': (theme) =>
                              item.value ? '#5070A0' : theme.vars.palette.neutral[400],
                          },
                        }}
                      />
                    )}
                  </Box>
                ))}
              </Box>
            </Card>
          );
        })}

        <Card variant="outlined">
          <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Sheet
              variant="soft"
              color="neutral"
              sx={{
                width: 40,
                height: 40,
                borderRadius: 'sm',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Lock size={20} />
            </Sheet>
            <Typography level="title-md">Change Password</Typography>
          </Box>

          <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Typography level="body-sm" sx={{ mb: 1, color: 'text.secondary' }}>
                Current Password
              </Typography>
              <Input
                type="password"
                placeholder="••••••••"
              />
            </Box>
            <Box>
              <Typography level="body-sm" sx={{ mb: 1, color: 'text.secondary' }}>
                New Password
              </Typography>
              <Input
                type="password"
                placeholder="••••••••"
              />
            </Box>
            <Box>
              <Typography level="body-sm" sx={{ mb: 1, color: 'text.secondary' }}>
                Confirm New Password
              </Typography>
              <Input
                type="password"
                placeholder="••••••••"
              />
            </Box>
            <Button
              fullWidth
              sx={{
                bgcolor: '#6082B6',
                '&:hover': {
                  bgcolor: '#5070A0'
                }
              }}
            >
              Update Password
            </Button>
          </Box>
        </Card>

        <Card variant="outlined">
          <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider', display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Sheet
              variant="soft"
              color="neutral"
              sx={{
                width: 40,
                height: 40,
                borderRadius: 'sm',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Palette size={20} />
            </Sheet>
            <Typography level="title-md">Preferences</Typography>
          </Box>

          <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography level="body-sm">Language</Typography>
              <Select defaultValue="English" sx={{ width: 256 }} size="sm">
                <Option value="English">English</Option>
                <Option value="Spanish">Spanish</Option>
                <Option value="French">French</Option>
                <Option value="German">German</Option>
              </Select>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography level="body-sm">Time Zone</Typography>
              <Select defaultValue="PST" sx={{ width: 256 }} size="sm">
                <Option value="PST">PST (UTC-8)</Option>
                <Option value="EST">EST (UTC-5)</Option>
                <Option value="GMT">GMT (UTC+0)</Option>
                <Option value="CET">CET (UTC+1)</Option>
              </Select>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography level="body-sm">Theme</Typography>
              <Select defaultValue="Light" sx={{ width: 256 }} size="sm">
                <Option value="Light">Light</Option>
                <Option value="Dark">Dark</Option>
                <Option value="Auto">Auto</Option>
              </Select>
            </Box>
          </Box>
        </Card>

        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2 }}>
          <Button variant="soft" color="neutral">
            Cancel
          </Button>
          <Button
            sx={{
              bgcolor: '#6082B6',
              '&:hover': {
                bgcolor: '#5070A0'
              }
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
