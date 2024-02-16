import { useState } from "react";

import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import DentalistLogo from "../../assets/svg/dentalist.svg";
import VioletButton from "../UI/VioletButton";
import NavLinkItems from "./NavLinkItems";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const openMobileMenu = () => setMobileMenu(true);
  const closeMobileMenu = () => setMobileMenu(false);

  return (
    <>
      {/* MobileMenu */}
      <MobileMenu isOpen={mobileMenu} onClose={closeMobileMenu} />

      {/* Header itself */}
      <header className="pt-6 pb-8 px-5">
        <nav
          className="max-w-screen-laptopM w-full mx-auto min-h-12 flex
          items-center justify-between gap-x-6 whitespace-nowrap"
        >
          {/* site logo */}
          <Link
            to="/"
            className="hover:opacity-70 active:scale-[.98] duration-300"
          >
            <img
              src={DentalistLogo}
              alt="Dentalist"
              className="min-w-[96px] h-auto"
            />
          </Link>

          {/* nav-links */}
          <menu
            className="hidden tablet:flex items-center justify-center
            text-violet-dark font-bold text-base laptop:text-lg
            gap-x-5 laptop:gap-x-7 laptopM:gap-x-10"
          >
            <NavLinkItems />
          </menu>

          {/* Book an appointment Button */}
          <VioletButton
            isLink={true}
            link="/contact"
            addStyles="hidden laptopM:block text-sm laptop:text-base
            px-6 py-4 rounded-xl after:rounded-xl mr-5"
          >
            Book an appointment
          </VioletButton>

          {/* btn show mobile menu */}
          <button
            onClick={openMobileMenu}
            className="bg-violet text-white rounded-xl text-xl px-[10px] py-2 
            mobileM:px-3 mobileM:text-2xl tablet:text-xl laptop:text-3xl laptopM:hidden
            hover:bg-white hover:shadow-[0_0_0_2.5px_#583fbc] hover:text-violet 
            active:shadow-[0_0_0_2.5px_#583fbc,#6523d766_0px_-50px_36px_-28px_inset] 
            duration-300"
          >
            <CgMenuRight />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
