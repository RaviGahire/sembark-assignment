import { Link } from "react-router";
import { useContext } from "react";
import { Api_data } from "../API_Context";



export const HomePage = () => {

const data = useContext(Api_data)
// console.log('Data from Homepage',data)

  return (
    <>
      {/* text-[#312D81] #17152B */}
      <section aria-label="Home-page" className="max-w-7xl mx-auto mt-4 ">
        {/* Filter Products */}
        <div className="rounded border border-[#17152b42]  flex justify-between items-center p-2 ">
          <p className="text-[#17152B] font-bold text-2xl">Products</p>
          <select className="w-50 border cursor-pointer bg-blue-400 text-white px-3 py-2 outline-amber-100 rounded ">
            <option hidden className="text-white" value="x">Select product</option>
            <option className="text-white rounded" value="x">All products</option>
            <option className="text-white rounded" value="x">x</option>
            <option className="text-white rounded" value="x">x</option>
          </select>
        </div>
        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center  h-screen  mt-4 ">
          {
            data.map((item, index) => (
              <>
                {/* Product Card */}
                <div key={index} className="flex flex-col items-center shadow-xl w-80  border border-gray-300  p-5 rounded-2xl cursor-pointer">
                  <h2 className="text-sm text-gray-700 font-semibold tracking-tight">{item.title.trim('')}</h2>

                  <div className="w-full p-5 my-4 rounded-xl border border-gray-200">
                    <img
                      className="w-full h-48 object-contain"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <p className="text-lg font-medium"> Price ${item.price}</p>
                    <div className="mt-3 flex gap-3">
                      <button className="px-3 py-2 bg-[#312D81] hover:bg-[#312d81e5] transition shadow-2xl text-white rounded-lg cursor-pointer">
                        <Link to='/cart'>Add to Cart</Link>
                      </button>
                      <button className="px-3 py-2 bg-[#312D81] hover:bg-[#312d81e5] transition shadow-2xl text-white rounded-lg cursor-pointer">
                        <Link to='/products'>See More</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))
          }
        </div>
      </section>
    </>
  )
}
