import React, { Suspense } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import Routing from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Suspense
          fallback={<div className="mt-8 text-center">Page Loading...</div>}
        >
          <Routing />
        </Suspense>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
