import { motion } from "motion/react";
import { X, Save, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

interface SimulationBuilderProps {
  onClose: () => void;
  onSave: (simulation: any) => void;
  editingSimulation?: any;
}

export function SimulationBuilder({ onClose, onSave, editingSimulation }: SimulationBuilderProps) {
  const [formData, setFormData] = useState({
    title: editingSimulation?.title || '',
    category: editingSimulation?.category || 'Medical',
    difficulty: editingSimulation?.difficulty || 'Intermediate',
    duration: editingSimulation?.duration || '15',
    scenarioDescription: editingSimulation?.scenarioDescription || '',
    rules: editingSimulation?.rules || [''],
    outcomeGoals: editingSimulation?.outcomeGoals || [''],
    evaluationCriteria: editingSimulation?.evaluationCriteria || ['']
  });

  const handleAddField = (field: 'rules' | 'outcomeGoals' | 'evaluationCriteria') => {
    setFormData({
      ...formData,
      [field]: [...formData[field], '']
    });
  };

  const handleRemoveField = (field: 'rules' | 'outcomeGoals' | 'evaluationCriteria', index: number) => {
    setFormData({
      ...formData,
      [field]: formData[field].filter((_, i) => i !== index)
    });
  };

  const handleUpdateField = (field: 'rules' | 'outcomeGoals' | 'evaluationCriteria', index: number, value: string) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData({
      ...formData,
      [field]: updated
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <div className="p-6 border-b border-neutral-200 flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50">
          <div>
            <h2 className="text-xl text-neutral-900">
              {editingSimulation ? 'Edit Simulation' : 'Create New Simulation'}
            </h2>
            <p className="text-sm text-neutral-600 mt-1">
              Configure simulation parameters and evaluation criteria
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white rounded-xl border border-neutral-200 flex items-center justify-center hover:bg-neutral-50 transition-all"
          >
            <X className="w-5 h-5 text-neutral-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          <div className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-neutral-700 mb-2">
                  Simulation Title *
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all text-sm"
                  placeholder="e.g., Emergency Triage Assessment"
                />
              </div>

              <div>
                <label className="block text-sm text-neutral-700 mb-2">
                  Category *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all text-sm"
                >
                  <option>Medical</option>
                  <option>Insurance</option>
                  <option>Banking</option>
                  <option>Emergency</option>
                  <option>HR</option>
                  <option>Finance</option>
                  <option>Call Center</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-neutral-700 mb-2">
                  Difficulty Level *
                </label>
                <select
                  required
                  value={formData.difficulty}
                  onChange={(e) => setFormData({ ...formData, difficulty: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all text-sm"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Expert</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-neutral-700 mb-2">
                  Duration (minutes) *
                </label>
                <input
                  type="number"
                  required
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all text-sm"
                  placeholder="15"
                />
              </div>
            </div>

            {/* Scenario Description */}
            <div className="bg-purple-50/50 p-5 rounded-xl border border-purple-100">
              <label className="block text-sm text-neutral-900 mb-2">
                Scenario Description (Admin Only) *
              </label>
              <p className="text-xs text-neutral-600 mb-3">
                This detailed description will only be visible to admins. Users will not see this information.
              </p>
              <textarea
                required
                value={formData.scenarioDescription}
                onChange={(e) => setFormData({ ...formData, scenarioDescription: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all text-sm resize-none"
                placeholder="Describe the full scenario context, background information, and what the AI agent should simulate..."
              />
            </div>

            {/* Rules & Constraints */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <label className="block text-sm text-neutral-900">
                    Rules & Constraints for User
                  </label>
                  <p className="text-xs text-neutral-600 mt-1">
                    Define specific rules the user must follow during the simulation
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddField('rules')}
                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-all text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Rule
                </button>
              </div>
              <div className="space-y-2">
                {formData.rules.map((rule, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={rule}
                      onChange={(e) => handleUpdateField('rules', index, e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all text-sm"
                      placeholder="e.g., Must gather patient vitals before diagnosis"
                    />
                    {formData.rules.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveField('rules', index)}
                        className="w-10 h-10 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all flex items-center justify-center"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome Goals */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <label className="block text-sm text-neutral-900">
                    Outcome Goals
                  </label>
                  <p className="text-xs text-neutral-600 mt-1">
                    Define what successful completion looks like
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddField('outcomeGoals')}
                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-all text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Goal
                </button>
              </div>
              <div className="space-y-2">
                {formData.outcomeGoals.map((goal, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={goal}
                      onChange={(e) => handleUpdateField('outcomeGoals', index, e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all text-sm"
                      placeholder="e.g., Successfully calm the patient and gather complete medical history"
                    />
                    {formData.outcomeGoals.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveField('outcomeGoals', index)}
                        className="w-10 h-10 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all flex items-center justify-center"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Evaluation Criteria */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <label className="block text-sm text-neutral-900">
                    Evaluation Criteria
                  </label>
                  <p className="text-xs text-neutral-600 mt-1">
                    Specify how the user's performance will be evaluated
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleAddField('evaluationCriteria')}
                  className="flex items-center gap-2 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-all text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Criteria
                </button>
              </div>
              <div className="space-y-2">
                {formData.evaluationCriteria.map((criteria, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={criteria}
                      onChange={(e) => handleUpdateField('evaluationCriteria', index, e.target.value)}
                      className="flex-1 px-4 py-2.5 bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-700 focus:border-transparent transition-all text-sm"
                      placeholder="e.g., Communication clarity and empathy"
                    />
                    {formData.evaluationCriteria.length > 1 && (
                      <button
                        type="button"
                        onClick={() => handleRemoveField('evaluationCriteria', index)}
                        className="w-10 h-10 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-all flex items-center justify-center"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>

        {/* Footer */}
        <div className="p-6 border-t border-neutral-200 bg-neutral-50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-white border border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-50 transition-all text-sm"
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-6 py-2.5 bg-gradient-to-r from-purple-900 to-purple-800 text-white rounded-xl hover:from-purple-800 hover:to-purple-700 transition-all text-sm shadow-lg shadow-purple-900/20 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            {editingSimulation ? 'Save Changes' : 'Create Simulation'}
          </button>
        </div>
      </div>
    </div>
  );
}
