import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Rootlayout from "./layout/RootLayout/Rootlayout";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
