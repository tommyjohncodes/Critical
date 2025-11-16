import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Navigation({ onLoginClick }: { onLoginClick: () => void }) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
    >
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="w-6 h-6" />
          <span>Critical AI</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#features" className="text-neutral-600 hover:text-neutral-900 transition-colors">
            Features
          </a>
          <a href="#industries" className="text-neutral-700 hover:text-neutral-900 transition-colors">
            Industries
          </a>
          <button 
            onClick={onLoginClick}
            className="px-6 py-2 bg-white border-2 border-neutral-200 hover:border-blue-900 transition-all rounded-lg"
          >
            Login
          </button>
          <button className="px-6 py-2 bg-blue-900 text-white hover:bg-blue-800 transition-colors rounded-lg shadow-lg shadow-blue-900/20">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}