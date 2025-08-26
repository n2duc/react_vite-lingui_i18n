import { createBrowserRouter, Navigate } from "react-router";
import App from "./App";

export function getDefaultLocale() {
  return localStorage.getItem("locale") || "en"
}

export const router = createBrowserRouter([
  {
    index: true,
    element: <Navigate to={`/${getDefaultLocale()}`} replace />,
  },
  {
    path: "/:locale",
    element: <App />,
  },
]);