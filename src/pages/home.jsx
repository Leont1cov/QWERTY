import { useState } from "react"

import Header from "../components/layout/header/Header"
import Sidebar from "../components/layout/sidebar/Sidebar"
import PostPublication from "../components/layout/post-publication/PostPublication"
import Post from "../components/layout/post/Post"
import InfoPanel from "../components/layout/info-panel/InfoPanel"
import FloatingPostPublication from "../components/ui/FloatingPostPublication"

import usersFollowingsData from "../data/usersFollowingsData"
import userData from "../data/userData"
import postsData from "../data/postsData"

export default function Home() {
    const [currentSection, setCurrentSection] = useState("For you")
    const [buttonOn, setButtonOn] = useState(false)

    const postsForYou = postsData.map((post, index) => (
        <Post
            key={index}
            user={userData}
            profilePic={post.account[0].profilePic}
            username={post.account[0].username}
            tag={post.account[0].tag}
            date={post.date}
            text={post.text}
            image={post.image}
            image2={post.image2}
            image3={post.image3}
            image4={post.image4}
            comments={post.comments}
            reposts={post.reposts}
            likes={post.likes}
            bookmarks={post.bookmarks}
        />
    ))

    const postsFollowing = postsData.map((post) => {
        const name = userData.username.toLowerCase().split(" ")
        const id = `${name[0]}_${name[1]}`
        const currentUserFollowings = usersFollowingsData[id]
        return currentUserFollowings.map((following, index) => {
            if (
                following.username === post.account[0].username &&
                following.tag === post.account[0].tag
            ) {
                return (
                    <Post
                        key={index}
                        user={userData}
                        profilePic={post.account[0].profilePic}
                        username={post.account[0].username}
                        tag={post.account[0].tag}
                        date={post.date}
                        text={post.text}
                        image={post.image}
                        image2={post.image2}
                        image3={post.image3}
                        image4={post.image4}
                        comments={post.comments}
                        reposts={post.reposts}
                        likes={post.likes}
                        bookmarks={post.bookmarks}
                    />
                )
            }
        })
    })

    return (
        <main className="main">
            {buttonOn ? (
                <FloatingPostPublication
                    profilePic={userData.profilePic}
                    profileLink={"#"}
                    setButtonOn={setButtonOn}
                />
            ) : null}
            <Sidebar
                profileUsername={userData.username}
                profileTag={userData.tag}
                profilePic={userData.profilePic}
                profileLink={"#"}
                setButtonOn={setButtonOn}
            />

            <div className="main__center">
                <Header
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                />
                <PostPublication
                    profilePic={userData.profilePic}
                    profileLink={"#"}
                />

                {currentSection === "For you" ? postsForYou : postsFollowing}
            </div>

            <InfoPanel />
        </main>
    )
}
