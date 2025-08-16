import Header from "./components/layout/header/Header"
import Sidebar from "./components/layout/sidebar/Sidebar"
import PostPublication from "./components/layout/post-publication/PostPublication"
import InfoPanel from "./components/layout/info-panel/InfoPanel"
// import Post from "./components/layout/post/Post"

export default function App() {
    return (
        <main className="main">
            <Sidebar />

            <div className="center">
                <Header />
                <PostPublication />
                {/* <Post /> */}
            </div>

            <InfoPanel />
        </main>
    )
}
