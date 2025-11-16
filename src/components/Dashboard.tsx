import { motion } from "motion/react";
import { TrendingUp, Clock, Target, Award, Play, ChevronRight } from "lucide-react";

interface DashboardProps {
  userRole: 'admin' | 'user';
  onNavigate: (page: string, simId?: string) => void;
  userName?: string;
}

export function Dashboard({ userRole, onNavigate, userName }: DashboardProps) {
  const stats = [
    { label: 'Total Sessions', value: '24', change: '+12%', icon: Play, color: 'blue' },
    { label: 'Avg. Score', value: '87%', change: '+5%', icon: Target, color: 'green' },
    { label: 'Hours Trained', value: '12.5', change: '+2.3', icon: Clock, color: 'purple' },
    { label: 'Achievements', value: '8', change: '+2', icon: Award, color: 'cyan' },
  ];

  const recentSims = [
    { id: 1, title: 'Emergency Medical Triage', industry: 'Medical', score: 92, date: '2 hours ago' },
    { id: 2, title: 'Insurance Claim Denial', industry: 'Insurance', score: 85, date: 'Yesterday' },
    { id: 3, title: 'Banking Fraud Alert', industry: 'Banking', score: 88, date: '3 days ago' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl text-neutral-900 mb-2">
          {userRole === 'admin' ? 'Admin Dashboard' : `Welcome back, ${userName}!`} 👋
        </h1>
        <p className="text-neutral-600">
          {userRole === 'admin' 
            ? 'Monitor team progress and simulation completion' 
            : 'Your assigned training simulations'}
        </p>
      </motion.div>

      {userRole === 'user' ? (
        /* USER VIEW - Assigned Simulations */
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl text-neutral-900 mb-1">12</p>
              <p className="text-sm text-neutral-500">Assigned</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <p className="text-2xl text-neutral-900 mb-1">8</p>
              <p className="text-sm text-neutral-500">Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <p className="text-2xl text-neutral-900 mb-1">4</p>
              <p className="text-sm text-neutral-500">Not Started</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <p className="text-2xl text-neutral-900 mb-1">84%</p>
              <p className="text-sm text-neutral-500">Completion Rate</p>
            </motion.div>
          </div>

          {/* Assigned Simulations List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-neutral-900">My Assigned Simulations</h2>
              <button
                onClick={() => onNavigate('sims')}
                className="text-sm text-blue-900 hover:text-blue-800 flex items-center gap-1 transition-colors"
              >
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {[
                { id: 1, title: 'Emergency Triage Assessment', industry: 'Medical', status: 'completed', score: 92, dueDate: 'Completed 2 days ago' },
                { id: 2, title: 'Insurance Claim Dispute', industry: 'Insurance', status: 'completed', score: 85, dueDate: 'Completed 5 days ago' },
                { id: 3, title: 'Loan Application Interview', industry: 'Banking', status: 'not-started', score: null, dueDate: 'Due in 3 days' },
                { id: 4, title: 'Customer Complaint Resolution', industry: 'Call Center', status: 'not-started', score: null, dueDate: 'Due in 5 days' },
                { id: 5, title: 'Cardiac Arrest Response', industry: 'Emergency', status: 'completed', score: 88, dueDate: 'Completed 1 week ago' },
                { id: 6, title: 'Performance Review Discussion', industry: 'HR', status: 'not-started', score: null, dueDate: 'Due in 7 days' },
              ].map((sim) => (
                <motion.div
                  key={sim.id}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer"
                  onClick={() => sim.status !== 'not-started' ? onNavigate('session', sim.id.toString()) : onNavigate('sims')}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      sim.status === 'completed' ? 'bg-green-100' : 
                      sim.status === 'in-progress' ? 'bg-yellow-100' : 'bg-neutral-100'
                    }`}>
                      {sim.status === 'completed' ? (
                        <Award className="w-5 h-5 text-green-600" />
                      ) : sim.status === 'in-progress' ? (
                        <Clock className="w-5 h-5 text-yellow-600" />
                      ) : (
                        <Play className="w-5 h-5 text-neutral-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm text-neutral-900 mb-1">{sim.title}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-neutral-500">{sim.industry}</span>
                        <span className="text-xs text-neutral-300">•</span>
                        <span className="text-xs text-neutral-500">{sim.dueDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {sim.status === 'completed' ? (
                      <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
                        Score: {sim.score}%
                      </span>
                    ) : sim.status === 'in-progress' ? (
                      <span className="text-xs px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                        In Progress
                      </span>
                    ) : (
                      <span className="text-xs px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">
                        Not Started
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      ) : (
        /* ADMIN VIEW - Employee Progress */
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl text-neutral-900 mb-1">48</p>
              <p className="text-sm text-neutral-500">Total Employees</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <p className="text-2xl text-neutral-900 mb-1">35</p>
              <p className="text-sm text-neutral-500">On Track</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <p className="text-2xl text-neutral-900 mb-1">13</p>
              <p className="text-sm text-neutral-500">Behind Schedule</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <p className="text-2xl text-neutral-900 mb-1">84%</p>
              <p className="text-sm text-neutral-500">Completion Rate</p>
            </motion.div>
          </div>

          {/* Employee Progress List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl text-neutral-900">Employee Progress</h2>
              <button
                onClick={() => onNavigate('admin')}
                className="text-sm text-blue-900 hover:text-blue-800 flex items-center gap-1 transition-colors"
              >
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {[
                { id: 1, name: 'Sarah Johnson', department: 'Emergency Response', assigned: 12, completed: 12, avgScore: 94, status: 'on-track' },
                { id: 2, name: 'Michael Chen', department: 'Medical', assigned: 10, completed: 8, avgScore: 88, status: 'on-track' },
                { id: 3, name: 'Emily Rodriguez', department: 'Insurance', assigned: 15, completed: 9, avgScore: 85, status: 'behind' },
                { id: 4, name: 'David Kim', department: 'Banking', assigned: 8, completed: 8, avgScore: 92, status: 'on-track' },
                { id: 5, name: 'Jessica Williams', department: 'Call Center', assigned: 12, completed: 5, avgScore: 79, status: 'behind' },
                { id: 6, name: 'Robert Taylor', department: 'HR', assigned: 10, completed: 10, avgScore: 91, status: 'on-track' },
              ].map((employee) => (
                <motion.div
                  key={employee.id}
                  whileHover={{ x: 4 }}
                  className="flex items-center justify-between p-4 rounded-xl border border-neutral-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm ${
                      employee.status === 'on-track' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm text-neutral-900 mb-1">{employee.name}</h3>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-neutral-500">{employee.department}</span>
                        <span className="text-xs text-neutral-300">•</span>
                        <span className="text-xs text-neutral-500">Avg Score: {employee.avgScore}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-sm text-neutral-900">{employee.completed}/{employee.assigned}</p>
                      <p className="text-xs text-neutral-500">Completed</p>
                    </div>
                    <div className="w-16">
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${employee.status === 'on-track' ? 'bg-green-500' : 'bg-yellow-500'}`}
                          style={{ width: `${(employee.completed / employee.assigned) * 100}%` }}
                        />
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
}