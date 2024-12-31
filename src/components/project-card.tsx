import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export function ProjectCard({ title, description, image, technologies, githubUrl, liveUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white/80 border-primary-100 dark:border-primary-900 group overflow-hidden rounded-2xl border shadow-lg backdrop-blur-sm transition-all hover:shadow-xl dark:bg-gray-800/80"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="from-black/60 absolute inset-0 bg-gradient-to-t to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
      </div>
      <div className="p-6">
        <h3 className="from-primary-600 to-accent-500 dark:from-primary-400 dark:to-accent-400 mb-2 bg-gradient-to-r bg-clip-text text-xl font-bold text-transparent">
          {title}
        </h3>
        <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 rounded-full px-3 py-1 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-2"
            >
              <Github size={20} />
              <span>Code</span>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 flex items-center gap-2"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
