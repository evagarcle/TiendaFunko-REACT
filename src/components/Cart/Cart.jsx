import { useContext } from "react"
import { FunkoContext } from "../../context/FunkoContext/FunkoState"
import { Button, Empty } from "antd"
import { Link } from "react-router-dom"
import orderService from "../../../services/OrderService"

const Cart = () => {
  const {cart, clearCart, deleteFunko} = useContext(FunkoContext)

  if(cart-length == 0){
    return <Empty
    description={<span>Tu carrito está vacío </span>} >
    <Button type="primary"><Link to="/funkos">Empezar a comprar</Link></Button>
  </Empty>
  }

  return (
    <div>{cart.map(funko=>{
      return (
        <div key={funko.id}> 
          <h2>{funko.name}</h2>
          <p>{funko.price}</p>
          <button onClick={()=>deleteFunko(funko.id)}>Eliminar producto</button>
        </div>
      )
    })}
    <button onClick={clearCart}>Vaciar carrito</button>
    <button onClick={()=> {
      orderService.createOrder(cart)
      clearCart()
    }}>Crear pedido</button>
    </div>
  )
}

export default Cart