import { Fragment } from "preact";
import { Link } from "wouter-preact";
import { useState } from "preact/hooks";

const Nav = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = Boolean(localStorage.token);

  if (token) {
    setIsAuthenticated(true);
  }

  return (
    <Fragment>
      <nav
        class="navbar"
        id="nav"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="image is-48x48 mt-1" href="/">
            <img
              src="https://ik.imagekit.io/xbkhabiqcy9/img/Occident_Tech_logo_wyOOeI6Bhcn.png?updatedAt=1637081403933"
              height="48"
              width="48"
              class="image-responsive"
              alt="logo"
            />
          </a>
        </div>

        <input
          type="checkbox"
          id="navbar-burger-toggle"
          class="navbar-burger-toggle is-hidden"
        />
        <label for="navbar-burger-toggle" class="navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <Link to={"/"} class="navbar-item mt-2">
              Home
            </Link>
            <Link to={"/recipes"} class="navbar-item mt-2">
              Recipes
            </Link>
            {isAuthenticated && (
              <Link to={"/dashboard"} class="navbar-item mt-2">
                Dashboard
              </Link>
            )}
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                {!isAuthenticated && (
                  <Link to={"/login"} class="button is-link">
                    Admin Login
                  </Link>
                )}
                {isAuthenticated && (
                  <Link to={"/logout"} class="button is-danger is-light">
                    Logout
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export { Nav };

