import Layout from "./components/layout/Layout";
import { routes } from "./routes/Routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          {routes &&
            routes.map((item, key) => {
              return (
                <Route key={key} path={item.path} element={item.element} />
              );
            })}
        </Routes>
      </Layout>
    </>
  );
}

export default App;
