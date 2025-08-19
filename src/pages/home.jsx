import { useState } from "react"

import Header from "../components/layout/header/Header"
import Sidebar from "../components/layout/sidebar/Sidebar"
import PostPublication from "../components/layout/post-publication/PostPublication"
import Post from "../components/layout/post/Post"
import InfoPanel from "../components/layout/info-panel/InfoPanel"

import postsData from "../data/postsData"
import userData from "../data/userData"

export default function Home() {
    const [currentSection, setCurrentSection] = useState("For you")

    const postsForYou = postsData.map((post, index) => (
        <Post
            key={index}
            profilePic={post.profilePic}
            username={post.username}
            tag={post.tag}
            date={post.date}
            text={post.text}
            image={post.image}
            image2={post.image2}
            image3={post.image3}
            image4={post.image4}
            commentsNum={post.commentsNum}
            repostsNum={post.repostsNum}
            likesNum={post.likesNum}
            liked={post.liked}
            bookmarked={post.bookmarked}
        />
    ))

    const postsFollowing = postsData.map((post, index) => {
        return userData.followings.map((following) => {
            if (
                following.username === post.username &&
                following.tag === post.tag
            ) {
                return (
                    <Post
                        key={index}
                        profilePic={post.profilePic}
                        username={post.username}
                        tag={post.tag}
                        date={post.date}
                        text={post.text}
                        image={post.image}
                        image2={post.image2}
                        image3={post.image3}
                        image4={post.image4}
                        commentsNum={post.commentsNum}
                        repostsNum={post.repostsNum}
                        likesNum={post.likesNum}
                        liked={post.liked}
                        bookmarked={post.bookmarked}
                    />
                )
            }
        })
    })

    return (
        <main className="main">
            <Sidebar
                profileUsername={userData.profile.username}
                profileTag={userData.profile.tag}
                profilePic={userData.profile.profilePic}
                profileLink={"#"}
            />

            <div className="main__center">
                <Header
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                />
                <PostPublication
                    profilePic={userData.profile.profilePic}
                    profileLink={"#"}
                />

                {currentSection === "For you" ? postsForYou : postsFollowing}
            </div>

            <InfoPanel />
        </main>
    )
}
