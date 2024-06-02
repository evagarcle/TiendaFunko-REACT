import { useContext } from "react"
import { FunkoContext } from "../../context/FunkoContext/FunkoState"
import { Button, Empty } from "antd"
import { Link, useNavigate } from "react-router-dom"
import orderService from "../../../services/OrderService"
import "../../../src/App.scss"
import "../Cart/Cart.scss"

const Cart = () => {
  const {cart, clearCart, deleteFunko} = useContext(FunkoContext)
  const navigate = useNavigate()

  if(cart.length == 0){
    return <Empty
    description={<span>Tu carrito está vacío </span>} >
    <Button type="primary"><Link to="/funkos">Empezar a comprar</Link></Button>
  </Empty>
  }

  return (
    <>
      <div className="cartContainer">{cart.map(funko=>{
        return (
          <div  className="div-cartFunko" key={funko.id}> 
            <h2>{funko.name}</h2>
            <p>Precio: {funko.price} €</p>
            <button className="cart-button" onClick={()=>deleteFunko(funko.id)}>Eliminar producto</button>
          </div>
        )
      })}
      
      <div className="cartContainer">
      <button className="classic-button" onClick={clearCart}>Vaciar carrito</button>
      
      <button type="primary" className="classic-button" onClick={()=> {
        orderService.createOrder(cart)
        clearCart()
        navigate("/profile")
      }}>Crear pedido</button>
      </div>
      </div>
    </>
  )
}

export default Cart