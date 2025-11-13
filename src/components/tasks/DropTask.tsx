import { useDroppable } from "@dnd-kit/core";

type DropTaskProps = {
  status: string;
};

export default function DropTask({ status }: DropTaskProps) {
  const { isOver, setNodeRef } = useDroppable({ id: status });

  const style = {
    border: isOver ? "1px solid #0f6130" : undefined,
    color: isOver ? "#000" : undefined
  };

  return (
    <div className="drop-task" ref={setNodeRef} style={style}>
      Soltar tarea aquí
    </div>
  );
}
