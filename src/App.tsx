import { Suspense } from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import Routing from "./routes";
import LoadingPage from "./components/UI/LoadingPage";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <Suspense fallback={<LoadingPage />}>
          <Routing />
        </Suspense>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
