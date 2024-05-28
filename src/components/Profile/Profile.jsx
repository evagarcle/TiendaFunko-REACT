import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext/UserState"
import { Spin } from "antd"


const Profile = () => {

  const {getLoggedUserInfo, user} = useContext(UserContext)

  useEffect(()=>{
    getLoggedUserInfo()
  }, [])

  if(!user) {
    return <Spin size="large"/>
  }
  
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      </div>
  )
}

export default Profile