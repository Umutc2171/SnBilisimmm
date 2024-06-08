import { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import Slider from "react-slick";
import Proptypes from "prop-types"
import "./Produtc.css";
import { message } from "antd";

function NextBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--right" onClick={onClick}>
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: Proptypes.func,
};

function PrevBtn({ onClick }) {
  return (
    <button className="glide__arrow glide__arrow--left" onClick={onClick}>
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

PrevBtn.propTypes = {
  onClick: Proptypes.func,
};

function Produtc() {
  const [products , SetProducts] = useState([]);

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);

        if (response.ok) {
          const data = await response.json();
          SetProducts(data);
        } else {
          message.error("Veri getirme başarısız.");
        }
      } catch (error) {
        console.log("Veri hatası:", error);
      }
    };
    fetchProducts();
  }, [apiUrl]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    autoplaySpeed: 3000,
    autoplay: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="product">
      <div className="container">
        <div className="section-title">
          <h2>Bazı Ürünlerimiz</h2>
        </div>
        <div className="product-wrapper product-carousel">
          <div className="">
            <Slider {...sliderSettings}>
              {products.map((product) => (
                <ProductItem
                productItem={product}
                key={product._id}
              />
              ))}
            </Slider>
          </div>
          <div className="glide__arrows"></div>
        </div>
      </div>
    </section>
  );
}

export default Produtc;
