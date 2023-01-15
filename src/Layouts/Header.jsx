import React, { useEffect, useRef } from "react";
import Button from "../common/Button";

const Header = () => {
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
  return (
    <header
      className={`
    ${
      isTrue
        ? "sticky left-0 top-0 !bg-[#100f11] bg-opacity-75 "
        : "!bg-transparent bg-opacity-0 absolute top-0 left-0 w-full z-50"
    }  z-50 transition ease-in-out delay-150 `}
    >
      <div className="max-w-[1200px] mx-auto py-4 px-4 md:px-0">
        <div className="navbar px-4">
          <div className="navbar-start">
            <nav ref={ref} className="dropdown ">
              <ul
                ref={ref}
                tabIndex={0}
                className={`menu bg-black menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52 ${
                  isOpen && "!visible !opacity-100 lg:hidden"
                }`}
              >
                <li>
                  <a className="text-[#E1E2EE] leading-[25.6px] ">Membership</a>
                </li>
                <li>
                  <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
                    Rewards
                  </a>
                </li>
                <li>
                  <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
                    Affiliates
                  </a>
                </li>
                <li>
                  <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
                    Services
                  </a>
                </li>
                <li>
                  <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
                    FAQ
                  </a>
                </li>
                <li>
                  <Button classNames={"ms:hidden py-2 px-[15px]"}>
                    Mint NFT
                  </Button>
                </li>
              </ul>
            </nav>
            <a className="text-[#E1E2EE]">99X CLUB</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="text-[#E1E2EE] leading-[25.6px] mx-[12px]">
                  Membership
                </a>
              </li>
              <li>
                <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
                  Rewards
                </a>
              </li>
              <li>
                <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
                  Affiliates
                </a>
              </li>
              <li>
                <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
                  Services
                </a>
              </li>
              <li>
                <a className="font-normal text-[#9E9EA6] leading-[25.6px]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Button classNames={"hidden lg:block py-3 px-[25.15px]"}>
              Mint NFT
            </Button>
            <label
              ref={ref}
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
