import { Link, useParams } from "react-router";
import { useContext, useState } from "react";
import { Api_data } from "../API_Context";
import { Footer } from "./Footer";




export const HomePage = () => {
  const [selectvalue, setSelectValue] = useState('')

  const data = useContext(Api_data)

  // filter by category
  const filteredData = selectvalue ? data.filter((item) => selectvalue === item.category || selectvalue === 'all-products') : data;


  // Share Btn
  const shareProduct = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copied!");
  };


  return (
    <>
      {/* text-[#312D81] #17152B */}
      <section aria-label="Home-page" className="max-w-7xl mx-auto mt-4 px-2 md:px-1 py-5 md:py-10 ">
        {/* Filter Products */}
        <div className="rounded border border-gray-300 flex justify-between items-center p-1 md:p-2 ">
          <p className="text-[#17152B] tracking-tighter font-bold text-xl md:text-2xl">OUR PRODUCTS</p>
          <select className=" md:w-50 border cursor-pointer bg-[#312D81] text-white px-3 py-2 outline-amber-100 rounded" onChange={(e) => setSelectValue(e.target.value)}>
            <option hidden >Select Product</option>
            <option className="text-gray-300 font-semibold cursor-pointer tracking-tight " value="women's clothing">Women's clothing</option>
            <option className="text-gray-300 font-semibold cursor-pointer tracking-tight " value="men's clothing">Men's clothing</option>
            <option className="text-gray-300 font-semibold cursor-pointer tracking-tight " value="all-products">All products</option>
            <option className="text-gray-300 font-semibold cursor-pointer tracking-tight " value="electronics">Electronics</option>
            <option className="text-gray-300 font-semibold cursor-pointer tracking-tight " value="jewelery">Jewelery</option>
          </select>
        </div>
        {/* product grid */}
        <div className="grid grid-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center  h-auto  mt-4 ">
          {
            filteredData.map((item, index) => (
              <>
                {/* Product Card */}
                <div key={index} className="flex flex-col items-center w-full border border-gray-300 p-5 rounded-2xl cursor-pointer shadow-md hover:shadow-xl transition">
                  <h2 className="text-sm text-gray-800 font-semibold tracking-tight">{item.title}</h2>

                  <div className="w-full p-5 my-4 rounded-xl border border-gray-200">
                    <img
                      className="w-full h-48 object-contain"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="flex flex-col items-center w-full">
                    <p className="text-sm text-gray-500 font-medium"> Price ₹{item.price}</p>
                    <div className="mt-3 flex gap-3">
                      <button onClick={shareProduct} className="px-3 py-2 bg-[#312D81] hover:bg-[#312d81e5] transition shadow-2xl text-white rounded-lg cursor-pointer font-semibold tracking-tight">
                        Share Product
                      </button>
                      <button className="px-3 py-2 bg-[#312D81] hover:bg-[#312d81e5] transition shadow-2xl text-white rounded-lg cursor-pointer font-semibold tracking-tight">
                        <Link to={`/productdetails/${item.id}`}>View Details</Link>
                      </button>
                    </div>
                  </div>
                </div>
                
              </>
            ))
          }
        </div>
      </section>

<Footer/>
    </>

  )
}
