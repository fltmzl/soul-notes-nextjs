import MainLayout from "@/components/Layout/MainLayout";
import Theme from "@/components/Toggle/Theme";
import Head from "next/head";

const TagsDetail = () => {
  return (
    <MainLayout>
      <Head>
        <title>My Notes | TagsDetail</title>
      </Head>

      <main>
        <h1 className="text-3xl text-blue-400 font-bold underline">Tags detail</h1>
        <Theme />
      </main>
    </MainLayout>
  );
};

export default TagsDetail;
