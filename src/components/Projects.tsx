'use client';

import { motion } from 'framer-motion';
import { Briefcase, FolderGit2, ExternalLink, Calendar, MessageSquare, Monitor, ShieldCheck, Calculator, Leaf, Users, Activity, Keyboard, HeartPulse, ShieldAlert } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'CropCare',
    desc: 'CropCare enables farmers to detect plant diseases using AI image analysis. Upload a crop photo to get instant diagnosis, treatment suggestions, expert chat assistance, and voice call support for better farming decisions.',
    tech: ['AI/ML', 'Image Analysis', 'Real-time Chat', 'Voice Call'],
    features: [
      { icon: ShieldCheck, text: 'Instant AI Diagnosis' },
      { icon: MessageSquare, text: 'Expert Chat & Voice Support' },
    ],
    className: 'lg:col-span-2',
    icon: Leaf,
    badge: 'AI AgTech Platform',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    link: 'https://github.com/sudipseth416-cmyk/cropcare.1',
  },
  {
    id: 2,
    title: 'Altruist',
    desc: 'AI-powered NGO platform enabling real-time crisis reporting, intelligent analysis, volunteer coordination, and impact-driven donations. Stores case history digitally to ensure it is never lost.',
    tech: ['AI Analysis', 'Role-based Dashboards', 'Immutable Data'],
    features: [
      { icon: Users, text: 'Volunteer & Donor Coordination' },
      { icon: ShieldCheck, text: 'Persistent Digital Case History' },
    ],
    className: 'lg:col-span-1',
    icon: Users,
    badge: 'NGO Platform',
    gradient: 'from-indigo-500/20 to-transparent',
    link: 'https://github.com/sudipseth416-cmyk/Altruist',
  },
  {
    id: 3,
    title: 'RapidAid',
    desc: 'AI-powered emergency coordination platform for India — connecting citizens, ambulance operators, and hospital coordinators in real time with one-tap SOS and live tracking.',
    tech: ['SOS Dispatch', 'Live Tracking', 'AI First-Aid'],
    features: [
      { icon: HeartPulse, text: 'Hospital Prep & Routing' },
      { icon: ShieldAlert, text: 'AI First-Aid Guidance' },
    ],
    className: 'lg:col-span-1',
    icon: Activity,
    badge: 'Emergency Platform',
    gradient: 'from-rose-500/20 to-transparent',
    link: 'https://github.com/sudipseth416-cmyk/RapidAid',
  },
  {
    id: 4,
    title: 'TypeKaro',
    desc: 'An interactive typing master application designed to help users improve their typing speed and accuracy through dynamic exercises and tracking.',
    tech: ['React', 'JavaScript', 'CSS'],
    features: [
      { icon: Calculator, text: 'Real-time Speed Tracking' },
      { icon: Keyboard, text: 'Dynamic Typing Exercises' },
    ],
    className: 'lg:col-span-2',
    icon: Keyboard,
    badge: 'Web App',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    link: 'https://github.com/sudipseth416-cmyk/TypeKaro',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/5 px-3 py-1 text-xs font-medium text-indigo-400 mb-3"
          >
            <Briefcase className="h-3.5 w-3.5" />
            <span>Showcase</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold sm:text-4xl tracking-tight"
          >
            🛠️ Featured Projects
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const ProjectIcon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className={`group relative rounded-2xl glass p-8 overflow-hidden flex flex-col justify-between glass-hover ${project.className}`}
              >
                {/* Radial Glow Overlay */}
                <div className={`absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl group-hover:scale-110 transition-transform duration-500`} />

                <div className="relative z-10 flex-1 flex flex-col justify-between">
                  {/* Top bar info */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="inline-flex rounded-xl bg-white/5 p-3 text-cyan-400 border border-white/5 group-hover:rotate-6 transition-transform">
                        <ProjectIcon className="h-6 w-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 border border-indigo-500/20 bg-indigo-500/5 px-2.5 py-1 rounded-full">
                        {project.badge}
                      </span>
                    </div>

                    {/* Title & Desc */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {project.desc}
                    </p>

                    {/* Features list */}
                    {project.features.length > 0 && (
                      <div className="flex flex-col gap-2.5 mb-6">
                        {project.features.map((feature, fIdx) => {
                          const FeatIcon = feature.icon;
                          return (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                              <FeatIcon className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                              <span>{feature.text}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Bottom: Tech tags & Action */}
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono text-slate-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target={project.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
                    >
                      <span>View Repository</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
