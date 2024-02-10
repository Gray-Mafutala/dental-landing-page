import React from "react";

import { useRoutes } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const About = React.lazy(() => import("../pages/About"));
const Services = React.lazy(() => import("../pages/Services"));
const Blog = React.lazy(() => import("../pages/Blog"));
const Contact = React.lazy(() => import("../pages/Contact"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <About /> },
    { path: "/services", element: <Services /> },
    { path: "/blog", element: <Blog /> },
    { path: "/contact", element: <Contact /> },
    { path: "/*", element: <PageNotFound /> },
  ]);

  return routes;
};

export default Routing;
