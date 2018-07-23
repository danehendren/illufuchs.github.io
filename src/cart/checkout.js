import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router';
import { connect } from 'react-redux';




 function Checkout(props){
    //  console.log('CHECKOUT', props.photo);
    //  const cartTotal = this.props.total
    // componentDidMount(){
    //
    //
    // }




        return(
            <div>

                <div className="shop-product-info-container">
                    <p>your total</p>
                    <div className="checkout-cart-price">{props.total},00</div>
                    {/* <img src="{props.items.photo}" /> */}
                    <p className="cart-font">checkout</p>

                    <a><img src="/images/sitfox.jpg" className="about-page-main-image"/></a>
                </div>
            </div>
        )

}

const mapStateToProps = function(state) {
    // console.log('navi component9999999999999666666666', state.cart.items);
    return {
        // individualProduct: state.individualProduct,
        total: state.cart.total,
        cart: state.cart.items
    }
};





//need Link to for each different page.
//check on how to do the drop down language in a cleaner way.
export default connect(mapStateToProps)(Checkout)
