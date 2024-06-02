import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext/UserState"
import { Spin } from "antd"
import "../../../src/App.scss"
import "../Profile/Profile.scss"


const Profile = () => {

  const {getLoggedUserInfo, user, token} = useContext(UserContext)

  

  useEffect(() => {
    getLoggedUserInfo()
    
  }, [token, getLoggedUserInfo])

  if(!user) {
    return <Spin size="large"/>
  }
  
  
  return (
    <>
      <div className="profileContainer" key={user.id}>
        <p>Tu nombre de usuario: {user.firstName}</p>
        <p>Tu correo electrónico: {user.email}</p>

        <h2>TUS PEDIDOS</h2>

        {user.Orders.map((order) => (
          <div className="div-orders" key={order.id}>
            Número de pedido: {order.id}

            {order.Funkos.map((funko) => (
              <div key={funko.id}>&nbsp;&nbsp;&nbsp;&nbsp;Funko {funko.id}: {funko.name}</div>
              
            ))}
          </div>
      
        ))}
      </div>
    </>
  )
  
}

export default Profile