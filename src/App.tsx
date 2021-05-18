
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./styles/index.scss";
import routers from './routers';
function RouterConfig() {
  return (
    <Router>
      <Switch>
        {routers.map((router,index) => <Route　key={index} exact path={router.path} component={router.component} ></Route>)}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
