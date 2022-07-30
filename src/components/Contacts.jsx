function Contact({ imgSrc, name }) {
    return (
        <div className="contact">
            <img src={imgSrc} alt="" />
            {name}
        </div>
    )
}

export default function Contacts() {
    return (
        <section id="contacts">
            <div id="contact-controls">
                <span>Contacts</span>
                <button>
                    <img src="/images/new-room.svg" alt="" />
                </button>
                <button>
                    <img src="/images/search.svg" alt="" />
                </button>
                <button>
                    <img src="/images/options.svg" alt="" />
                </button>
            </div>
            <div id="contact-list">
                <Contact imgSrc="/images/twt.jpg" name="Tech with Tim" />
                <Contact imgSrc="/images/ben.jpg" name="Ben Awad" />
                <Contact imgSrc="/images/mike.jpg" name="Mike Dane" />
                <Contact imgSrc="/images/theo.jpg" name="Theo" />
                <Contact imgSrc="/images/kevin.jpg" name="Kevin Powell" />
                <Contact imgSrc="/images/jessica.jpg" name="Coder Coder" />
                <Contact imgSrc="/images/wds.jpg" name="Web Dev Simplified" />
                <Contact imgSrc="/images/ed.jpg" name="Dev Ed" />

            </div>
        </section>
    )
}