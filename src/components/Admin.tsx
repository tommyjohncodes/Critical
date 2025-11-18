import { Users, BookOpen, TrendingUp, BarChart2, Plus, Search, MoreVertical } from "lucide-react";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Chip from '@mui/joy/Chip';
import LinearProgress from '@mui/joy/LinearProgress';

export function Admin() {
  const teamStats = [
    { label: 'Total Users', value: '48', change: '+8', icon: Users },
    { label: 'Active Sessions', value: '12', change: '+3', icon: BookOpen },
    { label: 'Avg. Team Score', value: '84%', change: '+2%', icon: TrendingUp },
    { label: 'Completion Rate', value: '92%', change: '+5%', icon: BarChart2 },
  ];

  const users = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah.j@company.com', role: 'Employee', sessions: 24, avgScore: 87, status: 'Active' },
    { id: 2, name: 'Michael Chen', email: 'michael.c@company.com', role: 'Employee', sessions: 18, avgScore: 82, status: 'Active' },
    { id: 3, name: 'Emily Rodriguez', email: 'emily.r@company.com', role: 'Manager', sessions: 32, avgScore: 91, status: 'Active' },
    { id: 4, name: 'David Kim', email: 'david.k@company.com', role: 'Employee', sessions: 15, avgScore: 78, status: 'Active' },
    { id: 5, name: 'Jessica Martinez', email: 'jessica.m@company.com', role: 'Employee', sessions: 21, avgScore: 85, status: 'Active' },
    { id: 6, name: 'Robert Taylor', email: 'robert.t@company.com', role: 'Admin', sessions: 28, avgScore: 89, status: 'Active' },
  ];

  const departments = [
    { name: 'Customer Service', users: 18, avgScore: 85, completionRate: 92 },
    { name: 'Sales', users: 12, avgScore: 82, completionRate: 88 },
    { name: 'Medical Staff', users: 10, avgScore: 91, completionRate: 95 },
    { name: 'Banking', users: 8, avgScore: 87, completionRate: 90 },
  ];

  return (
    <Box sx={{ p: 4, maxWidth: '1400px', mx: 'auto' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Typography level="h2" sx={{ mb: 0.5 }}>
            Admin Panel
          </Typography>
          <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
            Manage users, track progress, and view organization-wide reports
          </Typography>
        </Box>
        <Button
          startDecorator={<Plus size={16} />}
          sx={{ 
            bgcolor: '#6082B6',
            '&:hover': {
              bgcolor: '#5070A0'
            }
          }}
        >
          Add User
        </Button>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, 
        gap: 3, 
        mb: 4 
      }}>
        {teamStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} variant="outlined" sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', mb: 2 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon size={24} />
                </Sheet>
                <Chip size="sm" variant="soft" color="neutral">
                  {stat.change}
                </Chip>
              </Box>
              <Typography level="h2" sx={{ mb: 0.5 }}>{stat.value}</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                {stat.label}
              </Typography>
            </Card>
          );
        })}
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' }, 
        gap: 3, 
        mb: 4 
      }}>
        <Card variant="outlined" sx={{ overflow: 'hidden' }}>
          <Box sx={{ p: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography level="title-lg" sx={{ mb: 2 }}>
              User Management
            </Typography>
            <Input
              placeholder="Search users..."
              startDecorator={<Search size={20} />}
              size="lg"
            />
          </Box>

          <Box sx={{ overflowX: 'auto' }}>
            <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
              <Box component="thead" sx={{ bgcolor: 'background.level1', borderBottom: '1px solid', borderColor: 'divider' }}>
                <Box component="tr">
                  <Box component="th" sx={{ px: 3, py: 1.5, textAlign: 'left' }}>
                    <Typography level="body-xs" sx={{ color: 'text.secondary' }}>User</Typography>
                  </Box>
                  <Box component="th" sx={{ px: 3, py: 1.5, textAlign: 'left' }}>
                    <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Role</Typography>
                  </Box>
                  <Box component="th" sx={{ px: 3, py: 1.5, textAlign: 'left' }}>
                    <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Sessions</Typography>
                  </Box>
                  <Box component="th" sx={{ px: 3, py: 1.5, textAlign: 'left' }}>
                    <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Avg Score</Typography>
                  </Box>
                  <Box component="th" sx={{ px: 3, py: 1.5, textAlign: 'left' }}>
                    <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Status</Typography>
                  </Box>
                  <Box component="th" sx={{ px: 3, py: 1.5, textAlign: 'left' }}>
                    <Typography level="body-xs" sx={{ color: 'text.secondary' }}></Typography>
                  </Box>
                </Box>
              </Box>
              <Box component="tbody" sx={{ 
                '& > tr': {
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    bgcolor: 'background.level1'
                  }
                }
              }}>
                {users.map((user) => (
                  <Box component="tr" key={user.id}>
                    <Box component="td" sx={{ px: 3, py: 2 }}>
                      <Box>
                        <Typography level="body-sm">{user.name}</Typography>
                        <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>
                          {user.email}
                        </Typography>
                      </Box>
                    </Box>
                    <Box component="td" sx={{ px: 3, py: 2 }}>
                      <Chip size="sm" variant="soft" color="neutral">
                        {user.role}
                      </Chip>
                    </Box>
                    <Box component="td" sx={{ px: 3, py: 2 }}>
                      <Typography level="body-sm">{user.sessions}</Typography>
                    </Box>
                    <Box component="td" sx={{ px: 3, py: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Typography level="body-sm">{user.avgScore}%</Typography>
                        <Box sx={{ width: 64 }}>
                          <LinearProgress
                            determinate
                            value={user.avgScore}
                            size="sm"
                            color="neutral"
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box component="td" sx={{ px: 3, py: 2 }}>
                      <Chip size="sm" variant="soft" color="neutral">
                        {user.status}
                      </Chip>
                    </Box>
                    <Box component="td" sx={{ px: 3, py: 2 }}>
                      <IconButton size="sm" variant="plain" color="neutral">
                        <MoreVertical size={16} />
                      </IconButton>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Card>

        <Card variant="outlined" sx={{ p: 3 }}>
          <Typography level="title-lg" sx={{ mb: 0.5 }}>
            Department Performance
          </Typography>
          <Typography level="body-sm" sx={{ color: 'text.secondary', mb: 3 }}>
            Team statistics by department
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {departments.map((dept) => (
              <Card 
                key={dept.name} 
                variant="outlined"
                sx={{ 
                  p: 2,
                  '&:hover': {
                    borderColor: 'neutral.outlinedHoverBorder',
                    bgcolor: 'background.level1'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                  <Typography level="body-sm">{dept.name}</Typography>
                  <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>
                    {dept.users} users
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                      Avg Score
                    </Typography>
                    <Typography level="body-xs">{dept.avgScore}%</Typography>
                  </Box>
                  <LinearProgress
                    determinate
                    value={dept.avgScore}
                    size="sm"
                    color="neutral"
                  />
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                      Completion
                    </Typography>
                    <Typography level="body-xs">{dept.completionRate}%</Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Card>
      </Box>

      <Card 
        variant="solid" 
        sx={{ 
          p: 3, 
          bgcolor: 'neutral.900',
          color: 'white'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Typography level="title-lg" sx={{ mb: 0.5 }}>
              Assign Training Modules
            </Typography>
            <Typography level="body-sm" sx={{ opacity: 0.7 }}>
              Create custom training plans for teams or individuals
            </Typography>
          </Box>
          <Button
            startDecorator={<Plus size={16} />}
            variant="solid"
            sx={{
              bgcolor: 'white',
              color: 'neutral.900',
              '&:hover': {
                bgcolor: 'neutral.100'
              }
            }}
          >
            New Assignment
          </Button>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: 2 
        }}>
          <Box sx={{ 
            bgcolor: 'rgba(255,255,255,0.05)', 
            borderRadius: 'sm', 
            p: 2,
            border: '1px solid',
            borderColor: 'rgba(255,255,255,0.1)'
          }}>
            <Typography level="body-sm" sx={{ opacity: 0.7, mb: 0.5 }}>
              Pending Assignments
            </Typography>
            <Typography level="h2">12</Typography>
          </Box>
          <Box sx={{ 
            bgcolor: 'rgba(255,255,255,0.05)', 
            borderRadius: 'sm', 
            p: 2,
            border: '1px solid',
            borderColor: 'rgba(255,255,255,0.1)'
          }}>
            <Typography level="body-sm" sx={{ opacity: 0.7, mb: 0.5 }}>
              In Progress
            </Typography>
            <Typography level="h2">8</Typography>
          </Box>
          <Box sx={{ 
            bgcolor: 'rgba(255,255,255,0.05)', 
            borderRadius: 'sm', 
            p: 2,
            border: '1px solid',
            borderColor: 'rgba(255,255,255,0.1)'
          }}>
            <Typography level="body-sm" sx={{ opacity: 0.7, mb: 0.5 }}>
              Completed
            </Typography>
            <Typography level="h2">24</Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
