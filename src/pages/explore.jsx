import { useState } from "react";
import Search from "../components/layout/explore/search";
import Header from "../components/layout/header/Header";
import Sidebar from "../components/layout/sidebar/Sidebar";
import InfoPanel from "../components/layout/info-panel/InfoPanel";

export default function Explore() {
  const [currentSection, setCurrentSection] = useState("For you");

  return (
    <main className="main">
      <Sidebar />

      <div className="main__center">
        <Search />

        <header className="header">
          <button
            onClick={() => setCurrentSection("For you")}
            className={`header__tab ${
              currentSection === "For you" ? "header__tab-active" : ""
            }`}
          >
            For you
          </button>

          <button
            onClick={() => setCurrentSection("Following")}
            className={`header__tab ${
              currentSection === "Following" ? "header__tab-active" : ""
            }`}
          >
            Following
          </button>

          <button
            onClick={() => setCurrentSection("News")}
            className={`header__tab ${
              currentSection === "News" ? "header__tab-active" : ""
            }`}
          >
            News
          </button>

          <button
            onClick={() => setCurrentSection("Sports")}
            className={`header__tab ${
              currentSection === "Sports" ? "header__tab-active" : ""
            }`}
          >
            Sports
          </button>
        </header>
      </div>

      <InfoPanel />
    </main>
  );
}
