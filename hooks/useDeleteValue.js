import { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/config/firebase";

const useDeleteValue = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteValue = async (collection, id) => {
    setIsLoading(true);

    try {
      const deletedDoc = await deleteDoc(doc(db, collection, id));
      console.log(deletedDoc);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  return [deleteValue, isLoading, error];
};

export default useDeleteValue;
