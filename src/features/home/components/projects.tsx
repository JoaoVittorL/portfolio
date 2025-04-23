import React, { useState, useEffect, useRef } from 'react';
import TagButton from '@/shared/components/tag-button';
import ProjectCard from '@/shared/components/project-card';

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description: "A comprehensive dashboard for e-commerce platforms with analytics, inventory management, and order processing features.",
      image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com"
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div 
        ref={projectsRef}
        className="container mx-auto px-4 md:px-6 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meus Projetos
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Aqui estão alguns dos meus projetos.
              Cada projeto representa uma desafio único e mostra  
              diferentes aspectos de minhas habilidades e experiência.  
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <TagButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              Todos
            </TagButton>
            {allTags.map(tag => (
              <TagButton 
                key={tag} 
                active={filter === tag} 
                onClick={() => setFilter(tag)}
              >
                {tag}
              </TagButton>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;