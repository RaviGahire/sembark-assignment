import { IconTrash } from '@tabler/icons-react'
import React from 'react'

export const Cart = () => {
  return (
    <section aria-label='cart-page'>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          {/* Cart Item */}
          <div className="bg-white rounded-2xl shadow p-5 flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png"
                alt="Product"
                className="w-20 h-20 rounded-xl object-fit"
              />
              <div>
                <h2 className="text-xl font-semibold">Wireless Mouse</h2>
                <p className="text-gray-500">₹499</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-3 py-1 bg-gray-200 rounded-lg cursor-pointer">-</button>
              <span className="font-semibold">2</span>
              <button className="px-3 py-1 bg-gray-200 rounded-lg cursor-pointer">+</button>
            </div>

            <button className="text-red-500 font-medium cursor-pointer"><IconTrash stroke={2} /></button>
          </div>

          {/* Second Item */}
          <div className="bg-white rounded-2xl shadow p-5 flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <img
                src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png"
                alt="Product"
                className="w-20 h-20 rounded-xl object-fit"
              />
              <div>
                <h2 className="text-xl font-semibold">Keyboard</h2>
                <p className="text-gray-500">₹899</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="px-3 py-1 bg-gray-200 rounded-lg cursor-pointer">-</button>
              <span className="font-semibold">2</span>
              <button className="px-3 py-1 bg-gray-200 rounded-lg cursor-pointer">+</button>
            </div>

            <button className="text-red-500 font-medium cursor-pointer"><IconTrash stroke={2} /></button>
          </div>

          {/* Total Section */}
          <div className="bg-white rounded-2xl shadow p-6 mt-6 flex justify-between items-center">
            <h2 className="text-xl font-bold">Total</h2>
            <p className="text-2xl font-bold">₹2297</p>
          </div>

          {/* Checkout Button */}
          <button className="w-full cursor-pointer mt-6 bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
            Place Order
          </button>
        </div>
      </div>

    </section>
  )
}
