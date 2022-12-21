import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../components/pages/Contact/Contact";
import Home from "../components/pages/Home/Home";
import About from "../components/pages/About/About";
import Chirs from "../components/pages/Chairs/Chirs";
import Closets from "../components/pages/Closets/Closets";
import Tables from "../components/pages/Tables/Tables";
import Login from "../components/features/Login/Login";
import SignUp from "../components/features/SignUp/SignUp";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route pata="/chirs" element={<Chirs />}></Route>
      <Route path="/closets" element={<Closets />}></Route>
      <Route path="/tables" element={<Tables />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
    </Routes>
  );
}
