import NavItem from "./NavItem";
import * as Icon from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <div className="navbar navbar-light bg-warning">
            <Icon.Windows size="48" className="ms-2 me-2" />
            <div className="me-auto px-4 w-auto">
                <p>Copyright &copy; 2023. J.Brothers Store. All rights reserved.</p>
                <Icon.Facebook size="32" className="me-2 mb-2" />
                <Icon.Twitter size="32" className="me-2 mb-2" />
                <Icon.Youtube size="32" className="me-2 mb-2" />
                <Icon.Linkedin size="32" className="me-2 mb-2" />
                <Icon.Instagram size="32" className="me-2 mb-2" />
            </div>
            <nav className="me-auto ps-2">
                <ul className="navbar-nav d-block ps-2">
                    <NavItem label="Home" title="Home" url="#home"/>
                    <NavItem label="Products" title="Products" url="#products"/>
                    <NavItem label="Contact" title="Contact us" url="#contact"/>
                </ul>
            </nav>
        </div>
    );
}
 
export default Footer;