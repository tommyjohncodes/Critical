import { motion } from "motion/react";
import { BarChart3, TrendingUp, Award, Clock, Target, Calendar, ChevronRight, ChevronDown, RefreshCw, CheckCircle, AlertCircle, Play, Search } from "lucide-react";
import { useState } from "react";

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

  const getScoreColor = (score: number, passingScore: number) => {
    if (score >= 90) return 'text-neutral-700 bg-neutral-100';
    if (score >= passingScore) return 'text-neutral-700 bg-neutral-100';
    if (score >= 70) return 'text-neutral-600 bg-neutral-50';
    return 'text-neutral-700 bg-neutral-100';
  };

  const getScoreIcon = (score: number, passingScore: number) => {
    if (score >= passingScore) return <CheckCircle className="w-4 h-4" />;
    return <AlertCircle className="w-4 h-4" />;
  };

  const toggleRow = (id: string) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  if (userRole === 'user') {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <h1 className="text-2xl text-neutral-900 mb-2">My Results</h1>
          <p className="text-sm text-neutral-600">Review your completed simulations and feedback</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-neutral-50 rounded-md p-5 border border-neutral-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center">
                <Target className="w-5 h-5 text-neutral-700" />
              </div>
              <div>
                <p className="text-2xl text-neutral-900">8</p>
                <p className="text-sm text-neutral-500">Completed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-neutral-50 rounded-md p-5 border border-neutral-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-neutral-700" />
              </div>
              <div>
                <p className="text-2xl text-neutral-900">85%</p>
                <p className="text-sm text-neutral-500">Avg Score</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-neutral-50 rounded-md p-5 border border-neutral-200"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-neutral-700" />
              </div>
              <div>
                <p className="text-2xl text-neutral-900">2</p>
                <p className="text-sm text-neutral-500">Need Retry</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-md border border-neutral-200 overflow-hidden"
        >
          <div className="grid grid-cols-12 gap-3 px-5 py-3 bg-neutral-50 border-b border-neutral-200 text-xs text-neutral-600">
            <div className="col-span-6">Simulation</div>
            <div className="col-span-2">Industry</div>
            <div className="col-span-2">Completed</div>
            <div className="col-span-2 text-right">Score</div>
          </div>

          <div className="divide-y divide-neutral-100">
            {completedSims.map((sim, index) => (
              <div key={sim.id}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="grid grid-cols-12 gap-3 px-5 py-3 items-center transition-colors cursor-pointer hover:bg-neutral-50"
                  onClick={() => toggleRow(sim.id)}
                >
                  <div className="col-span-6 flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: expandedRow === sim.id ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4 text-neutral-400" />
                    </motion.div>
                    <h3 className="text-sm text-neutral-900">{sim.title}</h3>
                  </div>

                  <div className="col-span-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-neutral-100 text-neutral-700">
                      {sim.industry}
                    </span>
                  </div>

                  <div className="col-span-2">
                    <p className="text-xs text-neutral-500">{sim.completedDate}</p>
                  </div>

                  <div className="col-span-2 flex items-center justify-end gap-2">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-sm ${getScoreColor(sim.score, sim.passingScore)}`}>
                      {getScoreIcon(sim.score, sim.passingScore)}
                      {sim.score}%
                    </span>
                  </div>
                </motion.div>

                {expandedRow === sim.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-neutral-100 bg-neutral-50/50"
                  >
                    <div className="px-5 py-5">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm text-neutral-900 mb-3 flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-neutral-700" />
                            Strengths
                          </h4>
                          <ul className="space-y-2">
                            {sim.feedback.strengths.map((strength, i) => (
                              <li key={i} className="text-sm text-neutral-700 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-600">
                                {strength}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm text-neutral-900 mb-3 flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-neutral-700" />
                            Areas for Improvement
                          </h4>
                          <ul className="space-y-2">
                            {sim.feedback.improvements.map((improvement, i) => (
                              <li key={i} className="text-sm text-neutral-700 pl-5 relative before:content-['•'] before:absolute before:left-0 before:text-neutral-600">
                                {improvement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-5 pt-5 border-t border-neutral-200">
                        <h4 className="text-sm text-neutral-900 mb-2">Next Steps</h4>
                        <p className="text-sm text-neutral-600 mb-4">{sim.feedback.nextSteps}</p>

                        {sim.score < sim.passingScore ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRunSimulation?.(sim.id);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md text-sm transition-all"
                          >
                            <RefreshCw className="w-4 h-4" />
                            Retake Simulation
                          </button>
                        ) : (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRunSimulation?.(sim.id);
                            }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 rounded-md text-sm transition-all"
                          >
                            <Play className="w-4 h-4" />
                            Practice Again
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
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

  const getStatusBadge = (status: string, trend: string) => {
    if (status === 'active' && parseFloat(trend) > 0) {
      return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-neutral-700 text-white">Active</span>;
    }
    if (status === 'active') {
      return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-neutral-200 text-neutral-700">Active</span>;
    }
    if (status === 'needs-attention') {
      return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-neutral-400 text-white">Needs Attention</span>;
    }
    return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs bg-neutral-100 text-neutral-600">Inactive</span>;
  };

  const getScoreBadgeColor = (score: number) => {
    if (score >= 90) return 'text-neutral-700 bg-neutral-100';
    if (score >= 80) return 'text-neutral-700 bg-neutral-100';
    if (score >= 70) return 'text-neutral-600 bg-neutral-50';
    return 'text-neutral-700 bg-neutral-100';
  };

  const activeEmployees = employees.filter(e => e.status === 'active').length;
  const needsAttention = employees.filter(e => e.status === 'needs-attention' || e.avgScore < 75).length;
  const avgTeamScore = Math.round(employees.reduce((acc, e) => acc + e.avgScore, 0) / employees.length);
  const totalSimsCompleted = employees.reduce((acc, e) => acc + e.totalSims, 0);

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <h1 className="text-2xl text-neutral-900 mb-2">Team Analytics</h1>
        <p className="text-sm text-neutral-600">Monitor employee performance and platform usage</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-neutral-900 rounded-md p-5 text-white"
        >
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-7 h-7 text-neutral-400" />
            <span className="text-xs bg-neutral-800 px-2 py-1 rounded-full">Team Avg</span>
          </div>
          <p className="text-3xl mb-1">{avgTeamScore}%</p>
          <p className="text-neutral-400 text-sm">Average Score</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="bg-neutral-50 rounded-md p-5 border border-neutral-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center">
              <Target className="w-5 h-5 text-neutral-700" />
            </div>
            <div>
              <p className="text-2xl text-neutral-900">{totalSimsCompleted}</p>
              <p className="text-sm text-neutral-500">Total Completions</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-neutral-50 rounded-md p-5 border border-neutral-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-neutral-700" />
            </div>
            <div>
              <p className="text-2xl text-neutral-900">{activeEmployees}</p>
              <p className="text-sm text-neutral-500">Active Users</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="bg-neutral-50 rounded-md p-5 border border-neutral-200"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-neutral-700" />
            </div>
            <div>
              <p className="text-2xl text-neutral-900">{needsAttention}</p>
              <p className="text-sm text-neutral-500">Need Attention</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-md p-4 border border-neutral-200 mb-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search employees..."
              className="w-full pl-10 pr-3 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
            />
          </div>
          <select className="px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all cursor-pointer">
            <option>All Employees</option>
            <option>Active Only</option>
            <option>Needs Attention</option>
            <option>Inactive</option>
          </select>
          <select className="px-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 transition-all cursor-pointer">
            <option>Last 30 Days</option>
            <option>Last 7 Days</option>
            <option>Last 90 Days</option>
            <option>All Time</option>
          </select>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="bg-white rounded-md border border-neutral-200 overflow-hidden"
      >
        <div className="grid grid-cols-12 gap-3 px-5 py-3 bg-neutral-50 border-b border-neutral-200 text-xs text-neutral-600">
          <div className="col-span-4">Employee</div>
          <div className="col-span-2">Completed</div>
          <div className="col-span-2">Avg Score</div>
          <div className="col-span-2">Last Active</div>
          <div className="col-span-2 text-right">Status</div>
        </div>

        <div className="divide-y divide-neutral-100">
          {employees.map((employee, index) => (
            <div key={employee.id}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="grid grid-cols-12 gap-3 px-5 py-3 items-center transition-colors cursor-pointer hover:bg-neutral-50"
                onClick={() => toggleRow(employee.id)}
              >
                <div className="col-span-4 flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: expandedRow === employee.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-4 h-4 text-neutral-400" />
                  </motion.div>
                  <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-white text-sm flex-shrink-0">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm text-neutral-900 truncate">{employee.name}</h3>
                    <p className="text-xs text-neutral-500 truncate">{employee.role}</p>
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="text-sm text-neutral-900">{employee.totalSims} sims</p>
                </div>

                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded text-sm ${getScoreBadgeColor(employee.avgScore)}`}>
                      {employee.avgScore}%
                    </span>
                    <span className={`text-xs ${parseFloat(employee.trend) > 0 ? 'text-neutral-700' : parseFloat(employee.trend) < 0 ? 'text-neutral-500' : 'text-neutral-400'}`}>
                      {employee.trend}
                    </span>
                  </div>
                </div>

                <div className="col-span-2">
                  <p className="text-xs text-neutral-500">{employee.lastActive}</p>
                </div>

                <div className="col-span-2 flex justify-end">
                  {getStatusBadge(employee.status, employee.trend)}
                </div>
              </motion.div>

              {expandedRow === employee.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-neutral-100 bg-neutral-50/50"
                >
                  <div className="px-5 py-4">
                    <h4 className="text-sm text-neutral-900 mb-3">Recent Activity</h4>
                    <div className="space-y-2">
                      {employee.recentSims.map((sim, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-white rounded-md border border-neutral-200">
                          <div className="flex-1">
                            <p className="text-sm text-neutral-900">{sim.title}</p>
                            <p className="text-xs text-neutral-500">{sim.date}</p>
                          </div>
                          <span className={`inline-flex items-center px-2.5 py-1 rounded text-sm ${getScoreBadgeColor(sim.score)}`}>
                            {sim.score}%
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-neutral-200">
                      <button className="text-sm text-neutral-700 hover:text-neutral-900 flex items-center gap-1 transition-colors">
                        View Full History <ChevronRight className="w-3 h-3" />
                      </button>
                      {(employee.status === 'needs-attention' || employee.avgScore < 75) && (
                        <button className="ml-auto text-sm px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-md transition-all">
                          Schedule Coaching
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
