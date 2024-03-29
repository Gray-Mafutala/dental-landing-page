import { Link } from "react-router-dom";
import { RiFacebookFill, RiTwitterFill, RiInstagramLine } from "react-icons/ri";
import DentalistBlackLogo from "../../assets/svg/dentalist-black.svg";
import PhoneIcon from "../../assets/svg/contact-phone.svg";
import ClockIcon from "../../assets/svg/clock.svg";
import LocationIcon from "../../assets/svg/location.svg";

const Footer = () => {
  return (
    <footer className="mt-36 bg-violet-dark text-white pb-7 pt-24 px-5">
      {/* container */}
      <div className="max-w-screen-laptopM w-full mx-auto flex flex-col">
        {/* A - 3 lists */}
        <div
          className="flex flex-col items-center gap-y-12 gap-x-8 text-center 
          tablet:flex-row tablet:justify-between tablet:items-start
          tablet:text-left"
        >
          {/* 1 - logo, overview, follow... */}
          <div className="flex flex-col items-center tablet:items-start">
            <Link
              to="/dental-landing-page"
              className="active:scale-[.98] duration-300"
            >
              <img
                src={DentalistBlackLogo}
                alt="Dentalist"
                className="w-[152px] min-w-[120px] h-auto"
              />
            </Link>

            <p
              className="text-base laptop:text-lg max-w-[464px] 
              laptop:max-w-[520px] text-white/70 mt-6 mb-8
              tablet:mt-8 tablet:mb-16"
            >
              Dental Care Seattle is a top-rated local practice for cosmetic,
              preventative, and restorative dentistry on First Hill.
            </p>

            <div className="flex flex-col gap-y-4  tablet:gap-y-6">
              <p className="text-sm font-bold text-white/70 uppercase">
                Follow us on
              </p>
              <div className="flex items-center justify-between">
                <Link to="" className="hover:text-violet-hover duration-300">
                  <RiFacebookFill size={24} className="-mx-1" />
                </Link>

                <Link to="" className="hover:text-violet-hover duration-300">
                  <RiTwitterFill size={24} />{" "}
                </Link>

                <Link to="" className="hover:text-violet-hover duration-300">
                  <RiInstagramLine size={24} />
                </Link>
              </div>
            </div>
          </div>

          {/* 2 - Quick Links */}
          <ul className="flex flex-col gap-y-6 whitespace-nowrap text-base laptop:text-lg">
            <li className="uppercase text-white/70 font-bold">Quick Links</li>

            <li className="hover:text-violet-hover duration-300">
              <Link to="/dental-landing-page/about" className="block">
                About Us
              </Link>
            </li>
            <li className="hover:text-violet-hover duration-300">
              <Link to="/dental-landing-page/services" className="block">
                Dental Services
              </Link>
            </li>
            <li
              className="hover:text-violet-hover duration-300
              cursor-pointer"
            >
              Dentist
            </li>
            <li className="hover:text-violet-hover duration-300">
              <Link to="/dental-landing-page/blog" className="block">
                Blog
              </Link>
            </li>
            <li className="hover:text-violet-hover duration-300">
              <Link to="/dental-landing-page/about#faq" className="block">
                FAQs
              </Link>
            </li>
          </ul>

          {/* 3 - Contact & Information */}
          <ul
            className="flex flex-col gap-y-6 whitespace-nowrap font-bold text-base 
            laptop:text-lg"
          >
            <li className="uppercase text-white/70">Contact & Information</li>

            <li
              className="flex items-center gap-x-6 justify-center 
              tablet:justify-start"
            >
              <img
                src={PhoneIcon}
                alt="phone number"
                className="w-9 hidden tablet:block laptop:w-16 h-auto"
              />
              <p className="flex flex-col gap-y-1">
                <span className="text-white/70 text-sm laptop:text-base">
                  Phone Number
                </span>
                <span className="text-white font-bold">+088 123 654 987</span>
              </p>
            </li>

            <li
              className="flex items-center gap-x-6 justify-center 
              tablet:justify-start"
            >
              <img
                src={ClockIcon}
                alt="open hour"
                className="w-9 hidden tablet:block laptop:w-16 h-auto"
              />
              <p className="flex flex-col gap-y-1">
                <span className="text-white/70 text-sm laptop:text-base">
                  Open Hour
                </span>
                <span className="text-white font-bold">
                  09:00 AM - 18:00 PM
                </span>
              </p>
            </li>

            <li
              className="flex items-center gap-x-6 justify-center 
              tablet:justify-start"
            >
              <img
                src={LocationIcon}
                alt="location"
                className="w-9 hidden tablet:block laptop:w-16 h-auto"
              />
              <p className="flex flex-col gap-y-1">
                <span className="text-white/70 text-sm laptop:text-base">
                  Clinic Address
                </span>
                <span className="text-white font-bold whitespace-normal">
                  35 West Dental Street California 1004
                </span>
              </p>
            </li>
          </ul>
        </div>

        {/* B - ©Dentalist. All Right Reserved, terms of use... */}
        <div
          className="mt-28 font-medium text-base text-white flex flex-col
          text-center gap-y-4 justify-between tablet:flex-row
          tablet:text-left"
        >
          <p className="flex-grow text-white/70">
            ©Dentalist. All Right Reserved
          </p>
          <div
            className="flex flex-col text-center justify-center gap-y-3
            mobileM:flex-row mobileM:text-left mobileM:gap-x-16 -order-1
            tablet:order-1"
          >
            <span className="cursor-pointer hover:text-violet-hover duration-300">
              Terms of Use
            </span>
            <span className="cursor-pointer hover:text-violet-hover duration-300">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
