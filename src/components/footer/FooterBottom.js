import React from "react";

const FooterBottom = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full py-10 bg-gray-900">
      <p className="text-center text-gray-400 text-base">
        © {currentYear}. All rights reserved by Anubhav Singh Parte
      </p>
    </div>
  );
};

export default FooterBottom;
