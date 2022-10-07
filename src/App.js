import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Main from "./Layout/Main/Main";
import { productsAndCartLoad } from "./loader/productAndCartLoad";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Banner></Banner> },
        {
          path: "/shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoad,
          element: <Orders></Orders>,
        },
        { path: "/inventory", element: <h2>This is from Inventory</h2> },
        { path: "/about", element: <h2>This is from about page</h2> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
