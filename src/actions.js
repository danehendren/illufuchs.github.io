import axios from 'axios';

export function getShopProducts() {

    return axios.get(`/get-shop-products/`)
        .then(( results ) => {
            return {
                type: "GET_SHOP_PRODUCTS",
                shopProducts: results.data.shopProducts
            }
        })
        .catch(err => console.log("err inside of actions.js axios",err))
}
//===========================================================
export function getIndividualProduct (id) {
    return axios.get(`/individual-shop-product/${id}`)
        .then(( results ) => {
            return {
                type: "GET_INDIVIDUAL_PRODUCT",
                individualProduct: results.data.individualProduct
            }
        })
        .catch(err => console.log("err inside of actions.js axios INDIVIDUAL PRODUCT",err))
}
export function addToCart(product) {
        // console.log('Actions.js console log ', product);
    return {
        type: "ADD_TO_CART",
        product
    }
}

// export function getSinglePortfolio (id) {
//     return axios.get(`/single-portfolio/${id}`)
//         .then(( results ) => {
//             return {
//                 type: "GET_SINGLE_PORTFOLIO",
//                 singlePortfolio: results.data.singlePortfolio
//             }
//         })
// }
//make note again of the ES6 stuff and log before setting the key values .  find out the data.data
//===========================================================
