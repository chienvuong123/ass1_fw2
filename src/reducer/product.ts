import { produce } from "immer";

const initialState = {
    products :[],
    isLoading:false,
    error: ""
} as {products:any[],isLoading:boolean, error:string}
export const productReducer = (state=initialState,action: any) =>{
    return produce(state, draftState =>{
        switch(action.type) {
            case "product/fetching":
                draftState.isLoading = true
                break;
            case "product/fetchingS":
                draftState.products = action.payload
                break;
            case "product/fetchingF":
                draftState.products = action.payload
                break;
            case "product/fetchingFn":
                draftState.isLoading = false
                break;
            case "product/add" :
                draftState.products.push(action.payload)
                break;
            case "product/edit" :
                const products = action.payload
                draftState.products = draftState.products.map((item:any) => item.id === products.id ? products :item)
                break;
            case "product/remove" :
                draftState.products = draftState.products.filter((item:any) => item.id != action.payload.id)
                break;
        }
    })
}