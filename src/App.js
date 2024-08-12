import { Route, Routes } from "react-router-dom";
import "./categories.scss";
import Home from "./routes/Home/Home";
import NavigationBar from "./routes/Navigation/NavigationBar";
import SignIn from "./routes/SingIn/SignIn";
import { ChakraProvider } from "@chakra-ui/react";
import SignUp from "./routes/SignUp/SignUp";
import ForgotPassword from "./routes/ForgotPassword/ForgotPassword";
const Shop = () => {
  return (
    <div className="shop-page">
      <h1>Shop Page</h1>
    </div>
  );
};

const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<NavigationBar />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in/forgot-password" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
};

export default App;
