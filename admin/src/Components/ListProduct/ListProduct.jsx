// src/components/ListProduct/ListProduct.jsx
import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import removeIcon from "../../assets/remove.png"; // replace with your remove icon path

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch all products
  const fetchProducts = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("http://localhost:4000/api/allproducts");
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setAllProducts(data);
    } catch (err) {
      console.error(err);
      setError("Error fetching products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Remove product
  const removeProduct = async (id) => {
    if (!window.confirm("Are you sure you want to remove this product?"))
      return;
    try {
      const res = await fetch("http://localhost:4000/api/removeproduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Failed to remove product");
      fetchProducts(); // refresh product list
    } catch (err) {
      console.error(err);
      setError("Error removing product");
    }
  };

  return (
    <div className="list-product">
      <h1>All Products List</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div className="listproduct-formate-main">
        <p>Product</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>

      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => (
          <React.Fragment key={product.id}>
            <div className="listproduct-format-main listproduct-formate">
              <img
                src={product.image}
                alt={product.name}
                className="listproduct-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => removeProduct(product.id)}
                className="listproduct-remove-icon"
                src={removeIcon}
                alt="Remove"
                style={{ cursor: "pointer" }}
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
