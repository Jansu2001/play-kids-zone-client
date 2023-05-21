import { useEffect, useState } from "react";
import BannerCard from "./BannerCard";

const Banner = () => {
    const [cateCards,setCateCards]=useState([])
  useEffect(() => {
    fetch("toys.json")
      .then((res) => res.json())
      .then((data) => setCateCards(data));
  }, []);

  // console.log(cateCards);

  return (
    <div className=" ">
      <div className=" carousel carousel-center rounded-box">
        <div className="carousel-item ">
          <img className=" "
            src="https://images.unsplash.com/photo-1608889622453-cc5752d291d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item ">
          <img className=" "
            src="https://images.unsplash.com/photo-1608889476518-738c9b1dcb40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item ">
          <img className=" "
            src="https://images.unsplash.com/photo-1560343776-97e7d202ff0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item ">
          <img className=" "
            src="https://images.unsplash.com/photo-1598283867458-c4d33540b805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=429&q=80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item ">
          <img className=" "
            src="https://images.unsplash.com/photo-1561149877-84d268ba65b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item ">
          <img className=" "
            src="https://images.unsplash.com/photo-1558680689-ce686c5e2fb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item ">
          <img className=" "
            src="https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
            alt="Burger"
          />
        </div>
      </div>
        <h1 className="p-5 mt-5 text-3xl lg:text-4xl lg:mx-auto rounded-lg lg:w-1/3 bg bg-cyan-400 font-bold text-center">Popular Category </h1>
      <div className="pt-10 gap-5  grid grid-cols-1 lg:grid-cols-2">
        {
            cateCards.map((card,index)=><BannerCard
            key={index}
            card={card}
            ></BannerCard>)
        }
        
      </div>
    </div>
  );
};

export default Banner;
