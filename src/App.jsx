import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/header/Header";
import Warehouse from "./component/warehouse/Warehouse";
import { Provider } from "react-redux";
import { store } from "./component/redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Data from "./Data";
import Resident from "./resident/Resident";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Warehouse></Warehouse>,
    },
    {
      path: "/dent/:id",
      element: <Resident></Resident>,
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <Data>
          <RouterProvider router={route}></RouterProvider>
        </Data>
      </Provider>
    </>
  );
}

export default App;
