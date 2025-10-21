import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Trash } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Note, Task } from "@/types";
import { formatDate } from "@/utils";
import Tooltip from "../ui/Tooltip";
import Spinner from "../ui/Spinner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteNote } from "@/api/NoteApi";
import { toast } from "sonner";

type NoteDetailProps = {
  note: Note;
};

export default function NoteDetail({ note }: NoteDetailProps) {
  // Get projectId
  const params = useParams();
  const projectId = params.projectId!;

  // Get taskId
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const taskId = queryParams.get("viewTask")!;

  const { data, isLoading } = useAuth();
  const canDelete = useMemo(
    () => data?._id === note.createdBy._id,
    [data, note]
  );

  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: deleteNote,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      queryClient.setQueryData(["task", taskId], (oldData: Task) => {
        if (!oldData) return oldData;

        return {
          ...oldData,
          notes: oldData.notes.filter(n => n._id !== note._id)
        };
      });

      toast.success(data);
    }
  });

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

      {canDelete && !isPending && (
        <Tooltip tooltipText="Eliminar Nota">
          <button
            type="button"
            className="note-detail__option note-detail__option--delete"
            onClick={() => mutate({ projectId, taskId, noteId: note._id })}
          >
            <Trash />
          </button>
        </Tooltip>
      )}

      {canDelete && isPending && (
        <div className="note-detail__delete-pending">
          <Spinner />
        </div>
      )}
    </div>
  );
}
