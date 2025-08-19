import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <a className="sidebar__logo" href="#">
        QWERTY
      </a>

      <div className="sidebar__list">
        <ul className="sidebar__list-ul">
          <Link to={"/"}>
            <SidebarItem iconName={"fa-home"} title={"Home"} />
          </Link>
          <Link to={"/explore"}>
            <SidebarItem iconName={"fa-search"} title={"Explore"} />
          </Link>

          <SidebarItem iconName={"fa-star-o"} title={"Bookmarks"} />
          <SidebarItem iconName={"fa-user-o"} title={"Profile"} />
        </ul>
        <Button
          title={"Post"}
          buttonClass="button"
          button__titleClass="button__title"
        />
      </div>
    </div>
  );
}
