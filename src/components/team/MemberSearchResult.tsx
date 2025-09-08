import { useNavigate, useParams } from "react-router-dom";
import { Plus } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { TeamMember } from "@/types";
import { addUserToProject } from "@/api/TeamApi";

type MemberSearchResultProps = {
  user: TeamMember;
  resetData: () => void;
};

export default function MemberSearchResult({
  user,
  resetData
}: MemberSearchResultProps) {
  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId!;

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addUserToProject,
    onError: error => {
      toast.error(error.message);
    },
    onSuccess: data => {
      queryClient.invalidateQueries({ queryKey: ["projectTeam", projectId] });
      toast.success(data);
      resetData();
      navigate(location.pathname, { replace: true });
    }
  });

  const handleAddUserToProject = () => {
    const data = {
      projectId,
      userId: user._id
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
