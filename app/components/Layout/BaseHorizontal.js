import React from 'react';

import HeaderHorizontal from './HeaderHorizontal'
import Offsidebar from './Offsidebar'
import Footer from './Footer'

class Base extends React.Component {

    componentWillMount() {
        $('body').addClass('layout-h');
    }

    componentWillUnmount() {
        // Only necessary for demo to restore classic layout
        $('body').removeClass('layout-h');
    }

    render() {

        return (
            <div className="wrapper">
                <HeaderHorizontal />

                <Offsidebar />

                <section>
                    { this.props.children }
                </section>

                <Footer />
            </div>
        );
    }

}

export default Base;
