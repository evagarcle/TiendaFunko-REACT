import axios from "axios"

const API_URL = 'http://localhost:3002/orders'

const createOrder = async (cart) => {
  try {
    const token = localStorage.getItem("token");
    const funkoIds = cart.map((funko) => funko.id)
    await axios.post(API_URL, { FunkoId: funkoIds }, { 
      headers: {
        Authorization: token,
      },
    });
    
    console.log('Pedido creado exitosamente')
    

  } catch (error) {
    console.error("Error creating order:", error)
    throw error
  }
}

const orderService = {
  createOrder,
}

export default orderService
