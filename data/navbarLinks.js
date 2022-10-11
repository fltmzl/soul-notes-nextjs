import { AiOutlineTags } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { BsFolder2Open } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { HiOutlineTrash } from "react-icons/hi";

const navbarLinks = [
  {
    href: "/",
    text: "All Notes",
    icon: <CgNotes />,
  },
  {
    href: "/archive",
    text: "Archive",
    icon: <BiArchiveIn />,
  },
  {
    text: "Tags",
    icon: <AiOutlineTags />,
    submenus: [
      {
        href: "/tags/tags-1",
        text: "Tags 1",
        icon: <AiOutlineTags />,
      },
      {
        href: "/tags/tags-2",
        text: "Tags 2",
        icon: <AiOutlineTags />,
      },
    ],
  },
  {
    text: "Categories",
    icon: <BsFolder2Open />,
    submenus: [
      {
        href: "/categories/categories-1",
        text: "Category 1",
        icon: <AiOutlineTags />,
      },
      {
        href: "/categories/categories-2",
        text: "Category 2",
        icon: <AiOutlineTags />,
      },
    ],
  },
  {
    href: "/trash",
    text: "Trash",
    icon: <HiOutlineTrash />,
  },
];

export default navbarLinks;
