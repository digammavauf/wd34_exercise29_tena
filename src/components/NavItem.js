const NavItem = (data) => {
    return (
        <li className="nav-item"><a  className="nav-link" href={data.url} title={data.title}>{data.label}</a></li>
    );
}
 
export default NavItem;