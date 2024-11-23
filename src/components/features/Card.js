import React from 'react';

const Card = ({ item: { title, des, icon } }) => {
  return (
    <div className="w-full px-6 lg:px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-300">
      <div className="h-72 overflow-hidden">
        <div className="flex h-full flex-col gap-6 lg:gap-10 transform translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-4 lg:gap-6">
            <h2 className="text-lg lg:text-2xl font-titleFont font-bold text-gray-300">
              {title}
            </h2>
            <p className="text-sm lg:text-base text-gray-400">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
