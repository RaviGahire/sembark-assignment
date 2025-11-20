import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router"



export const ProductsDetail = () => {
  const [data, setdata] = useState({});
  const navigate = useNavigate();


  const params = useParams();
  const byDefaultValue = 5
  const productid = params.id || byDefaultValue


  useEffect(() => {
    try {
      fetch(`https://fakestoreapi.com/products/${productid}`)
        .then(response => response.json())
        .then(data => setdata(data));
    } catch (err) {
      console.log(err)
    }

  }, [productid])


  // Add to cart sending data to localStorage
  const AddToCart = () => {
    const product = JSON.parse(localStorage.getItem("cart")) || []
    product.push(data)

    localStorage.setItem("cart", JSON.stringify(product))
    navigate('/cart')

    alert('Added in cart')

  }

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <h1 className="text-center text-3xl p-5 font-bold">Product Detail</h1>
        <div className=" flex items-center justify-center px-4">
          <div className="max-w-4xl w-full bg-white shadow-xl rounded-2xl p-6 md:p-10 grid md:grid-cols-2 gap-10">
            <div className="flex items-center justify-center bg-gray-50 rounded-xl p-6">
              <img
                src={data.image}
                alt="product"
                className="w-full h-80 object-contain"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-[#312D81]">
                  {data.title}
                </h1>
                <p className="text-xl font-medium text-gray-600 mt-4">{data.category}</p>
                <p className="text-md font-medium text-gray-600 mt-4">{data.description}</p>
                <p className="text-xl font-medium text-gray-600 mt-4">₹ {data.price}.00</p>
                <p className="text-xl font-medium text-gray-600 my-4">★★★★★ ({data?.rating?.rate})</p>
                <p className="text-xl font-medium text-gray-600">Last Week Soldout {data?.rating?.count} Products</p>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <button onClick={() => AddToCart()} className="w-full bg-[#312D81] hover:bg-[#312d81e5] transition cursor-pointer text-white py-3 rounded-lg text-md md:text-lg font-bold">
                  Add to Cart
                </button>
                <button className="w-full bg-[#312D81] hover:bg-[#312d81e5] transition cursor-pointer text-white py-3 rounded-lg text-md md:text-lg font-bold">
                  <Link to={'/'}>Continue Shopping</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

