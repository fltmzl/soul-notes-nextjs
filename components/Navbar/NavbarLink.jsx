import Link from "next/link";
import { CgNotes } from "react-icons/cg";

const NavbarLink = ({ href = "/", text, icon, active = false }) => {
  const activeClassname = "bg-primary/10 text-primary border-primary border-r-[6px]";

  return (
    <Link href={href}>
      <a className={`flex items-center gap-4 py-4 pl-6 lg:pr-20 rounded-l-xl ${active && activeClassname}`}>
        <span className="text-base">{icon || <CgNotes />}</span>
        <span className="text-sm hidden md:block whitespace-nowrap">{text}</span>
      </a>
    </Link>
  );
};

export default NavbarLink;
