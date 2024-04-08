import React from "react";
import { useRouter } from "next/navigation";
import useCart from "./shop/useCart";

export default function ProductCard({ product }) {
  const { title, description, price, imageUrl, id } = product;
  const addToCart = useCart((state) => state.addToCart);

  const router = useRouter();
  const setProduct = useCart(state => state.setProduct);

  function clickProduct() {
    const newProduct = {
      title,
      description,
      price,
      id,
      imageUrl
    };
    console.log("Setting product for detailed view:", newProduct); // Log when setting the product for detailed view
    setProduct({newProduct});
    router.push('/product?id=' + id); // Fixed URL
  }

  function handleAddToCart() {
    const newItem = {
      quantity: 1,
      id: id,
      title: title,
      price: price,
      imageUrl: imageUrl
    };
    console.log("Adding item to cart:", newItem); // Log when adding item to cart
    addToCart({newItem});
  }


  return (
    <div>
      <div onClick={clickProduct} className="flex flex-col shadow bg-white hover:shadow-lg cursor-pointer transition-shadow duration-200 ease-in-out">
        <img
          src={imageUrl}
          alt={title}
          className="w-full max-h-40 object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title}</h2> {/* Enhance title legibility */}
          <p className="font-medium">Price: <span className="font-bold">${price}</span></p> {/* Emphasize price */}
        </div>
        <p className="text-gray-600">{description}</p> {/* Subtle text color for description */}
        <button onClick={handleAddToCart} className="mt-2 bg-blue-600 text-white hover:bg-blue-700 cursor-pointer ml-auto px-4 py-2 transition-colors duration-200 ease-in-out rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}