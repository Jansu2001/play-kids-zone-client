
import Banner from "./banner/Banner";
import Gallery from "./gallery/Gallery";
import TabComponent from "../tab/TabComponent";
import PopularProducts from "./popularproducts/PopularProducts";

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <Gallery></Gallery>
            <TabComponent></TabComponent>

        </div>
    );
};

export default Home;