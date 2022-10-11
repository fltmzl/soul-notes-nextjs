import NavbarBrand from "./NavbarBrand";
import NavbarLink from "./NavbarLink";
import { useRouter } from "next/router";
import NavbarUser from "./NavbarUser";
import navbarLinks from "data/navbarLinks";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex flex-col justify-between py-7 pl-5 h-full bg-customLight-50 dark:bg-customDark-200">
      <div>
        <div className="mb-8 flex justify-center">
          <NavbarBrand />
        </div>
        <div>
          {navbarLinks.map((link, index) => (
            <NavbarLink key={index} href={link.href} icon={link.icon} submenus={link.submenus} active={router.pathname === link.href ? true : false}>
              {link.text}
            </NavbarLink>
          ))}
        </div>
      </div>
      <div>
        <NavbarUser />
      </div>
    </nav>
  );
};

export default Navbar;
