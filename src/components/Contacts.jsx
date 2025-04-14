import React from 'react';

function Contact() {
  return (
    <section
      className="flex flex-col items-center justify-center py-20 px-8"
      style={{ backgroundColor: '#D2C6B2', color: '#5A483A' }}
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Contact</h2>
        <p className="text-lg leading-relaxed">
          I'm always open to opportunities, collaborations, or a good chat about creativity. <br />
        </p>
        <div className="mt-8 space-y-2 text-lg">
          <p>Email: <a href="gsr3550@students.uc-bcf.edu.ph" className="underline text-white hover:text-[#faf7e8]">gsr3550@students.uc-bcf.edu.ph</a></p>
          <p>Phone: <span className="text-white">+63 956 183 1801</span></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
