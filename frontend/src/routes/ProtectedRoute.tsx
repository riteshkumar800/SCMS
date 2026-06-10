import {
  Navigate,
} from "react-router-dom";

import {
  isAuthenticated,
} from "../services/authService";

interface Props {
  children: React.ReactNode;
}

function ProtectedRoute({
  children,
}: Props) {

  if (
    !isAuthenticated()
  ) {
    return (
      <Navigate
        to="/"
      />
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;