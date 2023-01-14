import React, { useEffect, useRef } from "react";
import Button from "../common/Button";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref && ref.current && !ref.current.contains(e.target)) {
        return setIsOpen(false);
      }
    };
    window.addEventListener("mousedown", handler);

    return () => {
      window.removeEventListener("mousedown", handler);
    };
  }, [ref]);

  return (
    <header className="sticky left-0 top-0 !bg-transparent z-50">
      <div className="max-w-[1200px] mx-auto py-4 px-4 md:px-0">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown ">
              <ul
                ref={ref}
                tabIndex={0}
                className={`menu bg-black menu-compact dropdown-content mt-3 p-2 shadow  rounded-box sm:w-52 md:w-96 ${
                  isOpen && "!visible !opacity-100 lg:hidden"
                }`}
              >
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
                <li>
                  <Button classNames={"ms:hidden py-3 px-[25.15px]"}>
                    Mint NFT
                  </Button>
                </li>
              </ul>
            </div>
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
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
