import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BsPinAngle } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { VscSymbolColor } from "react-icons/vsc";
import Tag from "../Button/Tag";
import { BiArchiveIn } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import parse from "html-react-parser";
import Link from "next/link";
import useDeleteValue from "@/hooks/useDeleteValue";

const NoteCard = ({ item }) => {
  const [deleteValue, isLoading, error] = useDeleteValue();

  const deleteNote = () => {
    deleteValue("notes", item.id);
  };

  return (
    <article className={`bg-customLight-50 dark:bg-customDark-50 rounded-xl p-5 space-y-3 ${isLoading && "opacity-20 animate-pulse"}`}>
      <h3 className="font-bold">{item.title}</h3>
      <h6 className="text-customGray-50 text-xs">Sat, 13 Sep 2022</h6>
      <Link href={`/notes/${item.id}`}>
        <a>
          <div className="max-h-52 overflow-hidden">{parse(item.excerpt)}</div>
        </a>
      </Link>
      <div className="flex flex-wrap gap-2 py-4">
        <Tag label="Tugas" />
        <Tag label="Golang" />
        <Tag label="Test" />
      </div>
      <div className="flex gap-4 justify-end text-lg text-customGray-50">
        <AiOutlineUsergroupAdd />
        <BsPinAngle />
        <MdFavoriteBorder />
        <VscSymbolColor />
        <BiArchiveIn />
        <FiTrash2 onClick={deleteNote} />
      </div>
    </article>
  );
};

export default NoteCard;
