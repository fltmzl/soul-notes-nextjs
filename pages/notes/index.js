import "quill/dist/quill.snow.css";
import { useContext } from "react";
import { serverTimestamp } from "firebase/firestore";
import { AuthContext } from "@/context/AuthContext";
import Button from "@/components/Button";
import useQuillCustom from "@/hooks/useQuillCustom";
import MainLayout from "@/components/Layout/MainLayout";
import { useRouter } from "next/router";
import useCreateValue from "@/hooks/useCreateValue";
import Tiptap from "@/components/Input/Tiptap";

const Notes = () => {
  const { user, loadingAuth } = useContext(AuthContext);
  const { quill, quillRef } = useQuillCustom();
  const [createValue, isLoading, error] = useCreateValue();
  const router = useRouter();

  const onSave = (e) => {
    e.preventDefault();

    createValue("notes", {
      body: quill.getContents().ops,
      excerpt: quill.root.innerHTML,
      collaborators: [user.uid],
      user_id: user.uid,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    if (!error) router.push("/");
  };

  return (
    <MainLayout>
      <div>
        <form onSubmit={onSave} className="space-y-6 p-5">
          {/* <div className={`w-full bg-customLight-50 dark:bg-customDark-50`}>
            <div ref={quillRef} />
          </div> */}
          <Tiptap />
          {isLoading ? <Button>Saving</Button> : <Button type="submit">Save</Button>}
        </form>
      </div>
    </MainLayout>
  );
};

export default Notes;
