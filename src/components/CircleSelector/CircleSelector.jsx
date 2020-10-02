import React from 'react';
import './CircleSelector.css';

function CircleSelector(props) {

  const btnTag = event => {
    props.btnClick(event.target.value)
  }

  if (props.selected)

  return (
    <div className='CircleSelector'>
      <button 
        className={props.selected === '1' ? 'selected' : ''} 
        value='1' 
        onClick={btnTag}
      >
        {props.selected === '1' ? 'Circle 1 Selected' : 'Select Circle 1'}
      </button>
      <button 
        className={props.selected === '2' ? 'selected' : ''} 
        value='2' 
        onClick={btnTag}
      >
        {props.selected === '2' ? 'Circle 2 Selected' : 'Select Circle 2'}
      </button>
      <button 
        className={props.selected === '3' ? 'selected' : ''} 
        value='3' 
        onClick={btnTag}
      >
        {props.selected === '3' ? 'Circle 3 Selected' : 'Select Circle 3'}
      </button>
      <button 
        className={props.selected === '4' ? 'selected' : ''} 
        value='4' 
        onClick={btnTag}
      >
        {props.selected === '4' ? 'Circle 4 Selected' : 'Select Circle 4'}
      </button>
    </div>
  )
}

export default CircleSelector;