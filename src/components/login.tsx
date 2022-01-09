import axios from "axios";
import { Fragment } from "preact";
import { useState } from "preact/hooks";
import { useLocation } from "wouter-preact";

const Login = () => {
    const [username, sendUsername] = useState("");
    const [password, sendPassword] = useState("");
    const [_location, setLocation] = useLocation();

    const submit = (e: Event) => {
        e.preventDefault();

        axios.post("login", {

            username: username,
            password: password

        })
        .then((res) => {

            return res.data;

        })
        .then((data) => {

            localStorage.token = data.bearer.token;
            localStorage.user = data.userId;
            setLocation("/");

        })
        .catch((err) => {

            console.error(err);

        })

    }

    return (
        
        <Fragment>
            <div class="columns is-centered">
                <div class="column is-half">
                    <section class="section">
                        <a href="/" class="button">
                        Go Back
                        </a>
                    </section>
                    <div class="box">
                        <p class="title">Please Sign In</p>
                        <form onSubmit={submit}>

                        <div class="field">
                            <label class="label">Username</label>
                            <div class="control">
                            <input
                                class="input"
                                type="text"
                                placeholder="Username"
                                required
                                onChange={(e) => sendUsername(e.currentTarget.value)}
                            />
                            </div>
                        </div>

                        <div class="field">
                            <label class="label">Password</label>
                            <div class="control">
                            <input
                                class="input"
                                type="password"
                                placeholder="Password"
                                required
                                onChange={(e) => sendPassword(e.currentTarget.value)}
                            />
                            </div>
                        </div>

                        <div class="field">
                            <div class="item">
                            <div class="loginButton">
                                <button class="button is-primary" type="submit">
                                Sign in
                                </button>
                            </div>
                            </div>
                        </div>

                        <p>Only the Admin can login.</p>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>

    )

}

export { Login };