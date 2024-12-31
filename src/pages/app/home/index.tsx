import { ParallaxSection } from '@/components/paralax-section';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowBigDownDash, Code, Github, Layout, Linkedin, Mail, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Home() {
  const handleScrollToSkills = () => {
    // Encontre a seção de skills e role até ela
    const skillsSection = document.getElementById('skills');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Helmet title="Home" />
      <div className="to-primary-50 min-h-screen bg-gradient-to-br from-gray-50 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white-500">
        <section className="bg-hero-pattern dark:bg-hero-pattern-dark relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-fixed bg-center">
          <div className="bg-gradient-radial from-primary-500/20 dark:from-accent-500/20 absolute inset-0 to-transparent"></div>
          <ParallaxSection>
            <div className="container relative z-10 mx-auto px-4 text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <h1 className="mb-2 bg-gradient-to-r to-gray-500 bg-clip-text text-5xl font-bold text-transparent text-white-500 md:text-7xl">
                  João Vittor
                </h1>
                <h2 className="mb-2 bg-gradient-to-r to-gray-500 bg-clip-text text-2xl font-bold text-transparent text-white-500 md:text-2xl">
                  Frontend Developer
                </h2>
                <div className="mb-8 flex justify-center gap-6">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400 text-white-500 transition-colors"
                  >
                    <Github size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-400 text-white-500 transition-colors"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="mailto:your.email@example.com"
                    className="hover:text-primary-400 text-white-500 transition-colors"
                  >
                    <Mail size={24} />
                  </motion.a>
                </div>

                <ArrowBigDownDash
                  className="mx-auto mt-4 h-8 w-8 animate-bounce cursor-pointer text-white-500"
                  onClick={handleScrollToSkills}
                />
              </motion.div>
            </div>
          </ParallaxSection>
        </section>
        <section className="bg-white/50 py-20 backdrop-blur-sm dark:bg-gray-800/50" id="skills">
          <div className="container mx-auto px-4">
            <h2 className="from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 mb-12 bg-gradient-to-r bg-clip-text text-center text-3xl font-bold text-transparent">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/80 border-primary-100 dark:border-primary-900 rounded-2xl border p-8 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl dark:bg-gray-800/80"
              >
                <Code className="text-primary-500 dark:text-primary-400 mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Frontend Development</h3>
                <p className="text-gray-600 dark:text-gray-300">React, TypeScript, Tailwind CSS</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white/80 border-primary-100 dark:border-primary-900 rounded-2xl border p-8 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl dark:bg-gray-800/80"
              >
                <Monitor className="text-accent-500 dark:text-accent-400 mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">Responsive Design</h3>
                <p className="text-gray-600 dark:text-gray-300">Mobile-first, Cross-browser compatibility</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white/80 border-primary-100 dark:border-primary-900 rounded-2xl border p-8 shadow-lg backdrop-blur-sm transition-shadow hover:shadow-xl dark:bg-gray-800/80"
              >
                <Layout className="text-primary-500 dark:text-primary-400 mx-auto mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold">UI/UX Design</h3>
                <p className="text-gray-600 dark:text-gray-300">Modern interfaces, User experience</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
