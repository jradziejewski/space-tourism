import Image from "next/image";

const NavbarLogo = () => {
  return (
    <Image
      className="navbar-logo"
      src="/logo.svg"
      alt="navbar logo"
      width={48}
      height={48}
    />
  );
};

export default NavbarLogo;
