import React from 'react';

export default class Uber extends React.Component {


    render() {
        return (
            <div>
                <div className="about-page-main-image-container">
                    <a><img src="/images/couchcouple.jpg" className="about-page-main-image"/></a>
                </div>

                <div className="about-me-container">
                    <div className="about-me-border">
                        <a><img src="/images/sitfox.jpg" className="about-me-image"/></a>
                        <p></p>
                    </div>
                </div>
            </div>
        )
    }
}
