import { useEffect, useState } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import About from "../components/about";
import Skills from "../components/skills";
import Contact from "../components/contact";
import Footer from "../components/footer";

export function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <div className="font-sans text-gray-900 dark:text-white-500 bg-white-500 dark:bg-gray-900 min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <main>
         <Hero/>
         <About/>
         <Skills />
         <Contact/>
      </main>
      <Footer/>
    </div>
  );
}