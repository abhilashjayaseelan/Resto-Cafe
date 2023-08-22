import { createBrowserRouter } from "react-router-dom";
import { Restaurants } from "./App";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Restaurants />,
    children: [
      {
        path: "/",
        element: <Restaurants />,
      },
    ],
  },
]);

export default appRouter;
