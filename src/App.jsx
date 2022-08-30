import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import QuoteBox from './components/QuoteBox'
import Button from './components/Text'
import quotes from './quotes.json'

const colors = ['#000000', '#0000FF', '#808080', '#008000', '800080', '#FF0000'  ]

function App() {

  const ramdomIndex = Math.floor(Math.random() * quotes.length)

  const [ index, setIndex ] = useState(ramdomIndex)

  const change = () => {
    const ramdomIndex = Math.floor(Math.random() * quotes.length)
    setIndex(ramdomIndex)
  }

  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background:${colors[randomColor]}`

  return (
    <div className="App">
      <div className='card'>
        <p className='text'><i className="fa-solid fa-quote-left"></i>{" "} {quotes[index].quote}</p>
        <p className='author'>{quotes[index].author}</p>
        <button className='button' onClick={change}><i className="fa-solid fa-angle-right"></i></button>
      </div>
    </div>
  )
}

export default App
