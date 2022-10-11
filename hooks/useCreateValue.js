import { db } from "@/config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";

const useCreateValue = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const createValue = async (collectionName, data) => {
    setIsLoading(true);

    try {
      const addedNote = await addDoc(collection(db, collectionName), data);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  return [createValue, isLoading, error];
};

export default useCreateValue;
