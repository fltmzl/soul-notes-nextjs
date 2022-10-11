import Masonry from "react-masonry-css";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/config/firebase";
import { collection, orderBy, query, where } from "firebase/firestore";
import NoteCard from "../Card/NoteCard";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

const NotesContainer = () => {
  const { user, loadingAuth } = useContext(AuthContext);
  const [notes, loading, error] = useCollection(query(collection(db, "notes"), where("collaborators", "array-contains", user.uid), orderBy("updatedAt", "desc")));

  const breakpointColumnsObj = {
    default: 5,
    1900: 4,
    1300: 3,
    720: 2,
    550: 1,
  };

  return (
    <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
      {loading ? (
        <h1>loading</h1>
      ) : (
        notes.docs.map((doc) => {
          const note = {
            id: doc.id,
            ...doc.data(),
          };

          return <NoteCard key={doc.id} item={note} />;
        })
      )}
    </Masonry>
  );
};

export default NotesContainer;
