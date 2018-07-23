import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import About from './about';
// import Portfolio from './portfolio';
import Navi from './navi';
import Portfolio from './portfolio';
import Contact from './contact';


export default class Home extends React.Component {
    // constructor(props) {
    //     super(props)
    // }



    // componentDidMount() {
    //     axios.get('/home-page')
    //         .then( () => console.log('home page component did mount'))
    //
    // }

    render() {
        return(
            <div>
                <Navi />
                {this.props.children}

                {/* <Contact /> */}
            </div>
        )
    }
}
