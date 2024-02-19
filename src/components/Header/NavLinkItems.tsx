import { NavLink } from "react-router-dom";

type NavLinkItemsProps = {
  hideMobileMenu?: () => void;
};

const navItemsList = [
  { link: "/dental-landing-page/about", name: "About Us" },
  { link: "/dental-landing-page/blog", name: "New Patient" },
  { link: "/dental-landing-page/services", name: "Our Services" },
  { link: "/dental-landing-page/contact", name: "Contact Us" },
];

const NavLinkItems = ({ hideMobileMenu }: NavLinkItemsProps) => {
  return (
    <>
      {navItemsList.map(({ link, name }) => (
        <NavLink
          to={link}
          key={name}
          onClick={hideMobileMenu}
          className={({ isActive }) =>
            isActive ? "nav-link-active" : "nav-link"
          }
        >
          {name}
        </NavLink>
      ))}
    </>
  );
};

export default NavLinkItems;
