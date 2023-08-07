"use client";
import Image from "next/image";
import StyledLink from "./StyledLink";
import "./navbar.scss";
import NavbarIcon from "./NavbarLogo";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    if (!navRef.current) return;
    navRef.current.classList.toggle("responsive-navbar");
  };

  return (
    <div className="navbar" ref={navRef}>
      <NavbarIcon />
      <div className="navbar-divider" />
      <div className="links-container">
        <StyledLink to="/" text="home" />
        <StyledLink to="/destination" text="destination" />
        <StyledLink to="/crew" text="crew" />
        <StyledLink to="/technology" text="technology" />
      </div>
      <button className="icon" onClick={showNavbar}>
        <Image
          className="hamburger-icon"
          src="/assets/shared/icon-hamburger.svg"
          alt="hamburger icon"
          width={24}
          height={21}
        />
        <Image
          className="close-icon"
          src="/assets/shared/icon-close.svg"
          alt="hamburger icon"
          width={24}
          height={21}
        />
      </button>
    </div>
  );
};

export default Navbar;
