import { TrendingUp, Clock, Target, Award, Play, ChevronRight } from "lucide-react";

interface DashboardProps {
  userRole: 'admin' | 'user';
  onNavigate: (page: string, simId?: string) => void;
  userName?: string;
}

export function Dashboard({ userRole, onNavigate, userName = 'John' }: DashboardProps) {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div
        className="mb-8"
      >
        <h1 className="text-2xl font-semibold text-neutral-900 mb-1">
          {userRole === 'admin' ? 'Admin Dashboard' : `Welcome back, ${userName}`}
        </h1>
        <p className="text-sm text-neutral-500">
          {userRole === 'admin' 
            ? 'Monitor team progress and simulation completion' 
            : 'Your assigned training simulations'}
        </p>
      </div>

      {userRole === 'user' ? (
        /* USER VIEW - Assigned Simulations */
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div
              className="bg-white rounded-lg p-5 border border-neutral-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-md bg-neutral-100 flex items-center justify-center">
                  <Target className="w-4 h-4 text-neutral-700" />
                </div>
              </div>
              <p className="text-2xl font-semibold text-neutral-900 mb-0.5">12</p>
              <p className="text-sm text-neutral-500">Assigned</p>
            </div>

            <div
              className="bg-white rounded-lg p-5 border border-neutral-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-md bg-neutral-100 flex items-center justify-center">
                  <Award className="w-4 h-4 text-neutral-700" />
                </div>
              </div>
              <p className="text-2xl font-semibold text-neutral-900 mb-0.5">8</p>
              <p className="text-sm text-neutral-500">Completed</p>
            </div>

            <div
              className="bg-white rounded-lg p-5 border border-neutral-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-md bg-neutral-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-neutral-700" />
                </div>
              </div>
              <p className="text-2xl font-semibold text-neutral-900 mb-0.5">4</p>
              <p className="text-sm text-neutral-500">Not Started</p>
            </div>

            <div
              className="bg-white rounded-lg p-5 border border-neutral-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-md bg-neutral-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-neutral-700" />
                </div>
              </div>
              <p className="text-2xl font-semibold text-neutral-900 mb-0.5">84%</p>
              <p className="text-sm text-neutral-500">Completion Rate</p>
            </div>
          </div>

          {/* Assigned Simulations List */}
          <div
            className="bg-white rounded-lg p-6 border border-neutral-200"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-neutral-900">My Assigned Simulations</h2>
              <button
                onClick={() => onNavigate('sims')}
                className="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1 transition-colors"
              >
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {[
                { id: 1, title: 'Emergency Triage Assessment', industry: 'Medical', status: 'completed', score: 92, dueDate: 'Completed 2 days ago' },
                { id: 2, title: 'Insurance Claim Dispute', industry: 'Insurance', status: 'completed', score: 85, dueDate: 'Completed 5 days ago' },
                { id: 3, title: 'Loan Application Interview', industry: 'Banking', status: 'not-started', score: null, dueDate: 'Due in 3 days' },
                { id: 4, title: 'Customer Complaint Resolution', industry: 'Call Center', status: 'not-started', score: null, dueDate: 'Due in 5 days' },
                { id: 5, title: 'Cardiac Arrest Response', industry: 'Emergency', status: 'completed', score: 88, dueDate: 'Completed 1 week ago' },
                { id: 6, title: 'Performance Review Discussion', industry: 'HR', status: 'not-started', score: null, dueDate: 'Due in 7 days' },
              ].map((sim) => (
                <div
                  key={sim.id}
                  className="flex items-center justify-between p-4 rounded-md border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all cursor-pointer"
                  onClick={() => sim.status !== 'not-started' ? onNavigate('session', sim.id.toString()) : onNavigate('sims')}
                >
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${
                      sim.status === 'completed' ? 'bg-neutral-900 text-white' : 'bg-neutral-100 text-neutral-500'
                    }`}>
                      {sim.status === 'completed' ? (
                        <Award className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-neutral-900 mb-0.5">{sim.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-500">{sim.industry}</span>
                        <span className="text-xs text-neutral-300">•</span>
                        <span className="text-xs text-neutral-500">{sim.dueDate}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {sim.status === 'completed' && (
                      <span className="text-xs px-2.5 py-1 bg-neutral-100 text-neutral-700 rounded-md font-medium">
                        {sim.score}%
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        /* ADMIN VIEW - Employee Progress */
        <>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div
              className="bg-white rounded-lg p-5 border border-neutral-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-md bg-neutral-100 flex items-center justify-center">
                  <Target className="w-4 h-4 text-neutral-700" />
                </div>
              </div>
              <p className="text-2xl font-semibold text-neutral-900 mb-0.5">48</p>
              <p className="text-sm text-neutral-500">Total Employees</p>
            </div>

            <div
              className="bg-white rounded-lg p-5 border border-neutral-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-md bg-neutral-100 flex items-center justify-center">
                  <Award className="w-4 h-4 text-neutral-700" />
                </div>
              </div>
              <p className="text-2xl font-semibold text-neutral-900 mb-0.5">35</p>
              <p className="text-sm text-neutral-500">On Track</p>
            </div>

            <div
              className="bg-white rounded-lg p-5 border border-neutral-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-md bg-neutral-100 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-neutral-700" />
                </div>
              </div>
              <p className="text-2xl font-semibold text-neutral-900 mb-0.5">13</p>
              <p className="text-sm text-neutral-500">Behind Schedule</p>
            </div>

            <div
              className="bg-white rounded-lg p-5 border border-neutral-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-9 h-9 rounded-md bg-neutral-100 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-neutral-700" />
                </div>
              </div>
              <p className="text-2xl font-semibold text-neutral-900 mb-0.5">84%</p>
              <p className="text-sm text-neutral-500">Completion Rate</p>
            </div>
          </div>

          {/* Employee Progress List */}
          <div
            className="bg-white rounded-lg p-6 border border-neutral-200"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-base font-semibold text-neutral-900">Employee Progress</h2>
              <button
                onClick={() => onNavigate('admin')}
                className="text-sm text-neutral-600 hover:text-neutral-900 flex items-center gap-1 transition-colors"
              >
                View All <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              {[
                { id: 1, name: 'Sarah Johnson', department: 'Emergency Response', assigned: 12, completed: 12, avgScore: 94, status: 'on-track' },
                { id: 2, name: 'Michael Chen', department: 'Medical', assigned: 10, completed: 8, avgScore: 88, status: 'on-track' },
                { id: 3, name: 'Emily Rodriguez', department: 'Insurance', assigned: 15, completed: 9, avgScore: 85, status: 'behind' },
                { id: 4, name: 'David Kim', department: 'Banking', assigned: 8, completed: 8, avgScore: 92, status: 'on-track' },
                { id: 5, name: 'Jessica Williams', department: 'Call Center', assigned: 12, completed: 5, avgScore: 79, status: 'behind' },
                { id: 6, name: 'Robert Taylor', department: 'HR', assigned: 10, completed: 10, avgScore: 91, status: 'on-track' },
              ].map((employee) => (
                <div
                  key={employee.id}
                  className="flex items-center justify-between p-4 rounded-md border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 flex-1 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-medium flex-shrink-0">
                      {employee.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-neutral-900 mb-0.5">{employee.name}</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-neutral-500">{employee.department}</span>
                        <span className="text-xs text-neutral-300">•</span>
                        <span className="text-xs text-neutral-500">Avg Score: {employee.avgScore}%</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="text-right">
                      <p className="text-sm font-medium text-neutral-900">{employee.completed}/{employee.assigned}</p>
                      <p className="text-xs text-neutral-500">Completed</p>
                    </div>
                    <div className="w-16">
                      <div className="w-full bg-neutral-200 rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full bg-neutral-900"
                          style={{ width: `${(employee.completed / employee.assigned) * 100}%` }}
                        />
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-neutral-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
