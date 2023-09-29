import { useState } from "react";
import Nav from "../../src/Components/Nav/Nav";
import Products from "../Components/Products/Products";
import products from "../db/data";
import Recomended from "../Components/Recomended/Recomended";
import Sidebar from "../Sidebar/Sidebar";
import Card from "../Components/Card";
import "../index.css";
import { Link } from "react-router-dom";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ id, img, title, star, reviews, prevPrice, newPrice , dis}) => (
        <Link to={`/products/${id}`} className="custom-link">
        <Card
          key={id}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      </Link>
      
      )
    );
  }
  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recomended handleClick={handleClick} />
      <Products result={result} /> {/* Passing 'result' to the Products component */}   
    </>
  );
}

export default HomePage;
