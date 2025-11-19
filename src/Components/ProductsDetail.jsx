export const ProductsDetail = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
        <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6">
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
            alt="product"
            className="w-full h-80 object-contain"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#312D81]">
              Fjallraven
            </h1>
            <p className="text-xl font-medium text-gray-600 mt-4">men's clothing</p>
            <p className="text-md font-medium text-gray-600 mt-4">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
            <p className="text-xl font-medium text-gray-600 mt-4">$1.2k</p>
          </div>
          <div className="mt-8 flex flex-col gap-3">
            <button className="w-full bg-[#312D81] hover:bg-[#312d81e5] transition cursor-pointer text-white py-3 rounded-lg text-md md:text-lg font-bold">
              Add to Cart
            </button>
            <button className="w-full bg-[#312D81] hover:bg-[#312d81e5] transition cursor-pointer text-white py-3 rounded-lg text-md md:text-lg font-bold">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
