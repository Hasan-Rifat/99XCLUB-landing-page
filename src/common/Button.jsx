import React from "react";
import "../style/home.css";
const Button = ({ children, classNames }) => {
  return (
    <button
      className={`border-none text-white leading-[19px] inline-block cursor-pointer font-medium text-base  rounded-lg button__style ${classNames}`}
    >
      {children}
    </button>
  );
};

export default Button;
