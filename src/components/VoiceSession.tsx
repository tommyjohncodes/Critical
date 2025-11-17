import { motion, AnimatePresence } from "motion/react";
import { Pause, Play, RotateCcw, X, Mic, MicOff, Volume2 } from "lucide-react";
import { useState, useEffect } from "react";

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

  // Mock simulation data
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
    <div className="min-h-screen bg-neutral-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h1 className="text-2xl text-neutral-900 mb-1">{currentSim.title}</h1>
            <p className="text-sm text-neutral-600">{currentSim.scenario}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleEnd}
            className="px-4 py-2 bg-white border border-neutral-200 rounded-md text-sm text-neutral-600 hover:bg-neutral-50 transition-all flex items-center gap-2"
          >
            <X className="w-4 h-4" />
            End Session
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Voice Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-1 bg-white rounded-lg border border-neutral-200 shadow-lg p-6"
          >
            {/* Timer */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 rounded-full">
                <div className={`w-2 h-2 rounded-full ${isActive && !isPaused ? 'bg-neutral-900 animate-pulse' : 'bg-neutral-400'}`} />
                <span className="text-sm text-neutral-900">{formatTime(timer)}</span>
              </div>
            </div>

            {/* Waveform Visualization */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-1 h-24">
                {waveformBars.map((height, index) => (
                  <motion.div
                    key={index}
                    className="w-1 bg-neutral-400 rounded-full"
                    animate={isActive && !isPaused ? {
                      height: [`${height}%`, `${Math.random() * 100}%`, `${height}%`],
                    } : {
                      height: '20%'
                    }}
                    transition={{
                      duration: 0.8 + Math.random() * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
              {!isActive ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStart}
                  className="w-16 h-16 bg-neutral-900 text-white rounded-lg shadow-xl flex items-center justify-center hover:bg-neutral-800 transition-all"
                >
                  <Play className="w-7 h-7" />
                </motion.button>
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handlePause}
                    className="w-14 h-14 bg-white border-2 border-neutral-200 text-neutral-900 rounded-md shadow-lg flex items-center justify-center hover:bg-neutral-50 transition-all"
                  >
                    {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMuted(!isMuted)}
                    className="w-14 h-14 bg-white border-2 border-neutral-200 text-neutral-900 rounded-md shadow-lg flex items-center justify-center hover:bg-neutral-50 transition-all"
                  >
                    {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-14 h-14 bg-white border-2 border-neutral-200 text-neutral-900 rounded-md shadow-lg flex items-center justify-center hover:bg-neutral-50 transition-all"
                  >
                    <RotateCcw className="w-5 h-5" />
                  </motion.button>
                </>
              )}
            </div>

            {/* Status */}
            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600">
                {!isActive ? 'Press play to start the simulation' : isPaused ? 'Session paused' : 'Listening...'}
              </p>
            </div>
          </motion.div>

          {/* Sidebar with Transcript and Feedback */}
          <div className="lg:col-span-2 space-y-6">
            {/* Real-time Transcript */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg border border-neutral-200 shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm text-neutral-900">Live Transcript</h3>
                <Volume2 className="w-4 h-4 text-neutral-400" />
              </div>
              <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
                {transcript.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="pb-4 border-b border-neutral-100 last:border-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs ${item.speaker === 'You' ? 'text-neutral-900' : 'text-neutral-600'}`}>
                        {item.speaker}
                      </span>
                      <span className="text-xs text-neutral-400">{item.timestamp}</span>
                    </div>
                    <p className="text-sm text-neutral-700">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Real-time Feedback */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg border border-neutral-200 shadow-sm p-6"
            >
              <h3 className="text-sm text-neutral-900 mb-4">AI Feedback</h3>
              <div className="space-y-3">
                {feedback.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-3 rounded-md bg-neutral-100 border border-neutral-200"
                  >
                    <p className="text-xs text-neutral-700">
                      {item.type === 'positive' ? '✓ ' : '💡 '}
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* End Session Modal */}
      <AnimatePresence>
        {showCompletion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6"
            onClick={() => setShowCompletion(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg p-8 max-w-md w-full shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h2 className="text-2xl text-neutral-900 mb-2">Simulation Complete!</h2>
                <p className="text-neutral-600">Great work! Your performance has been recorded.</p>
              </div>

              <div className="bg-neutral-50 rounded-md p-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-neutral-600">Session Duration</span>
                  <span className="text-sm text-neutral-900">{formatTime(timer)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Estimated Score</span>
                  <span className="text-sm text-neutral-900">Calculating...</span>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onComplete}
                  className="flex-1 py-3 bg-neutral-900 text-white rounded-md hover:bg-neutral-800 transition-all shadow-lg"
                >
                  View Feedback
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowCompletion(false)}
                  className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-md hover:bg-neutral-200 transition-all"
                >
                  Continue
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}