import React from "react";
import Button from "../../common/Button";
import bg from "../../assets/images/bg.png";
import bgAfter from "../../assets/images/bg-hero-after.png";

const Banner = () => {
  return (
    <section
      style={{
        background: `url(${bg} )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative "
    >
      {/* bg bottom */}
      <div
        style={{
          background: `url(${bgAfter})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="absolute bottom-0 left-0 bg__bottom w-full h-[163.46px]"
      ></div>

      {/* shape top*/}
      <div className=" w-[300px] lg:w-[446px]  h-[300px] lg:h-[446px] rounded-[50%] shape__top absolute right-[6%] -top-[7%] opacity-50"></div>
      <div className=" w-[300px] lg:w-[446px]  h-[300px] lg:h-[446px] rounded-[50%] shape__bottom absolute left-[6%] bottom-0 opacity-30"></div>
      <div className="max-w-[1200px] mx-auto py-4 px-4 md:px-0">
        <div className="max-w-[683px] mx-auto  px-4 md:px-0 text-center  py-[70px] lg:pt-[200px] lg:pb-[146px]">
          <div>
            <div>
              <span className="text__style text-[16px] font-medium leading-[25px]">
                One Stop Solution for NFTs (Lifetime Pass)!
              </span>
              <h2 className="text-[#E1E2EE] text-[20px] leading-[24px] sm:text-[30px] sm:leading-[33px] md:text-[61px] font-black md:leading-[73.2px] mt-[10px]">
                Genesis Edition Digital Membership Pass
              </h2>
              <p className=" text-[#B4B5BD] font-normal text-base leading-[25.6px] mt-[20px] max-w-[497px] mx-auto">
                A private group of
                <strong> 3333 dedicated NFT collectors</strong> and artists.
                Membership to the collective and all of the benefits come from
                holding the <strong> 99xClub Membership Pass. </strong>
              </p>
              <Button classNames="py-[20px] px-[24px] mt-[40px]">
                Mint your NFT
              </Button>
            </div>
          </div>
          <div className="mt-[63px]">
            <p className="text-[#E1E2EE] text-[25px] leading-[35px] font-medium">
              99xClub Pass Minting Starts In
            </p>
            <div className="grid grid-flow-col gap-2 sm:gap-5 text-center auto-cols-max justify-center mt-[33px] px-4">
              <div className="flex flex-col pr-[32px] border-r-[1px] border-white border-opacity-40">
                <span className="leading-[60px] text-white font-medium countdown font-mono text-2xl sm:text-5xl">
                  <span style={{ "--value": "05" }}></span>
                </span>
                <span className="text-[#B4B5BD] opacity-70 text-base leading-[19px] font-normal">
                  days
                </span>
              </div>
              <div className="flex flex-col pl-[26px] pr-[30px] border-r-[1px] border-white border-opacity-40">
                <span className="leading-[60px] text-white font-medium countdown font-mono text-2xl sm:text-5xl">
                  <span style={{ "--value": "02" }}></span>
                </span>
                <span className="text-[#B4B5BD] opacity-70 text-base leading-[19px] font-normal">
                  hours
                </span>
              </div>
              <div className="flex flex-col pl-[26px] pr-[30px] border-r-[1px] border-white border-opacity-40">
                <span className=" text-white font-medium countdown font-mono text-2xl sm:text-5xl">
                  <span style={{ "--value": 50 }}></span>
                </span>
                <span className="text-[#B4B5BD] opacity-70 text-base leading-[19px] font-normal">
                  min
                </span>
              </div>
              <div className="flex flex-col pl-[29px]">
                <span className="leading-[60px] text-white font-medium countdown font-mono text-2xl sm:text-5xl">
                  <span style={{ "--value": "00" }}></span>
                </span>
                <span className="text-[#B4B5BD] opacity-70 text-base leading-[19px] font-normal">
                  sec
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
