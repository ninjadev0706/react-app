
import LandingSection from "../../Sections/LandingSection";
import "./style.css";

const LandingPage = (props) =>{
    return(
        <div className="landingPage-container">
            <LandingSection color="white" background="black" group="Artists" videoSource="/videos/1.mp4"/>
            <LandingSection color="black" background="#E3D7CD" group="Creators" videoSource="/videos/2.mp4"/>
            <LandingSection color="black" background="#00FFFF" group="DJs" videoSource="/videos/3.mp4"/>
            <LandingSection color="black" background="#FFFFFF" group="Musicians" videoSource="/videos/4.mp4"/>
            <LandingSection color="black" background="#9DFF00" group="Dancers" videoSource="/videos/5.mp4"/>

        </div>
    )
};

export default LandingPage;