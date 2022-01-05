import { Fragment } from "preact";
import axios from "axios";
import { useEffect, useState } from "preact/hooks";
import { Paginator } from "./paginator";

const GetRecipes = () => {
  const [recipeData, setRecipeData] = useState<Recipes[]>([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);
  const [isPaginated, setIsPaginated] = useState(0);

  const getRecipes = () => {
    axios.get(`recipes/?page=${page}`)
      .then((res) => {
        return res.data;
      })
      .then((recipes) => {
        setRecipeData(recipes.data);
        setIsPaginated(recipes.meta.total);
        setLastPage(recipes.meta.last_page);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  useEffect(() => {
    getRecipes();
  }, [page]);

  return (
    <Fragment>
      <section class="section">
        <h1 class="title">Hello!</h1>
      </section>

      <section class="section">
        <h2 class="subtitle">Here are some recipes:</h2>
        {recipeData.map((recipes) => {

          return (
              <div class="box" key={recipes.id}>
                  <h2 class="subtitle">{recipes.title}</h2>
                  <p>{recipes.description}</p>
                  <p>{recipes.steps}</p>
                  <p>{recipes.nutrition}</p>
              </div>
          )

        })}
        {isPaginated > 5 && (
          <Paginator
            page={page}
            lastPage={lastPage}
            pageChanged={(page) => setPage(page)}
          />
        )}
      </section>
    </Fragment>
  )
}


export { GetRecipes };