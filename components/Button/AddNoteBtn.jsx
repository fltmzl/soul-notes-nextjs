import Link from "next/link";
import { BiPlus } from "react-icons/bi";

const AddNoteBtn = ({ onClick, ...others }) => {
  return (
    <Link href={"/notes"}>
      <button className="flex gap-2 items-center text-customLight-50 bg-primary rounded-lg py-2 px-4" onClick={onClick} {...others}>
        <BiPlus />
        <p>Add Note</p>
      </button>
    </Link>
  );
};

export default AddNoteBtn;
