import React from "react";
import img from "../../assets/images/99xnft.png";
import bg3 from "../../assets/images/bg3.png";

const ClubNet = () => {
  return (
    <section className="club__net__bg  relative">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          backgroundImage: `url(${bg3})`,
          backgroundRepeat: "no-repeat",
          //   backgroundSize: "cover",
          backgroundPosition: "left center",
        }}
      ></div>
      <div className="max-w-[1187px] lg:h-[455px] mx-auto py-4 px-4 md:px-0 flex justify-center items-center ">
        <div className="grid grid-cols-9 justify-center items-center">
          <div className="col-span-9 lg:col-span-4  ">
            <div className="w-full md:mt-[-23%] lg:-mt-[52%] z-20 relative">
              <img src={img} alt="" className="w-3/4 mx-auto" />
            </div>
          </div>
          <div className="col-span-9 lg:col-span-5 sm:mt-0 my-6">
            <p className="text-[#E1E2EE] text-[24px] leading-[33px] md:text-[31px] md:leading-[44px] font-bold p-2">
              Owning one of these limited digital collectibles, and the image it
              represents, says to the world who you are, what you’re all about,
              and what community you’re proud to be a part of.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubNet;
