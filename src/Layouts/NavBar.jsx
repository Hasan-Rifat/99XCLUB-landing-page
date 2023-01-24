import React, { useEffect, useRef } from "react";
import Button from "../common/Button";
import { CgMenuRound } from "react-icons/cg";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isTrue, setTrue] = React.useState(false);
  const ref = useRef(null);
  useEffect(() => {
    // scrollHandler functionality
    const headerHandler = () => {
      if (window.scrollY >= 98) {
        return setTrue(true);
      } else {
        return setTrue(false);
      }
    };

    window.addEventListener("scroll", headerHandler);
    const handler = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        return setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("mousedown", handler);
      window.removeEventListener("scroll", headerHandler);
    };
  }, [ref, isTrue]);

  const mobileMenu = (
    // menu menu-horizontal
    <>
      <ul ref={ref} className="  ">
        <li className="mb-[10px]">
          <a className="text-[#E1E2EE] leading-[25.6px] ">Membership</a>
        </li>
        <li className="mb-[10px]">
          <a className="font-normal text-[#9E9EA6] leading-[25.6px]">Rewards</a>
        </li>
        <li className="mb-[10px]">
          <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
            Affiliates
          </a>
        </li>
        <li className="mb-[10px]">
          <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
            Services
          </a>
        </li>
        <li className="mb-[10px]">
          <a className="font-normal text-[#9E9EA6] leading-[25.6px]">FAQ</a>
        </li>
        <li className="mb-[10px]">
          <Button classNames={"py-1 px-3 block md:hidden"}>Mint NFT</Button>
        </li>
      </ul>
    </>
  );
  const pcMenu = (
    <>
      <ul className="menu menu-horizontal px-1">
        <li className="mb-[10px]">
          <a className="text-[#E1E2EE] leading-[25.6px] mx-[12px]">
            Membership
          </a>
        </li>
        <li className="mb-[10px]">
          <a className="font-normal text-[#9E9EA6] leading-[25.6px]">Rewards</a>
        </li>
        <li className="mb-[10px]">
          <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
            Affiliates
          </a>
        </li>
        <li className="mb-[10px]">
          <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
            Services
          </a>
        </li>
        <li className="mb-[10px]">
          <a className="font-normal text-[#9E9EA6] leading-[25.6px]">FAQ</a>
        </li>
      </ul>
    </>
  );

  return (
    <header
      className={` 
    ${
      isTrue
        ? "sticky left-0 top-0 !bg-[#100f11] bg-opacity-75 "
        : "!bg-transparent bg-opacity-0 absolute top-0 left-0 w-full z-50"
    }  z-50 transition ease-in-out delay-150 `}
    >
      <div className="max-w-[1200px] mx-auto py-4 px-4 md:px-0 flex flex-wrap p-5  md:flex-row justify-between items-center">
        <div>
          <a class="flex title-font font-medium items-center text-gray-900 md:mb-0">
            <span class="ml-3 text-xl text-[#E1E2EE]">99X CLUB</span>
          </a>
        </div>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <div className="text-right md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-4 relative z-10"
            >
              <CgMenuRound size={30} className="text-white " />
            </button>
          </div>
          {/* pc menu */}
          <div className="hidden md:block">{pcMenu}</div>
          {/* mobile menu */}
          {isOpen && (
            <div
              className={`block md:hidden absolute left-[0%] top-[64%] w-full p-8 ${
                isTrue ? "bg-[#100f11]" : "bg-transparent"
              }  z-50 transition ease-in-out delay-150`}
            >
              <div>
                <div>{mobileMenu}</div>
              </div>
            </div>
          )}
        </nav>
        <div className="hidden md:block">
          <Button classNames={"py-3 px-[25.15px] "}>Mint NFT</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
