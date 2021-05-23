import Welcome from "./pages/Welcome";
import ButtonType from "./pages/ButtonType";
import Algorithm from "./pages/Algorithm";

const routers = [
  {
    path: "/",
    component: Welcome
  },
  {
    path: "/buttonType",
    component: ButtonType
  },
  {
    path: "/algorithm",
    component: Algorithm
  },
]

export default routers