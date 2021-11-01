import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Addservice from '../Addservice/Addservice';
import Manageallorder from '../Manageallorder/Manageallorder';
import "./DashBoard.css";
const Dashboard = () => {
    return (
        <div>
             <BrowserRouter>
      <div className="row m-0">
       
          <div className="col-lg-3 backgrond border-end border-info border-5">
            <nav className="d-lg-grid">
              <Link to="/dashboard/all-order">
                <button className="fw-bold btn my-4 link active w-100">
                  Manage All Orders
                </button>
              </Link>

              <Link to="/dashboard/add-service">
                <button className="fw-bold btn my-4 link w-100">
                  Add New Service
                </button>
              </Link>
            </nav>
          </div>
          <div className="col-9 p-0">
            <Switch>
               <Route path="/dashboard/add-service">
                <Addservice></Addservice>
              </Route>
               <Route path="/dashboard/all-order">
               <Manageallorder></Manageallorder>
              </Route>
            </Switch>

           
          </div>
       
      </div>
      </BrowserRouter>
        </div>
    );
};

export default Dashboard;