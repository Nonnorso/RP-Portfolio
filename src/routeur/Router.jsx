import React from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Layout from "../components/Layout";
import Project from "../pages/Project";
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
        path: "Project",
        element: <Project />
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