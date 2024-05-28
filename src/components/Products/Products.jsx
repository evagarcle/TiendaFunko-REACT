import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalState"

const Funkos = () => {
  const {funkos, getFunkos} = useContext(GlobalContext) 

  useEffect(() => {
    getFunkos()
  },[])

  return (
    <div>
      {funkos.map((product)=>{
      return (
        <div key={product.id}>
          <h2>{product.title}</h2>
        </div>
      )
    })}</div>
  )
}

export default Funkos