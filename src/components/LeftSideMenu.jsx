function MenuItem({ imgSrc, text }) {
    return (
        <a className="menu-item" href="#">
            <img src={imgSrc} alt="" />
            {text}
        </a>
    )
}

export default function LeftSideMenu({ style }) {
    return (
        <section id="left-side-menu" style={style}>
            <MenuItem text="Kelancelo" imgSrc="/images/resume-pic.jpg" />
            <MenuItem text="Friends" imgSrc="/images/friends.png" />
            <MenuItem text="Memories" imgSrc="/images/memories.png" />
            <MenuItem text="Groups" imgSrc="/images/groups.png" />
            <MenuItem text="Marketplace" imgSrc="/images/marketplace.png" />
            <MenuItem text="Watch" imgSrc="/images/watch.png" />
            <MenuItem text="Saved" imgSrc="/images/saved.png" />
            <MenuItem text="Pages" imgSrc="/images/pages.png" />
            <MenuItem text="Events" imgSrc="/images/events.png" />
            <MenuItem text="Most Recent" imgSrc="/images/most-recent.png" />
            <MenuItem text="Favorites" imgSrc="/images/favorites.png" />
        </section>
    )
}