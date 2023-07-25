import axios from "axios";
import { pause } from "@/utils/pause";

export const fetchProducts = () => async (dispatch:any) =>{
    dispatch({type: "product/fetching"})
    try {
        await pause(1000)
        const {data} = await axios.get(`http://localhost:3000/products`)
        dispatch({type:"product/fetchingS",payload:data})
    } catch (error:any) {
        dispatch({type:"product/fetchingF",payload:error.message})
    } finally {
        dispatch({type:"product/fetchingFn"})
    }
}
export const addProduct = (product:any) => async (dispatch:any) =>{
    const {data} = await axios.post(`http://localhost:3000/products`,product)
    dispatch({type:"product/add",payload:data})
}
export const editProduct = (product:any) => async (dispatch:any) =>{
    const {data} = await axios.put(`http://localhost:3000/products/${product.id}`,product)
    dispatch({type:"product/edit",payload:data})
}
export const removeProduct = (product:any) => async (dispatch:any) =>{
    await axios.delete(`http://localhost:3000/products/${product.id}`)
    dispatch({type:"product/remove",payload:product})
}