function Footer() {
    const fullYear = new Date().getFullYear();
    
    return (
        <div>
            <p>Copyright EFA {fullYear}</p>
        </div>
    )
}

export default Footer;