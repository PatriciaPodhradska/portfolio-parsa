import { motion } from 'motion/react';
import { Code2, Rocket, Users, Award } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Code2,
      title: 'about.badge.title',
      description: 'about.badge.description',
    },
    {
      icon: Rocket,
      title: 'about.badge.title1',
      description: 'about.badge.description1',
    },
    {
      icon: Award,
      title: 'about.badge.title2',
      description: 'about.badge.description2',
    },
    {
      icon: Users,
      title: 'about.badge.title3',
      description: 'about.badge.description3',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 bg-zinc-200 rounded-full text-sm font-medium mb-4"
            >
              {t('nav.about')}
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold mb-4"
            >
              {t('about.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-zinc-600 max-w-2xl mx-auto"
            >
              {t('about.intro')}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              <div className="prose prose-lg">
                <p className="text-zinc-700 leading-relaxed whitespace-pre-line">
                  {t('about.description')}
                </p>
                <p className="text-zinc-700 leading-relaxed">
                  {t('about.description2')}
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="bg-white p-4 rounded-xl border border-zinc-200 hover:border-zinc-300 transition-colors"
                  >
                    <item.icon className="w-8 h-8 mb-2 text-zinc-700" />
                    <h4 className="font-semibold text-zinc-900 mb-1">{t(item.title)}</h4>
                    <p className="text-sm text-zinc-600">{t(item.description)}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Skills & Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-6">{t('about.stack.title')}</h3>
                
                {/* Technology Bars */}
                <div className="space-y-4">
                  {[
                    { name: 'HTML & CSS', level: 95 },
                    { name: 'JavaScript', level: 95 },
                    { name: 'React / Next.js', level: 95 },
                    { name: 'TypeScript', level: 90 },
                    { name: 'TailwindCSS', level: 95 },
                    { name: 'Java', level: 50 },
                    { name: 'Python', level: 40 },
                    { name: 'PostgreSQL', level: 30 },
                  ].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-zinc-700">
                          {skill.name}
                        </span>
                        <span className="text-sm text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-zinc-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-zinc-900 to-zinc-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-700 p-8 rounded-2xl text-white"
              >
                <h3 className="text-xl font-semibold mb-4">{t('about.education.title')}</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2" />
                    <div>
                      <div className="font-extrabold">Open-ICT - Software Development (Full-Stack)</div>
                      <div className="text-sm text-zinc-300">Sep, 2024 - heden</div>
                      <div className="text-md text-zinc-300 font-bold">Hogeschool Utrecht</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2" />
                    <div>
                      <div className="font-extrabold">Vwo-diploma, profiel Cultuur & Maatschappij</div>
                      <div className="text-sm text-zinc-300">Sep, 2015 -  Jun, 2019</div>
                      <div className="text-md text-zinc-300 font-bold">Gymnasium st. Joseph</div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
