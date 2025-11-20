import { createContext, useEffect, useState } from "react"
import { HomePage } from "./Components/HomePage"



// Context
const Api_data = createContext([])


export const API_Context = () => {
    const [apiData, setapiData] = useState([])

    //Product data function
    const product_data = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setapiData(data)
            // console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        //called product data function
        product_data()
    }, [])
    return (
        <>

            <Api_data.Provider value={apiData}>
                {/* passed data to hompe page */}
                <HomePage />
            
            </Api_data.Provider>

        </>

    )
}

export { Api_data }