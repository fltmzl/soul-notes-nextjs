import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const NavbarLink = ({ href = "/", children, icon, submenus, active = false }) => {
  const router = useRouter();
  const activeClassname = "bg-primary/10 text-primary border-primary border-r-[6px]";
  const [open, setOpen] = useState(false);

  // if (submenus) {
  //   return (
  //     <div>
  //       <button className="flex items-center justify-between py-5 pl-6 pr-4 rounded-l-xl w-full" onClick={() => setOpen((prev) => !prev)}>
  //         <div className="flex items-center gap-2">
  //           <CgNotes />
  //           <span>{children}</span>
  //         </div>
  //         <div>
  //           <IoIosArrowDown />
  //         </div>
  //       </button>

  //       <div className={`pl-8`}>
  //         {submenus.map((submenu, index) => (
  //           <Link key={index} href={submenu.href}>
  //             <a className="block ">{submenu.text}</a>
  //           </Link>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <Link href={href}>
      <a className={`flex items-center gap-4 py-4 pl-6 lg:pr-20 rounded-l-xl ${active && activeClassname}`}>
        <span className="text-base">{icon || <CgNotes />}</span>
        <span className="text-sm hidden lg:block">{children}</span>
      </a>
    </Link>
  );
};

export default NavbarLink;
