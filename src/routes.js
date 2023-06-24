import { lazy } from "react";
import MainLayout from "./components/MainLayout/MainLayout";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const DashboardPage = lazy(() => import("./pages/Dashboard"));

const routes = () => [
  {
    path: "app",
    element: <MainLayout />,
    children: [{ path: "dashboard", element: <DashboardPage /> }],
  },
  {
    path: "/",
    children: [{ path: "", element: <LoginPage /> }],
  },
];

export default routes;
