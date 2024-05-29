import { useContext, useEffect } from "react"
import { FunkoContext } from "../../context/FunkoContext/FunkoState"
import Funko from "../../Funko/Funko"

const Funkos = () => {
  const {funkos, getFunkos, deleteFunko} = useContext(FunkoContext) 

  useEffect(() => {
    getFunkos()
  },[])

  if(funkos.length == 0){
    return <p>cargando funkos...</p>
  }
  return (
    <div>

      <Funko/>

      {funkos.map((funko)=>{
      return (
        <div key={funko.id}>
          <h2>{funko.name}</h2>
          <button onClick={()=>deleteFunko(funko.id)}>Eliminar producto</button>
        </div>
      )
    })}
    </div>
  )
}

export default Funkos