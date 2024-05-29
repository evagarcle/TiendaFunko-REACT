import { useContext } from "react"
import { FunkoContext } from "../../context/FunkoContext/FunkoState"
import { Button, Empty } from "antd"
import { Link } from "react-router-dom"

const Cart = () => {
  const {cart, clearCart} = useContext(FunkoContext)

  if(cart-length == 0){
    return <Empty
    // image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    // imageStyle={{
    //   height: 60,
    // }}
    description={<span>Tu carrito está vacío </span>} >
    <Button type="primary"><Link to="/products">Empezar a comprar</Link></Button>
  </Empty>
  }

  return (
    <div>{cart.map(funko=>{
      return (
        <div key={funko.id}> 
          <h2>{funko.name}</h2>
          <p>{funko.price}</p>
        </div>
      )
    })}
    <button onClick={clearCart}>Vaciar carrito</button>
    </div>
  )
}

export default Cart