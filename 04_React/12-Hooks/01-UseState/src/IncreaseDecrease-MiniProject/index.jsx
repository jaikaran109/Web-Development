import React, { useState } from "react"
import styles from "./style.module.css"

const Index = () => {
  const [num, setNum] = useState(0)

  function increaseNum() {
    setNum(num + 1)
  }

  function decreaseNum() {
    setNum(num - 1)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{num}</h1>

      <div className="operations">
        <button className={styles.btn} onClick={increaseNum}>
        Increase
      </button>

      <button className={styles.btn} onClick={decreaseNum}>
        Decrease
      </button>
      </div>
    </div>
  )
}

export default Index