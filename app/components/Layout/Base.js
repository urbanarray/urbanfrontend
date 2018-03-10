import React from 'react';

import Header from './Header'
import Sidebar from './Sidebar'
import Offsidebar from './Offsidebar'
import Footer from './Footer'

class Base extends React.Component {

    render() {

        return (
            <div className="wrapper">
                <Header />

                <Sidebar />

                <Offsidebar />

                <section>
                  { 
                    this.props.children 
                  }
                </section>

                <Footer />
            </div>
        );
    }

}

export default Base;
