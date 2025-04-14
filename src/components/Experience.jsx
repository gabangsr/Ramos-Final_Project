import React from 'react';
import video1 from '../Images/SocSci-Intro.mp4';
import video2 from '../Images/Cordi101-IBALOI.mp4';
import pshop1 from '../Images/Me&I.png';
import pshop2 from '../Images/Backstabbe.png';
import photo1 from '../Images/Japan.png';
import photo2 from '../Images/LegoDog.png';
import photo3 from '../Images/Snowy1.png';
import photo4 from '../Images/Snowy2.png';

const Experience = ({ backgroundColor = '#D2C6B2' }) => {
  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen px-6 py-16"
      style={{ backgroundColor, color: '#faf7e8' }}
    >
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl font-semibold mb-12 text-center" style={{ color: '#ffffff' }}>
          Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/*Video Editing*/}
          <div className="border border-[#faf7e8] p-6 flex flex-col items-center bg-[#4A483A] rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-4">Video Editing</h3>
            <div className="space-y-4 w-full">
              <video className="w-full rounded" controls>
                <source src={video1} type="video/mp4" />
              </video>
              <video className="w-full rounded" controls>
                <source src={video2} type="video/mp4" />
              </video>
            </div>
            <p className="mt-4 text-sm text-[#faf7e8] text-center">
              Video editing projects using DaVinci Resolve.
            </p>
          </div>

          {/*Photoshop*/}
          <div className="border border-[#faf7e8] p-6 flex flex-col items-center bg-[#4A483A] rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-4">Photoshop</h3>
            <div className="space-y-4 w-full">
              <img src={pshop1} alt="Photoshop work 1" className="w-full rounded" />
              <img src={pshop2} alt="Photoshop work 2" className="w-full rounded" />
            </div>
            <p className="mt-4 text-sm text-[#faf7e8] text-center">
              Examples of creative edits done for various and unique tasks.
            </p>
          </div>

          {/*Photography*/}
          <div className="border border-[#faf7e8] p-6 flex flex-col items-center bg-[#4A483B] rounded-lg transition-transform duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-4">Photography</h3>
            <div className="grid grid-cols-2 gap-4 w-full">
              <img src={photo1} alt="Japan" className="w-full rounded" />
              <img src={photo2} alt="Lego Dog" className="w-full rounded" />
              <img src={photo3} alt="Snowy 1" className="w-full rounded" />
              <img src={photo4} alt="Snowy 2" className="w-full rounded" />
            </div>
            <p className="mt-4 text-sm text-[#faf7e8] text-center">
              Captured scenes and objects from everyday life with focus on composition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
