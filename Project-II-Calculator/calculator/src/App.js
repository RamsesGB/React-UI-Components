import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

const App = () => {
  return (
    <div className='calculator-container'>
      <CalculatorDisplay />
      {/* row */}
      <ButtonContainer>
        <ActionButton text='clear'/>
        <NumberButton btnStyle='red-btn' text='/'/>
      </ButtonContainer>
      
      {/* row */}
      <ButtonContainer>
        <NumberButton btnStyle='number-btn' text='7'/>
        <NumberButton btnStyle='number-btn' text='8'/>
        <NumberButton btnStyle='number-btn' text='9'/>
        <NumberButton btnStyle='red-btn' text='X'/>
      </ButtonContainer>

      {/* row */}
      <ButtonContainer>
        <NumberButton btnStyle='number-btn' text='4'/>
        <NumberButton btnStyle='number-btn' text='5'/>
        <NumberButton btnStyle='number-btn' text='6'/>
        <NumberButton btnStyle='red-btn' text='-'/>
      </ButtonContainer>

      {/* row */}
      <ButtonContainer>
        <NumberButton btnStyle='number-btn' text='1'/>
        <NumberButton btnStyle='number-btn' text='2'/>
        <NumberButton btnStyle='number-btn' text='3'/>
        <NumberButton btnStyle='red-btn' text='+'/>
      </ButtonContainer>

      {/* row */}
      <ButtonContainer>
        <ActionButton btnStyle='number-btn' text='0'/>
        <NumberButton btnStyle='red-btn' text='='/>
      </ButtonContainer>
    </div>
  );
};

export default App;
