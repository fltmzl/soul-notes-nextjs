import brand from "@/assets/icons/brand.svg";
import Image from "next/image";

const NavbarBrand = () => {
  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      <Image src={brand} />
      <h2 className="hidden md:block">SoulNotes</h2>
    </div>
  );
};

export default NavbarBrand;
