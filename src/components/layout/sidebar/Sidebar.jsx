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
          <SidebarItem iconName={"fa-home"} title={"Home"} />
          <SidebarItem iconName={"fa-search"} title={"Explore"} />
          <SidebarItem iconName={"fa-star-o"} title={"Bookmarks"} />
          <SidebarItem iconName={"fa-user-o"} title={"Profile"} />
        </ul>
        <Button title={"Post"} />
      </div>
    </div>
  );
}
