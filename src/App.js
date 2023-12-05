import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import { getPublicRoutes } from "./routes";
import Layout from "./components/layout"

const App = () => {
  const publicRoutes = getPublicRoutes();
  return (
    <BrowserRouter>
    <Suspense>
    <Layout>
     <Routes>
      {publicRoutes.map(
        (route, i) => !route.isDisabled && <Route key={i} path={route.path} element={route.element} {...route} />
         )}
        </Routes>
        </Layout>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;
