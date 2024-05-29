import axios from "axios";

const API_URL = 'http://localhost:3002/orders'

const createOrder = async (cart) => {
  const token = localStorage.getItem("token")
  await axios.post(API_URL,{productIds:cart},{
    headers:{
      Authorization:token
    }
  })
}


const orderService = {
  createOrder
}

export default orderService