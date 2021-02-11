import React from 'react';
import Header from './components/Header'
import FirstSteps from './components/FirstSteps'
import RedditPosts from './components/RedditPosts'

const App = () => {
    return (
        <div className="container">
            <Header />
            <FirstSteps />


            <RedditPosts />
        </div>
    )
}

export default App