export default function WhatsOnYourMind() {
    return (
        <div id="whats-on-your-mind">
            <div>
                <img src="/images/resume-pic.jpg" alt="" />
                <span>What's on your mind</span>
            </div>
            <div className="divider"></div>
            <div id="post-types">
                <div className="post-type">
                    <img src="/images/live-video.svg" alt="" />
                    <span>Live video</span>
                </div>
                <div className="post-type">
                    <img src="/images/photo-video.svg" alt="" />
                    <span>Photo/video</span>
                </div>
                <div className="post-type">
                    <img src="/images/feeling-activity.svg" alt="" />
                    <span>Feeling/activity</span>
                </div>
            </div>
        </div>
    )
}