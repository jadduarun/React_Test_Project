import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import { useState } from "react";
import HomePage from "./Components/HomePage";
import AllProducts from "./Components/AllProducts";
import Cart from "./Components/Cart";

function App() {
  const [register, setRegister] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [logUsername, setLogUsername] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [cartProduct, setCartProduct] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="Register"
          element={
            <Register
              register={register}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
          }
        />
        <Route
          path="Login"
          element={
            <Login
              register={register}
              logUsername={logUsername}
              setLogUsername={setLogUsername}
              logPassword={logPassword}
              setLogPassword={setLogPassword}
            />
          }
        />
        <Route path="/Home" element={<HomePage />}>
          <Route index element={<AllProducts cartProduct={cartProduct} />} />
          <Route path="Cart" element={<Cart cartProduct={cartProduct} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
