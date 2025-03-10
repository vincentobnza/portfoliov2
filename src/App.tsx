import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Suspense, lazy } from "react";
import { UILibraries } from "./pages/UILibraries";

const Home = lazy(() => import("./pages/Home"));
const ConnectWithMe = lazy(() => import("./pages/Connect"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/connect-with-vincent",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ConnectWithMe />
          </Suspense>
        ),
      },
      {
        path: "/ui-libraries",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <UILibraries />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
