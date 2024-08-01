'use client'

import getRandomColor from "@/utils/getRandomColor";
import { useState } from "react";
import Color from "../Color";
import styles from './style.module.css';

export default function Main({ defaultColors }) {
  const [colors, setColors] = useState(defaultColors);

  const updateColors = () => {
    setColors([
      locked[0] ? colors[0] : getRandomColor(),
      locked[1] ? colors[1] : getRandomColor(),
      locked[2] ? colors[2] : getRandomColor(),
      locked[3] ? colors[3] : getRandomColor(),
      locked[4] ? colors[4] : getRandomColor(),
    ])
  }

  const [locked, setLocked] = useState([false, false, false, false, false]);
  const onLock = (index) => {
    const clone = [...locked];
    clone[index] = !locked[index];
    return setLocked(clone)
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.mainTitle}>Make your colors!</h1>
      <section className="colors">
        <Color 
          color={colors[0]}
          locked={locked[0]}
          onLock={() => onLock(0)}
        />
        <Color 
          color={colors[1]}
          locked={locked[1]}
          onLock={() => onLock(1)}
        />
        <Color 
          color={colors[2]}
          locked={locked[2]}
          onLock={() => onLock(2)}
        />
        <Color 
          color={colors[3]}
          locked={locked[3]}
          onLock={() => onLock(3)}
        />
        <Color 
          color={colors[4]}
          locked={locked[4]}
          onLock={() => onLock(4)}
        />
      </section>
      {locked.every((l) => l) ? (
        <label className={styles.inputLabel}>
          Your link: 
          <input className={styles.input} type="text" readOnly value={`http://localhost:3000/${colors.join('/')}`} />
        </label>
      ) : null}
      <button 
        disabled={locked.every((l) => l)}
        onClick={updateColors} className={styles.generateColors}>
        Generate colors once more
      </button>
    </main>
  )
}
