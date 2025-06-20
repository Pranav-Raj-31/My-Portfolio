import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/Profile.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, My Self
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Pranav Raj
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#4a52ce] leading-tight">
            <ReactTypingEffect
              text={[
                'Web Developer',
                'Software Engineer',
                'Freelancer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#4a52ce]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
             I am a full-stack developer, Skilled in both front-end and
            back-end development. I specialize in the MERN stack and other
            modern technologies to create seamless user experiences and
            efficient solutions.

            I'm always open to connecting with like-minded individuals, 
            collaborating on innovative projects, and exploring new opportunities.

            Beyond academics, I enjoy engaging in fitness and sports like Cricket & Chess.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/15EHHAIevJ9Ftpm7InwBwATrbSliU3-hT/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #4a52ce, #a855f7,)',
              boxShadow: '0 0 2px #4a52ce, 0 0 2px #4a52ce, 0 0 40px #4a52ce',
            }}
          >
            DOWNLOAD CV
          </a>
          
        </div>
        
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-red-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Pranav Raj"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
