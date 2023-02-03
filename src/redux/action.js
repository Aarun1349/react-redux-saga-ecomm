
export const addToCart = (data)=>{
    console.warn('data=>',data)
    return {
        type:'ADD_TO_CART',
        data
    }
}

export const removeFromCart = (data)=>{
    console.warn('data=>',data)
    return {
        type:'REMOVE_FROM_CART',
        data
    }
}

export const clearCart = (data)=>{
    console.warn('data=>',data)
    return {
        type:'CLEAR_CART',
        data
    }
}

