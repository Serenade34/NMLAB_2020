import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import'./Album';

class index extends React.Component {
    render() {
        return Album();
    }
}

ReactDOM.render(<index />, document.getElementById('root'));