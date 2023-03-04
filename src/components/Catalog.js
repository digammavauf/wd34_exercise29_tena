import Cards from "./Cards";
import Win11 from '../images/Windows-11.jpg';
import Win10 from '../images/Windows-10.webp';
import Win81 from '../images/Windows-8.1.jpg';
import Win8 from '../images/Windows-8.webp';
import Win7 from '../images/Windows-7.jpeg';
import WinVista from '../images/Windows-Vista.jpg';
import WinXP from '../images/Windows-XP.jpg';

const Catalog = () => {
    return (
        <div className="bg-warning py-4">
            <a name="products"></a>
            <div class="container">
                <h1 className="text-center">Products</h1>
                <div className="row g-4">
                    <Cards name="Windows 11" description="Windows operating system made by Microsoft and licensed thru various channels like retail and subscription." image={Win11} price="3880"/>
                    <Cards name="Windows 10" description="Windows operating system made by Microsoft and licensed thru various channels like retail and subscription." image={Win10} price="3880"/>
                    <Cards name="Windows 8.1" description="Windows operating system made by Microsoft and licensed thru various channels like retail and subscription." image={Win81} price="2880"/>
                    <Cards name="Windows 8" description="Windows operating system made by Microsoft and licensed thru various channels like retail and subscription." image={Win8} price="2880"/>
                    <Cards name="Windows 7" description="Windows operating system made by Microsoft and licensed thru various channels like retail and subscription." image={Win7} price="1880"/>
                    <Cards name="Windows Vista" description="Windows operating system made by Microsoft and licensed thru various channels like retail and subscription." image={WinVista} price="1880"/>
                    <Cards name="Windows XP" description="Windows operating system made by Microsoft and licensed thru various channels like retail and subscription." image={WinXP} price="1880"/>
                </div>
            </div>
        </div>
    );
}
 
export default Catalog;