import React, { useState, useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { useTheme } from '../assets/Additionals/ThemeContext'; // Use theme context
import aboutImage from '../Images/about.jpeg'; // Import the image

import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaPython, FaDatabase } from 'react-icons/fa';
import { SiMicrosoftword, SiMicrosoftpowerpoint, SiMicrosoftexcel, SiPowerbi } from 'react-icons/si';
import { IoLayersSharp } from "react-icons/io5";

const AboutPage = () => {
  const { darkMode } = useTheme(); // Get dark mode from theme context
  const [activeTab, setActiveTab] = useState('skills'); // Default tab is skills

  useEffect(() => {
    AOS.init({ duration: 1200, once: false }); // Initialize AOS
  }, []);

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="inline text-2xl" /> },
    { name: 'CSS', icon: <FaCss3Alt className="inline text-2xl" /> },
    { name: 'JavaScript', icon: <FaJs className="inline text-2xl" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="inline text-2xl" /> },
    { name: 'Python', icon: <FaPython className="inline text-2xl" /> },
    { name: 'MySQL Database', icon: <FaDatabase className="inline text-2xl" /> },
    { name: 'UI/UX Design', icon: <IoLayersSharp className="inline text-2xl" /> },
    { name: 'MS Word', icon: <SiMicrosoftword className="inline text-2xl" /> },
    { name: 'MS Excel', icon: <SiMicrosoftexcel className="inline text-2xl" /> },
    { name: 'MS PowerPoint', icon: <SiMicrosoftpowerpoint className="inline text-2xl" /> },
    { name: 'Power BI', icon: <SiPowerbi className="inline text-2xl" /> },
  ];

  const experience = [
    {
      title: 'MERN Stack Development Intern',
      company: 'WSA Academy',
      duration: 'July 2024 - September 2024',
      description: 'Worked on developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js.',
    },
    {
      title: 'Digital Marketing Intern',
      company: 'Bajeet.com',
      duration: 'July 2024 - September 2024',
      description: 'Assisted in creating marketing campaigns, managing social media accounts, and analyzing user engagement metrics.',
    },
  ];

  const education = [
    {
      degree: 'Bachelor in Technology (Computer Science and Engineering)',
      duration: '2022 - 2025',
      institution: 'KIPM College of Engineering and Technology',
    },
    {
      degree: 'Diploma in Information Technology',
      duration: '2019 - 2021',
      institution: 'Government Girls Polytechnic, Gorakhpur',
    },
  ];

  return (
    <section className={`flex flex-col lg:flex-row items-center justify-center p-4 sm:p-8 lg:p-10 transition-all duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`} id="about">
      {/* Left Image */}
      <div className="w-full sm:w-3/4 lg:w-1/3 mb-8 lg:mb-0 flex justify-center">
        <img src={aboutImage} alt="About Me" className={`w-1/2 sm:w-3/4 lg:w-full rounded-full shadow-lg transition-all duration-300 
          ${darkMode ? 'shadow-blue-500' : 'shadow-pink-500'} 
          hover:scale-105 hover:shadow-2xl glow-effect bounce-animation`} />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-2/3 lg:pl-8 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold mb-5" data-aos="fade-down">About Me</h1>
        <p className="mb-8 text-sm sm:text-lg max-w-xl mx-auto lg:mx-0 text-justify">
          I am Priyanshi Prajapati, a passionate and creative individual with a keen interest in graphic design, front-end development, and web development. I thrive on transforming ideas into visually appealing and user-friendly interfaces.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap space-x-0 sm:space-x-4 mb-4 justify-center lg:justify-start">
          <span onClick={() => setActiveTab('skills')} className={`py-2 px-4 cursor-pointer transition duration-300 ${activeTab === 'skills' ? 'text-blue-500 font-semibold border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>
            Skills
          </span>
          <span onClick={() => setActiveTab('experience')} className={`py-2 px-4 cursor-pointer transition duration-300 ${activeTab === 'experience' ? 'text-blue-500 font-semibold border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>
            Experience
          </span>
          <span onClick={() => setActiveTab('education')} className={`py-2 px-4 cursor-pointer transition duration-300 ${activeTab === 'education' ? 'text-blue-500 font-semibold border-b-2 border-blue-500' : 'text-gray-600 hover:text-blue-500'}`}>
            Education
          </span>
        </div>

        {activeTab === 'skills' && (
          <div className="w-full" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <li key={index} className={`flex items-center bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${darkMode ? 'text-gray-900 hover:bg-blue-50 border-2 border-blue-200' : 'text-gray-700 hover:bg-red-50 border-2 border-red-200'} hover:scale-105`}>
                  {skill.icon} <span className="ml-2">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'experience' && (
          <div className="w-full" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            {experience.map((exp, index) => (
              <div key={index} className={`bg-gray-100 p-4 mb-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${darkMode ? 'text-gray-900 hover:bg-blue-50 border-2 border-blue-200' : 'text-gray-700 hover:bg-red-50 border-2 border-red-200'} hover:scale-105`}>
                <h3 className="font-bold">{exp.title} at {exp.company}</h3>
                <p className="italic">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="w-full" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className={`bg-gray-100 p-4 mb-5 rounded-lg shadow-md hover:shadow-lg transition duration-300 ${darkMode ? 'text-gray-900 hover:bg-blue-50 border-2 border-blue-200' : 'text-gray-700 hover:bg-red-50 border-2 border-red-200'} hover:scale-105`}>
                <h3 className="font-bold">{edu.degree}</h3>
                <p className="italic">{edu.duration}</p>
                <p>{edu.institution}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutPage;
