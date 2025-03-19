import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Rootlayout from "./layout/RootLayout/Rootlayout";
import AboutUs from "./pages/AboutUs/AboutUs";
import Service from "./pages/Service/Service";
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail";
import Team from "./pages/Team/Team";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/servicedetails" element={<ServiceDetail />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
