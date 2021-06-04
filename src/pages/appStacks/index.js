import { Twitter } from "@material-ui/icons";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideBar from "./SideBar";

export default function AppStack() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <div className='container px-5 d-flex'>
            <div className='w-25 pt-3'>
              <Twitter style={{ fontSize: "30px" }} />
              <SideBar />
            </div>
            <div className='w-75'>
              <Route path='/' exact>
                Home here
              </Route>
              <Route path='/profile'>Profile</Route>
              <Route path='/tweet/:id'>tweet here</Route>
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}
