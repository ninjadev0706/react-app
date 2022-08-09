import React, { useState, useEffect, useRef, useCallback } from "react";
import LandingSection from "../../Sections/LandingSection";
import VideoControl from "../../assets/Icons/videocontrol.js";
import "./style.css";

const LandingPage = (props) => {
    const [logoColor, setLogoColor] = useState("white");
    const [state, setState] = useState(0);
    const ref = useRef();

    // The scroll listener
    const handleScroll = useCallback(() => {
        const top = document.querySelector('.logo-scroll1').clientHeight;
        const scrollTop = ref.current.scrollTop;
        if (scrollTop > top) {
            setLogoColor('black')
        } else {
            setLogoColor('white')
        }
    }, [])

    useEffect(() => {
        const div = ref.current
        div.addEventListener("scroll", handleScroll)
    }, [handleScroll])

    return (
        <div className="landingPage-container" ref={ref}>
            <div className="logo-svg">
                <VideoControl color={logoColor} />
            </div>
            <LandingSection sectionNum="1" color="white" background="black" group="Artists" videoSource="/videos/1.mp4" />
            <LandingSection sectionNum="2" color="black" state={state} setState={setState} background="#E3D7CD" group="Creators" videoSource="/videos/2.mp4" />
            <LandingSection sectionNum="3" color="black" background="#00FFFF" group="DJs" videoSource="/videos/3.mp4" />
            <LandingSection sectionNum="4" color="black" background="#FFFFFF" group="Musicians" videoSource="/videos/4.mp4" />
            <LandingSection sectionNum="5" color="black" background="#9DFF00" group="Dancers" videoSource="/videos/5.mp4" />
            <LandingSection sectionNum="6" color="black" background="#D3B8FD" group="Podcasters" videoSource="/videos/6.mp4" />
        </div>
    )
};

export default LandingPage;