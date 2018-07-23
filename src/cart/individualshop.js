import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getIndividualProduct, addToCart } from '../actions'
import { Link } from 'react-router';


 class Individualshop extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // console.log('component did mount log', this.props.params.id);
        const id = this.props.params.id

        this.props.getIndividualProduct(id);
    }



    render() {
        if(!this.props.individualProduct) {
            return null;
        }
        const product = this.props.individualProduct[0]
        console.log('Individualshop render() function this.prpos:', product);




        return (
            <div className="shop-product-container">
                <img src={ product.photo } className="shop-product-image"/>
                <div className="shop-product-info-container">
                    <h3> {product.title}</h3>
                    <p>Price: €{product.price}</p>
                    <Link to="/shop" className="back-to-shop-style">back to shop!</Link>
                    <div className="button-cart">
                        <button onClick={ () => this.props.addToCart(product)} className="add-to-cart-button"><span>add to cart</span></button>
                    </div>

                </div>
            </div>
        )
    }
}

// this.props.addToCart(product)

const mapStateToProps = function(state) {
    console.log('inside mapStateToProps of individualshop.js', state);
    return {
        individualProduct: state.individualProduct,
        total: state.cart.total
    }
};

const mapDispatchToProps = (dispatch) => ({

    getIndividualProduct: (id) => dispatch(getIndividualProduct(id)),
    addToCart: (product) => dispatch(addToCart(product))

})

export default connect(mapStateToProps,  mapDispatchToProps)(Individualshop)
