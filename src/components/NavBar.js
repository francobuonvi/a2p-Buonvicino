import CartWidget from './CartWidget'
import { NavLink} from "react-router-dom"
import {useContexto} from './context.js'


function NavBar(){
    const { qty_cart } = useContexto()

    return(
            <nav className='nav_barra'>
                <div className="container nav_container">
                    <div className="redes">
                        <NavLink to="/">
                            <h1>A2P Store</h1>
                        </NavLink>
                    </div>
                    <div className="links_menu">
                        <ul id='menu' className='no-style horizontal'>
                            <li/><NavLink className='menu2' to='/category/books' >Manual</NavLink>
                            <li/><NavLink className='menu2' to='/category/lessons' >Clases</NavLink>
                        </ul>
                    </div>
                        
                        {qty_cart > 0 ? (
                            <NavLink to="/cart">
                            <CartWidget/>
                            </NavLink>) : 
                            <></>
                            }
                        
                </div>
            </nav>

    )

}

export default NavBar