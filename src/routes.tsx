import { createBrowserRouter } from "react-router-dom";
import { Restaurants } from "./App";
import NotFound from "./components/ErrorPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Restaurants />,
    errorElement: <NotFound/>
  },
]);

export default appRouter;
