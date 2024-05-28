import { useContext, useEffect } from "react"
import { FunkoContext } from "../../funkoContext/FunkoState"

const Funkos = () => {
  const {funkos, getFunkos} = useContext(FunkoContext) 

  useEffect(() => {
    getFunkos()
  },[])

  if(funkos.length == 0){
    return <p>cargando funkos...</p>
  }
  return (
    <div>
      {funkos.map((funkos)=>{
      return (
        <div key={funkos.id}>
          <h2>{funkos.name}</h2>
          <button>Eliminar producto</button>
        </div>
      )
    })}</div>
  )
}

export default Funkos