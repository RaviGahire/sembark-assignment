import { Cart } from "./Components/Cart"
import { HomePage } from "./Components/HomePage"
import { Navbar } from "./Components/Navbar"
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router"
import { ProductsDetail } from "./Components/ProductsDetail"
import { API_Context } from "./API_Context"
import { AboutUs } from "./Components/AboutUs"


function App() {


  //Routes object
  const routes = [
    { path: '/', element: <API_Context><HomePage /></API_Context> },
     { path: '/productdetails', element: <ProductsDetail  /> },
    { path: '/productdetails/:id', element: <ProductsDetail /> },
    { path: '/aboutus', element: <AboutUs /> },
    { path: '/cart', element: <Cart /> }
  ]


  return (
    <>
      {/* Routes */}
      <Router>
        <Navbar />
        <Routes>{
          routes.map((elem) => (<Route path={elem.path} element={elem.element} />))
        }
        </Routes>
      </Router>
    </>
  )
}

export default App
