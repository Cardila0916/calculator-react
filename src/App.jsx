import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.value))
  }

  const clear = () => {
    setResult("")
  }

  const deleteElement = () => {
    setResult(result.slice(0, -1))
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("")
    }
  }
  return (
    <div className="container">
      <div className="calculator">
        <form>
          <div className='display'>
            <input type="text" disabled value={result} />
          </div>
          <div>
            <input type="button" value="AC" className='operator' onClick={clear}/>
            <input type="button" value="DE" className='operator' onClick={deleteElement}/>
            <input type="button" value="." className='operator' onClick={handleClick} />
            <input type="button" value="/" className='operator' onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="7" onClick={handleClick} />
            <input type="button" value="8" onClick={handleClick} />
            <input type="button" value="9" onClick={handleClick} />
            <input type="button" value="*" className='operator' onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="4" onClick={handleClick} />
            <input type="button" value="5" onClick={handleClick} />
            <input type="button" value="6" onClick={handleClick} />
            <input type="button" value="-" className='operator' onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="1" onClick={handleClick} />
            <input type="button" value="2" onClick={handleClick} />
            <input type="button" value="3" onClick={handleClick} />
            <input type="button" value="+" className='operator' onClick={handleClick} />
          </div>
          <div>
            <input type="button" value="00" onClick={handleClick} />
            <input type="button" value="0" onClick={handleClick} />
            <input type="button" value="=" className='equal operator' onClick={calculate} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
