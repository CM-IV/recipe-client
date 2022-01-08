import { Fragment } from "preact";
import { Link } from "wouter-preact";
import { useState, useEffect } from "preact/hooks";
import { Paginator } from "./paginator";
import axios from "axios";

const Dashboard = () => {
    const [recipeData, setRecipeData] = useState<Recipes[]>([]);
    const [recipeNum, setRecipeNum] = useState(0);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    const token = localStorage.getItem("token");

    const fetchRecipes = () => {

        axios.get(`recipes/?page=${page}`)
            .then((res) => {

                return res.data;

            })
            .then((recipes) => {

                setRecipeData(recipes.data);
                setRecipeNum(recipes.meta.total);
                setLastPage(recipes.meta.last_page);

            });

    };

    useEffect(() => {
        fetchRecipes();
    }, [page]);

    const deleteRow = async (id: number) => {
        if (window.confirm("Are you sure?")) {
          await axios.delete(`recipes/${id}`, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
          });
    
          setRecipeData(recipeData.filter((r: Recipes) => r.id !== id));
        }
    };

    return (

        <Fragment>
            <section class="hero is-info">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">Hello, Admin.</h1>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="tile is-ancestor has-text-centered">
                    <div class="tile is-parent">
                        <article class="tile is-child box">
                            <p class="title">{recipeNum}</p>
                            <p class="subtitle">Recipes</p>
                        </article>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="table-container">
                    <table class="table is-bordered">
                    <thead>
                        <tr>
                            <th>ID#</th>
                            <th>UserID</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Steps</th>
                            <th>Nutrition</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipeData.map((r: Recipes) => {
                        return (
                            <tr key={r.id}>
                                <td>{r.id}</td>
                                <td>{r.user_id}</td>
                                <td>{r.title}</td>
                                <td>{r.description}</td>
                                <td>{r.steps}</td>
                                <td>{r.nutrition}</td>
                                <td>
                                    <div class="level">
                                    <div class="level-item">
                                        <Link
                                        to={`/recipes/${r.id}/edit`}
                                        class="button is-small"
                                        >
                                        Edit
                                        </Link>
                                    </div>
                                    <div class="level-item">
                                        <button
                                        class="button is-small"
                                        onClick={() => deleteRow(r.id)}
                                        >
                                        Delete
                                        </button>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        );
                        })}
                    </tbody>
                    </table>
                </div>
            </section>
            {recipeNum > 5 && (
                <Paginator
                page={page}
                lastPage={lastPage}
                pageChanged={(page) => setPage(page)}
                />
            )}
        </Fragment>

    )

}

export { Dashboard };