import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImg from './assets/profile.jpg'; 
import { 
  Github, 
  Linkedin, 
  Globe,  
  Moon, 
  Sun, 
  X, 
  ExternalLink,
} from 'lucide-react';

function App() {
  const [dark, setDark] = useState(true);
  const toggleDark = () => setDark(!dark);

  const mainLinks = [
    { 
      name: 'Portfolio Website', 
      icon: <Globe className="w-5 h-5" />, 
      url: 'https://hugowrtma.site',
      description: 'Explore my work and projects',
      color: 'from-blue-500 to-blue-600',
      category: 'primary'
    },
    { 
      name: 'GitHub Profile', 
      icon: <Github className="w-5 h-5" />, 
      url: 'https://github.com/hugowrtma',
      description: 'Code repositories and contributions',
      color: 'from-gray-600 to-gray-700',
      category: 'primary'
    },
    { 
      name: 'LinkedIn', 
      icon: <Linkedin className="w-5 h-5" />, 
      url: 'https://linkedin.com/in/hugowrtma',
      description: 'Professional network and experience',
      color: 'from-blue-600 to-blue-700',
      category: 'primary'
    },
    { 
      name: 'Notion Portfolio', 
      icon: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.747.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/></svg>,
      url: 'https://crystalline-process-b56.notion.site/Oktaryan-Hugo-s-Portofolio-24e3ebd5f49e800daf89c7757c57dc7c',
      description: 'Detailed project documentation',
      color: 'from-black to-gray-800',
      category: 'secondary'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${
      dark 
        ? 'bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 text-gray-900'
    }`}>
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className={`absolute inset-0 opacity-[0.02] ${dark ? 'bg-grid-pattern-white' : 'bg-grid-pattern-dark'}`} />

      {/* Dark Mode Toggle */}
      <motion.button
        onClick={toggleDark}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed top-6 right-6 p-3 rounded-full shadow-lg z-50 backdrop-blur-sm border ${
          dark 
            ? 'bg-gray-800/50 border-gray-700/50 text-yellow-400 hover:bg-gray-700/70' 
            : 'bg-white/70 border-gray-200 text-gray-700 hover:bg-white/90'
        }`}
      >
        {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>

      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md space-y-8"
        >
          
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-xl scale-110" />
    
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-700/50 shadow-xl"
            >
              <img
                src={profileImg}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

  <div className="space-y-2">
    <h1 className={`text-2xl font-bold ${
      dark 
        ? 'bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent' 
        : 'text-gray-900'
    }`}>
      Oktaryan Hugo Wiratama
    </h1>
    <p className={`${dark ? 'text-gray-400' : 'text-gray-600'}`}>
      DevOps Engineer | System Administrator | Front-End Web Developer | Data Analyst | Quality Assurance
    </p>
    
    {/* Status Badge */}
    <div className="inline-flex items-center px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm">
      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse" />
      Currently working as a DevOps Engineer
    </div>
  </div>
</motion.div>

          {/* Main Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            {mainLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => window.open(link.url, '_blank')}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 rounded-xl backdrop-blur-sm border group ${
                  dark 
                    ? 'bg-gray-800/50 border-gray-700/50 hover:bg-gray-700/70' 
                    : 'bg-white/70 border-gray-200 hover:bg-white/90'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${link.color} text-white`}>
                    {link.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className={`font-semibold ${dark ? 'text-white' : 'text-gray-900'}`}>
                      {link.name}
                    </h3>
                    <p className={`text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {link.description}
                    </p>
                  </div>
                  <ExternalLink className={`w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity ${
                    dark ? 'text-gray-400' : 'text-gray-600'
                  }`} />
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Quick Social Icons */}
          <motion.div 
            variants={itemVariants}
            className="flex justify-center gap-4 pt-4"
          >
            {mainLinks.slice(0, 3).map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 rounded-full backdrop-blur-sm border ${
                  dark 
                    ? 'bg-gray-800/30 border-gray-700/50 text-gray-400 hover:text-white' 
                    : 'bg-white/50 border-gray-200 text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="text-center pt-8 border-t border-gray-700/30"
          >
            <p className={`text-sm ${dark ? 'text-gray-500' : 'text-gray-500'}`}>
              Linkhub by Hugo • Made with React
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;