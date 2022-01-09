import { Fragment } from "preact";
import { Redirect } from "wouter-preact";


const Greeting = () => {

    const user = localStorage.user;

    if (user && user !== "42baecf8-d5ed-411f-b3eb-cf4d45f0ce7a") {

        return <Redirect to={"/admin-perms"} />

    }

    return (
        <Fragment>
            <section class="section">
                <h1 class="title">Welcome to the Recipe App!</h1>
            </section>

            <section class="section">
                <figure class="image is-2by1">
                    <img src="https://ik.imagekit.io/xbkhabiqcy9/img/burger-min_yPyM-Vw4U.webp?updatedAt=1641406822940" alt="Greeting image" />
                </figure>
            </section>
        </Fragment>
    )

}

export { Greeting };