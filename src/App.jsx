import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Explore from "./pages/explore";
import Bookmarks from "./pages/bookmarks";
import Profile from "./pages/profle";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
