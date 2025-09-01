import { Plus } from "lucide-react";
import { TeamMember } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { addUserToProject } from "@/api/TeamApi";
import { toast } from "sonner";
import { useParams } from "react-router-dom";

type MemberSearchResultProps = {
  user: TeamMember;
};

export default function MemberSearchResult({ user }: MemberSearchResultProps) {
  const params = useParams();
  const projectId = params.projectId!;

  const { mutate } = useMutation({
    mutationFn: addUserToProject,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      toast.success(data);
    }
  });

  const handleAddUserToProject = () => {
    const data = {
      projectId,
      id: user._id
    };
    mutate(data);
  };

  return (
    <div className="member-search-result">
      <p className="member-search-result__title">Resultado:</p>

      <div className="member-search-result__content">
        <p className="member-search-result__username">
          {user.name}, {user.lastName}
        </p>
        <button
          type="button"
          className="member-search-result__button"
          onClick={handleAddUserToProject}
        >
          <Plus /> Agregar al Proyecto
        </button>
      </div>
    </div>
  );
}
