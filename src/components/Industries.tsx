import { motion } from "motion/react";
import { 
  Stethoscope, 
  Shield, 
  Landmark, 
  Phone, 
  AlertCircle, 
  Briefcase 
} from "lucide-react";

const industries = [
  {
    icon: Stethoscope,
    title: "Medical",
    description: "Patient conversations, diagnosis delivery, difficult prognoses",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Shield,
    title: "Insurance",
    description: "Claims handling, policy disputes, sensitive negotiations",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    description: "Fraud prevention, debt collection, compliance scenarios",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Phone,
    title: "Call Centers",
    description: "De-escalation, customer retention, complex problem solving",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: AlertCircle,
    title: "Emergency 911",
    description: "Crisis management, critical information gathering, calm under pressure",
    gradient: "from-red-500/20 to-rose-500/20"
  },
  {
    icon: Briefcase,
    title: "Enterprise HR",
    description: "Terminations, conflict resolution, sensitive employee matters",
    gradient: "from-indigo-500/20 to-violet-500/20"
  }
];

export function Industries() {
  return (
    <section id="industries" className="py-32 px-6 bg-neutral-50 relative overflow-hidden">
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Animated lines background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-neutral-900"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              scaleX: [0.5, 1, 0.5],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl mb-6 tracking-tight">
            Built for High-Stakes Industries
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Where every conversation matters and mistakes have real consequences
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated gradient background */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Animated border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-neutral-900 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <industry.icon className="w-10 h-10 mb-6" />
                </motion.div>
                <h3 className="text-2xl mb-3 font-normal">{industry.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}