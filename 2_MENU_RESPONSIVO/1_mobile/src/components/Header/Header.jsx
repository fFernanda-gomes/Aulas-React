import { useState } from "react"
import { List, X } from '@phosphor-icons/react'

import styles from "./Header.module.css"

function Header() {
    const [abrirFechar, setAbrirFechar] = useState(false)

  function handleAbrirFecharMenu() {
    if (abrirFechar) {
      setAbrirFechar(false)
      return
    }

    setAbrirFechar(true)
  }

    return (
        <header className={styles.header}>
            <div className={styles.mobile}>
                <div className={styles.menu}>
                    <button onClick={handleAbrirFecharMenu}>
                        <List size={32} />
                    </button>
                    {abrirFechar === true ? (
                        <X
                            size={32}
                            color="#fff"
                            fontSize={42}
                            weight="bold"
                            className="list"
                        />
                        ) : (
                        <List
                            size={32}
                            color="#fff"
                            fontSize={42}
                            weight="bold"
                            className="list"
                        />
                    )}
                    <h1>Logo</h1>
                </div>

                <div className={styles.options}>
                    <nav >
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