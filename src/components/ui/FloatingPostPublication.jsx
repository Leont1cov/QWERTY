import { useRef } from "react"

import Button from "./Button"
import ProfilePicture from "./ProfilePicture"

export default function FloatingPostPublication({
    profilePic,
    profileLink,
    setButtonOn,
}) {
    const textareaRef = useRef(null)

    function handleInput() {
        const el = textareaRef.current

        if (el) {
            el.style.height = "auto"
            el.style.height = el.scrollHeight + "px"
        }
    }

    return (
        <div className="floatingPostPublication">
            <div className="floatingPostPublication__postPublication">
                <i
                    className="floatingPostPublication__postPublication--close fa fa-times"
                    aria-hidden="true"
                    onClick={() => setButtonOn((prev) => !prev)}
                ></i>

                <div className="floatingPostPublication__postPublication--bottom">
                    <div className="floatingPostPublication__postPublication--bottom--left">
                        <a
                            href={profileLink}
                            className="floatingPostPublication__postPublication--bottom--left--picture"
                        >
                            <ProfilePicture profilePicture={profilePic} />
                        </a>
                    </div>

                    <div className="floatingPostPublication__postPublication--bottom--right">
                        <textarea
                            ref={textareaRef}
                            className="floatingPostPublication__postPublication--bottom--right--textarea"
                            name="input"
                            id="input"
                            placeholder="What's happening?"
                            onInput={handleInput}
                            rows={1}
                        ></textarea>

                        <div className="floatingPostPublication__postPublication--bottom--right--buttons">
                            <i
                                className="floatingPostPublication__postPublication--bottom--right--buttons--imageBtn fa fa-picture-o"
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
            </div>
            <div
                className="floatingPostPublication__blackScreen"
                onClick={() => setButtonOn((prev) => !prev)}
            />
        </div>
    )
}
