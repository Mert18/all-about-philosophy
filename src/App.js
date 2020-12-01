import React from 'react';
import Main from './components/Main';
import Content from './components/Content'
import Footer from './components/Footer'
import Quote from './components/Quote'
import DateInput from './components/DateInput'
import { ReactComponent as Bg } from './assets/bg-01.svg';


const quotes= [
  {line:"Aute elit mollit cillum laboris ex laboris.", author:"Esse sunt "},
]

const App = () => {
  return (
    <div>

        <div className="relative bg-repeat top-96">
          <Bg />
        </div>
        <div className="text-center absolute top-20">
            <Quote quotes={quotes} />
            <DateInput />
            <Main />
            <Content />
            <Footer />
        </div>

    </div>
  )
}

export default App;
