import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin} from 'lucide-react';
import ContactItem from '@/shared/components/contact-item';
import SocialLink from '@/shared/components/social-link';
import { FormContact } from '@/shared/components/form-contact';

const Contact: React.FC = () => {
  const contactRef = useRef<HTMLDivElement>(null);

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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div 
        ref={contactRef}
        className="container mx-auto px-4 md:px-6 transition-all duration-1000 opacity-0 translate-y-10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Entre em Contato
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Tenho uma boa maneira de falar com você, seja por e-mail ou telefone.
              Estou sempre aberto a novas oportunidades de trabalho e colaboração.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Informação de Contato</h3>
              
              <div className="space-y-6">
                <ContactItem
                  icon={<Mail className="text-blue-600 dark:text-blue-400" />}
                  title="Email"
                  detail={<a href="mailto:vittorsantos234@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">vittorsantos234@gmail.com</a>}
                />
                <ContactItem 
                  icon={<Phone className="text-blue-600 dark:text-blue-400" />}
                  title="Telefone"
                  detail="+55 (77) 98131-4622"
                />
                <ContactItem 
                  icon={<MapPin className="text-blue-600 dark:text-blue-400" />}
                  title="Local"
                  detail="Bahia - BR"
                />
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <SocialLink href="https://github.com/JoaoVittorL" label="GitHub" />
                  <SocialLink href="https://www.linkedin.com/in/jo%C3%A3o-vittor-lopes-dos-santos-199103201" label="LinkedIn" />
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              
             <FormContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};





export default Contact;