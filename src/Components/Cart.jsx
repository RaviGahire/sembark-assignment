import { IconBasketOff, IconShoppingCartCheck, IconTrash } from '@tabler/icons-react'
import React, { useEffect, useState } from 'react'

export const Cart = () => {
  const [cart, setCart] = useState([])


  // fetching item from the localStorage
  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(product);
  }, [])

  const cartItems = cart.length;
  const total = cart.reduce((acc,elem)=>elem.price + acc,0)


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
          <div className="flex justify-between my-8">
            <div className='text-3xl font-bold flex items-center gap-4'> 
              <IconShoppingCartCheck size={28} /><h2>Shopping Cart </h2>
              </div>{cart.length === 0 && 
              <div className='text-xl font-semibold text-gray-500 flex items-center justify-center gap-2 '>
                Cart is empty 
                <IconBasketOff stroke={2} /></div> || <div className='text-xl font-semibold text-gray-500'>{cartItems} Total Items</div>}</div>
          

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
            <h2 className="text-xl font-bold">Total Bill</h2>
            <p className="text-2xl font-bold">₹{Math.round(total)}</p>
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
