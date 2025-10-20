import { Task } from "@/types";
import AddNoteForm from "./AddNoteForm";
import NoteDetail from "./NoteDetail";

type NotesPanelProps = {
  notes: Task["notes"];
};

export default function NotesPanel({ notes }: NotesPanelProps) {
  return (
    <div className="notes-panel">
      <AddNoteForm />

      {notes.length > 0 && (
        <div className="notes-panel__content">
          <p className="notes-panel__title">Notas agregadas</p>

          <div className="notes-panel__notes">
            {notes.map(note => (
              <NoteDetail key={note._id} note={note} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
