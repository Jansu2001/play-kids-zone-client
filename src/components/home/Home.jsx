
import Banner from "./banner/Banner";
import Gallery from "./gallery/Gallery";
import TabComponent from "../tab/TabComponent";
import PopularProducts from "./popularproducts/PopularProducts";
import { useLoaderData } from "react-router-dom";

const Home = () => {

const tabCategory=useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <PopularProducts></PopularProducts>
            <Gallery></Gallery>
            <TabComponent tabCategory={tabCategory}></TabComponent>

        </div>
    );
};

export default Home;