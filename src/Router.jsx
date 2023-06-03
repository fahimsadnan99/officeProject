import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home"
import ProductDetails from "./Components/ProductDetails";


export const Router = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/:id",
                element : <ProductDetails></ProductDetails>
            },
            {
                path : "*",
                element : <Home></Home>
            }
        ]
    }
])