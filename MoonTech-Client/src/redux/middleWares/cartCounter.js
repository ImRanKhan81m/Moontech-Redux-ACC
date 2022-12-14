const cartCounter = (store) => (next) => (action) => {
    if(action.type === "ADD_TO_CART") {
        return
    }

    return next(action)
}

export default cartCounter;