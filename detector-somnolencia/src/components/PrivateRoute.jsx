import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  // Si no hay token, redirige a login y reemplaza el historial
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Si hay token, renderiza los children
  return children;
}
