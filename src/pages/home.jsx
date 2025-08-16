import Header from "../components/layout/header/Header";
import Sidebar from "../components/layout/sidebar/Sidebar";
import PostPublication from "../components/layout/post-publication/PostPublication";

export default function Home() {
  return (
    <main className="main">
      <Sidebar />

      <div className="center">
        <Header />
        <PostPublication />
      </div>
    </main>
  );
}
