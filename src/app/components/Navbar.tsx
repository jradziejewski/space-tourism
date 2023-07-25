import Link from "next/link";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/">00 Home</Link>
      <Link href="/destination">01 Destination</Link>
      <Link href="/crew">02 Crew</Link>
      <Link href="/technology">03 Technology</Link>
    </div>
  );
};

export default Navbar;
