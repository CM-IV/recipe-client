import { AuthLayout } from "../layouts/authLayout";
import { Login } from "../components/login";

const LoginPage = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export { LoginPage };