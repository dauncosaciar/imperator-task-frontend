import { Plus } from "lucide-react";
import { TeamMember } from "@/types";

type MemberSearchResultProps = {
  user: TeamMember;
};

export default function MemberSearchResult({ user }: MemberSearchResultProps) {
  return (
    <div className="member-search-result">
      <p className="member-search-result__title">Resultado:</p>

      <div className="member-search-result__content">
        <p className="member-search-result__username">
          {user.name}, {user.lastName}
        </p>
        <button type="button" className="member-search-result__button">
          <Plus /> Agregar al Proyecto
        </button>
      </div>
    </div>
  );
}
