import { Route, Routes } from "react-router-dom";
import "./categories.scss";
import Home from "./routes/Home/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
