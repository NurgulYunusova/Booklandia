import { routes } from "./routes/Routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {routes &&
          routes.map((item, key) => {
            return <Route key={key} path={item.path} element={item.element} />;
          })}
      </Routes>
    </>
  );
}

export default App;
