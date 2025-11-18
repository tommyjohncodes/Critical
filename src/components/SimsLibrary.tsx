import { Search, Filter, Play, ChevronRight, Plus, Edit } from "lucide-react";
import { useState } from "react";
import { SimulationBuilder } from "./SimulationBuilder";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import Sheet from '@mui/joy/Sheet';

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

  const filteredSims = simulations.filter(sim => {
    const matchesSearch = sim.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = filterIndustry === 'all' || sim.industry.toLowerCase() === filterIndustry.toLowerCase();
    return matchesSearch && matchesIndustry;
  });

  return (
    <Box sx={{ p: 4, maxWidth: '1400px', mx: 'auto' }}>
      <Box sx={{ mb: 3 }}>
        <Typography level="h2" sx={{ mb: 0.5 }}>
          Simulation Library
        </Typography>
        <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
          Browse and run AI-powered conversation simulations
        </Typography>
      </Box>

      <Card variant="outlined" sx={{ p: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: 1.5 }}>
          <Input
            placeholder="Search simulations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            startDecorator={<Search size={16} />}
            sx={{ flex: 1 }}
            size="sm"
          />

          <Select
            value={filterIndustry}
            onChange={(_, value) => setFilterIndustry(value as string)}
            startDecorator={<Filter size={16} />}
            size="sm"
            sx={{ minWidth: 180 }}
          >
            {industries.map(industry => (
              <Option key={industry} value={industry.toLowerCase()}>
                {industry} Industry
              </Option>
            ))}
          </Select>
        </Box>
      </Card>

      <Card variant="outlined" sx={{ overflow: 'hidden' }}>
        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: '5fr 2fr 2fr 2fr 1fr', 
          gap: 1.5, 
          px: 2, 
          py: 1.5, 
          bgcolor: 'background.level1',
          borderBottom: '1px solid',
          borderColor: 'divider'
        }}>
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Simulation</Typography>
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Industry</Typography>
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Difficulty</Typography>
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}>Last Run</Typography>
          <Typography level="body-xs" sx={{ color: 'text.secondary' }}></Typography>
        </Box>

        <Box sx={{ 
          '& > *:not(:last-child)': { 
            borderBottom: '1px solid', 
            borderColor: 'divider' 
          } 
        }}>
          {filteredSims.map((sim) => (
            <Box
              key={sim.id}
              onClick={() => onRunSimulation(sim.id)}
              sx={{ 
                display: 'grid', 
                gridTemplateColumns: '5fr 2fr 2fr 2fr 1fr', 
                gap: 1.5, 
                px: 2, 
                py: 1.5, 
                alignItems: 'center',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'background.level1'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, minWidth: 0 }}>
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    onRunSimulation(sim.id);
                  }}
                  size="sm"
                  sx={{ 
                    bgcolor: '#6082B6',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#5070A0'
                    }
                  }}
                >
                  <Play size={14} />
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, minWidth: 0, flex: 1 }}>
                  <Typography level="body-sm" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {sim.title}
                  </Typography>
                  <Chip 
                    size="sm" 
                    variant="soft" 
                    color="neutral"
                    sx={{ flexShrink: 0 }}
                  >
                    {sim.status === 'Not Started' ? 'New' : sim.status === 'Completed' ? '✓' : sim.status}
                  </Chip>
                  {sim.score && (
                    <Typography level="body-xs" sx={{ color: 'text.tertiary', flexShrink: 0 }}>
                      ({sim.score}%)
                    </Typography>
                  )}
                </Box>
              </Box>

              <Box>
                <Chip size="sm" variant="soft" color="neutral">
                  {sim.industry}
                </Chip>
              </Box>

              <Box>
                <Chip size="sm" variant="soft" color="neutral">
                  {sim.difficulty}
                </Chip>
              </Box>

              <Box>
                <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                  {sim.lastRun}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 0.5 }}>
                {userRole === 'admin' && (
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditSimulation(sim);
                    }}
                    size="sm"
                    variant="soft"
                    color="neutral"
                  >
                    <Edit size={14} />
                  </IconButton>
                )}
                <ChevronRight size={16} style={{ opacity: 0.3 }} />
              </Box>
            </Box>
          ))}
        </Box>
      </Card>

      {filteredSims.length === 0 && (
        <Card variant="outlined" sx={{ p: 4, textAlign: 'center', mt: 2 }}>
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
              mx: 'auto',
              mb: 1.5
            }}
          >
            <Search size={24} />
          </Sheet>
          <Typography level="title-md" sx={{ mb: 0.5 }}>
            No simulations found
          </Typography>
          <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
            Try adjusting your search or filter criteria
          </Typography>
        </Card>
      )}

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

      {userRole === 'admin' && (
        <IconButton
          onClick={() => setShowBuilder(true)}
          size="lg"
          sx={{ 
            position: 'fixed',
            bottom: 32,
            right: 32,
            bgcolor: '#6082B6',
            color: 'white',
            boxShadow: 'lg',
            '&:hover': {
              bgcolor: '#5070A0',
              boxShadow: 'xl'
            }
          }}
        >
          <Plus size={20} />
        </IconButton>
      )}
    </Box>
  );
}
