import React from 'react';
import Main from './components/Main';
import Content from './components/Content'
import Footer from './components/Footer'
import Quote from './components/Quote'

const quotes= [
  {line:"Aute elit mollit cillum laboris ex laboris.", author:"Esse sunt "},
]

const App = () => {
  return (
    <div className="text-center">
        <Quote quotes={quotes} />
        <Main />
        <Content />
        <Footer />
    </div>
  )
}

export default App;
