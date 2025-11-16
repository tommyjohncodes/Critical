import { motion } from "motion/react";
import { useState } from "react";
import { Bird, ArrowLeft, Mail, Lock, Eye, EyeOff } from "lucide-react";

interface LoginProps {
  onBack: () => void;
  onLogin?: (role: 'admin' | 'user') => void;
}

export function Login({ onBack, onLogin }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'admin' | 'user'>('user');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock authentication - in production, this would call an API
    console.log("Form submitted:", formData, "Role:", selectedRole);
    
    // Simulate successful login
    if (onLogin) {
      onLogin(selectedRole);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden landing-section">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-blue-400/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-purple-400/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

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

      {/* Particle Network Constellation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Particle nodes with connections */}
        
        {/* Node 1 */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-blue-500 shadow-lg shadow-blue-500/50"
          animate={{
            x: [100, 250, 400, 300, 100],
            y: [150, 300, 200, 100, 150],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
        </motion.div>

        {/* Node 2 */}
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50"
          animate={{
            x: [800, 950, 1100, 900, 800],
            y: [200, 350, 250, 150, 200],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" />
        </motion.div>

        {/* Node 3 */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50"
          animate={{
            x: [500, 650, 550, 450, 500],
            y: [100, 180, 250, 150, 100],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-cyan-400/30 animate-ping" />
        </motion.div>

        {/* Node 4 */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"
          animate={{
            x: [200, 350, 300, 150, 200],
            y: [450, 550, 600, 500, 450],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-indigo-500/30 animate-ping" />
        </motion.div>

        {/* Node 5 */}
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50"
          animate={{
            x: [1000, 1150, 1200, 1050, 1000],
            y: [500, 600, 550, 450, 500],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" />
        </motion.div>

        {/* Node 6 */}
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50"
          animate={{
            x: [600, 700, 750, 650, 600],
            y: [400, 500, 450, 350, 400],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping" />
        </motion.div>

        {/* Node 7 */}
        <motion.div
          className="absolute w-2.5 h-2.5 rounded-full bg-sky-500 shadow-lg shadow-sky-500/50"
          animate={{
            x: [300, 450, 500, 350, 300],
            y: [300, 250, 350, 400, 300],
          }}
          transition={{
            duration: 21,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-sky-500/30 animate-ping" />
        </motion.div>

        {/* Node 8 */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-fuchsia-500 shadow-lg shadow-fuchsia-500/50"
          animate={{
            x: [900, 800, 850, 950, 900],
            y: [400, 500, 550, 450, 400],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-fuchsia-500/30 animate-ping" />
        </motion.div>

        {/* Connection lines - animated SVG */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="connectionGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="connectionGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Animated connection lines that pulse */}
          <motion.line
            x1="175" y1="225" x2="525" y2="175"
            stroke="url(#connectionGradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.line
            x1="325" y1="375" x2="625" y2="425"
            stroke="url(#connectionGradient2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.5, 0.5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />

          <motion.line
            x1="625" y1="150" x2="925" y2="275"
            stroke="url(#connectionGradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />

          <motion.line
            x1="275" y1="525" x2="675" y2="475"
            stroke="url(#connectionGradient2)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.5, 0.5, 0],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

          <motion.line
            x1="875" y1="325" x2="1075" y2="550"
            stroke="url(#connectionGradient1)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
        </svg>

        {/* Orbiting rings around center */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-96 h-96 -ml-48 -mt-48 rounded-full border border-blue-500/10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 w-72 h-72 -ml-36 -mt-36 rounded-full border border-purple-500/10"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute left-1/2 top-1/2 w-[32rem] h-[32rem] -ml-64 -mt-64 rounded-full border border-cyan-500/10"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Data streams */}
        <motion.div
          className="absolute left-1/4 top-0 w-px h-20 bg-gradient-to-b from-blue-500/50 to-transparent"
          animate={{
            y: [0, 700],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute left-2/3 top-0 w-px h-24 bg-gradient-to-b from-purple-500/50 to-transparent"
          animate={{
            y: [0, 800],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />

        <motion.div
          className="absolute left-1/2 top-0 w-px h-16 bg-gradient-to-b from-cyan-500/50 to-transparent"
          animate={{
            y: [0, 750],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "linear",
            delay: 4
          }}
        />

        {/* Floating hexagonal wireframe */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-24 h-24 border border-blue-500/20"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          }}
          animate={{
            rotate: [0, 120, 240, 360],
            y: [0, -30, 0, 30, 0],
            opacity: [0.2, 0.4, 0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/6 w-20 h-20 border border-purple-500/20"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
          }}
          animate={{
            rotate: [360, 240, 120, 0],
            y: [0, 25, 0, -25, 0],
            opacity: [0.2, 0.3, 0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Back button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={onBack}
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-lg hover:bg-white transition-all shadow-sm hover:shadow-md"
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">Back to Home</span>
      </motion.button>

      {/* Login Card */}
      <div className="min-h-screen flex items-center justify-center px-6 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-sm"
        >
          {/* Logo */}
          <div className="text-center mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl mb-2 shadow-lg shadow-blue-900/30"
            >
              <Bird className="w-5 h-5 text-white" />
            </motion.div>
            <h1 className="text-xl text-neutral-900 mb-0.5">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-xs text-neutral-600">
              {isSignUp 
                ? 'Start your journey with Critical AI' 
                : 'Sign in to continue to Critical AI'}
            </p>
          </div>

          {/* Login Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-2xl shadow-2xl p-6"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label htmlFor="name" className="block text-xs text-neutral-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-sm"
                    placeholder="John Doe"
                    required={isSignUp}
                  />
                </div>
              )}

              <div>
                <label htmlFor="email" className="block text-xs text-neutral-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-sm"
                    placeholder="you@company.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-xs text-neutral-700 mb-1.5">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-10 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-sm"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-xs text-neutral-700 mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                      className="w-full pl-10 pr-3 py-2 bg-white border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent transition-all text-sm"
                      placeholder="••••••••"
                      required={isSignUp}
                    />
                  </div>
                </div>
              )}

              {!isSignUp && (
                <div className="flex items-center justify-between text-xs">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      className="w-3.5 h-3.5 text-blue-900 border-neutral-300 rounded focus:ring-blue-900"
                    />
                    <span className="text-neutral-600">Remember me</span>
                  </label>
                  <button
                    type="button"
                    className="text-blue-900 hover:text-blue-800 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              {/* Role Selection */}
              <div>
                <label className="block text-xs text-neutral-700 mb-1.5">
                  Sign in as
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedRole('user')}
                    className={`py-2 px-3 rounded-lg border transition-all text-sm text-center ${
                      selectedRole === 'user'
                        ? 'bg-blue-50 border-blue-700 text-blue-700 shadow-sm'
                        : 'bg-white border-neutral-300 text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    User
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedRole('admin')}
                    className={`py-2 px-3 rounded-lg border transition-all text-sm text-center ${
                      selectedRole === 'admin'
                        ? 'bg-green-50 border-green-700 text-green-700 shadow-sm'
                        : 'bg-white border-neutral-300 text-neutral-600 hover:bg-neutral-50'
                    }`}
                  >
                    Admin
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-blue-900 text-white hover:bg-blue-800 transition-all rounded-lg shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 text-sm text-center"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-neutral-200" />
              <span className="text-xs text-neutral-500">OR</span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* Social Login */}
            <div className="space-y-2">
              <button className="w-full py-2 bg-white border border-neutral-300 hover:bg-neutral-50 transition-all rounded-lg flex items-center justify-center gap-2 text-sm">
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <span>Continue with Google</span>
              </button>

              <button className="w-full py-2 bg-white border border-neutral-300 hover:bg-neutral-50 transition-all rounded-lg flex items-center justify-center gap-2 text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Continue with GitHub</span>
              </button>
            </div>

            {/* Toggle Sign Up / Sign In */}
            <div className="mt-4 text-center text-xs text-neutral-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-900 hover:text-blue-800 transition-colors"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </motion.div>

          {/* Footer */}
          <p className="text-center text-xs text-neutral-500 mt-4">
            By continuing, you agree to Critical AI's{' '}
            <button className="text-blue-900 hover:text-blue-800 transition-colors">
              Terms of Service
            </button>{' '}
            and{' '}
            <button className="text-blue-900 hover:text-blue-800 transition-colors">
              Privacy Policy
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
}