import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Layout from "../components/Layout";
import PortfolioUnique from "../pages/PortfolioUnique";
import Error404 from "../pages/Error404";
import Portfolios from "../pages/Portfolios";
import Contact from "../pages/Contact";
import LegalMentions from "../pages/LegalMentions";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "About",
        element: (
            <About />
        ),
      },
      {
        path: "Portfolios",
        element: <Portfolios />
      },
      {
        path: "PortfolioUnique",
        element: <PortfolioUnique />
      },
      {
        path: "Contact",
        element: <Contact />
      },
      {
        path: "LegalMentions",
        element: <LegalMentions />
      },
      {
        path: "*",
        element: <Error404 />
      },
    ],
  },
]);

export default Router;