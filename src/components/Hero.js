import WinOS from '../images/Windows-OS.png';

const Hero = () => {
    return (
        <div className="bg-white py-4">
            <a name="home"><img className="w-100" src={WinOS} alt="Windows OS"/></a>
            <h1 className="text-center fw-bold">JBrothers Keys Online</h1>
        </div>
    );
}
 
export default Hero;