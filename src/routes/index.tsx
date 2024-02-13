import React from "react";

import { useRoutes } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ServicesPage = React.lazy(() => import("../pages/ServicesPage"));
const BlogPage = React.lazy(() => import("../pages/BlogPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/services", element: <ServicesPage /> },
    { path: "/blog", element: <BlogPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/*", element: <PageNotFound /> },
  ]);

  return routes;
};

export default Routing;