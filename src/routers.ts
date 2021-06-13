import Welcome from "./pages/Welcome";
import ButtonType from "./pages/ButtonType";
import Algorithm from "./pages/Algorithm";
import Daily from "./pages/Daily";

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
  {
    path: "/daily",
    component: Daily
  },
]

export default routers