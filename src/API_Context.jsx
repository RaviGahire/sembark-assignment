import { Children, createContext, useEffect, useState } from "react"
import { HomePage } from "./Components/HomePage"


// Context
const Api_data = createContext([])

export const API_Context = () => {
    const [apiData, setapiData] = useState([])

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
        product_data()
    }, [])
    return (
        <>

            <Api_data.Provider value={apiData}>
                <HomePage />
            </Api_data.Provider>

        </>

    )
}

export { Api_data }