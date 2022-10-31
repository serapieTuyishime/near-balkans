import Navigation from "../General/Navigation";
import Footer from "../General/Footer";

export default function Layout({children}) {
    return (
        <div>
            <Navigation/>
            {children}
            <Footer/>
        </div>
    )
}