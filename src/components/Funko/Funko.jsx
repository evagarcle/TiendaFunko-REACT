import { useContext } from "react"
import { FunkoContext } from "../../context/FunkoContext/FunkoState"
import { Spin } from "antd"

const Funko = () => {

  const {funkos, addCart} = useContext(FunkoContext)

  if(funkos.lenght == 0){
    return <Spin size="large"/>
  }
  return (
    <div>{funkos.map(funko=>{
      return (
        <div key={funko.id}>
          <h2>{funko.name}</h2>
          <p>{funko.price}</p>
          <button onClick={()=>addCart(funko)}>Añadir al carrito</button>
        </div>
      )
    })}</div>
  )
}

export default Funko