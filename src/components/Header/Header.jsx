import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext/UserState"
import {ShoppingCartOutlined} from "@ant-design/icons"
import { Badge } from "antd"
import { FunkoContext } from "../../context/FunkoContext/FunkoState"

const Header = () => {
  const {token, logout} = useContext(UserContext)
  const {cart} = useContext(FunkoContext)
  const navigate = useNavigate()
  return (
    <div>Header /
      <Link to={"/"}>Home /</Link>
      <Link to={"/funkos"}>Funkos /</Link>
      {token ?  (
        <>
        <Link to={"/profile"}>Profile /</Link>
        <Link to={"/cart"}>Cart <Badge count={cart.lenght} size="small"><ShoppingCartOutlined /></Badge>  /</Link>
        <button onClick={()=>{
            logout()
            navigate("/login")
        }}>Logout /</button>
        </>
        ) : ( 
        <Link to={"/login"}>Login</Link>
      )}
    </div>
  )
}

export default Header