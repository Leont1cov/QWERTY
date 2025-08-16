export default function ProfilePicture({ profilePicture }) {
    return (
        <>
            {profilePicture === undefined ? (
                <div className="profilePicture"></div>
            ) : (
                <img
                    src={profilePicture}
                    alt="Profile picture"
                    className="profilePicture"
                />
            )}
        </>
    )
}
