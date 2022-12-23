import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Home } from "./pages/home/home";
import {Pricing} from "./pages/pricing/pricing";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/pricing' element={<Pricing/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
