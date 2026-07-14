import React, { useEffect, useState } from "react";
import Product from "../common/Product";
import Container from "../common/Container";
import axios from "axios";
import { Link } from "react-router-dom";

const NewArrivals = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    async function alldatas() {
      try {
        let data = await axios.get("https://dummyjson.com/products");
        setAllData(data.data.products);
      } catch (error) {
        console.error(error);
      }
    }
    alldatas();
  }, []);

  return (
    <Container>
      <h2 className="text-3xl font-bold mb-6">New Arrivals</h2>

      <div className="grid grid-cols-4 gap-6">
        {allData.map((item) => (
         <Link to={"/product/" + item.id} >
  <Product
  key={item.id}
    productImg={item.thumbnail}
    productName={item.title}
    productPrice={item.price}
  />
</Link>
        ))}
      </div>
    </Container>
  );
};

export default NewArrivals;