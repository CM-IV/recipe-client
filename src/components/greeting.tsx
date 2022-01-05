import { Fragment } from "preact";


const Greeting = () => {

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