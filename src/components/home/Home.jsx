
import Banner from "./banner/Banner";
import Gallery from "./gallery/Gallery";
import { useEffect, useState } from 'react';
import TabComponent from "../tab/TabComponent";

const Home = () => {


    const [toys, setToys] = useState([])


    useEffect(() => {
        fetch('new.json')
            .then(res => res.json())
            .then(data => setToys(data))


    }, [])

    // console.log(toys);

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <TabComponent></TabComponent>

        </div>
    );
};

export default Home;