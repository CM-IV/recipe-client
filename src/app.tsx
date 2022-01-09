import { Route, Switch } from "wouter-preact";
import { Home } from "./pages/Home";
import { Recipes } from "./pages/Recipes";
import { LoginPage } from "./pages/loginPage";
import { LogoutPage } from "./pages/logoutPage";
import { DashboardPage } from "./pages/dashboardPage";
import { AdminPerms } from "./pages/adminPerms";
import { EditRecipesPage } from "./pages/editRecipesPage";
import { ProtectedRoute } from "./components/protectedRoute";
import { NotFound } from "./pages/_404";


const App = () => {

  return (

    <div class="app">
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/recipes" component={Recipes}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <ProtectedRoute path="/logout" component={LogoutPage}></ProtectedRoute>
        <ProtectedRoute path="/dashboard" component={DashboardPage}></ProtectedRoute>
        <ProtectedRoute path="/recipes/:id/edit" component={EditRecipesPage}></ProtectedRoute>
        <ProtectedRoute path="/admin-perms" component={AdminPerms}></ProtectedRoute>
        <Route component={NotFound}></Route>
      </Switch>
    </div>

  )

}

export { App };