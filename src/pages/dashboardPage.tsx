import { Layout } from "../layouts/layout";
import { Dashboard } from "../components/dashboard";
import { AddRecipe } from "../components/addRecipe";

const DashboardPage = () => {
  return (
    <Layout>
      <Dashboard />
      <AddRecipe />
    </Layout>
  );
};

export { DashboardPage };