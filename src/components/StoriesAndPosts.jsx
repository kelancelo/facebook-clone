import Posts from "./Posts"
import Stories from "./Stories"
import WhatsOnYourMind from "./WhatsOnYourMind"

export default function StoriesAndPosts() {
    return (
        <section id="stories-and-posts">
            <Stories />
            <div id="below-stories">
                <WhatsOnYourMind />
                <Posts />
            </div>
        </section>

    )
}