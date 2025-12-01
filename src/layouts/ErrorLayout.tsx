import { Outlet } from "react-router-dom";

export default function ErrorLayout() {
  return (
    <div className="error-layout">
      <div className="error-layout__content">
        <Outlet />
      </div>
    </div>
  );
}
