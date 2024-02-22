
import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState('')

  const displayinp = (value) => {
    setResult(result + value)

  }
  const handleCLear = () => {
    setResult('')
  }
  const handleResult = () => {
    try {
      setResult(eval(result))

    } catch (error) {
      setResult('math error')

    }
  }
  const handleDel = () => {
    setResult(result.slice(0, -1))
  }

  return (
    <>
      <div className=' d-flex justify-content-center align-items-center mt-5'>

        <div className='cal rounded border-secondary '>

          <div >
            <input value={result} className='m-4 mt-5 p-2 border-secondary  int' type="text" readOnly placeholder='0' />
          </div>
          <div className=' d-flex justify-content-center align-items-center '>
            <button onClick={handleCLear} className='btn btn-outline-danger  btnl'>AC</button>
            <button onClick={handleDel} className='btn btn-outline-danger btnl'>Del</button>
            <button onClick={() => displayinp('/')} value={'/'} className='btn btn-outline-success btnm'>/</button>
          </div>
          <div className=' d-flex justify-content-center align-items-center  '>
            <button onClick={() => displayinp('7')} value={'7'} className='btn btn-outline-secondary  btnm'>7</button>
            <button onClick={() => displayinp('8')} value={'8'} className='btn btn-outline-secondary btnm'>8</button>
            <button onClick={() => displayinp('9')} value={'9'} className='btn btn-outline-secondary btnm'>9</button>
            <button onClick={() => displayinp('*')} value={'*'} className='btn btn-outline-success btnm'>x</button>
         </div>
          <div className=' d-flex justify-content-center align-items-center '>
            <button onClick={() => displayinp('4')} value={'4'} className='btn btn-outline-secondary  btnm'>4</button>
            <button onClick={() => displayinp('5')} value={'5'} className='btn btn-outline-secondary btnm'>5</button>
            <button onClick={() => displayinp('6')} value={'6'} className='btn btn-outline-secondary btnm'>6</button>
            <button onClick={() => displayinp('-')} value={'-'} className='btn btn-outline-success btnm'>-</button>

          </div>
          <div className=' d-flex justify-content-center align-items-center '>
            <button onClick={() => displayinp('1')} value={'1'} className='btn btn-outline-secondary  btnm'>1</button>
            <button onClick={() => displayinp('2')} value={'2'} className='btn btn-outline-secondary btnm'>2</button>
            <button onClick={() => displayinp('3')} value={'3'} className='btn btn-outline-secondary btnm'>3</button>
            <button onClick={() => displayinp('+')} value={'+'} className='btn btn-outline-success btnm'>+</button>

          </div>
          <div className=' d-flex justify-content-center align-items-center '>
            <button onClick={() => displayinp('0')} value={'0'} className='btn btn-outline-secondary  btnm'>0</button>
            <button onClick={() => displayinp('00')} value={'00'} className='btn btn-outline-secondary btnm'>00</button>
            <button onClick={() => displayinp('.')} value={'.'} className='btn btn-outline-secondary btnm'>.</button>
            <button onClick={handleResult} value={'*'} className='btn btn-outline-success btnm'>=</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
