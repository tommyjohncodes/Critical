import { Pause, Play, RotateCcw, X, Mic, MicOff, Volume2 } from "lucide-react";
import { useState, useEffect } from "react";
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Card from '@mui/joy/Card';
import Sheet from '@mui/joy/Sheet';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';

interface VoiceSessionProps {
  simulationId: string;
  onEnd: () => void;
  onComplete?: () => void;
}

export function VoiceSession({ simulationId, onEnd, onComplete }: VoiceSessionProps) {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showCompletion, setShowCompletion] = useState(false);
  const [waveformBars] = useState(Array.from({ length: 40 }, () => Math.random() * 100));

  const simData = {
    '1': { title: 'Emergency Medical Triage', scenario: 'A patient\'s family member is demanding immediate care for a non-urgent condition while the ER is handling critical cases.' },
    '2': { title: 'Insurance Claim Denial', scenario: 'A policyholder is upset about a denied claim and is threatening to cancel their policy and leave negative reviews.' },
    '3': { title: 'Banking Fraud Alert', scenario: 'A customer received a fraud alert and is frustrated about their account being frozen, claiming they made all the transactions.' },
  };

  const currentSim = simData[simulationId as keyof typeof simData] || simData['1'];

  const [transcript, setTranscript] = useState([
    { speaker: 'AI Agent', text: 'Good morning, I understand you have some concerns. How can I help you today?', timestamp: '00:05' },
    { speaker: 'You', text: 'Yes, I\'ve been waiting for over an hour! This is unacceptable!', timestamp: '00:12' },
    { speaker: 'AI Agent', text: 'I sincerely apologize for the wait. I can see how frustrating this must be. Let me check what I can do to help you right away.', timestamp: '00:18' },
  ]);

  const [feedback] = useState([
    { type: 'positive', text: 'Good empathy shown' },
    { type: 'tip', text: 'Consider acknowledging their frustration earlier' },
    { type: 'positive', text: 'Clear communication' },
  ]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && !isPaused) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isActive, isPaused]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsPaused(!isPaused);
  const handleEnd = () => {
    setShowCompletion(true);
    onEnd();
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.level1', p: { xs: 2, md: 4 } }}>
      <Box sx={{ maxWidth: '1400px', mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
          <Box>
            <Typography level="h3" sx={{ mb: 0.5 }}>{currentSim.title}</Typography>
            <Typography level="body-sm" sx={{ color: 'text.secondary' }}>{currentSim.scenario}</Typography>
          </Box>
          <Button
            onClick={handleEnd}
            variant="outlined"
            color="neutral"
            size="sm"
            startDecorator={<X size={16} />}
          >
            End Session
          </Button>
        </Box>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', lg: '1fr 2fr' }, 
          gap: 3 
        }}>
          <Card variant="outlined" sx={{ p: 3 }}>
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Sheet
                variant="soft"
                color="neutral"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 1,
                  borderRadius: 'xl',
                }}
              >
                <Box 
                  sx={{ 
                    width: 8, 
                    height: 8, 
                    borderRadius: '50%', 
                    bgcolor: isActive && !isPaused ? 'neutral.900' : 'neutral.400',
                    animation: isActive && !isPaused ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' : 'none',
                    '@keyframes pulse': {
                      '0%, 100%': {
                        opacity: 1,
                      },
                      '50%': {
                        opacity: 0.5,
                      },
                    },
                  }} 
                />
                <Typography level="body-sm">{formatTime(timer)}</Typography>
              </Sheet>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, height: 96 }}>
                {waveformBars.map((height, index) => (
                  <Box
                    key={index}
                    sx={{ 
                      width: 4, 
                      bgcolor: 'neutral.400', 
                      borderRadius: 'xl',
                      height: `${height}%`,
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              {!isActive ? (
                <IconButton
                  onClick={handleStart}
                  size="lg"
                  sx={{
                    width: 64,
                    height: 64,
                    bgcolor: 'neutral.900',
                    color: 'white',
                    borderRadius: 'md',
                    '&:hover': {
                      bgcolor: 'neutral.800',
                    },
                  }}
                >
                  <Play size={28} />
                </IconButton>
              ) : (
                <>
                  <IconButton
                    onClick={handlePause}
                    variant="outlined"
                    color="neutral"
                    size="lg"
                    sx={{ width: 56, height: 56 }}
                  >
                    {isPaused ? <Play size={20} /> : <Pause size={20} />}
                  </IconButton>

                  <IconButton
                    onClick={() => setIsMuted(!isMuted)}
                    variant="outlined"
                    color="neutral"
                    size="lg"
                    sx={{ width: 56, height: 56 }}
                  >
                    {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
                  </IconButton>

                  <IconButton
                    variant="outlined"
                    color="neutral"
                    size="lg"
                    sx={{ width: 56, height: 56 }}
                  >
                    <RotateCcw size={20} />
                  </IconButton>
                </>
              )}
            </Box>

            <Box sx={{ mt: 3, textAlign: 'center' }}>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>
                {!isActive ? 'Press play to start the simulation' : isPaused ? 'Session paused' : 'Listening...'}
              </Typography>
            </Box>
          </Card>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <Card variant="outlined" sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Typography level="title-sm">Live Transcript</Typography>
                <Volume2 size={16} style={{ opacity: 0.4 }} />
              </Box>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2, 
                maxHeight: 400, 
                overflowY: 'auto', 
                pr: 1 
              }}>
                {transcript.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ 
                      pb: 2, 
                      borderBottom: index < transcript.length - 1 ? '1px solid' : 'none',
                      borderColor: 'divider',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                      <Typography 
                        level="body-xs" 
                        sx={{ 
                          fontWeight: item.speaker === 'You' ? 600 : 400,
                          color: item.speaker === 'You' ? 'text.primary' : 'text.secondary',
                        }}
                      >
                        {item.speaker}
                      </Typography>
                      <Typography level="body-xs" sx={{ color: 'text.tertiary' }}>{item.timestamp}</Typography>
                    </Box>
                    <Typography level="body-sm" sx={{ color: 'text.secondary' }}>{item.text}</Typography>
                  </Box>
                ))}
              </Box>
            </Card>

            <Card variant="outlined" sx={{ p: 3 }}>
              <Typography level="title-sm" sx={{ mb: 2 }}>AI Feedback</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {feedback.map((item, index) => (
                  <Sheet
                    key={index}
                    variant="soft"
                    color="neutral"
                    sx={{ p: 1.5, borderRadius: 'sm' }}
                  >
                    <Typography level="body-xs">
                      {item.type === 'positive' ? '✓ ' : '💡 '}
                      {item.text}
                    </Typography>
                  </Sheet>
                ))}
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>

      <Modal
        open={showCompletion}
        onClose={() => setShowCompletion(false)}
      >
        <ModalDialog
          sx={{
            maxWidth: 480,
            borderRadius: 'md',
            p: 4,
          }}
        >
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Sheet
              sx={{
                width: 64,
                height: 64,
                borderRadius: 'md',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
                bgcolor: 'background.level1',
              }}
            >
              <Typography sx={{ fontSize: 32 }}>✅</Typography>
            </Sheet>
            <Typography level="h4" sx={{ mb: 1 }}>Simulation Complete!</Typography>
            <Typography level="body-md" sx={{ color: 'text.secondary' }}>
              Great work! Your performance has been recorded.
            </Typography>
          </Box>

          <Sheet
            variant="soft"
            color="neutral"
            sx={{ p: 2, borderRadius: 'sm', mb: 3 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>Session Duration</Typography>
              <Typography level="body-sm">{formatTime(timer)}</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography level="body-sm" sx={{ color: 'text.secondary' }}>Estimated Score</Typography>
              <Typography level="body-sm">Calculating...</Typography>
            </Box>
          </Sheet>

          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <Button
              onClick={onComplete}
              fullWidth
              sx={{
                bgcolor: 'neutral.900',
                color: 'white',
                '&:hover': {
                  bgcolor: 'neutral.800',
                },
              }}
            >
              View Feedback
            </Button>
            <Button
              onClick={() => setShowCompletion(false)}
              variant="soft"
              color="neutral"
              sx={{ px: 3 }}
            >
              Continue
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </Box>
  );
}
