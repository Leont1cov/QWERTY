export default function PostPublication({ profileLink, profilePicture }) {
    return (
        <div className="post">
            <a href={profileLink} className="post__picture">
                <img
                    src={profilePicture}
                    alt=""
                    // alt="Profile picture"
                    className="post__picture--profilePicture"
                />
            </a>

            <div className="postRight">
                <textarea
                    className="postRight__textarea"
                    name="input"
                    id="input"
                    placeholder="What's happening?"
                ></textarea>

                <div className="postBottom">
                    <i
                        class="postBottom__imageBtn fa fa-picture-o"
                        aria-hidden="true"
                    ></i>
                    <button className="postBottom__postBtn">Post</button>
                </div>
            </div>
        </div>
    )
}
