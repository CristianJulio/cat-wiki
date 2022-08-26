import Home from "../pages/Home/Home";
import Info from "../pages/Info/Info";

export const HOME = "/"
export const INFO = "/info"

export const routes = [
  {
    path: HOME,
    element: <Home />
  },
  {
    path: `${INFO}/:breed`,
    element: <Info />
  },
]