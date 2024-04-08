"use client";
import React from 'react'; // Since useEffect isn't used, you can omit it from the import
import useCart from '../shop/useCart';

export default function CheckoutSuccessPage() {
  // Assuming useCart might be used for displaying order summary or cleaning up the cart

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-green-600 mb-2">Checkout Successful!</h1>
        <p className="text-gray-700 mb-4">Your order has been placed successfully. Thank you for shopping with us.</p>
        <div className="flex justify-center">
          <a href="/" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors">Continue Shopping</a>
        </div>
      </div>
    </div>
  );
}
