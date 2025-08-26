import React, { useState } from 'react';
import { SiNotion } from 'react-icons/si';
import {
  FaLinkedin, FaGithub,
  FaGlobe, FaWhatsapp, FaMoon, FaSun
} from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import ReCAPTCHA from 'react-google-recaptcha';
import './index.css';

function App() {
  // ✅ Default dark mode aktif
  const [dark, setDark] = useState(true);
  const [showCaptcha, setShowCaptcha] = useState(false);

  const toggleDark = () => setDark(!dark);

  const handleCaptchaVerify = (token) => {
    if (token) {
      window.open('https://wa.me/6281219456916', '_blank');
      setShowCaptcha(false);
    }
  };

  const links = [
    { name: 'Website', icon: <FaGlobe />, url: 'https://hugowrtma.site' },
    { name: 'Github', icon: <FaGithub />, url: 'https://github.com/hugowrtma' },
    { name: 'Linkedin', icon: <FaLinkedin />, url: 'https://linkedin.com/in/hugowrtma' },
    { name: 'Notion', icon: <SiNotion />, url: 'https://crystalline-process-b56.notion.site/Oktaryan-Hugo-s-Portofolio-24e3ebd5f49e800daf89c7757c57dc7c' },
    { name: 'WhatsApp', icon: <FaWhatsapp />, url: '' }, // WA handled via captcha
  ];

  return (
    <div>
      <div
        className={`min-h-screen 
        ${dark ? 'bg-[#1f1f1f] text-white' : 'bg-[#f8f5f0] text-[#6d3c27]'} 
        text-center flex flex-col items-center justify-center 
        px-4 py-10 transition-all duration-300 ease-in-out relative`}
      >
        {/* Dark mode toggle */}
        <div
          className="absolute top-4 right-4 cursor-pointer"
          onClick={toggleDark}
        >
          {dark ? (
            <FaSun className="text-2xl" />
          ) : (
            <FaMoon className="text-2xl" />
          )}
        </div>

        {/* Profile */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover shadow-md"
        />
        <h1 className="mt-4 text-xl font-bold">Oktaryan Hugo Wiratama</h1>

        {/* Link buttons */}
        <div className="flex flex-col mt-6 gap-4 w-full max-w-xs">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                if (link.name === 'WhatsApp') {
                  setShowCaptcha(true);
                } else {
                  window.open(link.url, '_blank');
                }
              }}
              className={`font-semibold py-3 px-6 rounded-full shadow-md transition duration-200
                ${
                  dark
                    ? 'bg-[#2a2a2a] text-white hover:bg-[#3a3a3a]'
                    : 'bg-white text-[#6d3c27] hover:bg-gray-100'
                }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Icons row */}
        <div className="flex gap-6 mt-10 text-2xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.name === 'WhatsApp' ? '#' : link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (link.name === 'WhatsApp') {
                  e.preventDefault();
                  setShowCaptcha(true);
                }
              }}
              className="hover:scale-110 transition"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* reCAPTCHA popup */}
        {showCaptcha && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
              className={`relative p-6 rounded-lg shadow-lg
                ${dark ? 'bg-[#2a2a2a] text-white' : 'bg-white text-black'}`}
            >
              {/* Tombol close */}
              <button
                onClick={() => setShowCaptcha(false)}
                className={`absolute top-2 right-2 text-2xl ${
                  dark ? 'text-white' : 'text-[#6d3c27]'
                }`}
              >
                <IoMdClose />
              </button>

              <ReCAPTCHA
                sitekey="6LejsmErAAAAAGDbtFZWiQP1b-_KHPiqjd_9ybbO"
                onChange={handleCaptchaVerify}
              />
            </div>
          </div>
        )}

        {/* Footer */}
        <p className="mt-6 text-sm opacity-60">Linkhub by Hugo</p>
      </div>
    </div>
  );
}

export default App;
