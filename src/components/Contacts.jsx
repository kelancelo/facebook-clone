function Contact({ imgSrc, name }) {
    return (
        <div className="contact">
            <img src={imgSrc} alt="" />
            {name}
        </div>
    )
}

export default function Contacts() {
    let contacts = [
        { imgSrc: '/images/twt.jpg', name: 'Tech with Tim' },
        { imgSrc: '/images/ben.jpg', name: 'Ben Awad' },
        { imgSrc: '/images/mike.jpg', name: 'Mike Dane' },
        { imgSrc: '/images/theo.jpg', name: 'Theo' },
        { imgSrc: '/images/kevin.jpg', name: 'Kevin Powell' },
        { imgSrc: '/images/jessica.jpg', name: 'Coder Coder' },
        { imgSrc: '/images/wds.jpg', name: 'Web Dev Simplified' },
        { imgSrc: '/images/ed.jpg', name: 'Dev Ed' }
    ]

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
                {contacts.map(contact => <Contact key={contact.imgSrc} imgSrc={contact.imgSrc} name={contact.name} />)}
            </div>
        </section>
    )
}