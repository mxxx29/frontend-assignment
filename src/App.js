import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router";
import { Suspense } from "react";

function App() {
  const content = useRoutes(routes());
  return (
    <Suspense>
      <div className="App">{content}</div>
    </Suspense>
  );
}

export default App;
