import React, { useEffect } from "react";
import "../styles/homeProduct.css";
import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";

const HomeProduct = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      imageUrl:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/6.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20",
      imageUrl:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/9.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$30",
      imageUrl:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/1.jpg",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$40",
      imageUrl:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/3.jpg",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$50",
      imageUrl:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/28.jpg",
    },
    {
      id: 6,
      name: "Product 6",
      price: "$60",
      imageUrl:
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg",
    },
  ];

  const handleButtonClick = (productId) => {
    alert(`Clicked on product ${productId}`);
  };

  useEffect(() => {
    window.scrollTo(0, 1);
  }, []);

  return (
    <div className="hp_main_div">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3081/3081986.png"
        alt=".png"
        className="shopping_cart"
        // style={{ height: "60px", width: "60px" }}
      />

      <h1 className="product-title home_prod_title">OUR PRODUCT</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="img_div">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="product-details">
              <h3>{product.name}</h3>
              {/* <Stack spacing={1}> */}
              <Rating
                name="size-small"
                defaultValue={2}
                size="small"
                style={{ overflow: "hidden" }}
              />
              {/* </Stack> */}
              <p>{product.price}</p>
              <button onClick={() => handleButtonClick(product.id)}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeProduct;
