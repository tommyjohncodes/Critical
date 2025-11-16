import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Play, Pause, RotateCcw, Volume2, MessageSquare } from "lucide-react";

interface Message {
  id: number;
  speaker: "AI" | "User";
  text: string;
  timestamp: string;
}

const sampleConversations = {
  medical: [
    { id: 1, speaker: "AI" as const, text: "Good morning, I'm calling about your recent test results. Do you have a moment to talk?", timestamp: "0:00" },
    { id: 2, speaker: "User" as const, text: "Yes, I'm available. Is everything okay?", timestamp: "0:05" },
    { id: 3, speaker: "AI" as const, text: "I want to discuss some findings with you. Your blood work shows elevated glucose levels...", timestamp: "0:10" },
  ],
  emergency: [
    { id: 1, speaker: "AI" as const, text: "911, what's your emergency?", timestamp: "0:00" },
    { id: 2, speaker: "User" as const, text: "There's been an accident on Highway 101, multiple vehicles involved!", timestamp: "0:02" },
    { id: 3, speaker: "AI" as const, text: "I understand. Can you tell me the exact location and if anyone is injured?", timestamp: "0:07" },
  ],
  banking: [
    { id: 1, speaker: "AI" as const, text: "Mr. Johnson, I'm calling regarding your overdue account balance of $2,450.", timestamp: "0:00" },
    { id: 2, speaker: "User" as const, text: "I've been having financial difficulties. Can we work something out?", timestamp: "0:05" },
    { id: 3, speaker: "AI" as const, text: "I understand this is a difficult time. Let's explore payment plan options together...", timestamp: "0:10" },
  ],
};

export function SimulationPreview() {
  const [selectedScenario, setSelectedScenario] = useState<keyof typeof sampleConversations>("medical");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = sampleConversations[selectedScenario];

  const handlePlay = () => {
    if (currentMessageIndex >= messages.length - 1) {
      setCurrentMessageIndex(0);
    }
    setIsPlaying(true);
    
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev >= messages.length - 1) {
          setIsPlaying(false);
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentMessageIndex(0);
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-blue-900"
            style={{
              left: `${i * 10}%`,
              height: "100%",
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Decorative gradient blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-blue-200 rounded-full mb-8 shadow-sm">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            <span className="text-sm text-neutral-700">Interactive Demo</span>
          </div>
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight text-neutral-900">
            Experience It <span className="text-blue-900">In Action</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            See how Critical AI creates realistic, high-stakes conversation scenarios
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Scenario Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-neutral-300" />
              <h3 className="text-xl text-neutral-900">Choose Scenario</h3>
            </div>
            {(Object.keys(sampleConversations) as Array<keyof typeof sampleConversations>).map((scenario) => (
              <motion.button
                key={scenario}
                onClick={() => {
                  setSelectedScenario(scenario);
                  handleReset();
                }}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all border-2 ${
                  selectedScenario === scenario
                    ? "bg-gradient-to-br from-blue-900 to-blue-800 text-white border-blue-900 shadow-lg shadow-blue-900/20"
                    : "bg-white text-neutral-700 border-neutral-200 hover:border-blue-300 hover:shadow-md"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="capitalize">{scenario}</span>
              </motion.button>
            ))}
          </div>

          {/* Conversation Display */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm border-2 border-neutral-200 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full">
                <Volume2 className="w-4 h-4 text-blue-900" />
                <span className="text-sm text-blue-900">Voice Simulation Active</span>
              </div>
              <div className="flex gap-2">
                <motion.button
                  onClick={isPlaying ? () => setIsPlaying(false) : handlePlay}
                  className="p-3 bg-blue-900 text-white hover:bg-blue-800 transition-all rounded-xl shadow-md hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>
                <motion.button
                  onClick={handleReset}
                  className="p-3 bg-white border-2 border-neutral-200 text-neutral-700 hover:border-blue-300 transition-all rounded-xl hover:shadow-md"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <RotateCcw className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 min-h-[300px]">
              <AnimatePresence mode="sync">
                {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, x: message.speaker === "AI" ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`flex gap-3 ${message.speaker === "User" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-md ${
                      message.speaker === "AI" 
                        ? "bg-gradient-to-br from-blue-500 to-blue-600" 
                        : "bg-gradient-to-br from-green-400 to-green-600"
                    }`}>
                      <MessageSquare className="w-5 h-5 text-white" />
                    </div>
                    <div className={`flex-1 ${message.speaker === "User" ? "text-right" : ""}`}>
                      <div className={`flex items-center gap-2 mb-2 ${message.speaker === "User" ? "justify-end" : ""}`}>
                        <span className="text-sm text-neutral-600">
                          {message.speaker === "AI" ? "AI Agent" : "Trainee"}
                        </span>
                        <span className="text-xs text-neutral-400">{message.timestamp}</span>
                      </div>
                      <motion.div
                        initial={{ scale: 0.95 }}
                        animate={{ scale: 1 }}
                        className={`inline-block px-5 py-3 rounded-xl border ${
                          message.speaker === "AI" 
                            ? "bg-gradient-to-br from-blue-50 to-white border-blue-200 text-neutral-800" 
                            : "bg-gradient-to-br from-green-50 to-white border-green-200 text-neutral-800"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {currentMessageIndex >= messages.length - 1 && !isPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center pt-8"
                >
                  <p className="text-neutral-600 text-sm mb-4">Simulation Complete</p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-3 bg-blue-900 text-white hover:bg-blue-800 transition-all rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-xl text-sm"
                  >
                    Replay Scenario
                  </button>
                </motion.div>
              )}
            </div>

            {/* Waveform Visualization */}
            {isPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 pt-8 border-t-2 border-neutral-200"
              >
                <div className="flex gap-1 items-center justify-center h-12 bg-gradient-to-r from-blue-50 via-blue-100/50 to-blue-50 rounded-xl p-4">
                  {[...Array(40)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-blue-600 rounded-full"
                      animate={{
                        height: [
                          Math.random() * 20 + 10,
                          Math.random() * 40 + 20,
                          Math.random() * 20 + 10,
                        ],
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.02,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}