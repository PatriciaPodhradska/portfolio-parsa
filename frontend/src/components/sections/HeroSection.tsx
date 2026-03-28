import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useLanguage } from '../../context/LanguageContext';
import { useState } from 'react';
import Hero from '../../assets/hero/hero.png'
import Image from 'next/image';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useLanguage();
  const [useTypewriterEffect, setUseTypewriterEffect] = useState(true);
  
  // Typewriter effect
  const title = t('hero.title');
  const { displayedText: typewriterText } = useTypewriter(title, 80, 500);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-600"
            >
              {t('hero.greeting')}
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent"
            >
              {t('hero.name')}
            </motion.h1>

            <div className="space-y-4">
              {/* Typewriter Effect */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-3xl lg:text-4xl text-zinc-700 min-h-[3rem]"
                >
                  {typewriterText}
                  <span className="animate-pulse">|</span>
                </motion.h2>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-zinc-600 max-w-xl"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                onClick={() => onNavigate('projects')}
                className="group px-8 py-4 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.primary')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 border-2 border-zinc-900 text-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('hero.cta.secondary')}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-8 pt-8 border-t border-zinc-200"
            >
              <div>
                <div className="text-3xl font-bold text-zinc-900">3+</div>
                <div className="text-sm text-zinc-600">{t('about.yearsExperience')}</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-900">10+</div>
                <div className="text-sm text-zinc-600">{t('about.projectsCompleted')}</div>
              </div>
              {/* <div>
                <div className="text-3xl font-bold text-zinc-900">30+</div>
                <div className="text-sm text-zinc-600">{t('about.clientsSatisfied')}</div>
              </div> */}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              {/* Main Image */}
              <motion.div
                className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Image
                  src={Hero}
                  alt="Hero"
                  className="w-full h-auto aspect-[3/4] object-cover"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-zinc-200"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">{t('hero.picture.badge.text')}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Add stroke animation keyframes to global styles */}
      <style>{`
        @keyframes drawText {
          to {
            stroke-dashoffset: 0;
            fill: rgb(63, 63, 70);
          }
        }
      `}</style>
    </section>
  );
}
