'use client';

import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const skillsData = [
  // Programming Languages
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  
  // Tools & Platforms
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invertDark: true },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg' },

  // Core Concepts (no icon, styled as text pills)
  { name: 'Data Structures', isText: true, color: 'from-cyan-500 to-blue-500' },
  { name: 'Logic Building', isText: true, color: 'from-purple-500 to-rose-500' },
  { name: 'Problem Solving', isText: true, color: 'from-indigo-500 to-purple-500' },
  { name: 'Competitive Coding', isText: true, color: 'from-emerald-500 to-teal-500' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-400 mb-3"
          >
            <Code className="h-3.5 w-3.5" />
            <span>Proficiencies</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold sm:text-4xl tracking-tight"
          >
            💻 My Skills
          </motion.h2>
        </div>

        {/* Floating Animation Cluster */}
        <div className="relative w-full min-h-[400px] flex items-center justify-center py-10">
           {/* Center glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />
           
           <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl relative z-10">
              {skillsData.map((skill, index) => {
                // Generate pseudo-random animation values for a natural floating effect
                const randomDelay = (index % 5) * 0.3;
                const randomDuration = 3 + (index % 3); 
                const yOffset = 10 + (index % 10);

                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="relative group cursor-pointer z-10 hover:z-50"
                  >
                    <motion.div
                      animate={{ y: [0, -yOffset, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: randomDuration, 
                        delay: randomDelay, 
                        ease: "easeInOut" 
                      }}
                      whileHover={{ scale: 1.15 }}
                      className="flex items-center justify-center"
                    >
                      {skill.isText ? (
                        <div className={`px-6 py-3 rounded-full bg-gradient-to-r ${skill.color} text-white font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] border border-white/20 backdrop-blur-sm`}>
                          {skill.name}
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl h-28 w-28 hover:bg-white/10 transition-colors hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:border-cyan-500/50">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img 
                            src={skill.icon} 
                            alt={skill.name} 
                            className={`w-14 h-14 object-contain mb-2 ${skill.invertDark ? 'invert' : ''}`}
                          />
                          <span className="text-xs font-semibold text-slate-300">{skill.name}</span>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
           </div>
        </div>
      </div>
    </section>
  );
}
