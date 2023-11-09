import React from "react";

import { Header } from "~/components/Header";

const Landing = () => {
  return (
    <section className="section flex items-center justify-center md:flex md:justify-center overflow-y-hidden">
      <div className='bg-main text-center'>
        <div className='wrapper max-w-xl transform -translate-y-18 sm:-translate-y-2xfull'>
          <h1 className='text-white font-header font-bold text-5xl mb-6'>Open source alternative to Slideshare
          </h1>
          <span text-lg>understand, optimize and fix error in large codebase easily.</span><br/>
        </div>
      </div>
    </section>
  )
};

export default Landing;