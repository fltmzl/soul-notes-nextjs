import NavbarBrand from "./NavbarBrand";
import NavbarLink from "./NavbarLink";
import { useRouter } from "next/router";
import NavbarUser from "./NavbarUser";
import { AiOutlineTags } from "react-icons/ai";
import { BiArchiveIn } from "react-icons/bi";
import { BsFolder2Open } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { HiOutlineTrash } from "react-icons/hi";
import NavbarLinkGroup from "./NavbarLinkGroup";
import useGetTags from "@/hooks/useGetTags";

const Navbar = () => {
  const { asPath } = useRouter();
  const [tags, isLoading, error] = useGetTags();

  return (
    <nav className="flex flex-col justify-between py-7 pl-5 w-fit md:w-52 h-full bg-customLight-50 dark:bg-customDark-200 transition-all duration-300 ease-out">
      <div>
        <div className="mb-8 flex justify-center">
          <NavbarBrand />
        </div>
        <div>
          <NavbarLink href="/" icon={<CgNotes />} text={"All Notes"} active={asPath === "/"} />
          <NavbarLink href="/archive" icon={<BiArchiveIn />} text={"Archive"} active={asPath === "/archive"} />
          <NavbarLinkGroup icon={<AiOutlineTags />} text={"Tags"} />
          <div className="pl-8">
            {isLoading ? (
              <span>loading</span>
            ) : (
              <>
                {tags.map((tag, index) => (
                  <NavbarLink key={index} href={`/tags/${tag.id}`} icon={<AiOutlineTags />} text={tag.name} active={asPath === `/tags/${tag.id}`} />
                ))}
              </>
            )}
          </div>
          <NavbarLinkGroup icon={<BsFolder2Open />} text={"Categories"} />
          <NavbarLink href="/trash" icon={<HiOutlineTrash />} text={"Trash"} active={asPath === "/trash"} />
        </div>
      </div>
      <div>
        <NavbarUser />
      </div>
    </nav>
  );
};

export default Navbar;
