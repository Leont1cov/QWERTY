import ProfilePicture from "../../ui/ProfilePicture"
import Media from "../../ui/Media"

export default function Post({
    profilePic,
    username,
    tag,
    date,
    text,
    image,
    image2,
    image3,
    image4,
    commentsNum,
    repostsNum,
    likesNum,
    liked,
    bookmarked,
}) {
    function timeAgo(from, to = new Date()) {
        const fromDate = new Date(from)
        const diffMs = Math.abs(to - fromDate)

        const seconds = Math.floor(diffMs / 1000)
        const minutes = Math.floor(seconds / 60)
        const hours = Math.floor(minutes / 60)
        const days = Math.floor(hours / 24)
        const weeks = Math.floor(days / 7)
        const months = Math.floor(days / 30)
        const years = Math.floor(days / 365)

        if (years > 0) return `${years} year${years > 1 ? "s" : ""}`
        if (months > 0) return `${months} month${months > 1 ? "s" : ""}`
        if (weeks > 0) return `${weeks} week${weeks > 1 ? "s" : ""}`
        if (days > 0) return `${days} day${days > 1 ? "s" : ""}`
        if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""}`
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? "s" : ""}`
        return `${seconds} second${seconds !== 1 ? "s" : ""}`
    }

    function addImage() {
        if (
            image !== undefined &&
            image2 !== undefined &&
            image3 !== undefined &&
            image4 !== undefined
        ) {
            return (
                <div className="post__info--content--fourImageContainers">
                    <Media
                        src={image}
                        alt="Image"
                        className="post__info--content--fourImageContainers--image1"
                    />

                    <Media
                        src={image2}
                        alt="Image 2"
                        className="post__info--content--fourImageContainers--image2"
                    />

                    <Media
                        src={image3}
                        alt="Image 3"
                        className="post__info--content--fourImageContainers--image3"
                    />

                    <Media
                        src={image4}
                        alt="Image 4"
                        className="post__info--content--fourImageContainers--image4"
                    />
                </div>
            )
        } else if (
            image !== undefined &&
            image2 !== undefined &&
            image3 !== undefined
        ) {
            return (
                <div className="post__info--content--threeImageContainers">
                    <div className="post__info--content--threeImageContainers--left">
                        <Media
                            src={image}
                            alt="Image"
                            className="post__info--content--threeImageContainers--left--image"
                        />
                    </div>

                    <div className="post__info--content--threeImageContainers--right">
                        <Media
                            src={image2}
                            alt="Image 2"
                            className="post__info--content--threeImageContainers--right--image"
                        />

                        <Media
                            src={image3}
                            alt="Image 3"
                            className="post__info--content--threeImageContainers--right--image"
                        />
                    </div>
                </div>
            )
        } else if (image !== undefined && image2 !== undefined) {
            return (
                <div className="post__info--content--twoImageContainers">
                    <Media
                        src={image}
                        alt="Image"
                        className="post__info--content--twoImageContainers--image"
                    />

                    <Media
                        src={image2}
                        alt="Image 2"
                        className="post__info--content--twoImageContainers--image"
                    />
                </div>
            )
        } else {
            return (
                <Media
                    src={image}
                    alt="Image"
                    className="post__info--content--image"
                />
            )
        }
    }

    function content() {
        if (text !== undefined && image !== undefined) {
            return (
                <div className="post__info--content">
                    <p className="post__info--content--text">{text}</p>
                    {addImage()}
                </div>
            )
        } else if (image === undefined) {
            return (
                <div className="post__info--content">
                    <p className="post__info--content--text">{text}</p>
                </div>
            )
        } else {
            return <div className="post__info--content">{addImage()}</div>
        }
    }

    return (
        <div className="post">
            <ProfilePicture profilePicture={profilePic} />

            <div className="post__info">
                <div className="post__info--upperContainer">
                    <span className="post__info--upperContainer--username">
                        {username}
                    </span>
                    <span className="post__info--upperContainer--tag">
                        {tag}
                    </span>
                    ·
                    <span className="post__info--upperContainer--date">
                        {timeAgo(date)}
                    </span>
                </div>

                {content()}

                <div className="post__info--bottomContainer">
                    <div className="post__info--bottomContainer--stats">
                        <div className="post__info--bottomContainer--stats--comments">
                            <i
                                className="post__info--bottomContainer--stats--comments--icon fa fa-comment-o"
                                aria-hidden="true"
                            ></i>
                            <span className="post__info--bottomContainer--stats--comments--num">
                                {commentsNum}
                            </span>
                        </div>

                        <div className="post__info--bottomContainer--stats--reposts">
                            <i
                                className="post__info--bottomContainer--stats--reposts--icon fa fa-retweet"
                                aria-hidden="true"
                            ></i>
                            <span className="post__info--bottomContainer--stats--reposts--num">
                                {repostsNum}
                            </span>
                        </div>

                        <div className="post__info--bottomContainer--stats--likes">
                            {liked ? (
                                <i
                                    className="post__info--bottomContainer--stats--likes--icon fa fa-heart"
                                    aria-hidden="true"
                                ></i>
                            ) : (
                                <i
                                    className="post__info--bottomContainer--stats--likes--icon fa fa-heart-o"
                                    aria-hidden="true"
                                ></i>
                            )}
                            <span className="post__info--bottomContainer--stats--likes--num">
                                {likesNum}
                            </span>
                        </div>
                    </div>

                    {bookmarked ? (
                        <i
                            className="post__info--bottomContainer--bookmark fa fa-bookmark"
                            aria-hidden="true"
                        ></i>
                    ) : (
                        <i
                            className="post__info--bottomContainer--bookmark fa fa-bookmark-o"
                            aria-hidden="true"
                        ></i>
                    )}
                </div>
            </div>
        </div>
    )
}
