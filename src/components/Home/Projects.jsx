import React from "react";
import project2 from "../../assets/images/project2.png";
import project1 from "../../assets/images/project1.png";
import project3 from "../../assets/images/project3.png";

const Projects = () => {
  return (
    <section className="bg-[#100f11] py-[80px]">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="xl:flex gap-[90px] relative">
          <div className="w-full xl:max-w-[682px]">
            <span className="text__style tracking-[0.2em] mb-[10px] font-bold">
              REWARD SYSTEM
            </span>
            <h2 className="text-[#E1E2EE] sm:text-[32px] leading-[35px] md:text-[49px] md:leading-[58.8px] font-bold p-2 mt-[10px]  text-[25px] mb-[36px]">
              Have you ever wondered to launch your own NFT project?
            </h2>
            <p className="text-[#B4B5BD] opacity-80 text-[20px] leading-[30px] font-medium">
              Our experienced team is here to guide you through the launch
              process of your NFT / Web3 / Defi project. Allow us to leverage
              our connections and use our reach to ensure that your hard work
              and plans are not derailed due to easily avoidable mistakes.
              Consultation about any project will be free forever for every
              99xclub pass holder, If you want us to create NFT Arts with
              Metadata, Rarities, Blockchain Contract, Website or marketing.
              These services will be chargeable but consultation will be free.
              These services we will be only provided to all our 99xclub
              membership pass holders.
              <br /> <br />
              Whatever stage you’re at, let us build a customized solution to
              fit your needs and make your vision a block-chain reality.
            </p>
          </div>
          <div className="w-full xl:max-w-[410px] h-[483px] ">
            <div className="absolute right-[14%] -bottom-[13.5%] hidden xl:block">
              <img src={project1} alt="" />
            </div>
            <div className="absolute -right-[10%] -top-[82px] hidden xl:block">
              <img src={project3} alt="" />
            </div>
            <div className="">
              <img src={project2} alt="" className="mx-auto mt-16 xl:mt-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
