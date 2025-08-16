import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
}
