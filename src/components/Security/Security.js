import { Navigate, Outlet } from "react-router";

const useAuth = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return true;
  } else {
    return false;
  }
};

const SecureRoute = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default SecureRoute;