import React from "react";
import star from "../../assets/images/star.png";
import star2 from "../../assets/images/start2.png";
import membership from "../../assets/images/membersip bg.png";

const RewardSystem = () => {
  return (
    <section className="pt-[100px] pb-[69px] relative bg-[#100F11]">
      <div
        style={{
          background: `url('${membership}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" absolute -bottom-0 right-0 w-full h-full"
      ></div>
      <div className="absolute -bottom-[2%] right-[5%]">
        <img src={star2} alt="" />
      </div>
      <div className="max-w-[1216px] mx-auto py-4 px-4 md:px-0">
        <div className="Reward__system opacity-40 xl:w-[704px] xl:h-[704px] sm:w-[500px] sm:h-[500px] absolute  xl:left-[31%] md:left-[16%] md:top-[7%]  sm:left-[18%] left-[20%] -top-[1%] w-[300px] h-[300px] "></div>
        <div>
          <div className="absolute left-[4%] top-[12%] md:left-[6%] md:top-[15%]">
            <img src={star} alt="" />
          </div>
          <div className="max-w-[659px] mx-auto text-center mb-[62px] z-1 relative">
            <span className="text__style text-base leading-[25.6px] font-bold tracking-[0.2em]">
              REWARD SYSTEM
            </span>
            <h2 className="text-[#E1E2EE] sm:text-[32px] leading-[35px] md:text-[49px] md:leading-[58.8px] font-bold p-2 mt-[10px] mb-[20px] text-[25px] ">
              99xClub Membership Pass Holder Reward System
            </h2>
            <p className="text-base text-[#B4B5BD] leading-[25.6px]">
              99xClub Pass = One Stop Solution for your all NFTs Lifetime needs
            </p>
          </div>
          <div className="max-w-[1000px] mx-auto p-4">
            {/* first item */}
            <div className="py-[26px] px-[30px]  rounded-[20px] reward__system__items xl:flex items-center justify-between mb-[15px]">
              <p className="block w-[28px] h-[28px] rounded-[50%] bg-white mx-auto m-8 "></p>
              <p className="text-[25px] leading-[35px] font-medium text-[#E1E2EE] max-w-[823px]">
                If you hold 1 99xclub Membership Pass = 1 Free NFT in Each NFT
                Project launched by 99xclub team. Minimum 12 NFT projects will
                be launched by 99xclub team in span of 3 years.
              </p>
            </div>
            {/* second item */}
            <div className="max-w-[1000px] mx-auto mb-[15px] lg:ml-[35px]">
              <div className="py-[26px] px-[30px]  rounded-[20px] reward__system__items xl:flex items-center justify-between">
                <p className="block w-[28px] h-[28px] rounded-[50%] bg-white mx-auto m-8"></p>
                <p className="text-[25px] leading-[35px] font-medium text-[#E1E2EE] max-w-[783px]">
                  If you hold 15 99xclub Membership Pass = 15 Free NFT in Each
                  NFT Project launched by 99xclub team. Minimum 12 NFT projects
                  will be launched by 99xclub team in span of 3 years. 15 NFT
                  per project x 12 Projects = 180 NFTs you will able to claim
                  for free within 3 years.
                </p>
              </div>
            </div>
            {/* third item */}
            <div className="py-[26px] px-[30px]  rounded-[20px] reward__system__items xl:flex items-center justify-between mb-[15px]">
              <p className="block w-[28px] h-[28px] rounded-[50%] bg-white mx-auto m-8"></p>
              <p className="text-[25px] leading-[35px] font-medium text-[#E1E2EE] max-w-[823px]">
                If you hold 50 99xclub Membership Pass = 50 Free NFT in Each NFT
                Project launched by 99xclub team. Minimum 12 NFT projects will
                be launched by 99xclub team in span of 3 years. 50 NFT per
                project x 12 Projects = 600 NFTs you will able to claim for free
                within 3 years.
              </p>
            </div>
            {/* fourth item */}
            <div className="max-w-[1000px] mx-auto mb-[15px] lg:ml-[35px]">
              <div className="py-[26px] px-[30px]  rounded-[20px] reward__system__items xl:flex items-center justify-between">
                <p className="block w-[28px] h-[28px] rounded-[50%] bg-white mx-auto m-8"></p>
                <p className="text-[25px] leading-[35px] font-medium text-[#E1E2EE] max-w-[783px]">
                  If you hold 100 99xclub Membership Pass = 100 Free NFT in Each
                  NFT Project launched by 99xclub team. Minimum 12 NFT projects
                  will be launched by 99xclub team in span of 3 years. 100 NFT
                  per project x 12 Projects = 1200 NFTs you will able to claim
                  for free within 3 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardSystem;
