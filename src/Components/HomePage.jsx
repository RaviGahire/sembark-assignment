
export const HomePage = () => {
  const sampleProducts = [
    {
      id: 1,
      name: "Minimal Leather Wallet",
      price: 899,
      currency: "INR",
      thumbnail: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a"
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      price: 2499,
      currency: "INR",
      thumbnail: "https://images.unsplash.com/photo-1518444022190-9d3b3c9e8f8c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2a"
    },
    {
      id: 3,
      name: "Ceramic Coffee Mug",
      price: 499,
      currency: "INR",
      thumbnail: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3b"
    },
    {
      id: 4,
      name: "Notebook — Hardbound",
      price: 299,
      currency: "INR",
      thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=4c"
    },
    {
      id: 5,
      name: "Desk Plant (Small)",
      price: 199,
      currency: "INR",
      thumbnail: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5d"
    },
    {
      id: 6,
      name: "Classic Sunglasses",
      price: 1199,
      currency: "INR",
      thumbnail: "https://images.unsplash.com/photo-1503342217505-b0a15a0c1ae9?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=6e"
    }
  ];



  return (
    <>
      <section aria-label="Home page" className="max-w-7xl mx-auto mt-4">
        {/* Filter Products */}
        <div className="rounded border border-blue-400  flex justify-between items-center p-2 ">
          <p>Products</p>
          <select className="w-50 border cursor-pointer bg-blue-400 text-white px-3 py-2 outline-amber-100 rounded">
            <option hidden className="text-white" value="x">Select product</option>
            <option className="text-white rounded" value="x">All products</option>
            <option className="text-white rounded" value="x">x</option>
            <option className="text-white rounded" value="x">x</option>
          </select>
        </div>
        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center bg-gray-400  mt-4 ">

          {/* Product Card */}
          <div className=" shadow-xl w-100 bg-yellow-400 p-4  ">
            <div className="text-xl font-semibold ">Product Name</div>
            <div className=""><img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" /></div>
            <div className="">
              <p>10000k</p>

              <div>
                <button>Add to Cart</button>
                <button>See More</button>

              </div>
            </div>


          </div>


        </div>
      </section>
    </>
  )
}
