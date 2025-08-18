import { useState } from "react"

import Header from "../components/layout/header/Header"
import Sidebar from "../components/layout/sidebar/Sidebar"
import PostPublication from "../components/layout/post-publication/PostPublication"
import Post from "../components/layout/post/Post"
import InfoPanel from "../components/layout/info-panel/InfoPanel"

import postsForYouData from "../data/postsForYouData"
import postsFollowingData from "../data/postsFollowingData"

import profilePicture from "../assets/profilePicture1.JPG"

export default function Home() {
    const [currentSection, setCurrentSection] = useState("For you")

    const postsForYou = postsForYouData.map((post, index) => (
        <Post
            key={index}
            profilePic={post.profilePic}
            username={post.username}
            tag={post.tag}
            date={post.date}
            text={post.text}
            image={post.image}
            commentsNum={post.commentsNum}
            repostsNum={post.repostsNum}
            likesNum={post.likesNum}
            liked={post.liked}
            bookmarked={post.bookmarked}
        />
    ))

    const postsFollowing = postsFollowingData.map((post, index) => (
        <Post
            key={index}
            profilePic={post.profilePic}
            username={post.username}
            tag={post.tag}
            date={post.date}
            text={post.text}
            image={post.image}
            commentsNum={post.commentsNum}
            repostsNum={post.repostsNum}
            likesNum={post.likesNum}
            liked={post.liked}
            bookmarked={post.bookmarked}
        />
    ))

    return (
        <main className="main">
            <Sidebar />

            <div className="main__center">
                <Header
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                />
                <PostPublication
                    profilePic={profilePicture}
                    profileLink={"#"}
                />

                {currentSection === "For you" ? postsForYou : postsFollowing}
            </div>

            <InfoPanel />
        </main>
    )
}
