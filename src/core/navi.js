import React from 'react';
// import axios from 'axios';
import { Link } from 'react-router';
import About from './about';
import Portfolio from './portfolio';
import Welcome from './welcome';
import Home from './home';
import { connect } from 'react-redux';
import Contact from './contact';




 function Navi(props){

     function refreshPage() {
        //  props.total = 0;
        //  console.log('TOTAL COST HERE?', props.total);
         window.location.reload();
     }

const cartTotal = this.props.total
        return(
            <div>
                {/* <div className="christmasLights"></div> */}

                <div className="nav-bar-top">
                    <div className="cart-price-container">
                        <img src="/images/cart.svg" className="nav-bar-cart"/>
                        <p className="cart-font"> Your Total: € </p>
                        <Link to="/checkout" className="cart-font">your total:</Link>
                        <p>€</p>
                        <div className="cart-price">{props.total},00</div>
                        <button type="button" onClick={ refreshPage } className="empty-cart-button"> <span>Empty Cart</span> </button>
                    </div>
                    <a><img src="/images/ira-logo.jpg" className="nav-bar-logo"/></a>

                    <ul className="languagepicker" >
                        <Link to="/about"><li className="cart-font">English</li></Link>
                        <Link to="/uber"><li className="cart-font">Deutsch</li></Link>
                    </ul>
                </div>









                <div className="nav-bar-bottom">
                    <Link to="/" className="nav-bar-font">home</Link>
                    <Link to="/about" className="nav-bar-font">about</Link>
                    <Link to="/portfolio" className="nav-bar-font">portfolio</Link>
                    <Link to="/contact" className="nav-bar-font">contact</Link>
                </div>



            </div>
        )

}

const mapStateToProps = function(state) {
    console.log('navi component', state);
    return {
        total: state.cart.total
    }
};





//need Link to for each different page.
//check on how to do the drop down language in a cleaner way.
export default connect(mapStateToProps)(Navi)
