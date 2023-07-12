import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <img
          className="home-image"
          src="https://i.tribune.com.pk/media/images/amazon1657020459-0/amazon1657020459-0.jpg"
          alt="."
        />
        <div className="home-row">
          <Product
            id="1"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses PaperBack"
            price= {200}
            image="https://media.s-bol.com/qoP4QEYvBzm2/7BWVzy/546x840.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Liter Glass Bowl"
            price={486}
            image="https://m.media-amazon.com/images/I/61izeFj9ZzL._SL1280_.jpg"
            rating={3}
          />
        </div>
        <div className="home-row">
          <Product
            id="3"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={5000}
            image="https://m.media-amazon.com/images/I/81W-UrD25JL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Amazon Echo (3rd generation) | Smart speacker with alexa, Charcoal Fabric"
            price={4999}
            image="https://m.media-amazon.com/images/I/81IV-ynvpBL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="New Apple Ipad Pro (12.9-inch, Wifi, 128GB) - Silver (4th Generation)"
            price={123990}
            image="https://m.media-amazon.com/images/I/81hAx31maUL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home-row">
          <Product
            id="6"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor- Super ultra wide dual WQHD 5120 X 1440"
            price={46499}
            image="https://m.media-amazon.com/images/I/71Ic1ZhHXaS._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
