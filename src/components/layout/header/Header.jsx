export default function Header({ currentSection, setCurrentSection }) {
  return (
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
    </header>
  );
}
