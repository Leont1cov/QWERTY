import { useState } from "react";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Search from "../components/layout/explore/search";
import InfoPanel from "../components/layout/info-panel/InfoPanel";
import Button from "../components/ui/Button";

export default function Profile({ profileName, profileNick }) {
  const [currentSection, setCurrentSection] = useState("Posts");

  return (
    <main className="main">
      <Sidebar />

      <div className="main__center">
        <Search placeholder={"Search"} />

        <div className="profile">
          <div className="profile__banner">
            <div className="profile__icon"></div>
          </div>

          {/* Здесь нужно будет разобраться с классами */}
          <Button
            title={"Edit profile"}
            buttonClass={"button button__PostPublication profile__button"}
            button__titleClass={"button__title"}
          />

          <div className="profile__info">
            <h3 className="profile__info-name">John Smith</h3>
            {/*{profileName} */}
            <span className="profile__info-nick">@JohnSmith</span>
            {/*{profileNick}*/}
          </div>
          <header className="header profile__header">
            <button
              onClick={() => setCurrentSection("Posts")}
              className={`header__tab ${
                currentSection === "Posts" ? "header__tab-active" : ""
              }`}
            >
              Posts
            </button>

            <button
              onClick={() => setCurrentSection("Media")}
              className={`header__tab ${
                currentSection === "Media" ? "header__tab-active" : ""
              }`}
            >
              Media
            </button>

            <button
              onClick={() => setCurrentSection("Likes")}
              className={`header__tab ${
                currentSection === "Likes" ? "header__tab-active" : ""
              }`}
            >
              Likes
            </button>
          </header>
        </div>
      </div>

      <InfoPanel />
    </main>
  );
}
