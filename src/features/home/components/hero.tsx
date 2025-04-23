import SocialButton from "@/shared/components/social-button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div 
        ref={heroRef}
        className="container mx-auto px-4 md:px-6 z-10 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block">Olá, sou o</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              João Vittor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10 leading-relaxed">
            Analista de dados | Desenvolvedor Frontend 
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <SocialButton href="https://github.com/JoaoVittorL" icon={<Github size={20} />} label="GitHub" />
            <SocialButton 
              href="https://www.linkedin.com/in/jo%C3%A3o-vittor-lopes-dos-santos-199103201" 
              icon={<Linkedin size={20} />} 
              label="LinkedIn" 
            />
            <SocialButton href="mailto:vittorsantos234@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
          
          <a
            href="#about"
            className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white-500 dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-300 animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;