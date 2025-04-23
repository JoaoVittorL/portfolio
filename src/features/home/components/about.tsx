import React, { useEffect, useRef } from 'react';
import { Code, Layers, Globe, PenTool } from 'lucide-react';
import AboutItem from '@/shared/components/about-item';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div 
        ref={aboutRef}
        className="container mx-auto px-4 md:px-6 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre mim
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Eu tenho uma paixão por criar interfaces de usuário intuitivas e engajadas, 
              capazes de proporcionar uma experiência excepcional aos usuários.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Minha Jornada</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Minha viagem na área de desenvolvimento web começou com uma curiosidade sobre 
                  como os sites funcionam. Através de aprendizado dedicado e projetos práticos, 
                  desenvolvi uma sólida base em tecnologias de frontend. Estou sempre explorando 
                  novas técnicas e mantendo-me atualizado com as tendências do desenvolvimento web.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Eu acredito em criar sites que não apenas sejam visualmente atraentes, mas também 
                  sejam acessíveis, performantes e fáceis de usar. Meu objetivo é criar experiências 
                  digitais que deixem uma impressão duradoura.
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Minhas Competências</h3>
                <ul className="space-y-4">
                  <AboutItem 
                    icon={<Code size={24} className="text-blue-600 dark:text-blue-400" />}
                    title="Código limpo"
                    description="Eu escrevo código limpo e bem documentado, facilitando a manutenção e colaboração nos projetos." 
                  />
                  <AboutItem 
                    icon={<Layers size={24} className="text-blue-600 dark:text-blue-400" />}
                    title="Responsividade"
                    description="Eu desenvolvo sites responsivos, garantindo que eles sejam acessíveis em diferentes dispositivos e tamanhos de tela para uma experiência consistente."
                  />
                  <AboutItem 
                    icon={<Globe size={24} className="text-blue-600 dark:text-blue-400" />}
                    title="Frontend Frameworks"
                    description="Eu uso frameworks front-end modernos, como React ou Next, para criar interfaces de usuário interativas e dinâmicas."
                  />
                  <AboutItem
                    icon={<PenTool size={24} className="text-blue-600 dark:text-blue-400" />}
                    title="UI/UX"
                    description="Eu desenvolvo interfaces de usuário intuitivas e agradáveis, proporcionando uma experiência de usuário excepcional."
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;