import "./methods.style.css"

import list from "./Dados"

export const Methods = () => {
  return (
    <>
      <h1 className="methods">4 aprendizados na PretaLab</h1>
      {
        list.map(item => {
         return (
            

              
              <div className="methods-list" key={item.id}>
              
               <h2 className="title">{item.name}</h2>
                <img className="gif-list" src={item.image}/>
                <p className="description-list">{item.description}</p>
             </div>
            
             
           
          )
       })
      }
    </>
    
  )
}
 