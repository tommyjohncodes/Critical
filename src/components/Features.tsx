import { motion } from "motion/react";
import { Shield, FileCheck, TrendingUp, Users, Gauge, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Risk Reduction",
    description: "Practice high-stakes conversations in a safe environment to minimize errors when it matters most"
  },
  {
    icon: FileCheck,
    title: "Liability Protection",
    description: "Document training compliance and build a record of preparedness"
  },
  {
    icon: TrendingUp,
    title: "Performance Improvement",
    description: "Get real-time feedback on communication skills and decision-making under pressure"
  },
  {
    icon: Users,
    title: "Team Readiness",
    description: "Ensure every team member practices critical scenarios before facing them in reality"
  },
  {
    icon: Gauge,
    title: "Faster Onboarding",
    description: "Accelerate new hire training with realistic, on-demand practice scenarios"
  },
  {
    icon: Lock,
    title: "Regulatory Compliance",
    description: "Meet industry training standards with documented practice protocols"
  }
];

export function Features() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      {/* Subtle background elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 text-blue-900 rounded-full text-sm mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full" />
            Why Critical AI
          </div>
          <h2 className="text-5xl mb-6 text-neutral-900 font-bold font-normal">
            When Failure Isn't an Option
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            In life-or-death moments, every word counts. Practice critical conversations in a risk-free environment before lives, careers, and reputations depend on them.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 bg-white border border-neutral-200 rounded-2xl hover:border-blue-300 hover:shadow-xl transition-all duration-300">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl flex items-center justify-center mb-5 group-hover:from-blue-900 group-hover:to-blue-800 group-hover:border-blue-900 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl mb-3 text-neutral-900">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl">
            <p className="text-neutral-700 mb-6 text-lg">
              One wrong word can cost a life. One missed detail can destroy trust. Train your team to get it right—every single time.
            </p>
            <button className="px-8 py-4 bg-blue-900 text-white hover:bg-blue-800 transition-all rounded-xl shadow-lg hover:shadow-xl">
              Learn How It Works
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}