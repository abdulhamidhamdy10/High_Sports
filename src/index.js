import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,

  Link,
} from "react-router-dom";
import App from "./App";
import Allclubkitspages from "./Clubkitspage/Allclubkitspages";
import Allsportsshoespages from "./Sportsshoespage/Allsportsshoespages";
import Allsportsclothespages from "./Sportsclothespage/Allsportsclothespages";
import Allsportsaccessoriespages from "./Sportsaccessoriespage/Allsportsaccessoriespages";
import AllShoppingPage from "./ShoppingPage/Allshoppingpage";
import Alltablepages from "./Tablepage/Alltablepages";
import Allsignuppages from "./Signuppage/Allsignuppages";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Allclubkitspages",
    element: <Allclubkitspages/> ,
  },
  {
    path: "/Allsportsshoespages",
    element: <Allsportsshoespages/> ,
  },
  {
    path: "/Allsportsclothespages",
    element: <Allsportsclothespages/> ,
  },
  {
    path: "/Allsportsaccessories",
    element: <Allsportsaccessoriespages/> ,
  },
  {
    path: "/AllShoppingPage",
    element:<AllShoppingPage/> ,
  },
  {
    path: "/Alltablepages",
    element:<Alltablepages/> ,
  },
  {
    path: "/Allsignuppages",
    element:<Allsignuppages/> ,
  },
  {
    path: "/AllShoppingPage/Shopping",
    element:<AllShoppingPage/> ,
  },

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);








