import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TiptapMenubar from "./TiptapMenubar";
import Collaboration from "@tiptap/extension-collaboration";
import useYjs from "@/hooks/useYjs";

const Tiptap = () => {
  const { editor, ydoc, provider } = useYjs();
  //   console.log(provider);
  //   const editor = useEditor({
  //     extensions: [
  //       StarterKit.configure({
  //         // The Collaboration extension comes with its own history handling
  //         history: true,
  //       }),
  //       // Register the document with Tiptap
  //       Collaboration.configure({
  //         document: ydoc,
  //       }),
  //     ],
  //     content: "<p>Hello World! 🌎️</p>",
  //   });

  return (
    <>
      <TiptapMenubar editor={editor} />
      <EditorContent editor={editor} className="prose" />
    </>
  );
};

export default Tiptap;
