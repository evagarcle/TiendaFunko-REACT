import { useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext/UserState"
import {ShoppingCartOutlined} from "@ant-design/icons"
import { Badge } from "antd"
import { FunkoContext } from "../../context/FunkoContext/FunkoState"
import "../../../src/App.scss"
import "../Header/Header.scss"

const Header = () => {
  const {token, logout} = useContext(UserContext)
  const {cart} = useContext(FunkoContext)
  const navigate = useNavigate()

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  return (
    <div className="header">
      <Link to={"/"} className="nav-link">Home</Link>
      <Link to={"/funkos"} className="nav-link">Funkos</Link>
      {token ? (
        <>
        <Link to={"/profile"} className="nav-link">Profile</Link>
        <Link to={"/cart"} className="nav-link">Cart <Badge count={cart.length} size="small"><ShoppingCartOutlined style={{ color: 'white' }}/></Badge></Link>
        <button className="logout-button" onClick={()=>{
            logout()
            navigate("/login")
        }}>Logout </button>
        </>
        ) : ( 
        <Link to={"/login"} className="nav-link">Login</Link>
      )}
    </div>

  )
}

export default Header