import React from "react";
import sliderImg from "../../assets/images/slider.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import Button from "../../common/Button";

const Slider = () => {
  return (
    <section className="py-[100px] bg-[#080709]">
      <div>
        <div className="max-w-[659px] mx-auto text-center pb-[100px]">
          <span className="text__style tracking-[0.2em] font-bold">
            REWARD SYSTEM
          </span>
          <h2 className="text-[#E1E2EE] sm:text-[32px] leading-[35px] md:text-[49px] md:leading-[58.8px] font-bold p-2 mt-[10px] mb-[20px] text-[25px] ">
            Which are 12 Projects that will be launched by 99xclub team and
            their affiliates?
          </h2>
        </div>
        {/* slider code */}
        <div>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide className="slider__item !bg-opacity-10">
              Slide 1
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10 ">
              <img src={sliderImg} alt="" className="w-full " />
              <div className="w-full h-full absolute left-[0%] top-[1%] text-left  p-[30px] bg-[#1B1A1C] !rounded-[30px] z-10">
                <div className="">
                  <h2 className="text-[#E1E2EE] text-[25px] leading-[35px] font-medium p-2 mt-[10px] mb-[20px]">
                    Mutant Women Ape YC
                  </h2>
                  <div className="flex justify-between mt-[24px]">
                    <div>
                      <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                        Mint Date
                      </span>
                      <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                        18 Jan 2023
                      </h4>
                    </div>
                    <div>
                      <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                        Mint Date
                      </span>
                      <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                        18 Jan 2023
                      </h4>
                    </div>
                    <div>
                      <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                        Mint Date
                      </span>
                      <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                        18 Jan 2023
                      </h4>
                    </div>
                  </div>
                  <div className="mt-[33px]">
                    <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                      Free Spots for 99x Club Pass Holders
                    </span>
                    <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                      3,333
                    </h4>
                  </div>
                  <div className="mt-[33px]">
                    <span className="text-[#B4B5BD] opacity-70 leading-[25.6px]">
                      Price for 99x Club Pass Holder
                    </span>
                    <h4 className="text-[#E1E2EE] text-[18px] font-medium leading-[27px]">
                      0.00 ETH (Only Gas Fees)
                    </h4>
                  </div>
                  <div className="mt-[33px]">
                    <Button classNames={"py-5 px-[35px]"}>Claim Now</Button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="slider__item  !bg-opacity-10">
              <h2 className="text-[#B4B5BD] opacity-50 font-medium w-full ">
                Coming Soon
              </h2>
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              Slide 3
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              Slide 4
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              Slide 5
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              Slide 6
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              Slide 7
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              Slide 8
            </SwiperSlide>
            <SwiperSlide className="slider__item !bg-opacity-10">
              Slide 9
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Slider;
