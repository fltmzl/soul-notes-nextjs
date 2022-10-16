import { AuthContextProvider } from "@/context/AuthContext";
import NextNProgress from "nextjs-progressbar";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/richtext.css";
import "@/styles/tiptap.scss";
import { NoteFormContextProvider } from "@/context/NoteFormContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <AuthContextProvider>
        <NoteFormContextProvider>
          <Head>
            <title>My Notes</title>
            <meta name="description" content="notes app for your productivity" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <NextNProgress color="#7c4fff" />
          <Component {...pageProps} />
        </NoteFormContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
