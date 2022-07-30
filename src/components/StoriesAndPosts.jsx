import Posts from "./Posts"
import Stories from "./Stories"
import WhatsOnYourMind from "./WhatsOnYourMind"

export default function StoriesAndPosts() {
    return (
        <section id="stories-and-posts">
            <Stories />
            <div style={{ paddingInline: '2.5em' }}>
                <WhatsOnYourMind />
                <Posts />
            </div>
        </section>

    )
}