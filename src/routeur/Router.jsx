import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Layout from "../components/Layout";
import Projet from "../pages/Projet";
import Error404 from "../pages/Error404";
import Portfolio from "../pages/Portfolio";
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
        element: <About />
      },
      {
        path: "Portfolio",
        element: <Portfolio />
      },
      {
        path: "Projet/:projectId",
        element: <Projet />
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