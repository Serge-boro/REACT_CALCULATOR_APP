import React, { useState } from 'react'
import styled from 'styled-components'
import './App.css'
const calkBtn = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0, '.', '']
function App() {
  const [isData, setIsData] = useState('')
  const [isCalk, setIsCalk] = useState(calkBtn)

  return (
    <Wrapper>
      <div className='container'>{isData}</div>
      <div className='digits'>
        {isCalk.map((item) => {
          return (
            <button
              value={item}
              key={item}
              onClick={(e) => setIsData(isData + e.target.value)}
            >
              {item}
            </button>
          )
        })}
      </div>
      <div className='modifiers'>
        <button
          onClick={() => setIsData(isData.substring(0, isData.length - 1))}
        >
          clear
        </button>
        <button onClick={() => setIsData('')}>AC</button>
      </div>
      <div className='operations'>
        <button onClick={(e) => setIsData(isData + e.target.value)} value='+'>
          +
        </button>
        <button onClick={(e) => setIsData(isData + e.target.value)} value='-'>
          -
        </button>
        <button onClick={(e) => setIsData(isData + e.target.value)} value='*'>
          *
        </button>
        <button onClick={(e) => setIsData(isData + e.target.value)} value='/'>
          %
        </button>
        <button
          onClick={(e) => {
            setIsData(String(eval(isData)))
          }}
          value='='
        >
          =
        </button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 420px;
  min-height: 50vh;
  display: grid;
  margin-top: 10rem;
  grid-template-areas:
    'total total total total'
    'modif modif modif oper'
    'digit digit digit oper'
    'digit digit digit oper'
    'digit digit digit oper'
    'digit digit digit oper';
  grid-auto-columns: 1fr;
  grid-gap: 0.3rem;

  .container {
    background-color: #23235b;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.2);
    padding: 30px;
    width: 450px;
    height: 100px;
    max-width: 100%;
    grid-area: total;
    font-size: 2rem;
  }
  .operations {
    grid-area: oper;
  }
  .operations button {
    background-color: orange;
    width: 100px;
    padding: 2rem;
    width: 110px;
  }
  .digits button {
    background-color: #efefef;
  }
  .digits {
    grid-area: digit;
    grid-gap: 0.5rem;
  }

  .modifiers {
    grid-area: modif;
    display: flex;
  }
  .modifiers button {
    flex: 1 0 26%;
  }
  .digits {
    display: flex;
    flex-wrap: wrap;
  }
  .digits button {
    flex: 1 0 26%;
  }
`

export default App
