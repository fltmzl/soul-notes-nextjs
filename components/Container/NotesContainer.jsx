import Masonry from "react-masonry-css";
import NoteCard from "../Card/NoteCard";
import { useState } from "react";
import DeleteDialog from "../Dialog/DeleteDialog";
import useDeleteValue from "@/hooks/useDeleteValue";
import { AnimatePresence } from "framer-motion";
import useGetActiveNotes from "@/hooks/useGetActiveNotes";
import HeaderNotesContainer from "./HeaderNotesContainer";

const NotesContainer = () => {
  const [notes, loading, error] = useGetActiveNotes();
  console.log(notes);
  const [deleteValue, isLoading] = useDeleteValue();
  const [deleteDialog, setDeleteDialog] = useState({
    show: false,
    id: null,
  });

  const showDeleteDialog = (id) => {
    setDeleteDialog({
      show: true,
      id,
    });
  };

  const onDelete = () => {
    deleteValue("notes", deleteDialog.id);
    setDeleteDialog({
      show: false,
      id: null,
    });
  };

  const onCancel = () => {
    setDeleteDialog({
      show: false,
      id: null,
    });
  };

  const breakpointColumnsObj = {
    default: 5,
    1900: 4,
    1300: 3,
    1000: 2,
    620: 1,
  };

  if (!loading && !notes.length) {
    return <h1>notes not found</h1>;
  }

  return (
    <>
      <HeaderNotesContainer totalNotes={notes.length} />
      <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {loading ? (
          <h1>loading</h1>
        ) : (
          notes.map((note, index) => {
            return <NoteCard key={index} item={note} onDelete={() => showDeleteDialog(note.id)} delayAnimation={index} />;
          })
        )}
      </Masonry>
      <AnimatePresence>{deleteDialog.show && <DeleteDialog onDelete={onDelete} onCancel={onCancel} />}</AnimatePresence>
    </>
  );
};

export default NotesContainer;
