import React, { useEffect, useState } from 'react';

const AboutMe = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('aboutme-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="aboutme-section" className="flex flex-col md:flex-row h-screen">
      <div
        className={`flex-1 flex flex-col justify-center items-center bg-white text-[#5A483A] transition-all duration-1000 ${
          inView ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-10 opacity-0'
        }`}
      >
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#879183] mb-4">About Me 💬</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>I am 19 years old, but people see me as older</li>
            <li>I tinker a lot, especially in digital environments</li>
            <li>I perform other physical activities, one that I enjoy is table tennis</li>
            <li>I can enjoy multiple things, just remove the stress</li>
            <li>I am also taking a chance towards culinary as a secondary skill/option when I am bored</li>
          </ul>
        </div>
      </div>

      <div
        className={`flex-1 flex flex-col justify-center items-center bg-[#D2C6B2] text-[#faf7e8] transition-all duration-1000 ${
          inView ? 'transform translate-x-0 opacity-100' : 'transform translate-x-10 opacity-0'
        }`}
      >
        <div className="max-w-md">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Education 📚</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>Developed responsive web apps using React and Tailwind CSS</li>
            <li>Designed creative visual content using Photoshop and DaVinci Resolve</li>
            <li>Collaborated in multimedia school projects with a focus on storytelling and design</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Achievements 🏆</h2>
          <ul className="list-disc pl-5 text-lg space-y-2">
            <li>2nd runner-up in SLU-LHS official Dance Competition</li>
            <li>1st place in 5th grade Board Games Tournament</li>
            <li>Recognized for consistent participation in student-led events</li>
            <li>Recognized for excellent research paper in Grade 12, SLU-LHS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
