import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Restaurants from "../Pages/Restaurants";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [

        {
          path:"/",
          element: <Restaurants />
        }
      ],
    },
  ]);