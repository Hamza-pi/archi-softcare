import { Button } from "../ui/button";
import NavLinks from "./NavLinks";
import logo from "../../assets/image/logo.png";
import SideBar from "./SideBar";
import { AlignRight } from "lucide-react";
import { SideBarProps } from "@/lib/interface";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const NavBar = ({ disp, setDisp }: SideBarProps) => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between fixed ${
        scrolled
          ? "bg-zinc-800/80 backdrop-blur-sm shadow-[5px_10px_50px_rgba(0,0,0,1)]"
          : "bg-zinc-800"
      } p-3 z-10 w-full top-0`}
    >
      <Link to={"/"}>
        <div className="w-32 sm:w-48 h-14">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
      </Link>
      <NavLinks />
      <div className="flex items-center gap-2 sm:gap-4">
        <Link to={"https://app.allyms.com/login"} target="_blank">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="font-bold text-base shadow-md shadow-black/40"
          >
            Login
          </Button>
        </Link>
        <Button
          variant={"outline"}
          size={"icon"}
          className={`flex md:hidden`}
          onClick={() => setDisp(true)}
        >
          <AlignRight />
        </Button>
      </div>
      <SideBar disp={disp} setDisp={setDisp} />
    </nav>
  );
};

export default NavBar;
