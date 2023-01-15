import React from "react";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { SiMedium } from "react-icons/si";
import bgAfter from "../assets/images/bg-hero-after.png";

const Footer = () => {
  return (
    <footer className="pt-[99px] pb-[141px] bg-[#080709] relative">
      <div
        style={{
          background: `url(${bgAfter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute bottom-0 left-0 bg__bottom w-full h-[163.46px]"
      ></div>
      <div className="max-w-[340px] mx-auto">
        <div className="text-center">
          <h2 className="text__style text-[25px] leading-[30px] font-bold">
            99X CLUB
          </h2>
          <div>
            <ul className="flex gap-[42px] mt-[49px] justify-center">
              <li>
                <a href="/" className="text-white text-[33px]">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-[33px]">
                  <BsDiscord />
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-[33px]">
                  <FaTelegram />
                </a>
              </li>
              <li>
                <a href="/" className="text-white text-[33px]">
                  <SiMedium />
                </a>
              </li>
            </ul>
            <p className="mt-[39px] text-[#B4B5BD] leading-[25.6px]">
              Copyright © 2023. 99x Club. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
