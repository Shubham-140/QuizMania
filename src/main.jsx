import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./components/Rules.jsx";
import HomePage from "./components/HomePage.jsx";
import Question from "./components/Question.jsx";
import { Settings } from "./components/Settings.jsx";
import { Score } from "./components/Score.jsx";
import About from "./components/About.jsx";
import Feedback from "./components/Feedback.jsx";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/rules",
        element: <Rules />,
      },
      {
        path: "/quiz/:category/:difficulty",
        element: <Question />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/score",
        element: <Score />,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/feedback",
        element:<Feedback/>
      },
      {
        path: "*",
        element: <Navigate to="/" replace /> // Note: "Navigate" not "navigate"
      }
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
