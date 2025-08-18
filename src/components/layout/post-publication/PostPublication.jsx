import Button from "../../ui/Button"
import ProfilePicture from "../../ui/ProfilePicture"

export default function PostPublication({ profilePic, profileLink }) {
    return (
        <div className="postPublication">
            <a href={profileLink} className="postPublication__picture">
                <ProfilePicture profilePicture={profilePic} />
            </a>
            <div className="postPublication__right">
                <textarea
                    className="postPublication__right--textarea"
                    name="input"
                    id="input"
                    placeholder="What's happening?"
                ></textarea>

                <div className="postPublication__bottom">
                    <i
                        className="postPublication__bottom--imageBtn fa fa-picture-o"
                        aria-hidden="true"
                    ></i>

                    <Button
                        title={"Post"}
                        buttonClass="button button__PostPublication"
                        button__titleClass="button__title button__title-PostPublication"
                    />
                </div>
            </div>
        </div>
    )
}
