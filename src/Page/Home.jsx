import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import EducationAndExperience from "../components/EducationAndExperience";
import MyProject from "../components/MyProject";
import MyService from "../components/MyService";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";


const Home = () => {
    return (
        <div className="bg-[#31065a] ">
            <Navbar></Navbar>
            <div id="home" className="">
                <Banner></Banner>
            </div>
            <div className="bg-[#2c0572] py-5" id="aboutme">
                <AboutMe></AboutMe>
            </div>
            <div id="education" className="py-10">
                <EducationAndExperience></EducationAndExperience>
            </div>
            <div id="skills" className="py-5 bg-[#2c0572] rounded-3xl ">
                <Skills></Skills>
            </div>
            <div id="MyService" className="py-10">
                <MyService></MyService>
            </div>
            <div id="projects" className="py-10">
                <MyProject></MyProject>
            </div>
            <div id="contact" className="py-5 bg-[#2c0572] rounded-3xl ">
                <Contact></Contact>
            </div>
            

        </div>
    );
};

export default Home;