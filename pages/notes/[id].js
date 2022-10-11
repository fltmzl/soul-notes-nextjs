import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import useInput from "@/hooks/useInput";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import Link from "next/link";
import { io } from "socket.io-client";
import { useRouter } from "next/router";
import { db } from "@/config/firebase";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";
import { debounce } from "utils";
import useQuillCustom from "@/hooks/useQuillCustom";
import MainLayout from "@/components/Layout/MainLayout";
import useUpdateValue from "@/hooks/useUpdateValue";

const NotesDetail = () => {
  const { quill, quillRef } = useQuillCustom();
  const [socket, setSocket] = useState();
  const { query } = useRouter();
  const [updateValue, isLoading, error] = useUpdateValue();

  // Set quill disable and loading text
  useEffect(() => {
    if (!quill) return;

    quill.disable();
  }, [quill]);

  // Connect to Socket IO
  useEffect(() => {
    const s = io("https://soul-notes.herokuapp.com/");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  // Create Socket notes group
  useEffect(() => {
    if (!quill || !socket || !query.id) return;

    socket.once("load-notes", (notes) => {
      const getNote = async () => {
        const docRef = doc(db, "notes", query.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          quill.setContents(docSnap.data().body);
        } else {
          quill.setContents("");
          console.log("No such document!");
        }
      };

      getNote();
      quill.enable();
    });

    socket.emit("get-notes", query.id);
    // socket.emit("create-notes-group", query.id);
  }, [quill, socket, query.id]);

  // Listen realtime change
  useEffect(() => {
    if (!quill || !socket) return;

    const handler = (delta) => {
      quill.updateContents(delta);
    };

    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
    };
  }, [quill, socket]);

  // Save notes every changes with debounce
  useEffect(() => {
    if (!socket || !quill || !query.id) return;

    const handler = debounce(() => {
      updateValue("notes", query.id, {
        body: quill.getContents().ops,
        excerpt: quill.root.innerHTML,
        updatedAt: serverTimestamp(),
      });

      console.log("saved");
    }, 1000);

    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [quill, socket, query.id]);

  // Listen quill change
  useEffect(() => {
    if (!quill || !socket) return;

    const handler = (delta, oldDelta, source) => {
      if (source !== "user") return;
      socket.emit("send-changes", delta);
    };

    quill.on("text-change", handler);

    return () => {
      quill.off("text-change", handler);
    };
  }, [quill, socket]);

  return (
    <MainLayout>
      <Link href={"/"}>
        <a>Back</a>
      </Link>
      <form className="space-y-6 p-5">
        <div className={`w-full bg-customLight-50 dark:bg-customDark-50`}>
          <div ref={quillRef} />
        </div>
      </form>
    </MainLayout>
  );
};

export default NotesDetail;
