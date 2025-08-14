import { useState } from "react";

export default function Header() {
  const [isActive, setIsActive] = useState("forYou");

  return (
    <header className="header">
      <button
        onClick={() => setIsActive("forYou")}
        className={`header__tab ${
          isActive === "forYou" ? "header__tab-active" : ""
        }`}
      >
        For you
      </button>

      <button
        onClick={() => setIsActive("following")}
        className={`header__tab ${
          isActive === "following" ? "header__tab-active" : ""
        }`}
      >
        Following
      </button>
    </header>
  );
}
