import { useState } from "react"
import { List, X } from '@phosphor-icons/react'

import styles from "./Header.module.css"

function Header() {
    const [abrirMenu, setAbrirMenu] = useState(false)

  function handleAbrirFecharMenu() {
    if (abrirMenu === true) {
      setAbrirMenu(false)
      return
    }

    setAbrirMenu(true)
  }

    return (
        <header className={styles.header}>
            <div className={styles.mobile}>
                <div className={styles.menu}>
                    <button onClick={handleAbrirFecharMenu}>
                        <List size={32} />
                    </button>
                    <h1>Logo</h1>
                </div>

                <div className={`${styles.options} ${abrirMenu === true && styles.open}`}>
                    <nav>
                        <a href="">A</a>
                        <a href="">B</a>
                        <a href="">C</a>
                        <a href="">D</a>
                    </nav>
                </div>
            </div>
        </header>
  )
}

export default Header