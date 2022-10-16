import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { useEffect, useState } from "react";
import { Editor } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Collaboration from "@tiptap/extension-collaboration";

const useYjs = () => {
  const [ydoc, setYdoc] = useState(null);
  const [provider, setProvider] = useState(null);
  const [editor, seteditor] = useState(null);

  useEffect(() => {
    const ydoc = new Y.Doc();
    const provider = new WebrtcProvider("example-document", ydoc);

    const editor = new Editor({
      extensions: [
        StarterKit.configure({
          history: true,
        }),
        Collaboration.configure({
          document: ydoc,
        }),
      ],
    });

    setYdoc(ydoc);
    setProvider(provider);
    seteditor(editor);

    return () => {
      provider.destroy();
    };
  }, []);

  return { editor, ydoc, provider };
};

export default useYjs;
