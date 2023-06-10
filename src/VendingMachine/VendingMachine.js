import { useState } from "react";
import { BrowserRouter, Route, NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";
import Chips from "./Chips";
import Soda from "./Soda";
import Candy from "./Candy";
import vending_machine from './vending_machine.png' 
import './VendingMachine.css'

const VendingMachine = () => {
    const [menuShowing, setMenuShowing] = useState(false)
    const [startButton, setStartButton] = useState(true);
    const showMenu = () => {
        setMenuShowing(menu => !menu)
        setStartButton(start => !start)
    }

    return (
        <div>
            <BrowserRouter>
               { startButton &&
                <div className="menu-start-btn">
                    <button onClick={showMenu} >Start</button>
                </div>
}
                {
                    menuShowing &&
                <menu>
                    <div className="menu-links" >
                    <NavLink exact to="/chips">
                        Chips
                    </NavLink>
                    <NavLink exact to="/soda">
                        Soda
                    </NavLink>
                    <NavLink exact to="/candy">
                        Candy
                    </NavLink>
                    <div className="menu-modal">
                        <Route exact path="/chips">
                            <Chips />
                        </Route>
                        <Route exact path="/soda">
                            <Soda />
                        </Route>
                        <Route exact path="/candy">
                            <Candy />
                        </Route>
                    </div>
                    </div>
                    <div className='menu-close-btn'>
                        <button onClick={showMenu}>
                            Close
                        </button>
                    </div>
                </menu>
                }
            </BrowserRouter>
            <img className="main-background" src={vending_machine} />
        </div>
    )
}

export default VendingMachine;