import { IconTrash } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'

export const Cart = () => {
  const [cart, setCart] = useState([])


  // fetching item from the localStorage
  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(product);
  }, [])



// Deleting item from the localStorage
  const deleteItem = (index) => {
    let item = [...cart]
    item.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(item));
    setCart(item)

  }

  return (
    <section aria-label='cart-page'>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          {cart.length === 0 && <h2>Cart is empty</h2>}
          {/* Cart Item */}
          {cart.map((item) => {

            return (
              <div key={item.id} className="bg-white rounded-2xl shadow p-5 flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 rounded-xl object-fit"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                </div>

                <button onClick={deleteItem} className="text-red-500 font-medium cursor-pointer"><IconTrash stroke={2} /></button>
              </div>)
          })

          }



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
