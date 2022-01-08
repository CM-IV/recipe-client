import { Fragment } from "preact";
import { useState, useEffect } from "preact/hooks";
import { useLocation } from "wouter-preact";
import axios from "axios";


const EditRecipes = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [steps, setSteps] = useState("");
    const [nutrition, setNutrition] = useState("");
    const [location, _setLocation] = useLocation();
    let id: string;

    const token = localStorage.getItem("token");

    let url = location;

    id = url.split("/")[2].substring(0, 36);

    const getRecipeById = () => {

        axios.get(`recipes/${id}`)
            .then((res) => {
                return res.data;
            })
            .then((recipe) => {
                setTitle(recipe.title);
                setDescription(recipe.description);
                setSteps(recipe.steps);
                setNutrition(recipe.nutrition);
            })
            .catch((err) => {
                console.error(err);
            })

    }

    useEffect(() => {
        getRecipeById();
    }, []);

    const submit = (e: Event) => {
        e.preventDefault();

        alert("Recipe updated!");

        const recipeData = {
            title,
            description,
            steps,
            nutrition
        }

        axios.put(`recipes/${id}`, recipeData, {
            headers : {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                console.error(err);
            })
    }

    return (
        <Fragment>
            <section class="section">
                <p class="subtitle">Update a recipe</p>
                <form onSubmit={submit}>
                    <div class="field">
                        <label class="label">Title</label>
                        <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.currentTarget.value)}
                        />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Description</label>
                        <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={description}
                            onChange={(e) => setDescription(e.currentTarget.value)}
                        />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Steps</label>
                        <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={steps}
                            onChange={(e) => setSteps(e.currentTarget.value)}
                        />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Nutrition</label>
                        <div class="control">
                        <input
                            class="input"
                            type="text"
                            value={nutrition}
                            onChange={(e) => setNutrition(e.currentTarget.value)}
                        />
                        </div>
                    </div>
                    <button class="button is-primary" type="submit">
                        Save
                    </button>
                </form>
            </section>
        </Fragment>
    )

}


export { EditRecipes };