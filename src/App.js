import React from 'react';
import Main from './components/Main';
import Content from './components/Content'
import Footer from './components/Footer'
import Quote from './components/Quote'
import DateInput from './components/DateInput'
import { ReactComponent as Bg } from './assets/bg-01.svg';
import Date from './components/Date'

const quotes= [
  {line:"Aute elit mollit cillum laboris ex laboris.", author:"Esse sunt "},
]

const App = () => {
  return (
    <div>

        <div className="relative">
          <Bg />
        </div>
        <div className="absolute top-0">
          <Date />
        </div>
        <div className="text-center absolute top-0 overflow-hidden">
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
