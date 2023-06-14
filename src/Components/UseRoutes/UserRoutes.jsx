import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

// import PrivateRoute from "./PrivateRoutes";
import Loading from "../Loading/Loading";

const HomePage = lazy(() => import("../../Pages/HomePage/HomePage"));

const NotFoundPage = lazy(() =>
  import("../../Pages/NotFoundPage/NotFoundPage")
);

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
          {/* <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route> */}

        {/* <Route element={<PrivateRoute />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/statistics" element={<Statistics />} />
        </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
