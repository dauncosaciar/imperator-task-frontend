import { Note } from "@/types";
import { formatDate } from "@/utils";

type NoteDetailProps = {
  note: Note;
};

export default function NoteDetail({ note }: NoteDetailProps) {
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
    </div>
  );
}
