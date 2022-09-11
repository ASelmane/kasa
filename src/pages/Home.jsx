import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import BannerImg from "../assets/eric-muhr-P_XxsdVgtpQ-unsplash.jpg";

const Home = () => {
    return (
        <div className="container">
            <Banner img={BannerImg}>Chez vous, partout et ailleurs</Banner>
            <Gallery/>
        </div>
    );
}

export default Home;
