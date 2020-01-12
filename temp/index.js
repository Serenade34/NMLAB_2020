import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import ShopPage from './ShopPage.js';
import SignIn from './SignIn.js';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const MyShopPage = (props) => {
            return (
                <div>
                    <ShopPage />
                </div>
            )
        }
        const MySignInPage = (props) => {
            return (
                <div>
                    <SignIn />
                </div>
            )
        }
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' render={MyShopPage} />
                    <Route exact path='/' render={MyShopPage} />
                    <Route path='/login' render={MySignInPage} />
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render( <App />, document.getElementById('root'));
