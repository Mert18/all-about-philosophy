import React from 'react';
import Header from './components/Header'
import Categories from './components/Categories';

import Stoicism from './components/branches/stoicism/Stoicism';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";




const App = () => {
    return (
        <Router>
            <div className="container">
                <Header />
            </div>

            <main>
                <Switch>
                    <Route path="/" exact component={Categories} />
                    <Route path="/stoicism" component={Stoicism} />
                </Switch>
            </main>

        </Router>
    )
}

export default App