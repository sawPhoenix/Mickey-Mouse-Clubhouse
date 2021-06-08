import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./styles/index.scss";
import routers from './routers';
import Layout from "./components/Layouts"
function RouterConfig() {
  return (
    <Router>
      <Layout>
        <Switch>
          {routers.map((router, index) =>
            <Route key={index} exact path={router.path} component={router.component} ></Route>
          )}
        </Switch>
      </Layout>

    </Router>
  );
}

export default RouterConfig;
