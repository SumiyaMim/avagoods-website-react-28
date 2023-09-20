/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import Spinner from "../components/Spinner/Spinner";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoadingProducts = navigation.state === "loading";

  return (
    <div>
      <nav className="flex justify-between px-8 md:px-10 shadow-md py-7">
        <div>
          <h1 className="text-xl font-bold">AvaGoods</h1>
        </div>
        <div>
        <ul className="flex gap-6">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600" : ""
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600" : ""
              }
            >
              Products
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue-600" : ""
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
      </nav>

      {isLoadingProducts ? (
        <Spinner></Spinner>
      ) : (
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      )}

      {/* <div className='min-h-screen'>
            <Outlet></Outlet>
        </div> */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
