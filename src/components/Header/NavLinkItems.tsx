import { NavLink } from "react-router-dom";

type NavLinkItemsProps = {
  hideMobileMenu?: () => void;
};

const NavLinkItems = ({ hideMobileMenu }: NavLinkItemsProps) => {
  return (
    <>
      <NavLink
        to="/about"
        onClick={hideMobileMenu}
        className={({ isActive }) =>
          isActive ? "nav-link-active" : "nav-link"
        }
      >
        About Us
      </NavLink>

      <NavLink
        to="/blog"
        onClick={hideMobileMenu}
        className={({ isActive }) =>
          isActive ? "nav-link-active" : "nav-link"
        }
      >
        New Patient
      </NavLink>

      <NavLink
        to="/services"
        onClick={hideMobileMenu}
        className={({ isActive }) =>
          isActive ? "nav-link-active" : "nav-link"
        }
      >
        Our Services
      </NavLink>

      <NavLink
        to="/contact"
        onClick={hideMobileMenu}
        className={({ isActive }) =>
          isActive ? "nav-link-active" : "nav-link"
        }
      >
        Contact Us
      </NavLink>
    </>
  );
};

export default NavLinkItems;
