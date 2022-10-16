import ArchivedNotesContainer from "@/components/Container/ArchivedNotesContainer";
import Searchbar from "@/components/Input/Searchbar";
import MainLayout from "@/components/Layout/MainLayout";
import Theme from "@/components/Toggle/Theme";
import Head from "next/head";
import { BiSortDown } from "react-icons/bi";
import { BsGridFill } from "react-icons/bs";
import { HiOutlineFilter } from "react-icons/hi";

const Archive = () => {
  return (
    <MainLayout>
      <Head>
        <title>SoulNotes | Archive</title>
      </Head>

      <main className="p-5 w-full bg-customLight-100 dark:bg-customDark-100 overflow-y-scroll relative z-20">
        <header className="flex flex-col sm:flex-row gap-3 justify-between">
          <Searchbar />
        </header>
        <ArchivedNotesContainer />
        <Theme />
      </main>
    </MainLayout>
  );
};

export default Archive;
