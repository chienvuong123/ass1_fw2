import { Dispatch } from "redux";
import { useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import { addProduct, editProduct, fetchProducts, removeProduct } from "@/action/product";

const ProductList = () =>{
    const dispatch:Dispatch<any> = useDispatch()
    const {products,isLoading,error} = useSelector((state:any) => state.products)
    useEffect(() =>{
        dispatch(fetchProducts())
    },[dispatch])
    if(isLoading) return <div>Loading...</div>
    if(error) return <div>{error}</div>
    return(
        <div >
            {products?.map((item:any)=>(
                <div key={item.id}>{item.name}</div>
            ))}
            <button className="bg-blue-500 text-white px-4 py-0.5 mr-1 rounded hover:bg-blue-700" onClick={() => dispatch(addProduct({name: "product C"}))}>Add</button>
            <button className="bg-slate-500 text-white px-4 py-0.5 mr-1 rounded hover:bg-slate-700" onClick={() => dispatch(editProduct({name: "product C update",id:3}))}>edit</button>
            <button className="bg-red-500 text-white px-4 py-0.5 mr-1 rounded hover:bg-red-700" onClick={() => dispatch(removeProduct({id:3}))}>remove</button>
        </div>
    )
}
export default ProductList