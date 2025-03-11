import { Loading } from "../components/Loading";
import { RootLayout } from "../layout/RootLayout";
import { Suspense, lazy } from "react";

// LAZY COMPONENTS
const Home = lazy(() => import("../pages/Home"));
const ConnectWithMe = lazy(() => import("../pages/Connect"));

import { UILibraries } from "../pages/UILibraries";

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/connect-with-vincent",
        element: (
          <Suspense fallback={<Loading />}>
            <ConnectWithMe />
          </Suspense>
        ),
      },
      {
        path: "/ui-libraries",
        element: (
          <Suspense fallback={<Loading />}>
            <UILibraries />
          </Suspense>
        ),
      },
    ],
  },
];

export { routes };
