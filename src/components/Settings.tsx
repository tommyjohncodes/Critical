import { User, Bell, Lock, Palette, Shield } from "lucide-react";

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
    <div className="p-8 max-w-5xl mx-auto">
      {/* Header */}
      <div
        className="mb-8"
      >
        <h1 className="text-2xl text-neutral-900 mb-2">Settings</h1>
        <p className="text-neutral-600">Manage your account preferences and settings</p>
      </div>

      {/* Settings Sections */}
      <div className="space-y-6">
        {settingsSections.map((section, sectionIndex) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden"
            >
              <div className="p-6 border-b border-neutral-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-neutral-700" />
                </div>
                <h2 className="text-base text-neutral-900">{section.title}</h2>
              </div>

              <div className="p-6 space-y-6">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between"
                  >
                    <div className="flex-1">
                      <label className="text-sm text-neutral-900">{item.label}</label>
                    </div>
                    
                    {item.type === 'input' && (
                      <input
                        type="text"
                        defaultValue={item.value as string}
                        className="w-64 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all text-sm"
                      />
                    )}

                    {item.type === 'select' && (
                      <select
                        defaultValue={item.value as string}
                        className="w-64 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all text-sm appearance-none cursor-pointer"
                      >
                        <option>{item.value as string}</option>
                        <option>Sales</option>
                        <option>Medical</option>
                        <option>Banking</option>
                      </select>
                    )}

                    {item.type === 'toggle' && (
                      <button
                        className={`relative w-12 h-6 rounded-full transition-all ${
                          item.value ? 'bg-neutral-900' : 'bg-neutral-300'
                        }`}
                      >
                        <div
                          className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md"
                          style={{ transform: item.value ? 'translateX(24px)' : 'translateX(0)' }}
                        />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Password Change */}
        <div
          className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-neutral-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center">
              <Lock className="w-5 h-5 text-neutral-700" />
            </div>
            <h2 className="text-base text-neutral-900">Change Password</h2>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Current Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-2">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm text-neutral-700 mb-2">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all"
                placeholder="••••••••"
              />
            </div>
            <button
              className="w-full py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-all shadow-lg"
            >
              Update Password
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div
          className="bg-white rounded-lg border border-neutral-200 shadow-sm overflow-hidden"
        >
          <div className="p-6 border-b border-neutral-200 flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-neutral-100 flex items-center justify-center">
              <Palette className="w-5 h-5 text-neutral-700" />
            </div>
            <h2 className="text-base text-neutral-900">Preferences</h2>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <label className="text-sm text-neutral-900">Language</label>
              <select className="w-64 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all text-sm appearance-none cursor-pointer">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-neutral-900">Time Zone</label>
              <select className="w-64 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all text-sm appearance-none cursor-pointer">
                <option>PST (UTC-8)</option>
                <option>EST (UTC-5)</option>
                <option>GMT (UTC+0)</option>
                <option>CET (UTC+1)</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <label className="text-sm text-neutral-900">Theme</label>
              <select className="w-64 px-4 py-2 bg-neutral-50 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all text-sm appearance-none cursor-pointer">
                <option>Light</option>
                <option>Dark</option>
                <option>Auto</option>
              </select>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div
          className="flex items-center justify-end gap-4"
        >
          <button className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-md hover:bg-neutral-200 transition-all">
            Cancel
          </button>
          <button
            className="px-6 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-all shadow-lg"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
