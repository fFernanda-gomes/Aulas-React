import { useState } from "react"
import { List } from '@phosphor-icons/react'

import "./Header.css"

function Header() {
    const[isOpen, setIsOpen] = useState(false)

    function OpenMenu() {
        if (isOpen === true) {
            
        }
    }

  return (
    <header>
        <div className="mobile">
            <div className="menu">
                <button><List size={32} /></button>

                <h1>Logo</h1>
            </div>
        </div>
    </header>
  )
}

export default Header