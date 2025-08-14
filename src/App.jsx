import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";
import PostPublication from "./components/PostPublication";

export default function App() {
  return (
    <main className="main">
      <Header />
      <Sidebar />
      <PostPublication />
    </main>
  );
}
