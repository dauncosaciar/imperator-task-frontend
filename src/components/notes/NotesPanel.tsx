import { Task } from "@/types";
import AddNoteForm from "./AddNoteForm";

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

          <ul className="notes-panel__list">
            {notes.map(note => (
              <li key={note._id} className="notes-panel__list-item">
                Nota
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
