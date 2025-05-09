import { useState } from 'react'
import './App.css'

function App() {
  const [quote, setQuote] = useState([])
  const [loading, setLoading] = useState(true)
  const [loadingText, setLoadingText] = useState('')

  const generateQuote = async () => {
    try {
      setLoading(true)
      setLoadingText('Loading, getting Quote...')

      const response = await fetch('/api/proxy')
      const data = await response.json()

      setQuote({
        quote: data[0].quote,
        author: data[0].author
      })
    }
    catch (error) {
      console.error(error)
    }
    finally {
      setLoading(false)
      setLoadingText('')
    }
  }

  return (
    <>
      <h1>🦎 LiQuote  | Random Quote</h1>

      {loading ? <p>{loadingText}</p> : (
        <div className="quote-box">
          <p><i>"{quote.quote}"</i></p>
          <p> ─── {quote.author}</p>
        </div>
      )}

      <button onClick={generateQuote}>Generate Quote</button>
    </>
  )
}

export default App