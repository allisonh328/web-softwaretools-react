import React from 'react';
import { BrowserRouter as Router, Redirect, Route, NavLink } from 'react-router-dom';
import AddPage from "./components/AddPage";
import ViewPage from "./components/ViewPage";

function App() {
  return (
    <Router>
      <header>
        <NavLink activeClassName="currentPage" to="/view">View pets</NavLink>
        <NavLink activeClassName="currentPage" to="/add">Add pet</NavLink>
      </header>
      <div className="app">
        <Route
          path="/view"
          exact
          component={ViewPage}
        />
        <Route
          path="/add"
          exact
          component={AddPage}
        />
        <Route
          path="*"
          render={() => <Redirect to="/view"/>}
        />
      </div>
    </Router>
  );
}

export default App;
