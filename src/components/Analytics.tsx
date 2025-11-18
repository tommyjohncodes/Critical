import { TrendingUp, ChevronRight, ChevronDown, RefreshCw, CheckCircle, AlertCircle, Play, Search, Target } from "lucide-react";
import { useState } from "react";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import Chip from '@mui/joy/Chip';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Avatar from '@mui/joy/Avatar';

interface AnalyticsProps {
  userRole: 'admin' | 'user';
  onRunSimulation?: (simId: string) => void;
}

export function Analytics({ userRole, onRunSimulation }: AnalyticsProps) {
  const [expandedRow, setExpandedRow] = useState<string | null>(null);

  const completedSims = [
    { 
      id: '1',
      title: 'Emergency Medical Triage', 
      industry: 'Medical',
      completedDate: '2 hours ago',
      score: 92,
      passingScore: 80,
      feedback: {
        strengths: [
          'Excellent empathy shown when handling the distressed family member',
          'Clear communication of medical priorities and urgency levels',
          'Maintained composure under pressure throughout the scenario'
        ],
        improvements: [
          'Could provide more frequent updates to waiting patients',
          'Consider using simpler medical terminology for non-medical staff'
        ],
        nextSteps: 'You\'re performing at an advanced level. Ready for more complex emergency scenarios.'
      }
    },
    { 
      id: '2',
      title: 'Insurance Claim Denial', 
      industry: 'Insurance',
      completedDate: 'Yesterday',
      score: 85,
      passingScore: 80,
      feedback: {
        strengths: [
          'Good explanation of policy terms and coverage limitations',
          'Professional tone maintained during difficult conversation',
          'Offered alternative solutions and next steps'
        ],
        improvements: [
          'Could improve empathy when delivering bad news',
          'Provide more specific timeline expectations for appeals process',
          'Consider acknowledging customer frustration earlier in conversation'
        ],
        nextSteps: 'Solid performance. Focus on empathy delivery for even better results.'
      }
    },
    { 
      id: '3',
      title: 'Banking Fraud Alert', 
      industry: 'Banking',
      completedDate: '3 days ago',
      score: 88,
      passingScore: 80,
      feedback: {
        strengths: [
          'Strong security verification process and protocol adherence',
          'Clear explanation of fraud detection and prevention measures',
          'Balanced urgency with customer reassurance effectively'
        ],
        improvements: [
          'Could be more reassuring about resolution timeline and bank protection',
          'Provide more specific details about temporary card restrictions'
        ],
        nextSteps: 'Great work on security protocols. Continue refining customer reassurance techniques.'
      }
    },
    { 
      id: '8',
      title: 'Investment Loss Explanation', 
      industry: 'Finance',
      completedDate: '1 week ago',
      score: 78,
      passingScore: 80,
      feedback: {
        strengths: [
          'Honest and transparent about market conditions',
          'Provided clear data and historical context'
        ],
        improvements: [
          'Lacked empathy when discussing client\'s financial losses',
          'Could have offered more concrete action steps for recovery',
          'Need to better balance honesty with hope and reassurance',
          'Consider using less technical jargon when explaining market dynamics'
        ],
        nextSteps: 'Below passing threshold. Focus on empathy and actionable guidance. Recommend retaking this simulation.'
      }
    },
    { 
      id: '10',
      title: 'Customer Complaint Resolution', 
      industry: 'Call Center',
      completedDate: '1 week ago',
      score: 72,
      passingScore: 80,
      feedback: {
        strengths: [
          'Documented the issue thoroughly',
          'Followed proper escalation procedures'
        ],
        improvements: [
          'Became defensive when customer raised voice',
          'Failed to acknowledge customer frustration adequately',
          'Missed opportunity to offer immediate compensation or goodwill gesture',
          'Response time was slower than optimal during peak stress',
          'Could improve active listening skills'
        ],
        nextSteps: 'Needs improvement. Focus on emotional regulation and active listening. Please retake this simulation.'
      }
    },
  ];

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  if (userRole === 'user') {
    return (
      <Box sx={{ p: 4, maxWidth: '1400px', mx: 'auto' }}>
        <Box sx={{ mb: 3 }}>
          <Typography level="h2" sx={{ mb: 0.5 }}>
            My Results
          </Typography>
          <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
            Review your completed simulations and feedback
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, 
          gap: 2, 
          mb: 3 
        }}>
          <Card variant="outlined" sx={{ p: 2.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
                <Target size={20} />
              </Sheet>
              <Box>
                <Typography level="h2">8</Typography>
                <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                  Completed
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card variant="outlined" sx={{ p: 2.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
                <TrendingUp size={20} />
              </Sheet>
              <Box>
                <Typography level="h2">85%</Typography>
                <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                  Avg Score
                </Typography>
              </Box>
            </Box>
          </Card>

          <Card variant="outlined" sx={{ p: 2.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
                <RefreshCw size={20} />
              </Sheet>
              <Box>
                <Typography level="h2">2</Typography>
                <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                  Need Retry
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>

        <Card variant="outlined" sx={{ overflow: 'hidden' }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: '6fr 2fr 2fr 2fr', 
            gap: 1.5, 
            px: 2.5, 
            py: 1.5, 
            bgcolor: 'background.level1',
            borderBottom: '1px solid',
            borderColor: 'divider'
          }}>
            <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Simulation</Typography>
            <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Industry</Typography>
            <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Completed</Typography>
            <Typography level="body-xs" sx={{ color: 'text.secondary', textAlign: 'right' }}>Score</Typography>
          </Box>

          <Box sx={{ 
            '& > *:not(:last-child)': { 
              borderBottom: '1px solid', 
              borderColor: 'divider' 
            } 
          }}>
            {completedSims.map((sim) => (
              <Box key={sim.id}>
                <Box
                  onClick={() => toggleRow(sim.id)}
                  sx={{ 
                    display: 'grid', 
                    gridTemplateColumns: '6fr 2fr 2fr 2fr', 
                    gap: 1.5, 
                    px: 2.5, 
                    py: 1.5, 
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      bgcolor: 'background.level1'
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ChevronDown size={16} style={{ opacity: 0.4 }} />
                    <Typography level="body-sm">{sim.title}</Typography>
                  </Box>

                  <Box>
                    <Chip size="sm" variant="soft" color="neutral">
                      {sim.industry}
                    </Chip>
                  </Box>

                  <Box>
                    <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                      {sim.completedDate}
                    </Typography>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1 }}>
                    <Chip 
                      size="sm" 
                      variant="soft" 
                      color="neutral"
                      startDecorator={sim.score >= sim.passingScore ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                    >
                      {sim.score}%
                    </Chip>
                  </Box>
                </Box>

                {expandedRow === sim.id && (
                  <Box sx={{ 
                    borderTop: '1px solid', 
                    borderColor: 'divider',
                    bgcolor: 'background.level1'
                  }}>
                    <Box sx={{ px: 2.5, py: 2.5 }}>
                      <Box sx={{ 
                        display: 'grid', 
                        gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, 
                        gap: 3 
                      }}>
                        <Box>
                          <Typography level="body-sm" sx={{ mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <CheckCircle size={16} />
                            Strengths
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {sim.feedback.strengths.map((strength, i) => (
                              <Typography key={i} component="li" level="body-sm" sx={{ color: 'text.secondary' }}>
                                {strength}
                              </Typography>
                            ))}
                          </Box>
                        </Box>

                        <Box>
                          <Typography level="body-sm" sx={{ mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                            <AlertCircle size={16} />
                            Areas for Improvement
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'flex', flexDirection: 'column', gap: 1 }}>
                            {sim.feedback.improvements.map((improvement, i) => (
                              <Typography key={i} component="li" level="body-sm" sx={{ color: 'text.secondary' }}>
                                {improvement}
                              </Typography>
                            ))}
                          </Box>
                        </Box>
                      </Box>

                      <Box sx={{ mt: 2.5, pt: 2.5, borderTop: '1px solid', borderColor: 'divider' }}>
                        <Typography level="body-sm" sx={{ mb: 1 }}>Next Steps</Typography>
                        <Typography level="body-sm" sx={{ color: 'text.secondary', mb: 2 }}>
                          {sim.feedback.nextSteps}
                        </Typography>

                        {sim.score < sim.passingScore ? (
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRunSimulation?.(sim.id);
                            }}
                            startDecorator={<RefreshCw size={16} />}
                            color="neutral"
                            variant="solid"
                            size="sm"
                            sx={{
                              bgcolor: 'neutral.900',
                              '&:hover': {
                                bgcolor: 'neutral.800'
                              }
                            }}
                          >
                            Retake Simulation
                          </Button>
                        ) : (
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRunSimulation?.(sim.id);
                            }}
                            startDecorator={<Play size={16} />}
                            color="neutral"
                            variant="soft"
                            size="sm"
                          >
                            Practice Again
                          </Button>
                        )}
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    );
  }

  const employees = [
    {
      id: '1',
      name: 'Sarah Martinez',
      role: 'Customer Service Rep',
      totalSims: 24,
      avgScore: 89,
      lastActive: '2 hours ago',
      status: 'active',
      trend: '+5%',
      recentSims: [
        { title: 'Emergency Medical Triage', score: 92, date: '2 hours ago' },
        { title: 'Insurance Claim Denial', score: 88, date: '1 day ago' },
        { title: 'Banking Fraud Alert', score: 87, date: '3 days ago' },
      ]
    },
    {
      id: '2',
      name: 'James Chen',
      role: 'Financial Advisor',
      totalSims: 18,
      avgScore: 91,
      lastActive: '4 hours ago',
      status: 'active',
      trend: '+8%',
      recentSims: [
        { title: 'Investment Loss Explanation', score: 94, date: '4 hours ago' },
        { title: 'Portfolio Rebalancing', score: 90, date: '1 day ago' },
        { title: 'Risk Assessment Call', score: 89, date: '2 days ago' },
      ]
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Insurance Claims Specialist',
      totalSims: 31,
      avgScore: 86,
      lastActive: 'Yesterday',
      status: 'active',
      trend: '+3%',
      recentSims: [
        { title: 'Policy Explanation', score: 88, date: 'Yesterday' },
        { title: 'Claim Denial Discussion', score: 85, date: '2 days ago' },
        { title: 'Coverage Clarification', score: 85, date: '4 days ago' },
      ]
    },
    {
      id: '4',
      name: 'Michael Thompson',
      role: 'Call Center Agent',
      totalSims: 12,
      avgScore: 74,
      lastActive: '3 days ago',
      status: 'needs-attention',
      trend: '-2%',
      recentSims: [
        { title: 'Customer Complaint Resolution', score: 72, date: '3 days ago' },
        { title: 'Service Escalation', score: 76, date: '5 days ago' },
        { title: 'Billing Dispute', score: 74, date: '1 week ago' },
      ]
    },
    {
      id: '5',
      name: 'Jennifer Wu',
      role: 'HR Business Partner',
      totalSims: 8,
      avgScore: 82,
      lastActive: '5 days ago',
      status: 'inactive',
      trend: '0%',
      recentSims: [
        { title: 'Disciplinary Action', score: 84, date: '5 days ago' },
        { title: 'Performance Review', score: 82, date: '1 week ago' },
        { title: 'Conflict Mediation', score: 80, date: '2 weeks ago' },
      ]
    },
    {
      id: '6',
      name: 'David Park',
      role: 'Medical Receptionist',
      totalSims: 6,
      avgScore: 68,
      lastActive: '1 week ago',
      status: 'needs-attention',
      trend: '-5%',
      recentSims: [
        { title: 'Patient Check-in', score: 70, date: '1 week ago' },
        { title: 'Appointment Scheduling', score: 68, date: '2 weeks ago' },
        { title: 'Insurance Verification', score: 66, date: '3 weeks ago' },
      ]
    },
  ];

  const getStatusChip = (status: string, trend: string) => {
    if (status === 'active' && parseFloat(trend) > 0) {
      return <Chip size="sm" variant="solid" color="neutral">Active</Chip>;
    }
    if (status === 'active') {
      return <Chip size="sm" variant="soft" color="neutral">Active</Chip>;
    }
    if (status === 'needs-attention') {
      return <Chip size="sm" variant="solid" color="neutral" sx={{ bgcolor: 'neutral.500' }}>Needs Attention</Chip>;
    }
    return <Chip size="sm" variant="soft" color="neutral">Inactive</Chip>;
  };

  const activeEmployees = employees.filter(e => e.status === 'active').length;
  const needsAttention = employees.filter(e => e.status === 'needs-attention' || e.avgScore < 75).length;
  const avgTeamScore = Math.round(employees.reduce((acc, e) => acc + e.avgScore, 0) / employees.length);
  const totalSimsCompleted = employees.reduce((acc, e) => acc + e.totalSims, 0);

  return (
    <Box sx={{ p: 4, maxWidth: '1400px', mx: 'auto' }}>
      <Box sx={{ mb: 3 }}>
        <Typography level="h2" sx={{ mb: 0.5 }}>
          Team Analytics
        </Typography>
        <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
          Monitor employee performance and platform usage
        </Typography>
      </Box>

      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, 
        gap: 2, 
        mb: 3 
      }}>
        <Card 
          variant="solid" 
          sx={{ 
            p: 2.5, 
            bgcolor: 'neutral.900',
            color: 'white'
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
            <TrendingUp size={28} style={{ opacity: 0.4 }} />
            <Chip size="sm" variant="soft" sx={{ bgcolor: 'rgba(255,255,255,0.1)' }}>
              Team Avg
            </Chip>
          </Box>
          <Typography level="h1" sx={{ mb: 0.5 }}>{avgTeamScore}%</Typography>
          <Typography level="body-sm" sx={{ opacity: 0.7 }}>Average Score</Typography>
        </Card>

        <Card variant="outlined" sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
              <Target size={20} />
            </Sheet>
            <Box>
              <Typography level="h2">{totalSimsCompleted}</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                Total Completions
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card variant="outlined" sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
              <CheckCircle size={20} />
            </Sheet>
            <Box>
              <Typography level="h2">{activeEmployees}</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                Active Users
              </Typography>
            </Box>
          </Box>
        </Card>

        <Card variant="outlined" sx={{ p: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
              <AlertCircle size={20} />
            </Sheet>
            <Box>
              <Typography level="h2">{needsAttention}</Typography>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                Need Attention
              </Typography>
            </Box>
          </Box>
        </Card>
      </Box>

      <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Input
            placeholder="Search employees..."
            startDecorator={<Search size={16} />}
            sx={{ flex: 1 }}
            size="sm"
          />
          <Select size="sm" defaultValue="all" sx={{ minWidth: 150 }}>
            <Option value="all">All Employees</Option>
            <Option value="active">Active Only</Option>
            <Option value="attention">Needs Attention</Option>
            <Option value="inactive">Inactive</Option>
          </Select>
          <Select size="sm" defaultValue="30" sx={{ minWidth: 140 }}>
            <Option value="30">Last 30 Days</Option>
            <Option value="7">Last 7 Days</Option>
            <Option value="90">Last 90 Days</Option>
            <Option value="all">All Time</Option>
          </Select>
        </Box>
      </Card>

      <Card variant="outlined" sx={{ overflow: 'hidden' }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: '4fr 2fr 2fr 2fr 2fr', 
          gap: 1.5, 
          px: 2.5, 
          py: 1.5, 
          bgcolor: 'background.level1',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Employee</Typography>
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Completed</Typography>
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Avg Score</Typography>
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Last Active</Typography>
          <Typography level="body-xs" sx={{ color: 'text.secondary', textAlign: 'right' }}>Status</Typography>
        </Box>

        <Box sx={{ 
          '& > *:not(:last-child)': { 
            borderBottom: '1px solid', 
            borderColor: 'divider' 
          } 
        }}>
          {employees.map((employee) => (
            <Box key={employee.id}>
              <Box
                onClick={() => toggleRow(employee.id)}
                sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: '4fr 2fr 2fr 2fr 2fr', 
                  gap: 1.5, 
                  px: 2.5, 
                  py: 1.5, 
                  alignItems: 'center',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: 'background.level1'
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, minWidth: 0 }}>
                  <ChevronDown size={16} style={{ opacity: 0.4 }} />
                  <Avatar size="sm" sx={{ bgcolor: 'neutral.700' }}>
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </Avatar>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography level="body-sm" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {employee.name}
                    </Typography>
                    <Typography level="body-xs" sx={{ color: 'text.tertiary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {employee.role}
                    </Typography>
                  </Box>
                </Box>

                <Box>
                  <Typography level="body-sm">{employee.totalSims} sims</Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip size="sm" variant="soft" color="neutral">
                    {employee.avgScore}%
                  </Chip>
                  <Typography 
                    level="body-xs" 
                    sx={{ 
                      color: parseFloat(employee.trend) > 0 ? 'text.primary' : parseFloat(employee.trend) < 0 ? 'text.tertiary' : 'text.secondary' 
                    }}
                  >
                    {employee.trend}
                  </Typography>
                </Box>

                <Box>
                  <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                    {employee.lastActive}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {getStatusChip(employee.status, employee.trend)}
                </Box>
              </Box>

              {expandedRow === employee.id && (
                <Box sx={{ 
                  borderTop: '1px solid', 
                  borderColor: 'divider',
                  bgcolor: 'background.level1'
                }}>
                  <Box sx={{ px: 2.5, py: 2 }}>
                    <Typography level="body-sm" sx={{ mb: 1.5 }}>Recent Activity</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {employee.recentSims.map((sim, i) => (
                        <Card key={i} variant="outlined" sx={{ p: 1.5 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box sx={{ flex: 1 }}>
                              <Typography level="body-sm">{sim.title}</Typography>
                              <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                                {sim.date}
                              </Typography>
                            </Box>
                            <Chip size="sm" variant="soft" color="neutral">
                              {sim.score}%
                            </Chip>
                          </Box>
                        </Card>
                      ))}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
                      <Button
                        variant="plain"
                        color="neutral"
                        size="sm"
                        endDecorator={<ChevronRight size={12} />}
                      >
                        View Full History
                      </Button>
                      {(employee.status === 'needs-attention' || employee.avgScore < 75) && (
                        <Button
                          variant="solid"
                          color="neutral"
                          size="sm"
                          sx={{ 
                            ml: 'auto',
                            bgcolor: 'neutral.900',
                            '&:hover': {
                              bgcolor: 'neutral.800'
                            }
                          }}
                        >
                          Schedule Coaching
                        </Button>
                      )}
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
}
