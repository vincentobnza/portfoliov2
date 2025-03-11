import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
