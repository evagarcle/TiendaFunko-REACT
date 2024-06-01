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
        <p>{user.firstName}</p>
        <p>{user.email}</p>

        {user.Orders.map((order) => (
          <div className="div-orders" key={order.id}>
            Order: {order.id}

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