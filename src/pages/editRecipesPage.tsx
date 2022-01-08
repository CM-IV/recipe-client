import { Layout } from "../layouts/layout";
import { EditRecipes } from "../components/editRecipes";

const EditRecipesPage = () => {
  return (
    <Layout>
      <section class="section">
        <h1 class="title">Edit a Recipe by ID</h1>
      </section>
      <EditRecipes />
    </Layout>
  );
};

export { EditRecipesPage };