import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import EditProfile from "./pages/EditProfile/EditProfile";

// const myCreatedRoute = createBrowserRouter([
//   {
//     path:"/",
//     element: <div>This is my first home route</div>
//   },
//   {
//     path:"/products",
//     element:<div>Products</div>
//   },
//   {
//   path:"/about",
//     element:<div>about</div>
//   },
// ])

// nested
// const myCreatedRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <section>
//         <div>This is a fixed item</div>
//         <Outlet></Outlet>
//       </section>
//     ),
//     children: [
//       {
//         path: "/",
//         element: <div>This is home page</div>,
//       },
//       {
//         path: "/products",
//         element: <div>Products page</div>,
//       },
//     ],
//   },
// ])

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader : ()=>fetch(`https://dummyjson.com/products`)
      },
      {
        path : "/products/:id",
        element : <Product></Product>,
        loader : ({params})=>fetch(`https://dummyjson.com/products/${params.id}`)
        // loader : (object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
      },
      {
        path: "/dashboard",
        element: <DashboardLayout></DashboardLayout>,
        children : [
          {
              path : "/dashboard",
              element :<Dashboard></Dashboard>
          },
          {
              path : "/dashboard/profile",
              element :<Profile></Profile>
          },
          {
              path : "/dashboard/editProfile",
              element :<EditProfile></EditProfile>
          },
        ]
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>
);
