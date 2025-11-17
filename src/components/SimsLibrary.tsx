import { motion } from "motion/react";
import { Search, Filter, Play, ChevronRight, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";
import { SimulationBuilder } from "./SimulationBuilder";

interface SimsLibraryProps {
  userRole: 'admin' | 'user';
  onRunSimulation: (simId: string) => void;
}

export function SimsLibrary({ userRole, onRunSimulation }: SimsLibraryProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterIndustry, setFilterIndustry] = useState("all");
  const [showBuilder, setShowBuilder] = useState(false);
  const [editingSimulation, setEditingSimulation] = useState<any>(null);

  const simulations = [
    { id: '1', title: 'Emergency Medical Triage', industry: 'Medical', difficulty: 'Hard', lastRun: '2 hours ago', status: 'Completed', score: 92 },
    { id: '2', title: 'Insurance Claim Denial', industry: 'Insurance', difficulty: 'Medium', lastRun: 'Yesterday', status: 'Completed', score: 85 },
    { id: '3', title: 'Banking Fraud Alert', industry: 'Banking', difficulty: 'Hard', lastRun: '3 days ago', status: 'Completed', score: 88 },
    { id: '4', title: 'Patient Family Communication', industry: 'Medical', difficulty: 'Medium', lastRun: 'Never', status: 'Not Started', score: null },
    { id: '5', title: 'Loan Rejection Call', industry: 'Finance', difficulty: 'Hard', lastRun: 'Never', status: 'Not Started', score: null },
    { id: '6', title: 'HR Termination Discussion', industry: 'HR', difficulty: 'Very Hard', lastRun: 'Never', status: 'Not Started', score: null },
    { id: '7', title: '911 Active Shooter Call', industry: 'Emergency', difficulty: 'Very Hard', lastRun: 'Never', status: 'Not Started', score: null },
    { id: '8', title: 'Investment Loss Explanation', industry: 'Finance', difficulty: 'Medium', lastRun: '1 week ago', status: 'Completed', score: 78 },
    { id: '9', title: 'Policy Cancellation Notice', industry: 'Insurance', difficulty: 'Medium', lastRun: 'Never', status: 'Not Started', score: null },
    { id: '10', title: 'Medical Malpractice Discussion', industry: 'Medical', difficulty: 'Very Hard', lastRun: 'Never', status: 'Not Started', score: null },
  ];

  const industries = ['All', 'Medical', 'Insurance', 'Banking', 'Finance', 'HR', 'Emergency'];

  const handleSaveSimulation = (simulation: any) => {
    console.log('Saving simulation:', simulation);
    setShowBuilder(false);
    setEditingSimulation(null);
  };

  const handleEditSimulation = (sim: any) => {
    setEditingSimulation(sim);
    setShowBuilder(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Medium': return 'text-neutral-700 bg-neutral-100';
      case 'Hard': return 'text-neutral-800 bg-neutral-200';
      case 'Very Hard': return 'text-neutral-900 bg-neutral-300';
      default: return 'text-neutral-600 bg-neutral-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'text-neutral-700 bg-neutral-100';
      case 'In Progress': return 'text-neutral-700 bg-neutral-100';
      default: return 'text-neutral-600 bg-neutral-50';
    }
  };

  const filteredSims = simulations.filter(sim => {
    const matchesSearch = sim.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = filterIndustry === 'all' || sim.industry.toLowerCase() === filterIndustry.toLowerCase();
    return matchesSearch && matchesIndustry;
  });

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div
        className="mb-6"
      >
        <h1 className="text-2xl text-neutral-900 mb-2">Simulation Library</h1>
        <p className="text-neutral-600">Browse and run AI-powered conversation simulations</p>
      </div>

      {/* Filters */}
      <div
        className="bg-white rounded-md p-4 border border-neutral-200 shadow-sm mb-4"
      >
        <div className="flex flex-col lg:flex-row gap-3">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-700" />
            <input
              type="text"
              placeholder="Search simulations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-transparent transition-all"
            />
          </div>

          {/* Industry Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-700" />
            <select
              value={filterIndustry}
              onChange={(e) => setFilterIndustry(e.target.value)}
              className="pl-10 pr-8 py-2 text-sm bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:border-transparent transition-all appearance-none cursor-pointer min-w-[180px]"
            >
              {industries.map(industry => (
                <option key={industry} value={industry.toLowerCase()}>
                  {industry} Industry
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Compact Table */}
      <div
        className="bg-white rounded-md border border-neutral-200 shadow-sm overflow-hidden"
      >
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-3 px-4 py-2.5 bg-neutral-50 border-b border-neutral-200 text-xs text-neutral-600">
          <div className="col-span-5">Simulation</div>
          <div className="col-span-2">Industry</div>
          <div className="col-span-2">Difficulty</div>
          <div className="col-span-2">Last Run</div>
          <div className="col-span-1"></div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-neutral-100">
          {filteredSims.map((sim, index) => (
            <div
              key={sim.id}
              className="grid grid-cols-12 gap-3 px-4 py-3 items-center transition-colors cursor-pointer"
              onClick={() => onRunSimulation(sim.id)}
            >
              {/* Simulation Title + Status */}
              <div className="col-span-5 flex items-center gap-2.5 min-w-0">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRunSimulation(sim.id);
                  }}
                  className="w-8 h-8 rounded-md bg-neutral-900 text-white flex items-center justify-center shadow-sm hover:shadow-md transition-all flex-shrink-0"
                >
                  <Play className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-1.5 min-w-0 flex-1">
                  <h3 className="text-sm text-neutral-900 truncate">{sim.title}</h3>
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs flex-shrink-0 ${getStatusColor(sim.status)}`}>
                    {sim.status === 'Not Started' ? 'New' : sim.status === 'Completed' ? '✓' : sim.status}
                  </span>
                  {sim.score && (
                    <span className="text-xs text-neutral-400 flex-shrink-0">({sim.score}%)</span>
                  )}
                </div>
              </div>

              {/* Industry */}
              <div className="col-span-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs bg-neutral-100 text-neutral-700">
                  {sim.industry}
                </span>
              </div>

              {/* Difficulty */}
              <div className="col-span-2">
                <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs ${getDifficultyColor(sim.difficulty)}`}>
                  {sim.difficulty}
                </span>
              </div>

              {/* Last Run */}
              <div className="col-span-2">
                <p className="text-xs text-neutral-500">{sim.lastRun}</p>
              </div>

              {/* Actions */}
              <div className="col-span-1 flex justify-end gap-1">
                {userRole === 'admin' && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditSimulation(sim);
                    }}
                    className="w-7 h-7 rounded-md bg-neutral-100 text-neutral-700 flex items-center justify-center hover:bg-neutral-200 transition-all"
                    title="Edit simulation"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                )}
                <ChevronRight className="w-4 h-4 text-neutral-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredSims.length === 0 && (
        <div
          className="bg-white rounded-lg border border-neutral-200 shadow-sm p-8 text-center mt-4"
        >
          <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Search className="w-6 h-6 text-neutral-700" />
          </div>
          <h3 className="text-neutral-900 mb-1">No simulations found</h3>
          <p className="text-sm text-neutral-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {/* Simulation Builder */}
      {showBuilder && (
        <SimulationBuilder
          editingSimulation={editingSimulation}
          onSave={handleSaveSimulation}
          onClose={() => {
            setShowBuilder(false);
            setEditingSimulation(null);
          }}
        />
      )}

      {/* Add Simulation Button */}
      {userRole === 'admin' && (
        <button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
          onClick={() => setShowBuilder(true)}
          title="Create new simulation"
        >
          <Plus className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}