import React from 'react';
import Quote from './components/Quote';
import Main from './components/Main';
import Content from './components/Content'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="text-center">
        <Quote />
        <Main />
        <Content />
        <Footer />
    </div>
  )
}

export default App;
