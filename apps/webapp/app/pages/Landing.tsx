import React, { FC } from "react";
import { DocCard } from "~/components/DocCard";


const Landing: FC = () => {
  return (
    <>
    <section className="px-2 sm:px-4 w-full z-20 top-0 left-0 flex items-center justify-center py-10">
      <div className='bg-main text-center '>
        <div className='wrapper max-w-xl transform -translate-y-18 sm:-translate-y-2xfull '>
          <h1 className='text-white font-header font-bold text-5xl mb-6'>Open source alternative to Slideshare
          </h1>
          <span className="text-lg">understand, optimize and fix error in large codebase easily.</span><br/>
        </div>
      </div>
    </section>
    <div className="flex flex-row">
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
          <DocCard />
        </div>
      </div>
    </div>
    </>
  )
};

export default Landing;