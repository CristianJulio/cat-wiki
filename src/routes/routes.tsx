import Home from "../pages/Home/Home";
import Info from "../pages/Info/Info";
import MostSearched from "../pages/MostSearched/MostSearched";

export const HOME = "/"
export const MOST = "/top"

export const routes = [
  {
    path: HOME,
    element: <Home />
  },
  {
    path: `/:breed`,
    element: <Info />
  },
  {
    path: MOST,
    element: <MostSearched />
  },
]