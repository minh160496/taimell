import { Route, BrowserRouter, Routes } from "react-router-dom";
import { routers } from "./routers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routers.map((router, index: number) => (
          <Route key={index} path={router.path} element={<router.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
