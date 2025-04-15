import React, { useEffect, useState } from 'react';
import video1 from '../Images/SocSci-Intro.mp4';
import video2 from '../Images/BKJa.mp4';
import pshop1 from '../Images/Me&I.png';
import pshop2 from '../Images/Backstabbe.png';
import photo1 from '../Images/Japan.png';
import photo2 from '../Images/LegoDog.png';
import photo3 from '../Images/Snowy1.png';
import photo4 from '../Images/Snowy2.png';

const Experience = ({ backgroundColor = '#D2C6B2' }) => {
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          } else {
            setIsInView(false);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const experienceText = document.querySelector('.experience-text');
    if (experienceText) observer.observe(experienceText);

    return () => {
      if (experienceText) observer.unobserve(experienceText);
    };
  }, []);

  return (
    <section
      className="flex flex-col items-center justify-center w-full py-14"
      style={{ backgroundColor, color: '#faf7e8' }}
    >
      <div className="max-w-4xl w-full">
        <h2
          className={`experience-text text-4xl font-semibold mt-14 text-center text-white ${
            isInView
              ? 'opacity-100 translate-y-0 transition-all duration-1500 ease-out'
              : 'opacity-0 translate-y-7'
          }`}
        >
          Experience 🧠
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center mt-14">
          <div className="w-full md:w-4/5 md:ml-[-3rem] border border-[#faf7e8] p-6 bg-[#879183] rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              ~Video Editing
            </h3>
            <div className="space-y-4">
              <video className="w-full rounded" controls>
                <source src={video1} type="video/mp4" />
              </video>
              <video className="w-full rounded" controls>
                <source src={video2} type="video/mp4" />
              </video>
            </div>
            <p className="mt-4 text-sm text-[#faf7e8] text-center">
              Video editing projects using DaVinci Resolve, with most of the time being volunteer work to edit footage.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-start md:items-center mt-14">
          <div className="w-full md:w-4/5 md:mr-[-3rem] border border-[#faf7e8] p-6 bg-[#879183] rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              ~Photoshop
            </h3>
            <div className="space-y-4">
              <img src={pshop1} alt="Photoshop work 1" className="w-full rounded" />
              <img src={pshop2} alt="Photoshop work 2" className="w-full rounded" />
            </div>
            <p className="mt-4 text-sm text-[#faf7e8] text-center">
              Creative edits done for unique tasks, such as humorous side assignments.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center mt-14">
          <div className="w-full md:w-4/5 md:ml-[-3rem] border border-[#faf7e8] p-6 bg-[#879183] rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              ~Photography
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <img src={photo1} alt="Japan" className="w-full rounded" />
              <img src={photo2} alt="Lego Dog" className="w-full rounded" />
              <img src={photo3} alt="Snowy 1" className="w-full rounded" />
              <img src={photo4} alt="Snowy 2" className="w-full rounded" />
            </div>
            <p className="mt-4 text-sm text-[#faf7e8] text-center">
              Captured scenes and objects with a focus on composition, either for leisure or when required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
