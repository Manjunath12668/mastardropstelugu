import { useEffect, useRef } from "react";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    let fontSize = 22;        // start big
    const minFontSize = 8;   // 🔥 allow smaller for mobile

    el.style.fontSize = fontSize + "px";

    // 🔥 reduce font until it fits
    while (el.scrollWidth > el.clientWidth && fontSize > minFontSize) {
      fontSize -= 1;
      el.style.fontSize = fontSize + "px";
    }

  }, [product.product_name]);

  return (
    <div className="product-card">
      <div className="image-wrapper">
        <span className="serial-badge">#{product.serial_id}</span>

        <a href={product.product_link} target="_blank" rel="noreferrer">
          <img
            src={product.product_image}
            alt={product.product_name}
            className="product-image"
          />
        </a>

        <div className="product-title-banner">
          <a href={product.product_link} target="_blank" rel="noreferrer">
            <span ref={textRef} className="auto-text">
              {product.product_name}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
