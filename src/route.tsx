import { createBrowserRouter, redirect } from "react-router";
import App from "./App";

export function getDefaultLocale() {
  return localStorage.getItem("locale") || "en"
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      const saved = getDefaultLocale();
      if (saved && saved !== "en") {
        return redirect(`/${saved}`);
      }
      return null;
    },
  },
  {
    path: "/:locale",
    element: <App />,
  },
]);