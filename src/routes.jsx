import App from "./App";
import GameScreen from "./pages/gameScreen.jsx/gameScreen";

import ErrorPage from "./pages/errorPage/errorPage";
import WelcomeScreen from "./pages/welcomeScreen/welcomeScreen";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <WelcomeScreen /> },
      {
        path: "game/:id",
        element: <GameScreen />,
      },
    ],
  },
];

export default routes;
