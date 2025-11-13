import { useDroppable } from "@dnd-kit/core";

type DropTaskProps = {
  status: string;
};

export default function DropTask({ status }: DropTaskProps) {
  const { isOver, setNodeRef } = useDroppable({ id: status });

  return (
    <div className="drop-task" ref={setNodeRef}>
      Soltar tarea aquí
    </div>
  );
}
