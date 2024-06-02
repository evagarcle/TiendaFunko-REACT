import { useContext } from "react"
import { FunkoContext } from "../../context/FunkoContext/FunkoState"
import { Spin } from "antd"
import "../../../src/App.scss"
import "../Funko/Funko.scss"


const Funko = () => {

  const {funkos, addCart} = useContext(FunkoContext)

  if(funkos.lenght == 0){
    return <Spin size="large"/>
  }
  return (
    <div className="funkoContainer">{funkos.map(funko=>{
      return (
        <div className="div-funkos" key={funko.id}>
          <h2>{funko.name}</h2>
          <p>Precio: {funko.price} €</p>
          <button className="button" onClick={()=>addCart(funko)}>Añadir al carrito</button>
        </div>
      )
    })}</div>
  )
}

export default Funko