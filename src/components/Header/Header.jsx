import { useContext } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "../../context/UserContext/UserState"

const Header = () => {
  const {token} = useContext(UserContext)
  return (
    <div>Header
      <Link to={"/"}>Home</Link>
      {
        token ? <Link to={"/profile"}>Profile</Link> : <Link to={"/login"}>Login</Link>
      }
    </div>
  )
}

export default Header