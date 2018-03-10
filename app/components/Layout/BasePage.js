import React from 'react';

class BasePage extends React.Component {

    render() {
        return (
            <div className="">
                {this.props.children}
            </div>
        );
    }

}

export default BasePage;
