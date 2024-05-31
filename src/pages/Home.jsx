import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";
import SectionCards from "../components/organisms/SectionCards";
import SectionInformation from "../components/organisms/SectionInformation";
import Contact from "../components/organisms/Contact";
import Section from "../components/organisms/Section";
import "./Home.css";
import Hero from "../components/organisms/Hero";

function Home() {
    return (<>
        <div>
            <Header></Header>
            <Hero></Hero>
            <div id="container">
                <SectionInformation></SectionInformation>
                <div>
                    <SectionCards></SectionCards>
                    <div id="content">
                        <Contact></Contact>
                        <Section></Section>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </>)
}

export default Home