import { lazy } from "react";
import RequireAuth from "@/routes/protectedRoute/index.jsx";

const HomeLayout = lazy(() => import("@/layouts/root-layout/RootLayout"));
const HomePage = lazy(() => import("@/pages/home/HomePage"));
const MovieDetailPage = lazy(() => import("@/pages/movie-details/MovieDetailsPage"));
const ErrorPage = lazy(() => import("@/pages/error/ErrorPage"));
const AuthLayout = lazy(() => import("@/layouts/auth-layout/AuthLayout"));
const LoginPage = lazy(() => import("@/pages/sign-in/SignInPage"));
const RegisterPage = lazy(() => import("@/pages/sign-up/SignUpPage"));
const AdminLayout = lazy(() => import("@/layouts/admin-layout/AdminLayout"));
const NotFoundPage = lazy(() => import("@/pages/not-found/NotFoundPage"));
const BookingPage = lazy(() => import("@/pages/booking/BookingPage"));

const routes = [
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HomeLayout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: "film/:id", element: <MovieDetailPage /> },
          // { path: "booking/:id", element: <BookingPage /> },
          // {
          //   path: "profile",
          //   element: (
          //     <RequireAuth roles={[ROLE.ADMIN, ROLE.CLIENT]}>
          //       <ProfilePage />
          //     </RequireAuth>
          //   ),
          // },
        ],
      },
      {
        path: "booking/:id",
        element: (
          <RequireAuth>
            <BookingPage />
          </RequireAuth>
        ),
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "sign-in", element: <LoginPage /> },
          { path: "sign-up", element: <RegisterPage /> },
        ],
      },
      // {
      //   element: (
      //     <RequireAuth roles={[ROLE.ADMIN]}>
      //       <AdminLayout />
      //     </RequireAuth>
      //   ),
      //   children: [
      //     {path: "user-management", element: <MovieDashboard />},
      //     {path: "movie-management", element: <UserDashboard />},
      //   ],
      // }
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];

export default routes;
