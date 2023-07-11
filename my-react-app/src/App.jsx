import React, {useState} from "react";
import Header from "./sectioning/Header";
import Main from "./sectioning/Main";
import Footer from "./sectioning/Footer";
// import Register from "./components/Register";
import "./app.css";
import GlobalStyles from "./components/GlobalStyles";

export default function App() {
  return (
    <>
    <GlobalStyles/>
      <Header />
      <Main />
      <Footer />
    </>
  );
}