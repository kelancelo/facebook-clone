import Contacts from "../components/Contacts";
import LeftSideMenu from "../components/LeftSideMenu";
import StoriesAndPosts from "../components/StoriesAndPosts";

export default function Home() {
    return (
        <>
            <main id="home">
                <LeftSideMenu />
                <div></div>
                <Contacts />
            </main>
            <StoriesAndPosts />
        </>
    )
}