import Main from "../Layout/Main";
import Cast from "../pages/Cast/Cast";
import Home from "../pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import CastProfile from "../components/CastDetails/CastProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/character",
        element: <Cast></Cast>,
      },
      {
        path: "/character/:id",
        element: <CastProfile></CastProfile>,
        loader: ({ params }) =>
          fetch(`https://rickandmortyapi.com/api/character/${params.id}`),
      },
    ],
  },
]);
