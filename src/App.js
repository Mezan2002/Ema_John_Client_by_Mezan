import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Shop from "./components/Shop/Shop";
import Main from "./Layout/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Banner></Banner> },
        { path: "/shop", element: <Shop></Shop> },
        { path: "/inventory", element: <h2>This is from Inventory</h2> },
        { path: "/about", element: <h2>This is from about page</h2> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      {/* <Header></Header>
      <Banner></Banner>
      <Shop></Shop>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
