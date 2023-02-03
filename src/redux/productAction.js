
export const addProduct = (product)=>{
    console.warn('data=>',product)
    return {
        type:'ADD_PRODUCT',
        data:product
    }
}

export const removeProduct = (data)=>{
    console.warn('data=>',data)
    return {
        type:'REMOVE_PRODUCT',
        data
    }
}

export const getProductList = ()=>{
    return {
        type:'GET_PRODUCT_LIST',
        productList:"apple"
    }
}

