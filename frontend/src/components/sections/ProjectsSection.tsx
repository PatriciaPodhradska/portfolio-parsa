import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { FaGithub } from "react-icons/fa6";
import { useLanguage } from '../../context/LanguageContext';
import BonTravel from '../../assets/project/bontravel.png';
import Portfolio from '../../assets/project/oldest_portfolio.png';
import Client from '../../assets/project/website_for_client.png';
import Image from 'next/image';

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('project1.title'),
      description: t('project1.description'),
      image: BonTravel,
      tags: ['React', 'TailwindCSS', 'Javascript', 'Node.js'],
      color: 'from-blue-500 to-cyan-500',
      githubUrl: 'https://github.com/patriciaParsa/Bon_travel'
    },
    {
      title: t('project2.title'),
      description: t('project2.description'),
      image: Client,
      tags: ['React', 'TailwindCSS'],
      color: 'from-purple-500 to-pink-500',
      githubUrl: 'https://github.com/VieraPodhradska/portfolio_website'
    },
    {
      title: t('project3.title'),
      description: t('project3.description'),
      image: Portfolio,
      tags: ['HTML', 'CSS'],
      color: 'from-orange-500 to-red-500',
      githubUrl: 'https://github.com/patriciaParsa/Portfolio_website_updated_dec2023'
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
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
            {t('nav.projects')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold mb-4"
          >
            {t('projects.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-600 max-w-2xl mx-auto"
          >
            {t('projects.subtitle')}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden border border-zinc-200 hover:border-zinc-300 transition-all hover:shadow-xl">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity`}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    {/* <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full hover:bg-zinc-100 transition-colors"
                      title={t('projects.viewLive')}
                    >
                      <ExternalLink className="w-5 h-5 text-zinc-900" />
                    </motion.button> */}
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full hover:bg-zinc-100 transition-colors"
                      title={t('projects.viewCode')}
                    >
                      <FaGithub className="w-5 h-5 text-zinc-900" />
                    </motion.a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-zinc-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-zinc-100 text-zinc-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Details Link */}
                  {/* <button className="flex items-center gap-2 text-sm font-medium text-zinc-900 group-hover:gap-3 transition-all">
                    {t('projects.viewDetails')}
                    <ArrowRight className="w-4 h-4" />
                  </button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-zinc-900 text-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white transition-all inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  );
}
