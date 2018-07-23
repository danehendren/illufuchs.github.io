const defaultState = {
    shopProducts: [],
    cart: {
        items: [],
        total: 0
    }
}
export default function(state = defaultState, action) {
    if( action.type == "GET_SHOP_PRODUCTS" ) {
        // console.log('INSIDE OF THE REDUCERS.JS', action.shopProducts);
        state = Object.assign( {}, state, { shopProducts: action.shopProducts })
    }
    // console.log('reducers.js GET_SHOP_PRODUCTS State: ', state);
    if(action.type == "GET_INDIVIDUAL_PRODUCT") {
        state = Object.assign( {}, state, { individualProduct: action.individualProduct})
    }



    // console.log('ABOUT TO RETURN THAT STATE IN REDUCERS', state);
    if(action.type == "ADD_TO_CART") {
        // console.log('reducers.js add to cart reducers', action.product);

        var cartCopy = Object.assign( {}, state.cart);
        cartCopy.items.push(action.product)

        var theTotal = calculateTotal(cartCopy.items);
        // console.log('THE total inside CALCULATE TOTAL', theTotal);
        cartCopy.total = theTotal;

        state = Object.assign({}, state, {

            cart: cartCopy
        })
    }
    console.log('THE STATEOOOOOOOOO', state);
    return state;

    function calculateTotal(items) {

        let total = 0;

        for (var i = 0; i < items.length; i++) {
            total += parseInt(items[i].price)
            // console.log('total', total);
        }
        return total
        // console.log('THIS IS THE STATE', state);
    }
}
