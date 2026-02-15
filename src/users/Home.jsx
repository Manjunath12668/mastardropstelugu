import { useState, useMemo } from "react";
import Navbar from "./components/Navbar/CustomerNavbar";
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import "./Home.css";

// Products images
import Product1 from "./assets/productsimg/Facebook.jpg";


export default function Home() {
  const [search, setSearch] = useState("");

  const products = useMemo(() => [
    
    {
      serial_id: 101,
      product_name: "Boat Airdopes 141 Wireless Earbuds",
      product_image: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg",
      product_link: "https://amzn.to/3Example"
    },
    {
      serial_id: 102,
      product_name: "Noise Smart Watch ColorFit",
      product_image: "https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg",
      product_link: "https://amzn.to/3Example2"
    },
    {
      serial_id: 103,
      product_name: "Realme Buds 2 Wired Earphones",
      product_image: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg",
      product_link: "https://amzn.to/3Example"
    },
    {
      serial_id: 104,
      product_name: "Noise Smart Watch ColorFi",
      product_image: "https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg",
      product_link: "https://amzn.to/3Example2"
    },
    {
      serial_id: 105,
      product_name: "Boat Airdopes Wireless Earbuds",
      product_image: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg",
      product_link: "https://amzn.to/3Example"
    },
    {
      serial_id: 106,
      product_name: "Noise Smart Watch Color",
      product_image: "https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg",
      product_link: "https://amzn.to/3Example2"
    },
    {
      serial_id: 107,
      product_name: "Airdopes 141 Wireless Earbuds",
      product_image: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg",
      product_link: "https://amzn.to/3Example"
    },
    {
      serial_id: 108,
      product_name: "Noise Sm Watch ColorFit",
      product_image: "https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg",
      product_link: "https://amzn.to/3Example2"
    },
    {
      serial_id: 109,
      product_name: "Boat dopes 141 Wireless Earbuds",
      product_image: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg",
      product_link: "https://amzn.to/3Example"
    },
    {
      serial_id: 110,
      product_name: "Noise Smart Watch orFit",
      product_image: "https://m.media-amazon.com/images/I/61epn29QG0L._SL1500_.jpg",
      product_link: "https://www.karnatakaone.gov.in/PoliceCollectionOfFine/TrafficFineCollection/dUZnOGxNQzFCbEdIckVoQlNaZVV2UT09"
    },
    {
      serial_id: 111,
      product_name: "Noise Smatch ColorFit",
      product_image: Product1,
      product_link: "https://www.karnatakaone.gov.in/PoliceCollectionOfFine/TrafficFineCollection/dUZnOGxNQzFCbEdIckVoQlNaZVV2UT09"
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
