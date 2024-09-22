import { Offer } from "../components/Offer/offer";
import { Root } from "../components/Root/Root";
import { createBrowserRouter } from "react-router-dom";

export const routingConfig = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <div>Home page</div> },
      { path: "/offer/:id", element: <Offer /> },
    ],
  },
]);
