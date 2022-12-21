/** @format */

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Feauters } from "./pages/feauters/feauters";
function App() {
  return (
    <>
      <Header />
      <Feauters />
      <Routes>
        {" "}
        <Route path="/" element={"home"} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
