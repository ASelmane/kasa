
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import BannerImg from "../eric-muhr-P_XxsdVgtpQ-unsplash.jpg";

const Home = () => {
    return (
        <div className="container">
            <Banner img={BannerImg}/>
            <Gallery/>
        </div>
    );
}

export default Home;