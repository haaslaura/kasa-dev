import logo from '../../assets/logo-footer.svg'

function Footer() {

    const date = new Date();
    const currentYear = date.getFullYear()

    return (
        <footer>
            <img className="footer__logo" src={logo} alt="" />
            <p>©{currentYear} Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;