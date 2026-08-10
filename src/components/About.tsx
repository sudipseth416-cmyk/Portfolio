'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/5 px-3 py-1 text-xs font-medium text-purple-400 mb-3"
          >
            <User className="h-3.5 w-3.5" />
            <span>Identity</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold sm:text-4xl tracking-tight"
          >
            🚀 About Me
          </motion.h2>
        </div>

        {/* Main Section: Bio */}
        <div className="mb-16">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full glass p-8 rounded-2xl relative group"
          >
            <div className="absolute top-0 right-0 h-24 w-24 bg-cyan-500/10 blur-xl rounded-full" />
            <h3 className="text-xl font-bold text-cyan-400 mb-4">My Journey</h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              As a 2nd-year B.Tech Computer Science student, my journey is driven by an insatiable curiosity for how technology shapes our world. I started by mastering core programming languages like C, Java, and Python, which laid a strong foundation for my problem-solving skills and algorithmic thinking.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Today, I am bridging the gap between elegant user interfaces and powerful machine learning models. I specialize in building responsive frontend applications while continuously exploring the vast potential of AI and Data Science. My goal is to engineer solutions that are not only visually stunning but also intelligently driven, constantly pushing the limits of what is possible.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
