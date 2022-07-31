export function Story({ name, storyImg, creatorImg }) {
    return (
        <div className="story">
            <img src={storyImg} alt="" />
            <div className="creator-name">{name}</div>
            <img className="creator-img" src={creatorImg} alt="" />
        </div>
    )
}

export default function Stories() {
    return (
        <div id="stories">
            <div id="create-story">
                <img src="/images/resume-pic.jpg" alt="" />
                <div id="create-story-text">
                    <span>Create story</span>
                    <button>
                        <img src="/images/plus.svg" alt="" />
                    </button>
                </div>
            </div>
            <Story name="Ben Awad" storyImg="/images/sample-story1.jpg" creatorImg="/images/ben.jpg" />
            <Story name="Coder Coder" storyImg="/images/sample-story3.jpg" creatorImg="/images/jessica.jpg" />
            <Story name="Tech with Tim" storyImg="/images/sample-story2.jpg" creatorImg="/images/twt.jpg" />
            <Story name="Theo" storyImg="/images/sample-story4.jpg" creatorImg="/images/theo.jpg" />
        </div>
    )
}