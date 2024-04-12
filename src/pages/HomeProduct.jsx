import React from "react";
import "../styles/homeProduct.css";

const HomeProduct = () => {
  // Sample product data
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
        "https://flone.jamstacktemplates.dev/assets/img/product/fashion/7.jpg",
    },
    // Add more products as needed
  ];

  // Handle button click event
  const handleButtonClick = (productId) => {
    alert(`Clicked on product ${productId}`);
    // Implement logic for button click action
  };

  return (
    <div className="hp_main_div">
      <h1>HomeProduct</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
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
