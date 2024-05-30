import { useContext, useEffect } from "react"
import { FunkoContext } from "../../context/FunkoContext/FunkoState"
import Funko from "../Funko/Funko"
import "../../../src/App.scss"

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

      <Funko/>
    
      {funkos.map((funko)=>{
      return (
        <div key={funko.id}>
          <h2>{funko.name}</h2>
          
        </div>
      )
    })}
   
    </div>
  )
}

export default Funkos