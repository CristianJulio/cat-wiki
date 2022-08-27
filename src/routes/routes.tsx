import Home from "../pages/Home/Home";
import Info from "../pages/Info/Info";

export const HOME = "/"

export const routes = [
  {
    path: HOME,
    element: <Home />
  },
  {
    path: `/:breed`,
    element: <Info />
  },
]