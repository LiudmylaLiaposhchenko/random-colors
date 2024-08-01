import { useState } from 'react';
import './style.css';

export default function Color({ color, locked, onLock }) {
    return (
    <div className="color">
      <div className="color__background" style={{ backgroundColor: color }} >

        <button onClick={() => {
            return onLock();
          }} 
          className="color__isSelected">
          {locked ? <img src='/img/lock.png' alt='lock' /> : <img src='/img/lock_open.png' alt='lock-open' />}
        </button>

        <div className="color__number">{color}</div>
      </div>
    </div> 
  )
}
