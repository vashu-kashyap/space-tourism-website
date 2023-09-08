import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../public/shared/logo.svg";
import hamburgerIcon from "../public/shared/icon-hamburger.svg";
import menuCloseIcon from "../public/shared/icon-close.svg";

const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState("hidden");

  const toggleMenu = () => {
    setMenu((prevMenu) => (prevMenu === "hidden" ? "block" : "hidden"));
  };

  const closeMenu = () => {
    setMenu("hidden");
  };

  // Add a ref to the hamburger button
  const hamburgerButtonRef = useRef(null);

  useEffect(() => {
    const handleMenuButtonClick = (event) => {
      // Check if the click event occurred outside of the menu and hamburger button
      if (
        menu === "block" &&
        event.target !== hamburgerButtonRef.current &&
        !hamburgerButtonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    const handleScroll = () => {
      closeMenu();
    };

    document.addEventListener("click", handleMenuButtonClick);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleMenuButtonClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menu]);

  return (
    <header className="absolute left-0 top-0 flex justify-between items-center w-full px-6 py-8 md:pl-10 md:pr-0 md:py-0 lg:pl-14 lg:py-10 z-20">
      <div className="nav-brand">
        <Link href={"/"}>
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="line w-1/3 absolute left-44 bg-gray-400 opacity-40 z-10 h-[0.5px] sm:hidden max-sm:hidden lg:block"></div>
      <nav className={`nav-container absolute md:relative md:block top-0 right-0 ${menu} bg-mybackground backdrop-blur-[40.7px] max-sm:w-2/3 max-sm:min-h-screen md:h-full md:w-fit px-6 py-8 md:p-12 lg:pl-32 lg:py-8 transition-all duration-300 ease-in-out lg:w-3/5  `}>
        <div className="menu-close-btn float-right mt-3 md:hidden">
          <Image src={menuCloseIcon} onClick={closeMenu} alt="menu-close-icon" />
        </div>
        <ul className="nav-menu space-y-8 mt-28 md:flex md:mt-0 md:space-y-0 md:space-x-[36px]">
          {[
            { href: "/", label: "Home" },
            { href: "/destination", label: "DESTINATION" },
            { href: "/crew", label: "CREW" },
            { href: "/technology", label: "TECHNOLOGY" },
          ].map((item, index) => (
            <li key={index} className="nav-item">
              <Link href={item.href} className={`nav-link text-white font-barlow_condensed text-base font-normal leading-normal tracking-[2.7px] pb-5 lg:pb-[33.5px] duration-300 transition-all ease-in-out border-b-[3px] border-transparent hover:border-white hover:border-opacity-50  ${router.pathname === item.href ? 'border-white' : ''}`}>
                <span className="font-bold md:hidden lg:inline">{index.toString().padStart(2, "0")}</span> {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="menu-open-btn md:hidden" ref={hamburgerButtonRef}>
        <button onClick={toggleMenu}>
          <Image src={hamburgerIcon} alt="menu icon" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
