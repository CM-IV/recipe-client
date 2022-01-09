import { Fragment } from "preact";
import { useState } from "preact/hooks";
import axios from "axios";

const AddRecipe = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");
  const [nutrition, setNutrition] = useState("");

  const token = localStorage.token;

  const submit = (e: Event) => {
    e.preventDefault();

    alert("Your book was added!");

    const recipeData = {
      title,
      description,
      steps,
      nutrition,
    };

    axios.post("recipes", recipeData, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Fragment>
      <section class="section">
        <div class="box">
          <p class="subtitle">Add a recipe</p>
          <form onSubmit={submit}>
            <div class="field">
              <label class="label">Title</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Recipe Title"
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Description</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Recipe Description"
                  onChange={(e) => setDescription(e.currentTarget.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Steps</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Recipe Steps"
                  onChange={(e) => setSteps(e.currentTarget.value)}
                  required
                />
              </div>
            </div>
            <div class="field">
              <label class="label">Nutrition</label>
              <div class="control">
                <input
                  class="input"
                  type="text"
                  placeholder="Recipe Nutrition Info"
                  onChange={(e) => setNutrition(e.currentTarget.value)}
                  required
                />
              </div>
            </div>

            <div class="field">
              <div class="loginButton">
                <button class="button is-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Fragment>
  );
};

export { AddRecipe };