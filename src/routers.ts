import Welcome from "./pages/Welcome";
import ButtonType from "./pages/ButtonType/index";

const routers = [
  {
    path: "/",
    component: Welcome
  },
  {
    path: "/buttonType",
    component: ButtonType
  }
]

export default routers