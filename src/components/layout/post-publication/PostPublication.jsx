import { useRef } from "react"

import Button from "../../ui/Button"
import ProfilePicture from "../../ui/ProfilePicture"

export default function PostPublication({ profilePic, profileLink }) {
    const textareaRef = useRef(null)

    function handleInput() {
        const el = textareaRef.current

        if (el) {
            el.style.height = "auto"
            el.style.height = el.scrollHeight + "px"
        }
    }

    return (
        <div className="postPublication">
            <a href={profileLink} className="postPublication__picture">
                <ProfilePicture profilePicture={profilePic} />
            </a>
            <div className="postPublication__right">
                <textarea
                    ref={textareaRef}
                    className="postPublication__right--textarea"
                    name="input"
                    id="input"
                    placeholder="What's happening?"
                    onInput={handleInput}
                    rows={1}
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
