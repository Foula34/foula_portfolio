import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Apply theme to document
    document.documentElement.setAttribute('data-theme', savedTheme || 'dark');
  }, []);

  useEffect(() => {
    // Update theme attribute when theme changes
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className={`min-h-screen transition-colors duration-500 relative ${theme === 'dark' ? 'bg-slate-950' : 'bg-white'
          }`}
        style={{ cursor: 'none' }}
      >
        {/* Futuristic Components */}
        <ParticleBackground theme={theme} />
        <CustomCursor />
        <ScrollProgress theme={theme} />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <Hero theme={theme} />
          <About theme={theme} />
          <Skills theme={theme} />
          <Projects theme={theme} />
          <Blog theme={theme} />
          <Experience theme={theme} />
          <Contact theme={theme} />
          <Footer theme={theme} />
        </div>
      </div>
    </>
  );
}

export default App;
