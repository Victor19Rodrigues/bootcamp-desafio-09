import React from "react";
import { Switch, Route } from "react-router-dom";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Detail from "../pages/Detail";
import EditMeetapp from "../pages/EditMeetapp";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} />
      <Route path="/profile" component={Profile} />
      <Route path="/detail" component={Detail} />
      <Route path="/edit" component={EditMeetapp} />
    </Switch>
  );
}
