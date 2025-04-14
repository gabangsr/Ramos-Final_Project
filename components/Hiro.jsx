import React from 'react';
import myImage from '../Images/FormalPhoto.png';

const Hiro = () => {
  return (
    <section className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex flex-col justify-center items-center p-8 text-[#5A483A] max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold text-center md:text-left p-0 font-inconsolata">
          Hello! 👋
        </h1>
        <h1 className="text-3xl md:text-5xl font-bold text-center p-0 font-inconsolata"> 
          My name is <span className="text-[#879183]">Gabriel Angelo S. Ramos</span>
        </h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-white p-8 text-[#5A483A] max-w-sm mx-auto">
        <img
          src={myImage}
          alt="Gabriel Ramos"
          className="w-60 h-60 object-cover rounded-full shadow-lg mb-4"
        />
        <p className="text-lg text-center font-inconsolata">This is me</p>
      </div>
    </section>
  );
};

export default Hiro;
