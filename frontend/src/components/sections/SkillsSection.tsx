import { motion } from 'motion/react';
import { Code, Server, Cloud, Smartphone, Database, Zap } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function SkillsSection() {
  const { t } = useLanguage();

  const skills = [
    {
      icon: Code,
      title: t('skill.frontend.title'),
      description: t('skill.frontend.description'),
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Server,
      title: t('skill.backend.title'),
      description: t('skill.backend.description'),
      technologies: ['Python', 'Java', 'PostgreSQL'],
      color: 'from-green-500 to-emerald-500',
    },
    // {
    //   icon: Cloud,
    //   title: t('skill.cloud.title'),
    //   description: t('skill.cloud.description'),
    //   technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    //   color: 'from-purple-500 to-pink-500',
    // },
    // {
    //   icon: Smartphone,
    //   title: t('skill.mobile.title'),
    //   description: t('skill.mobile.description'),
    //   technologies: ['React Native', 'PWA', 'iOS', 'Android'],
    //   color: 'from-orange-500 to-red-500',
    // },
    // {
    //   icon: Database,
    //   title: t('skill.database.title'),
    //   description: t('skill.database.description'),
    //   technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    //   color: 'from-indigo-500 to-blue-500',
    // },
    // {
    //   icon: Zap,
    //   title: t('skill.api.title'),
    //   description: t('skill.api.description'),
    //   technologies: ['GraphQL', 'REST', 'WebSocket', 'OAuth'],
    //   color: 'from-yellow-500 to-orange-500',
    // },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-zinc-200 rounded-full text-sm font-medium mb-4"
          >
            {t('nav.skills')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            {t('skills.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 max-w-2xl mx-auto"
          >
            {t('skills.subtitle')}
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full bg-white rounded-2xl p-8 border border-zinc-200 hover:border-zinc-300 hover:shadow-xl transition-all relative overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                {/* Icon */}
                <div className="relative">
                  <motion.div
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${skill.color} mb-6`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-semibold mb-3 text-zinc-900">
                    {skill.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {skill.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + techIndex * 0.05 }}
                        className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs rounded-full group-hover:bg-zinc-200 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-zinc-100 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 border border-zinc-200 text-center">
            <div className="text-4xl font-bold text-zinc-900 mb-2">10+</div>
            <div className="text-zinc-600">Programming Languages</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-zinc-200 text-center">
            <div className="text-4xl font-bold text-zinc-900 mb-2">20+</div>
            <div className="text-zinc-600">Frameworks & Libraries</div>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-zinc-200 text-center">
            <div className="text-4xl font-bold text-zinc-900 mb-2">15+</div>
            <div className="text-zinc-600">Tools & Platforms</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
