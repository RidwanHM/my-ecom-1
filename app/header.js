"use client"

import React from "react";
import Link from "next/link";
import useCart from "./shop/useCart";
import Modal from "./modal";

export default function Header() {
  const cartItems = useCart((state) => state.cart);
  const openModal = useCart((state) => state.openModal);
  const setOpenModal = useCart((state) => state.setOpenModal); // Get the setOpenModal function

  const toggleModal = () => {
    setOpenModal(); // Toggle the modal's visibility
  };

  return (
    <header className="sticky top-0 p-6 bg-white border-b border-solid border-blue-900 shadow-md z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex items-center justify-between">
      {openModal && (
        <Modal />
      )}
      <Link href="/">
        <h1 className="uppercase cursor-pointer">R&B Store</h1>
      </Link>
      <Link href="/contact">
        <h1 className="uppercase cursor-pointer">Contact</h1>
      </Link>
      <div onClick={toggleModal} className="relative grid cursor-pointer group place-items-center"> {/* Added onClick event */}
        {cartItems.length > 0 && (
          <div className="absolute top-0 right-0 bg-blue-400 aspect-square h-5 sm:h-6 pointer-events-none grid place-items-center -translate-y-1/2 translate-x-1/2 text-black rounded-full">
            <p className="text-xs sm:text-sm">{cartItems.length}</p>
          </div>
        )}
        <i className="fa-solid fa-cart-shopping cursor-pointer group-hover:text-slate-500"></i>
      </div>
    </header>
  );
}
