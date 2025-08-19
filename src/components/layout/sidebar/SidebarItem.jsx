export default function SidebarItem({ iconName, title }) {
  return (
    <div className="sidebar__list-link" href="#">
      <li className="sidebar__list-li">
        <i
          className={`fa ${iconName} sidebar__list-li-icon`}
          aria-hidden="true"
        ></i>
        <span className="sidebar__list-li-title">{title}</span>
      </li>
    </div>
  );
}
