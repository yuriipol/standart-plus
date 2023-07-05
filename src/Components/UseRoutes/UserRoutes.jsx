import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import PrivateRoute from "./PrivateRoutes";
import Loading from "../Loading/Loading";
// import LoginPage from "../../Pages/LoginPage/LoginPage";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../Pages/LoginPage/LoginPage"));
const ProductsPage = lazy(() =>
  import("../../Pages/ProductsPage/ProductsPage")
);

const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage")
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/products" element={<ProductsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
