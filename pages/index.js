import Theme from "@/components/Toggle/Theme";
import Head from "next/head";
import { useContext, useEffect } from "react";
import Searchbar from "@/components/Input/Searchbar";
import { BsGridFill } from "react-icons/bs";
import { BiSortDown } from "react-icons/bi";
import { HiOutlineFilter } from "react-icons/hi";
import AddNoteBtn from "@/components/Button/AddNoteBtn";
import MainLayout from "@/components/Layout/MainLayout";
import { useRouter } from "next/router";
import NotesContainer from "@/components/Container/NotesContainer";
import { AuthContext } from "@/context/AuthContext";

const Home = () => {
  const { user, loadingAuth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!loadingAuth) {
      if (!user) {
        router.push("/auth/login");
      }
    }
  }, [user, loadingAuth]);

  if (loadingAuth) {
    return <h1>loading</h1>;
  }

  if (!user) {
    return <h1>redirecting</h1>;
  }

  return (
    <MainLayout>
      <Head>
        <title>My Notes | Home</title>
      </Head>

      <main className="p-5 w-full bg-customLight-100 dark:bg-customDark-100 overflow-y-scroll relative z-20">
        <header className="relative flex justify-between">
          <Searchbar />
          <AddNoteBtn />
        </header>
        <div className="flex justify-between text-customGray-50 my-6">
          <div className="text-xs">
            <p>20 Notes</p>
          </div>
          <div className="flex gap-2">
            <BsGridFill />
            <BiSortDown />
            <HiOutlineFilter />
          </div>
        </div>
        <NotesContainer />
        <Theme />
      </main>
    </MainLayout>
  );
};

export default Home;
