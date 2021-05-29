import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import FavoritesPage from "@containers/FavoritesPage";
import SearchPage from "@containers/SearchPage";
import ErrorMessage from "@components/ErrorMessage";
import NotFoundPage from "@containers/NotFoundPage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/people",
    exact: true,
    component: PeoplePage,
  },
  {
    path: "/people/:id",
    exact: true,
    component: PersonPage,
  },
  {
    path: "/favorites",
    exact: true,
    component: FavoritesPage,
  },
  {
    path: "/search",
    exact: true,
    component: SearchPage,
  },
  {
    path: "/fail",
    exact: true,
    component: ErrorMessage,
  },
  {
    path: "*",
    exact: true,
    component: NotFoundPage,
  },
];

export default routesConfig;
