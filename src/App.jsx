import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home/Home";
import Rootlayout from "./layout/RootLayout/Rootlayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Rootlayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
