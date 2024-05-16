import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import Home from "../pages/Homepage/Home";
import Success from "../pages/SuccesPage/Success";
import OrderPizza from "../pages/OrderPizzaPage/OrderPizza";

function App() {

  return (
    <>
      <Router>
        <Switch>

          <Route exact path="/success" >
            <Success />
          </Route>
          <Route exact path="/order-pizza" >
            <OrderPizza />
          </Route>
          <Route exact path="/" >
            <Home />
          </Route>
        </Switch>

      </Router>

    </>
  )
}

export default App
