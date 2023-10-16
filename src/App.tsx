import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Logo from "./assests/CatwikiLogo.svg";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import TopTen from "./components/TopTen";
import { Link } from "react-router-dom";
import Breed from "./components/Breed";
import CatInfo from "./components/CatInfo";

function App() {
  return (
    <>
      <Link to="/">
        <img src={Logo.toString()} alt="Logo" />
      </Link>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/top-ten" element={<TopTen />} />
        <Route path="breed/:breedId" element={<Breed />} />
        <Route path="/why-cats" element={<CatInfo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
