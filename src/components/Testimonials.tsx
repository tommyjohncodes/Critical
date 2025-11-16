import { motion } from "motion/react";
import { Mail, Send } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Closing pitch */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 text-red-900 rounded-full text-sm mb-6">
              <div className="w-2 h-2 bg-red-600 rounded-full" />
              Mission Critical
            </div>
            
            <h2 className="text-5xl mb-6 text-neutral-900">
              When Getting It Right <span className="text-red-600 font-normal">Isn't Optional</span>
            </h2>
            
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              In healthcare, emergency services, and financial sectors, a single miscommunication can cost lives, livelihoods, and legal liability. Your team faces high-pressure situations where there's no room for error.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg text-neutral-900 mb-1">Prevent Catastrophic Errors</h3>
                  <p className="text-neutral-600">Practice emergency triage, crisis de-escalation, and critical decision-making before lives depend on it</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg text-neutral-900 mb-1">Build Crisis Competency</h3>
                  <p className="text-neutral-600">Train staff to handle worst-case scenarios—cardiac arrests, suicide calls, fraud investigations—in a safe environment</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-red-600 rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg text-neutral-900 mb-1">Reduce Organizational Risk</h3>
                  <p className="text-neutral-600">Document training compliance and protect against malpractice, regulatory violations, and operational failures</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl">
              <p className="text-sm text-neutral-700">
                <span className="font-semibold text-neutral-900">Don't wait for disaster to expose gaps in your training.</span> Critical AI prepares your team for the moments that matter most—before they happen.
              </p>
            </div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl text-neutral-900">Get in Touch</h3>
                  <p className="text-sm text-neutral-600">We'll respond within 24 hours</p>
                </div>
              </div>

              <form className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-neutral-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-neutral-700 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-neutral-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm text-neutral-700 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    required
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select your industry</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="insurance">Insurance</option>
                    <option value="banking">Banking & Finance</option>
                    <option value="call-center">Call Center</option>
                    <option value="emergency">Emergency Services</option>
                    <option value="hr">Enterprise HR</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-neutral-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your training needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-blue-900 text-white hover:bg-blue-800 transition-all rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}