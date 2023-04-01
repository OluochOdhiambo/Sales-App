import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Product from "./Product";
import { products } from "../data";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Products({ category, filters, sort }) {
  //   const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //   useEffect(() => {
  //     const getProducts = async () => {
  //       try {
  //         const res = await axios.get(
  //           category ? `/api/products?category=${category}` : "/api/products"
  //         );
  //         setProducts(res.data);
  //       } catch (err) {}
  //     };
  //     getProducts();
  //   }, [category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => item[key] === value)
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {category
        ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
        : products
            .sort(() => 0.5 - Math.random())
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)}
    </Container>
  );
}

export default Products;
