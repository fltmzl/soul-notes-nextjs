import { CgNotes } from "react-icons/cg";

const NavbarLinkGroup = ({ text, icon }) => {
  return (
    <div>
      <a className={`flex items-center gap-4 py-4 pl-6 lg:pr-20 rounded-l-xl`}>
        <span className="text-base">{icon || <CgNotes />}</span>
        <span className="text-sm hidden md:block whitespace-nowrap">{text}</span>
      </a>
    </div>
  );
};

export default NavbarLinkGroup;
