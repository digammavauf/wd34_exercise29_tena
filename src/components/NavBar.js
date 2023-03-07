import NavItem from "./NavItem";
import * as Icon from 'react-bootstrap-icons';

const NavBar = () => {
    return (
        <div className="navbar navbar-expand-sm navbar-light bg-light border-5 border-bottom border-warning">
            <Icon.Windows size="48" className="ms-2 me-2" />
            <h1>J.Brothers Store</h1>
            <nav className="ms-lg-auto ps-lg-0 ms-auto pe-4">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <NavItem label="Home" title="Home" url="#home"/>
                    <NavItem label="Products" title="Products" url="#products"/>
                    <NavItem label="Contact" title="Contact us" url="#contact"/>
                </ul>
            </nav>
        </div>
    );
}
 
export default NavBar;