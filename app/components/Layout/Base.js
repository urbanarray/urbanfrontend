import React from 'react';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';

import Header from './Header'
import Sidebar from './Sidebar'
import Offsidebar from './Offsidebar'
import Footer from './Footer'

import { isLogin, isProfile } from 'containers/App/selectors';
import LandingNavbar from './LandingNavbar';

class Base extends React.Component {

    render() {
        if (this.props.isLogin && this.props.currentProfile) {
            
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
        else{
          return (
            <div className="">
              <LandingNavbar/>
              {this.props.children}
            </div>
          );
        }
    }

}

const mapStateToProps = createStructuredSelector({
    isLogin: isLogin(),
    currentProfile: isProfile(),

});

function mapDispatchToProps(dispatch) {
    return {
        dispatch,
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'base', reducer });
// const withSaga = injectSaga({ key: 'base', saga });

// export default Base;
export default compose(
    // withReducer,
    // withSaga,
    withConnect,
)(Base);