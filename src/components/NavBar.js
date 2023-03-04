import NavItem from "./NavItem";

const NavBar = () => {
    return (
        <div className="navbar navbar-expand-lg navbar-ligth bg-info">
            <nav className="mx-auto">
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