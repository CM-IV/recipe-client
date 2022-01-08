import { AuthLayout } from "../layouts/authLayout";
import { Logout } from "../components/logout";

const LogoutPage = () => {
  return (
    <AuthLayout>
      <Logout />
    </AuthLayout>
  );
};

export { LogoutPage };