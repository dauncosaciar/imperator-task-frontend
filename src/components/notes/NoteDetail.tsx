import { useMemo } from "react";
import { Trash } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Note } from "@/types";
import { formatDate } from "@/utils";
import Tooltip from "../ui/Tooltip";
import Spinner from "../ui/Spinner";

type NoteDetailProps = {
  note: Note;
};

export default function NoteDetail({ note }: NoteDetailProps) {
  const { data, isLoading } = useAuth();
  const canDelete = useMemo(
    () => data?._id === note.createdBy._id,
    [data, note]
  );

  if (isLoading) return <Spinner />;

  return (
    <div className="note-detail">
      <div className="note-detail__text">
        <p className="note-detail__content">{note.content}</p>
        <p className="note-detail__created-by">
          Por:{" "}
          <span className="note-detail__author">
            {note.createdBy.name} {note.createdBy.lastName}
          </span>
          , el{" "}
          <span className="note-detail__created-at">
            {formatDate(note.createdAt)}
          </span>
        </p>
      </div>

      {canDelete && (
        <Tooltip tooltipText="Eliminar Nota">
          <button
            type="button"
            className="note-detail__option note-detail__option--delete"
          >
            <Trash />
          </button>
        </Tooltip>
      )}
    </div>
  );
}
