import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Screen1 from "../pages/Screen1";
import Screen2 from "../pages/Screen2";
import Screen3 from "../pages/Screen3";
import Screen4 from "../pages/Screen4";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen1 />,
  },
  {
    path: "/2",
    element: <Screen2 />,
  },
  {
    path: "/3",
    element: <Screen3 />,
  },
  {
    path: "/4",
    element: <Screen4 />,
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
