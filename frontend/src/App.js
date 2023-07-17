import React, { createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//Import Reducer
import { reducer, initialState } from "./reducers/userReducer";

//Import Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Contactus from "./pages/Contactus";
import Error404 from "./pages/Error404";
import Aboutus from "./pages/Aboutus";
import TC from "./pages/T&C";

//Import Component
import { ScrollTop } from "./components/ScrollTop/ScrollTop";

export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/t&c" element={<TC />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
        <ScrollTop />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
