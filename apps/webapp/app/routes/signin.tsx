import React from "react";

const SigninPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="z-10 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="justify-center flex flex-col text-center items-cente px-4 py-6">
          <span className="text-white text-2xl font-semibold whitespace-nowrap dark:text-white">
            slidetree
          </span>
          <h3 className="text-xl text-white">share your slides</h3>
        </div>
        <div className="flex flex-col px-4 py-6">
          <button className="justify-center flex sm:inline-flex items-center whitespace-nowrap transition font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group h-10">
            <span>continue with google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
