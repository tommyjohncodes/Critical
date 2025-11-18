import { X, Save, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Textarea from '@mui/joy/Textarea';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';

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
      [field]: formData[field].filter((_: string, i: number) => i !== index)
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
    <Modal
      open={true}
      onClose={onClose}
    >
      <ModalDialog
        sx={{
          width: '100%',
          maxWidth: 896,
          maxHeight: '90vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          p: 0,
        }}
      >
        <Sheet
          sx={{
            p: 3,
            borderBottom: '1px solid',
            borderColor: 'divider',
            background: 'linear-gradient(to right, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography level="h4">
              {editingSimulation ? 'Edit Simulation' : 'Create New Simulation'}
            </Typography>
            <Typography level="body-sm" sx={{ color: 'text.secondary', mt: 0.5 }}>
              Configure simulation parameters and evaluation criteria
            </Typography>
          </Box>
          <IconButton
            onClick={onClose}
            variant="outlined"
            color="neutral"
            size="sm"
          >
            <X size={20} />
          </IconButton>
        </Sheet>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ 
            flex: 1, 
            overflowY: 'auto', 
            p: 3 
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Box sx={{ 
              display: 'grid', 
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
              gap: 2 
            }}>
              <FormControl required>
                <FormLabel>Simulation Title</FormLabel>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Emergency Triage Assessment"
                />
              </FormControl>

              <FormControl required>
                <FormLabel>Category</FormLabel>
                <Select
                  value={formData.category}
                  onChange={(_, value) => setFormData({ ...formData, category: value as string })}
                >
                  <Option value="Medical">Medical</Option>
                  <Option value="Insurance">Insurance</Option>
                  <Option value="Banking">Banking</Option>
                  <Option value="Emergency">Emergency</Option>
                  <Option value="HR">HR</Option>
                  <Option value="Finance">Finance</Option>
                  <Option value="Call Center">Call Center</Option>
                </Select>
              </FormControl>

              <FormControl required>
                <FormLabel>Difficulty Level</FormLabel>
                <Select
                  value={formData.difficulty}
                  onChange={(_, value) => setFormData({ ...formData, difficulty: value as string })}
                >
                  <Option value="Beginner">Beginner</Option>
                  <Option value="Intermediate">Intermediate</Option>
                  <Option value="Advanced">Advanced</Option>
                  <Option value="Expert">Expert</Option>
                </Select>
              </FormControl>

              <FormControl required>
                <FormLabel>Duration (minutes)</FormLabel>
                <Input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  placeholder="15"
                />
              </FormControl>
            </Box>

            <Sheet
              variant="soft"
              sx={{
                p: 2.5,
                borderRadius: 'md',
                bgcolor: 'rgba(147, 51, 234, 0.05)',
                border: '1px solid',
                borderColor: 'rgba(147, 51, 234, 0.1)',
              }}
            >
              <FormControl required>
                <FormLabel>Scenario Description (Admin Only)</FormLabel>
                <FormHelperText>
                  This detailed description will only be visible to admins. Users will not see this information.
                </FormHelperText>
                <Textarea
                  value={formData.scenarioDescription}
                  onChange={(e) => setFormData({ ...formData, scenarioDescription: e.target.value })}
                  minRows={4}
                  placeholder="Describe the full scenario context, background information, and what the AI agent should simulate..."
                  sx={{ mt: 1 }}
                />
              </FormControl>
            </Sheet>

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                <Box>
                  <Typography level="title-sm">
                    Rules & Constraints for User
                  </Typography>
                  <Typography level="body-xs" sx={{ color: 'text.secondary', mt: 0.5 }}>
                    Define specific rules the user must follow during the simulation
                  </Typography>
                </Box>
                <Button
                  type="button"
                  onClick={() => handleAddField('rules')}
                  size="sm"
                  variant="soft"
                  startDecorator={<Plus size={16} />}
                  sx={{
                    bgcolor: 'rgba(147, 51, 234, 0.1)',
                    color: 'rgb(147, 51, 234)',
                    '&:hover': {
                      bgcolor: 'rgba(147, 51, 234, 0.2)',
                    },
                  }}
                >
                  Add Rule
                </Button>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {formData.rules.map((rule: string, index: number) => (
                  <Box key={index} sx={{ display: 'flex', gap: 1 }}>
                    <Input
                      value={rule}
                      onChange={(e) => handleUpdateField('rules', index, e.target.value)}
                      placeholder="e.g., Must gather patient vitals before diagnosis"
                      sx={{ flex: 1 }}
                    />
                    {formData.rules.length > 1 && (
                      <IconButton
                        type="button"
                        onClick={() => handleRemoveField('rules', index)}
                        color="danger"
                        variant="soft"
                        size="sm"
                      >
                        <Trash2 size={16} />
                      </IconButton>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                <Box>
                  <Typography level="title-sm">
                    Outcome Goals
                  </Typography>
                  <Typography level="body-xs" sx={{ color: 'text.secondary', mt: 0.5 }}>
                    Define what successful completion looks like
                  </Typography>
                </Box>
                <Button
                  type="button"
                  onClick={() => handleAddField('outcomeGoals')}
                  size="sm"
                  variant="soft"
                  startDecorator={<Plus size={16} />}
                  sx={{
                    bgcolor: 'rgba(147, 51, 234, 0.1)',
                    color: 'rgb(147, 51, 234)',
                    '&:hover': {
                      bgcolor: 'rgba(147, 51, 234, 0.2)',
                    },
                  }}
                >
                  Add Goal
                </Button>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {formData.outcomeGoals.map((goal: string, index: number) => (
                  <Box key={index} sx={{ display: 'flex', gap: 1 }}>
                    <Input
                      value={goal}
                      onChange={(e) => handleUpdateField('outcomeGoals', index, e.target.value)}
                      placeholder="e.g., Successfully calm the patient and gather complete medical history"
                      sx={{ flex: 1 }}
                    />
                    {formData.outcomeGoals.length > 1 && (
                      <IconButton
                        type="button"
                        onClick={() => handleRemoveField('outcomeGoals', index)}
                        color="danger"
                        variant="soft"
                        size="sm"
                      >
                        <Trash2 size={16} />
                      </IconButton>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>

            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1.5 }}>
                <Box>
                  <Typography level="title-sm">
                    Evaluation Criteria
                  </Typography>
                  <Typography level="body-xs" sx={{ color: 'text.secondary', mt: 0.5 }}>
                    Specify how the user's performance will be evaluated
                  </Typography>
                </Box>
                <Button
                  type="button"
                  onClick={() => handleAddField('evaluationCriteria')}
                  size="sm"
                  variant="soft"
                  startDecorator={<Plus size={16} />}
                  sx={{
                    bgcolor: 'rgba(147, 51, 234, 0.1)',
                    color: 'rgb(147, 51, 234)',
                    '&:hover': {
                      bgcolor: 'rgba(147, 51, 234, 0.2)',
                    },
                  }}
                >
                  Add Criteria
                </Button>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {formData.evaluationCriteria.map((criteria: string, index: number) => (
                  <Box key={index} sx={{ display: 'flex', gap: 1 }}>
                    <Input
                      value={criteria}
                      onChange={(e) => handleUpdateField('evaluationCriteria', index, e.target.value)}
                      placeholder="e.g., Communication clarity and empathy"
                      sx={{ flex: 1 }}
                    />
                    {formData.evaluationCriteria.length > 1 && (
                      <IconButton
                        type="button"
                        onClick={() => handleRemoveField('evaluationCriteria', index)}
                        color="danger"
                        variant="soft"
                        size="sm"
                      >
                        <Trash2 size={16} />
                      </IconButton>
                    )}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>

        <Sheet
          sx={{
            p: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            bgcolor: 'background.level1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: 1.5,
          }}
        >
          <Button
            type="button"
            onClick={onClose}
            variant="outlined"
            color="neutral"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleSubmit}
            startDecorator={<Save size={16} />}
            sx={{
              background: 'linear-gradient(to right, rgb(88, 28, 135), rgb(107, 33, 168))',
              color: 'white',
              '&:hover': {
                background: 'linear-gradient(to right, rgb(107, 33, 168), rgb(126, 34, 206))',
              },
            }}
          >
            {editingSimulation ? 'Save Changes' : 'Create Simulation'}
          </Button>
        </Sheet>
      </ModalDialog>
    </Modal>
  );
}
