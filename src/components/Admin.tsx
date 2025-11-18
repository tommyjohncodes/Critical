import { Users, BookOpen, TrendingUp, BarChart2, Plus, Search, MoreVertical } from "lucide-react";

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
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div
        className="flex items-center justify-between mb-8"
      >
        <div>
          <h1 className="text-2xl text-neutral-900 mb-2">Admin Panel</h1>
          <p className="text-neutral-600">Manage users, track progress, and view organization-wide reports</p>
        </div>
        <button
          className="px-6 py-3 bg-neutral-900 text-white rounded-md shadow-sm hover:bg-neutral-800 transition-all flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add User
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {teamStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-white rounded-lg p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-md bg-neutral-100 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-neutral-600" />
                </div>
                <span className="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl text-neutral-900 mb-1">{stat.value}</p>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* User Management */}
        <div
          className="lg:col-span-2 bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl text-neutral-900">User Management</h2>
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b border-neutral-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs text-neutral-600">User</th>
                  <th className="px-6 py-3 text-left text-xs text-neutral-600">Role</th>
                  <th className="px-6 py-3 text-left text-xs text-neutral-600">Sessions</th>
                  <th className="px-6 py-3 text-left text-xs text-neutral-600">Avg Score</th>
                  <th className="px-6 py-3 text-left text-xs text-neutral-600">Status</th>
                  <th className="px-6 py-3 text-left text-xs text-neutral-600"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {users.map((user, index) => (
                  <tr
                    key={user.id}
                    className="hover:bg-neutral-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <p className="text-sm text-neutral-900">{user.name}</p>
                        <p className="text-xs text-neutral-500">{user.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-700">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-900">{user.sessions}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-neutral-900">{user.avgScore}%</span>
                        <div className="w-16 bg-neutral-200 rounded-full h-1.5">
                          <div
                            className="bg-neutral-700 h-1.5 rounded-full"
                            style={{ width: `${user.avgScore}%` }}
                          />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-neutral-100 text-neutral-700">
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-neutral-400 hover:text-neutral-600 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Department Stats */}
        <div
          className="bg-white rounded-lg p-6 border border-neutral-200 shadow-sm"
        >
          <h2 className="text-xl text-neutral-900 mb-1">Department Performance</h2>
          <p className="text-sm text-neutral-500 mb-6">Team statistics by department</p>

          <div className="space-y-4">
            {departments.map((dept, index) => (
              <div
                key={dept.name}
                className="p-4 rounded-md border border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm text-neutral-900">{dept.name}</h3>
                  <span className="text-xs text-neutral-500">{dept.users} users</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-600">Avg Score</span>
                    <span className="text-neutral-900">{dept.avgScore}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-1.5">
                    <div
                      className="bg-neutral-700 h-1.5 rounded-full"
                      style={{ width: `${dept.avgScore}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-neutral-600">Completion</span>
                    <span className="text-neutral-900">{dept.completionRate}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Training Assignments */}
      <div
        className="bg-neutral-900 rounded-lg p-6 text-white shadow-sm"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl mb-1">Assign Training Modules</h2>
            <p className="text-neutral-300 text-sm">Create custom training plans for teams or individuals</p>
          </div>
          <button
            className="px-6 py-3 bg-white text-neutral-900 rounded-md shadow-sm hover:bg-neutral-100 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            New Assignment
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-neutral-800 rounded-md p-4 border border-neutral-700">
            <p className="text-sm text-neutral-300 mb-1">Pending Assignments</p>
            <p className="text-2xl">12</p>
          </div>
          <div className="bg-neutral-800 rounded-md p-4 border border-neutral-700">
            <p className="text-sm text-neutral-300 mb-1">In Progress</p>
            <p className="text-2xl">8</p>
          </div>
          <div className="bg-neutral-800 rounded-md p-4 border border-neutral-700">
            <p className="text-sm text-neutral-300 mb-1">Completed</p>
            <p className="text-2xl">24</p>
          </div>
        </div>
      </div>
    </div>
  );
}
