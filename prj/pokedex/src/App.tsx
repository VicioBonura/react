import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = () => {
  return <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/:name"} element={<Detail />} />
      </Routes>
    </BrowserRouter> 
};

export default App;