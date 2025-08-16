import Button from "../../ui/Button";
export default function PostPublication({ profileLink, profilePicture }) {
  return (
    <div className="post">
      <a href={profileLink} className="post__picture">
        {/* <img
                    src={profilePicture}
                    alt="Profile picture"
                    className="post__picture--profilePicture"
                /> */}
        <div className="post__picture--profilePicture"></div>
        {/* ^^^^^ Change this to the img element when profile picture data will be connected to the component */}
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
  );
}
