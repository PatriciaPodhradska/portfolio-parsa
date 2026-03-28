import { motion } from 'motion/react';
import { Rocket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

const socialLinks = [
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/patricia-p-34984227a/', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/PatriciaPodhradska', label: 'GitHub' },
];

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="text-2xl font-bold">
            &lt;PP /&gt;
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-zinc-400 flex items-center gap-2 flex-wrap justify-center">
              <span>© {currentYear} Patricia Podhradska.</span>
              <span>{t('footer.rights')}</span>
            </p>
            <p className="text-sm text-zinc-500 mt-1 flex items-center gap-1 justify-center">
              {t('footer.builtWith')}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Rocket className="w-5 h-5 text-blue-900"/>
              </motion.span>
            </p>
          </div>

          {/* Quick Links
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-zinc-400 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#terms" className="text-zinc-400 hover:text-white transition-colors">
              Terms
            </a>
          </div> */}

          {/* Social media links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-colors"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon className="w-4 h-4 text-white" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
