import { useEffect, useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  index: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, index }) => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const bar = entry.target.querySelector('.skill-progress') as HTMLElement;
          if (bar) {
            setTimeout(() => {
              bar.style.width = `${level}%`;
            }, index * 100);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
  }, [level, index]);

  return (
    <div ref={barRef} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-gray-600 dark:text-gray-400">{level}%</span>
      </div>
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="skill-progress h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-0 transition-all duration-1000 ease-out"
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;