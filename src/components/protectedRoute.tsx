import { Route, Redirect } from "wouter-preact";

const ProtectedRoute = (props: any) => {
  const isAuthenticated = Boolean(localStorage.getItem("token"));

  return isAuthenticated ? <Route {...props} /> : <Redirect to={"/login"} />;
};

export { ProtectedRoute };