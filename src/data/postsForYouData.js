import profilePicture from "../assets/profilePicture1.JPG"
import profilePicture2 from "../assets/profilePicture2.JPG"
import photo from "../assets/photo.JPG"

const postsForYouData = [
    {
        profilePic: profilePicture,
        username: "John Smith",
        tag: "@johnsmith",
        date: "30m",
        text: "Hello everyone!",
        image: photo,
        commentsNum: "2",
        repostsNum: "5",
        likesNum: "23",
        liked: false,
        bookmarked: false,
    },
    {
        profilePic: profilePicture,
        username: "John Smith",
        tag: "@johnsmith",
        date: "32m",
        text: "Qwerty is a very nice app!",
        commentsNum: "3",
        repostsNum: "2",
        likesNum: "32",
        liked: false,
        bookmarked: false,
    },
    {
        profilePic: profilePicture2,
        username: "Michael Brown",
        tag: "@michaelbrown",
        date: "35m",
        text: "We've built this app only by ourselves!",
        commentsNum: "1",
        repostsNum: "2",
        likesNum: "17",
        liked: true,
        bookmarked: false,
    },
    {
        profilePic: profilePicture2,
        username: "Michael Brown",
        tag: "@michaelbrown",
        date: "37m",
        text: "Welcome to Qwerty!",
        commentsNum: "5",
        repostsNum: "7",
        likesNum: "52",
        liked: true,
        bookmarked: true,
    },
]

export default postsForYouData
