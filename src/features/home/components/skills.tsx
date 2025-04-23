import CategoryButton from '@/shared/components/category-button';
import SkillBar from '@/shared/components/skill-bar';
import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'tools' | 'other';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Tailwind CSS', level: 100, category: 'frontend' },
    { name: 'Responsive Design', level: 100, category: 'frontend' },
    { name: 'HTML5', level: 90, category: 'frontend' },
    { name: 'CSS3/SASS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 90, category: 'frontend' },
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'Git', level: 90, category: 'tools' },
    { name: 'Vite', level: 85, category: 'tools' },
    { name: 'Figma', level: 60, category: 'tools' },
    { name: 'Jest', level: 60, category: 'tools' },
    { name: 'UI/UX Design', level: 60, category: 'other' },
  ];

  const skillsRef = useRef<HTMLDivElement>(null);
  const [category, setCategory] = React.useState<'all' | 'frontend' | 'tools' | 'other'>('all');

  const filteredSkills = skills.filter(skill => 
    category === 'all' || skill.category === category
  );

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div 
        ref={skillsRef}
        className="container mx-auto px-4 md:px-6 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Minhas Habilidades
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Aqui estão as tecnologias e ferramentas que sou proficiente.
              Estou constantemente aprendendo e expandindo minha 
              habilidade para ficar atualizado com as tendências do mercado.
            </p>
          </div>

          <div className="flex justify-center mb-10 space-x-2">
            <CategoryButton 
              active={category === 'all'} 
              onClick={() => setCategory('all')}
            >
              Tudo
            </CategoryButton>
            <CategoryButton 
              active={category === 'frontend'} 
              onClick={() => setCategory('frontend')}
            >
              Frontend
            </CategoryButton>
            <CategoryButton 
              active={category === 'tools'} 
              onClick={() => setCategory('tools')}
            >
              Ferramentas
            </CategoryButton>
            <CategoryButton 
              active={category === 'other'} 
              onClick={() => setCategory('other')}
            >
              Outros
            </CategoryButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <SkillBar
                key={skill.name} 
                name={skill.name} 
                level={skill.level} 
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};





export default Skills;