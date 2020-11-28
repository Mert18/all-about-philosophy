import React from 'react';
import Quote from './components/Quote';
import Main from './components/Main';
import Content from './components/Content'

const App = () => {
  return (
    <div className="text-center">
        <Quote />
        <Main />
        <Content />
    </div>
  )
}

export default App;
