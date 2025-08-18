import ProfilePicture from "../../ui/ProfilePicture"

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
    function addImage() {
        if (
            image !== undefined &&
            image2 !== undefined &&
            image3 !== undefined &&
            image4 !== undefined
        ) {
            return (
                <div className="post__info--content--fourImageContainers">
                    <img
                        src={image}
                        alt="Image"
                        className="post__info--content--fourImageContainers--image1"
                    />

                    <img
                        src={image2}
                        alt="Image 2"
                        className="post__info--content--fourImageContainers--image2"
                    />

                    <img
                        src={image3}
                        alt="Image 3"
                        className="post__info--content--fourImageContainers--image3"
                    />

                    <img
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
                        <img
                            src={image}
                            alt="Image"
                            className="post__info--content--threeImageContainers--left--image"
                        />
                    </div>

                    <div className="post__info--content--threeImageContainers--right">
                        <img
                            src={image2}
                            alt="Image 2"
                            className="post__info--content--threeImageContainers--right--image"
                        />

                        <img
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
                    <img
                        src={image}
                        alt="Image"
                        className="post__info--content--twoImageContainers--image"
                    />

                    <img
                        src={image2}
                        alt="Image 2"
                        className="post__info--content--twoImageContainers--image"
                    />
                </div>
            )
        } else {
            return (
                <img
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
                        {date}
                    </span>
                </div>

                {content()}

                <div className="post__info--bottomContainer">
                    <div className="post__info--bottomContainer--stats">
                        <div className="post__info--bottomContainer--stats--comments">
                            <i
                                class="post__info--bottomContainer--stats--comments--icon fa fa-comment-o"
                                aria-hidden="true"
                            ></i>
                            <span className="post__info--bottomContainer--stats--comments--num">
                                {commentsNum}
                            </span>
                        </div>

                        <div className="post__info--bottomContainer--stats--reposts">
                            <i
                                class="post__info--bottomContainer--stats--reposts--icon fa fa-retweet"
                                aria-hidden="true"
                            ></i>
                            <span className="post__info--bottomContainer--stats--reposts--num">
                                {repostsNum}
                            </span>
                        </div>

                        <div className="post__info--bottomContainer--stats--likes">
                            {liked ? (
                                <i
                                    class="post__info--bottomContainer--stats--likes--icon fa fa-heart"
                                    aria-hidden="true"
                                ></i>
                            ) : (
                                <i
                                    class="post__info--bottomContainer--stats--likes--icon fa fa-heart-o"
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
                            class="post__info--bottomContainer--bookmark fa fa-bookmark"
                            aria-hidden="true"
                        ></i>
                    ) : (
                        <i
                            class="post__info--bottomContainer--bookmark fa fa-bookmark-o"
                            aria-hidden="true"
                        ></i>
                    )}
                </div>
            </div>
        </div>
    )
}
