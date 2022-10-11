import { auth } from "@/config/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { IoIosArrowDown } from "react-icons/io";

const NavbarUser = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await signOut(auth);
      router.push("/auth/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button className="flex items-center justify-between w-full px-3" onClick={handleLogout}>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-slate-500"></div>
        <p className="hidden lg:block">Admin Test</p>
      </div>
      <IoIosArrowDown />
    </button>
  );
};

export default NavbarUser;
