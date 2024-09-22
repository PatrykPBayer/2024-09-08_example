import { RouterProvider } from "react-router-dom";
import { routingConfig } from "./config/routing";

function App() {
  return (
    <main>
      <RouterProvider router={routingConfig} />
    </main>
  );
}

export default App;
