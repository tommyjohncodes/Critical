import { motion } from "motion/react";
import { ArrowRight, Activity, Zap, Users } from "lucide-react";
import { useState, useEffect } from "react";

const simulationTypes = [
  "Emergency Response Training",
  "Medical Consultation Practice",
  "Insurance Claims Handling",
  "Banking & Finance Scenarios",
  "Call Center Excellence",
  "Enterprise HR Conversations"
];

export function Hero() {
  const [currentSimIndex, setCurrentSimIndex] = useState(0);

  // Desaturated rainbow colors for industry badges
  const badgeColors = [
    { bg: "bg-red-50", border: "border-red-200", text: "text-red-700" },      // Medical
    { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700" }, // Insurance
    { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700" }, // Banking
    { bg: "bg-green-50", border: "border-green-200", text: "text-green-700" },    // Finance
    { bg: "bg-cyan-50", border: "border-cyan-200", text: "text-cyan-700" },       // Call Center
    { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700" },       // Emergency
    { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-700" }  // HR
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSimIndex((prev) => (prev + 1) % simulationTypes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1e3a8a 1px, transparent 1px),
              linear-gradient(to bottom, #1e3a8a 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Animated Geometric Patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large central geometric mesh */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="800" height="800" viewBox="0 0 800 800" className="opacity-10">
            {/* Outer hexagon */}
            <polygon
              points="400,50 650,200 650,600 400,750 150,600 150,200"
              fill="none"
              stroke="#1e3a8a"
              strokeWidth="2"
            />
            {/* Mid hexagon */}
            <polygon
              points="400,150 550,250 550,550 400,650 250,550 250,250"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
            />
            {/* Inner hexagon */}
            <polygon
              points="400,250 450,325 450,475 400,550 350,475 350,325"
              fill="none"
              stroke="#6366f1"
              strokeWidth="2"
            />
            {/* Connecting lines */}
            <line x1="400" y1="50" x2="400" y2="250" stroke="#1e3a8a" strokeWidth="1" />
            <line x1="650" y1="200" x2="550" y2="250" stroke="#1e3a8a" strokeWidth="1" />
            <line x1="650" y1="600" x2="550" y2="550" stroke="#1e3a8a" strokeWidth="1" />
            <line x1="400" y1="750" x2="400" y2="550" stroke="#1e3a8a" strokeWidth="1" />
            <line x1="150" y1="600" x2="250" y2="550" stroke="#1e3a8a" strokeWidth="1" />
            <line x1="150" y1="200" x2="250" y2="250" stroke="#1e3a8a" strokeWidth="1" />
            {/* Center point */}
            <circle cx="400" cy="400" r="5" fill="#3b82f6" />
          </svg>
        </motion.div>

        {/* Large rotating octagon frame - left side */}
        <motion.div
          className="absolute top-1/4 -left-32 w-[500px] h-[500px]"
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg width="500" height="500" viewBox="0 0 500 500" className="opacity-15">
            <polygon
              points="150,50 350,50 450,150 450,350 350,450 150,450 50,350 50,150"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />
            <polygon
              points="175,100 325,100 400,175 400,325 325,400 175,400 100,325 100,175"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Large rotating octagon frame - right side */}
        <motion.div
          className="absolute top-1/3 -right-32 w-[500px] h-[500px]"
          animate={{
            rotate: 360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            rotate: { duration: 45, repeat: Infinity, ease: "linear" },
            scale: { duration: 9, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <svg width="500" height="500" viewBox="0 0 500 500" className="opacity-15">
            <polygon
              points="150,50 350,50 450,150 450,350 350,450 150,450 50,350 50,150"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
            />
            <polygon
              points="175,100 325,100 400,175 400,325 325,400 175,400 100,325 100,175"
              fill="none"
              stroke="#60a5fa"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Geometric grid pattern - top */}
        <motion.div
          className="absolute -top-20 left-1/4 w-[600px] h-[400px]"
          animate={{
            y: [0, 20, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="600" height="400" viewBox="0 0 600 400" className="opacity-10">
            {/* Grid of connected triangles */}
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 6 }).map((_, col) => (
                <polygon
                  key={`${row}-${col}`}
                  points={`${col * 100 + 50},${row * 80} ${col * 100 + 100},${row * 80 + 70} ${col * 100},${row * 80 + 70}`}
                  fill="none"
                  stroke="#1e3a8a"
                  strokeWidth="1"
                />
              ))
            )}
          </svg>
        </motion.div>

        {/* Geometric grid pattern - bottom */}
        <motion.div
          className="absolute -bottom-20 right-1/4 w-[600px] h-[400px]"
          animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.1, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg width="600" height="400" viewBox="0 0 600 400" className="opacity-10">
            {/* Grid of connected diamonds */}
            {Array.from({ length: 4 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => (
                <polygon
                  key={`${row}-${col}`}
                  points={`${col * 120 + 60},${row * 100 + 20} ${col * 120 + 100},${row * 100 + 50} ${col * 120 + 60},${row * 100 + 80} ${col * 120 + 20},${row * 100 + 50}`}
                  fill="none"
                  stroke="#6366f1"
                  strokeWidth="1"
                />
              ))
            )}
          </svg>
        </motion.div>

        {/* Large animated circle constellation */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <svg width="900" height="900" viewBox="0 0 900 900" className="opacity-10">
            {/* Orbital circles */}
            <circle cx="450" cy="450" r="350" fill="none" stroke="#3b82f6" strokeWidth="1" strokeDasharray="10 10" />
            <circle cx="450" cy="450" r="280" fill="none" stroke="#6366f1" strokeWidth="1" strokeDasharray="8 8" />
            <circle cx="450" cy="450" r="210" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="6 6" />
            
            {/* Connection points */}
            <circle cx="450" cy="100" r="4" fill="#3b82f6" />
            <circle cx="700" cy="300" r="4" fill="#6366f1" />
            <circle cx="700" cy="600" r="4" fill="#0ea5e9" />
            <circle cx="450" cy="800" r="4" fill="#3b82f6" />
            <circle cx="200" cy="600" r="4" fill="#6366f1" />
            <circle cx="200" cy="300" r="4" fill="#0ea5e9" />
          </svg>
        </motion.div>

        {/* Pulsing node network */}
        {[
          { x: "15%", y: "20%", delay: 0 },
          { x: "85%", y: "25%", delay: 1 },
          { x: "10%", y: "70%", delay: 2 },
          { x: "90%", y: "75%", delay: 3 },
          { x: "30%", y: "45%", delay: 1.5 },
          { x: "70%", y: "55%", delay: 2.5 },
        ].map((node, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-500"
            style={{ left: node.x, top: node.y }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
          </motion.div>
        ))}

        {/* Gradient orbs - larger and more prominent */}
        <motion.div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-sky-200/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 py-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Industry tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {["Medical", "Insurance", "Banking", "Finance", "Call Center", "Emergency", "HR"].map((industry, index) => (
              <span
                key={industry}
                className={`text-xs ${badgeColors[index].text} px-3 py-1 ${badgeColors[index].bg} ${badgeColors[index].border} rounded-full`}
              >
                {industry}
              </span>
            ))}
          </motion.div>

          <h1 className="text-6xl md:text-7xl mb-6 tracking-tight text-neutral-900 font-bold font-normal">
            Train for the
            <br />
            <span className="text-blue-900 font-bold">Unexpected</span>
          </h1>

          <p className="text-xl text-neutral-600 mb-10 leading-relaxed max-w-xl">
            Critical AI delivers AI-powered voice simulations that prepare your teams for high-stakes conversations where every word matters.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white border border-neutral-200 p-4 rounded-lg"
            >
              <div className="text-3xl text-blue-900 mb-1">12.8k+</div>
              <div className="text-xs text-neutral-600">Simulations Run</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white border border-neutral-200 p-4 rounded-lg"
            >
              <div className="text-3xl text-blue-900 mb-1">97.3%</div>
              <div className="text-xs text-neutral-600">Success Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white border border-neutral-200 p-4 rounded-lg"
            >
              <div className="text-3xl text-blue-900 mb-1">6</div>
              <div className="text-xs text-neutral-600">Industries</div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-blue-900 text-white hover:bg-blue-800 transition-all flex items-center justify-center gap-2 group rounded-lg shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border-2 border-neutral-200 hover:border-blue-900 transition-all flex items-center justify-center gap-2 rounded-lg shadow-sm hover:shadow-md">
              <Users className="w-5 h-5" />
              Book a Demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          {/* Main Card with glass effect */}
          <div className="relative bg-white/80 backdrop-blur-sm border border-neutral-200 p-8 rounded-2xl shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="text-sm text-neutral-500 mb-2 flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Live Simulation
                </div>
                <motion.div
                  key={currentSimIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="text-2xl text-neutral-900"
                >
                  {simulationTypes[currentSimIndex]}
                </motion.div>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs text-red-700">LIVE</span>
              </div>
            </div>

            {/* Waveform */}
            <div className="flex gap-1 items-center justify-center h-32 mb-8 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-4 border border-blue-200/50">
              {[...Array(50)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-blue-600 rounded-full"
                  animate={{
                    height: [
                      Math.random() * 30 + 20,
                      Math.random() * 80 + 40,
                      Math.random() * 30 + 20,
                    ],
                  }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    delay: i * 0.02,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 p-4 rounded-xl">
                <div className="text-3xl text-blue-900 mb-1">87%</div>
                <div className="text-xs text-neutral-600">Confidence</div>
              </div>
              <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 p-4 rounded-xl">
                <div className="text-3xl text-blue-900 mb-1">2:34</div>
                <div className="text-xs text-neutral-600">Duration</div>
              </div>
              <div className="bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 p-4 rounded-xl">
                <div className="text-3xl text-green-600 mb-1">A+</div>
                <div className="text-xs text-neutral-600">Grade</div>
              </div>
            </div>
          </div>

          {/* Floating success badge */}
          <motion.div
            className="absolute -top-6 -right-6 bg-white border border-green-200 shadow-xl p-5 rounded-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-neutral-900">Scenario Complete</div>
                <div className="text-xs text-neutral-600">Performance: Excellent</div>
              </div>
            </div>
          </motion.div>

          {/* Decorative gradient blob */}
          <motion.div
            className="absolute -bottom-12 -left-12 w-48 h-48 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl -z-10"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
}