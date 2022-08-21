import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Customer from "./Customer";
  import Product from "./Product";
  import Order from "./Order";
  import Payment from "./Payment";

class Main extends Component {
  render() {
    return (
        <HashRouter>
          <div>
            <h1>BackendRealityAssessment</h1>
            <ul className="header">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/customer">Customers</NavLink></li>
                <li><NavLink to="/product">Products</NavLink></li>
                <li><NavLink to="/order">Orders</NavLink></li>
                <li><NavLink to="/payment">Payments</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
                <Route path="/customer" component={Customer}/>
                <Route path="/product" component={Product}/>
                <Route path="/order" component={Order}/>
                <Route path="/payment" component={Payment}/>
            </div>
          </div>
        </HashRouter>
      );
  }
}
 
export default Main;