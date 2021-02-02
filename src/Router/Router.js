import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import Table from "../components/Table";
import TableUser from "../assets/data.json";

import UseStateExemple from "../Hooks/useStateExemple";
import MoreMinusReset from "../Hooks/moreMinusReset";

import UseEffectExemple from "../Hooks/useEffectExemple";
import Header from "../Hooks/Header";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">useState</Link>
            </li>
            <li>
              <Link to="/header">Header</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/header">
            <HeaderExo />
          </Route>
          <Route exact path="/table">
            <TableExo />
          </Route>
          <Route exact path="/">
            <UseState />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function UseState() {
  return (
    <div>
      <UseStateExemple />
      <br></br>
      <MoreMinusReset />
      <br></br>
      <UseEffectExemple />
    </div>
  );
}

function HeaderExo() {
  return (
    <div>
        <Header className="Header" />
    </div>
  );
}

function TableExo() {
  return <Table users={TableUser.data} />;
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
