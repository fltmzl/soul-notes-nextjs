import MainLayout from "@/components/Layout/MainLayout";
import Theme from "@/components/Toggle/Theme";
import Head from "next/head";

const Archive = () => {
  return (
    <MainLayout>
      <Head>
        <title>My Notes | Archive</title>
      </Head>

      <main>
        <h1 className="text-3xl text-blue-400 font-bold underline">Archive</h1>
        <Theme />
      </main>
      <aside></aside>
    </MainLayout>
  );
};

export default Archive;
