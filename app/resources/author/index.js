'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

import Login from './views/Login.react';

class Author extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (
            <div style={{ paddingTop: '20px'}}>
                <Login />
            </div>
        );

    }

}

Author.defaultProps = {
    isLogin: false
};

ReactDOM.render(<Author />,  document.getElementById('offCanvas'));