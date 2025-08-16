import Button from "../../ui/Button"
import ProfilePicture from "../../ui/ProfilePicture"

export default function PostPublication({ profileLink }) {
    return (
        <div className="post">
            <a href={profileLink} className="post__picture">
                <ProfilePicture />
            </a>
            <div className="post__right">
                <textarea
                    className="post__right--textarea"
                    name="input"
                    id="input"
                    placeholder="What's happening?"
                ></textarea>

                <div className="post__bottom">
                    <i
                        className="post__bottom--imageBtn fa fa-picture-o"
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
