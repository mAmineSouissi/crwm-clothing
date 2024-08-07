import { Route, Routes } from "react-router-dom";
import "./categories.scss";
import Home from "./routes/Home/Home";
import NavigationBar from "./routes/Navigation/NavigationBar";
const Shop = () => {
  return (
    <div className="shop-page">
      <h1>Shop Page</h1>
    </div>
  );
}

const SingIn = () => {
  return (
    <div className="shop-page">
      <h1>SingIn Page</h1>
    </div>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar/>} > 
       <Route index  element={<Home />} />
       <Route path="shop" element={<Shop />} />
       <Route path="sign-in" element={<SingIn />} />
      </Route>
    </Routes>
  );
};

export default App;
