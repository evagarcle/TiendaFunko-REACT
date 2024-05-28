import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext/UserState"


const Profile = () => {

  const {getLoggedUserInfo, user} = useContext(UserContext)

  useEffect(()=>{
    getLoggedUserInfo()
  }, [])

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      </div>
  )
}

export default Profile