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
        <title>SoulNotes | Home</title>
      </Head>

      <main className="p-5 w-full bg-customSecondary overflow-y-scroll relative z-20">
        <header className="flex flex-col sm:flex-row gap-3 justify-between">
          <Searchbar />
          <AddNoteBtn />
        </header>
        <NotesContainer />
        <Theme />
      </main>
    </MainLayout>
  );
};

export default Home;
