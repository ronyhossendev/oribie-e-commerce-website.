import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useCartStore from "/src/store/useCartStore";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Zustand
  const addToCart = useCartStore(
    (state) => state.addToCart
  );

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await axios.get(
          `https://dummyjson.com/products/${id}`
        );

        setProduct(res.data);
        setLoading(false);

      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  // Add To Cart
  const handleAdd = () => {
    addToCart(product);
    navigate("/cart");
  };

  // Loading
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">
          Loading...
        </h2>
      </div>
    );

  // Product না পেলে
  if (!product)
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">
          Product not found
        </h2>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 bg-white shadow-lg rounded-2xl p-5 md:p-10">

        {/* Image */}
        <div className="flex justify-center items-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col justify-center">

          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3">
            {product.title}
          </h1>

          <p className="text-gray-500 mb-4 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-green-600 mb-6">
            ${product.price}
          </h2>

          {/* Add To Cart */}
          <button
            onClick={handleAdd}
            className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-xl text-base md:text-lg transition"
          >
            Add to Cart
          </button>

          {/* Go To Cart */}
          <button
            onClick={() => navigate("/cart")}
            className="w-full sm:w-auto mt-4 bg-gray-800 hover:bg-black text-white py-3 px-6 rounded-xl text-base md:text-lg transition"
          >
            Go to Cart
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;