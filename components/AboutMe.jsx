import React from 'react';

const AboutMe = ({ }) => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div
        className="flex-1 flex flex-col justify-center items-center bg-white text-[#5A483A]"
        style={{ }}
      >
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#879183] mb-4">About Me</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>I am 19 years old, but people see me as older</li>
            <li>I tinker a lot, especially in digital environments</li>
            <li>I perform other physical activities, one that I enjoy is table tennis</li>
            <li>I can enjoy multiple things, just remove the stress</li>
            <li>I am also taking a chance towards culinary as a secondary skill/option when I am bored</li>
          </ul>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center bg-[#D2C6B2] text-[#faf7e8]">
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Education</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>Developed responsive web apps using React and Tailwind CSS</li>
            <li>2nd runner up in official held Dance Competition of SLU-LHS</li>
            <li>1st place of 5th grade in board games</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
