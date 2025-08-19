import Button from "../../ui/Button"
import SidebarItem from "./SidebarItem"
import ProfilePicture from "../../ui/ProfilePicture"

export default function Sidebar({
    profileUsername,
    profileTag,
    profilePic,
    profileLink,
}) {
    return (
        <div className="sidebar">
            <a className="sidebar__logo" href="#">
                QWERTY
            </a>

            <div className="sidebar__list">
                <ul className="sidebar__list-ul">
                    <SidebarItem iconName={"fa-home"} title={"Home"} />
                    <SidebarItem iconName={"fa-search"} title={"Explore"} />
                    <SidebarItem
                        iconName={"fa-bookmark-o"}
                        title={"Bookmarks"}
                    />
                    <SidebarItem iconName={"fa-user-o"} title={"Profile"} />
                </ul>

                <div className="sidebar__list--bottomContainer">
                    <Button
                        title={"Post"}
                        buttonClass="button"
                        button__titleClass="button__title"
                    />

                    <a
                        href={profileLink}
                        className="sidebar__list--bottomContainer--profileContainer"
                    >
                        <ProfilePicture profilePicture={profilePic} />

                        <div className="sidebar__list--bottomContainer--profileContainer--profileNames">
                            <span className="sidebar__list--bottomContainer--profileContainer--profileNames--username">
                                {profileUsername}
                            </span>
                            <span className="sidebar__list--bottomContainer--profileContainer--profileNames--tag">
                                {profileTag}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
