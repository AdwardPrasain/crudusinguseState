import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { NavBar } from "./components/Layout/NavBar";
import { About } from "./components/Pages/About";
import { Contact } from "./components/Pages/Contact";
import { AddUser } from "./users/AddUser";
import { EditUser } from "./users/EditUser";
import { NotFound } from "./components/Pages/NotFound";
import { ViewUser } from "./users/ViewUser";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/user/add" component={AddUser} />
          <Route exact path="/user/edit/:id" component={EditUser} />
          <Route exact path="/user/:id" component={ViewUser} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
