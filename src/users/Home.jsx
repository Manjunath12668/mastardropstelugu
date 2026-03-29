import { useState, useMemo } from "react";
import Navbar from "./components/Navbar/CustomerNavbar";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import "./Home.css";

// Products images
// import Product1 from "./assets/productsimg/Facebook.jpg";


export default function Home() {
  const [search, setSearch] = useState("");

  const products = useMemo(() => [
    
    {
      serial_id: 1,
      product_name: "Backflow Smoke Fountain Shivaling",
      product_image: "https://m.media-amazon.com/images/I/61xd8Xq-clL._SL1500_.jpg",
      product_link: "https://amzn.to/4lROa9C"
    }
    
  ], []);

  // 🔥 LIVE SEARCH FILTER
  const filteredProducts = useMemo(() => {
    const text = search.trim().toLowerCase();
    if (!text) return products;

    return products.filter((p) =>
      p.product_name.toLowerCase().includes(text) ||
      String(p.serial_id).includes(text)    );
  }, [search, products]);

  return (
    <div>
      <Navbar onSearch={setSearch}  />

      <div id="top">
        <h2>Latest Drops <p>↴</p></h2>
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => (
            <ProductCard key={p.serial_id} product={p} />
          ))
        ) : (
          <h2 className="no-results">No products found 😢</h2>
        )}
      </div>

      <Footer />
    </div>
  );
}
