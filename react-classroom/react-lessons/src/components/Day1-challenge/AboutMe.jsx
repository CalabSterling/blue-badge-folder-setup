function AboutMe() {
    const style = {
        header: {color: "red"},
        listItems: { listStyleType: "none"}
    }
    
    return (
        <div>
            <h1 style={style.header}>Sterling</h1>
            <p>I grew up in Santa Claus, IN.</p>
            <ul style={style.listItems}>
                <li>Badlands, SD</li>
                <li>Blarney Castle, Ireland</li>
                <li>Lake Tahoe, NV</li>
            </ul>
        </div>
    )
}

export default AboutMe;