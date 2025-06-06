import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowRight } from "lucide-react";
import { ModeToggle } from "./commons/Mode-toggle";

const smallLogo =
  "https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s48-fcrop64=1,00000000ffffffff-rw";
const largeLogo =
  "https://www.gstatic.com/marketing-cms/assets/images/c5/3a/200414104c669203c62270f7884f/google-wordmarks-2x.webp=n-w150-h48-fcrop64=1,00000000ffffffff-rw";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-30 top-0 left-0 transition-all duration-300 ${
        scrolled ? "py-6" : ""
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between py-4 px-6 w-full ${
          scrolled ? "rounded-full bg-primary shadow-xl overflow-hidden" : ""
        }`}
      >
        {/* Logo */}
        <div className="flex items-center w-full gap-x-8">
          <button className="flex items-center" onClick={() => navigate("/")}>
            <img
              src={scrolled ? smallLogo : largeLogo}
              alt="Logo"
              width={scrolled ? 60 : 200}
              height={scrolled ? 60 : 60}
              className="transition-all duration-300"
            />
          </button>

          {/* Search bar */}
          <div className="md:flex items-center bg-secondary/50 rounded-full hidden w-3/5 px-4 py-2 shadow-custom">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 p-2 rounded-full focus:outline-none text-foreground"
            />
            <button
              className={`ml-3 ${
                scrolled ? "bg-background" : "bg-primary"
              } text-foreground rounded-full p-2`}
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 w-full justify-end">
          <a href="/" className="hover:text-accent">
            Dairy
          </a>
          <ModeToggle />
        </div>
      </div>
      <div></div>
    </nav>
  );
};

export default Navbar;
