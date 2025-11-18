import { TrendingUp, Clock, Target, Award, Play, ChevronRight } from "lucide-react";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import LinearProgress from '@mui/joy/LinearProgress';

interface DashboardProps {
  userRole: 'admin' | 'user';
  onNavigate: (page: string, simId?: string) => void;
  userName?: string;
}

export function Dashboard({ userRole, onNavigate, userName = 'John' }: DashboardProps) {
  return (
    <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography level="h2" sx={{ mb: 0.5 }}>
          {userRole === 'admin' ? 'Admin Dashboard' : `Welcome back, ${userName}`}
        </Typography>
        <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
          {userRole === 'admin' 
            ? 'Monitor team progress and simulation completion' 
            : 'Your assigned training simulations'}
        </Typography>
      </Box>

      {userRole === 'user' ? (
        /* USER VIEW - Assigned Simulations */
        <>
          {/* Stats Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, 
            gap: 2, 
            mb: 4 
          }}>
            <Card variant="outlined" sx={{ p: 2.5 }}>
              <Box sx={{ mb: 2 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Target size={16} />
                </Sheet>
              </Box>
              <Typography level="h2" sx={{ mb: 0.5 }}>12</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>Assigned</Typography>
            </Card>

            <Card variant="outlined" sx={{ p: 2.5 }}>
              <Box sx={{ mb: 2 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Award size={16} />
                </Sheet>
              </Box>
              <Typography level="h2" sx={{ mb: 0.5 }}>8</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>Completed</Typography>
            </Card>

            <Card variant="outlined" sx={{ p: 2.5 }}>
              <Box sx={{ mb: 2 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Clock size={16} />
                </Sheet>
              </Box>
              <Typography level="h2" sx={{ mb: 0.5 }}>4</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>Not Started</Typography>
            </Card>

            <Card variant="outlined" sx={{ p: 2.5 }}>
              <Box sx={{ mb: 2 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TrendingUp size={16} />
                </Sheet>
              </Box>
              <Typography level="h2" sx={{ mb: 0.5 }}>84%</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>Completion Rate</Typography>
            </Card>
          </Box>

          {/* Assigned Simulations List */}
          <Card variant="outlined" sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
              <Typography level="title-md">My Assigned Simulations</Typography>
              <Button
                size="sm"
                variant="plain"
                color="neutral"
                onClick={() => onNavigate('sims')}
                endDecorator={<ChevronRight size={16} />}
              >
                View All
              </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { id: 1, title: 'Emergency Triage Assessment', industry: 'Medical', status: 'completed', score: 92, dueDate: 'Completed 2 days ago' },
                { id: 2, title: 'Insurance Claim Dispute', industry: 'Insurance', status: 'completed', score: 85, dueDate: 'Completed 5 days ago' },
                { id: 3, title: 'Loan Application Interview', industry: 'Banking', status: 'not-started', score: null, dueDate: 'Due in 3 days' },
                { id: 4, title: 'Customer Complaint Resolution', industry: 'Call Center', status: 'not-started', score: null, dueDate: 'Due in 5 days' },
                { id: 5, title: 'Cardiac Arrest Response', industry: 'Emergency', status: 'completed', score: 88, dueDate: 'Completed 1 week ago' },
                { id: 6, title: 'Performance Review Discussion', industry: 'HR', status: 'not-started', score: null, dueDate: 'Due in 7 days' },
              ].map((sim) => (
                <Card
                  key={sim.id}
                  variant="outlined"
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'neutral.300',
                      bgcolor: 'background.level1',
                    },
                  }}
                  onClick={() => sim.status !== 'not-started' ? onNavigate('session', sim.id.toString()) : onNavigate('sims')}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
                      <Sheet
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: 'sm',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          bgcolor: sim.status === 'completed' ? '#6082B6' : 'background.level2',
                          color: sim.status === 'completed' ? 'white' : 'text.secondary',
                        }}
                      >
                        {sim.status === 'completed' ? (
                          <Award size={16} />
                        ) : (
                          <Play size={16} />
                        )}
                      </Sheet>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography level="title-sm" sx={{ mb: 0.25 }}>{sim.title}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                            {sim.industry}
                          </Typography>
                          <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>•</Typography>
                          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                            {sim.dueDate}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
                      {sim.status === 'completed' && (
                        <Sheet
                          variant="soft"
                          color="neutral"
                          sx={{ px: 1.5, py: 0.5, borderRadius: 'sm' }}
                        >
                          <Typography level="body-xs" sx={{ fontWeight: 600 }}>
                            {sim.score}%
                          </Typography>
                        </Sheet>
                      )}
                      <ChevronRight size={16} style={{ opacity: 0.4 }} />
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          </Card>
        </>
      ) : (
        /* ADMIN VIEW - Employee Progress */
        <>
          {/* Stats Grid */}
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, 
            gap: 2, 
            mb: 4 
          }}>
            <Card variant="outlined" sx={{ p: 2.5 }}>
              <Box sx={{ mb: 2 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Target size={16} />
                </Sheet>
              </Box>
              <Typography level="h2" sx={{ mb: 0.5 }}>48</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>Total Employees</Typography>
            </Card>

            <Card variant="outlined" sx={{ p: 2.5 }}>
              <Box sx={{ mb: 2 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Award size={16} />
                </Sheet>
              </Box>
              <Typography level="h2" sx={{ mb: 0.5 }}>35</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>On Track</Typography>
            </Card>

            <Card variant="outlined" sx={{ p: 2.5 }}>
              <Box sx={{ mb: 2 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Clock size={16} />
                </Sheet>
              </Box>
              <Typography level="h2" sx={{ mb: 0.5 }}>13</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>Behind Schedule</Typography>
            </Card>

            <Card variant="outlined" sx={{ p: 2.5 }}>
              <Box sx={{ mb: 2 }}>
                <Sheet
                  variant="soft"
                  color="neutral"
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: 'sm',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TrendingUp size={16} />
                </Sheet>
              </Box>
              <Typography level="h2" sx={{ mb: 0.5 }}>84%</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>Completion Rate</Typography>
            </Card>
          </Box>

          {/* Employee Progress List */}
          <Card variant="outlined" sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
              <Typography level="title-md">Employee Progress</Typography>
              <Button
                size="sm"
                variant="plain"
                color="neutral"
                onClick={() => onNavigate('admin')}
                endDecorator={<ChevronRight size={16} />}
              >
                View All
              </Button>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { id: 1, name: 'Sarah Johnson', department: 'Emergency Response', assigned: 12, completed: 12, avgScore: 94, status: 'on-track' },
                { id: 2, name: 'Michael Chen', department: 'Medical', assigned: 10, completed: 8, avgScore: 88, status: 'on-track' },
                { id: 3, name: 'Emily Rodriguez', department: 'Insurance', assigned: 15, completed: 9, avgScore: 85, status: 'behind' },
                { id: 4, name: 'David Kim', department: 'Banking', assigned: 8, completed: 8, avgScore: 92, status: 'on-track' },
                { id: 5, name: 'Jessica Williams', department: 'Call Center', assigned: 12, completed: 5, avgScore: 79, status: 'behind' },
                { id: 6, name: 'Robert Taylor', department: 'HR', assigned: 10, completed: 10, avgScore: 91, status: 'on-track' },
              ].map((employee) => (
                <Card
                  key={employee.id}
                  variant="outlined"
                  sx={{
                    p: 2,
                    cursor: 'pointer',
                    '&:hover': {
                      borderColor: 'neutral.300',
                      bgcolor: 'background.level1',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1, minWidth: 0 }}>
                      <Sheet
                        sx={{
                          width: 32,
                          height: 32,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          bgcolor: '#6082B6',
                          color: 'white',
                        }}
                      >
                        <Typography level="body-xs" sx={{ fontWeight: 600, fontSize: 12 }}>
                          {employee.name.split(' ').map(n => n[0]).join('')}
                        </Typography>
                      </Sheet>
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography level="title-sm" sx={{ mb: 0.25 }}>{employee.name}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                            {employee.department}
                          </Typography>
                          <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>•</Typography>
                          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                            Avg Score: {employee.avgScore}%
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexShrink: 0 }}>
                      <Box sx={{ textAlign: 'right' }}>
                        <Typography level="title-sm">{employee.completed}/{employee.assigned}</Typography>
                        <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Completed</Typography>
                      </Box>
                      <Box sx={{ width: 64 }}>
                        <LinearProgress
                          determinate
                          value={(employee.completed / employee.assigned) * 100}
                          sx={{
                            '--LinearProgress-thickness': '6px',
                            '--LinearProgress-progressColor': '#6082B6',
                          }}
                        />
                      </Box>
                      <ChevronRight size={16} style={{ opacity: 0.4 }} />
                    </Box>
                  </Box>
                </Card>
              ))}
            </Box>
          </Card>
        </>
      )}
    </Box>
  );
}
