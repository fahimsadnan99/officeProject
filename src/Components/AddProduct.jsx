import React, { useState } from 'react'
import {assignProduct} from "../Redux/productReducer"
import { useDispatch } from 'react-redux'

const AddProduct = () => {
    const dispatch = useDispatch()
    const [createProduct,setCreateProduct] = useState({
        name : "",
        price : 0,
        img : ""
    })
    const handleInput = (e)=>{
        setCreateProduct({
            ...createProduct,
            [e.target.name] : e.target.value
            })
          
    }

    const addProductHandler = ()=>{
        if(!createProduct.name && !createProduct.img){
           window.alert("Please Fill Out All Fields")
        }else {
            dispatch(assignProduct(createProduct))
            setCreateProduct({
                name : "",
                price : "",
                img : ""
            })
        }
        
    }
    
  return (
    <div>

<div>
          <p className='text-center text-lg font-semibold py-4'>Add Product</p>
          <div className='space-x-2 flex justify-center'>
          <input className='ring-1' type='text' onChange={handleInput} name="name" value={createProduct.name} />
          <input className='ring-1'  type='text' onChange={handleInput} name="price" value={createProduct.price} />
          <input type='file' onChange={handleInput} name="img" value={createProduct.img} />
          <button onClick={addProductHandler} className='p-2 rounded-sm bg-green-900 text-white'>Add Product</button>
          </div>
        </div>
    </div>
  )
}

export default AddProduct