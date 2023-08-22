import { createBrowserRouter} from 'react-router-dom';
import { Restaurant } from './App';


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Restaurant/>,
        children: [
          {
            path: "/",
            element: <Restaurant/>
          },
        ],
      },
])

export default appRouter;