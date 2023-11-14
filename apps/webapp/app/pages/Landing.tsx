import React, { FC } from "react";


const Landing: FC = () => {
  return (
    <section className="px-2 sm:px-4 w-full z-20 top-0 left-0 flex items-center justify-center py-10 h-screen">
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