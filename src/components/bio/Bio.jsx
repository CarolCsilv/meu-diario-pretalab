import image from "../../assets/gif-perfil-carol.gif"
import "./bio.style.css"

function Bio() {
  return(
    <>
       <div className='bio'>
         <h2 className='apresentacao'>Prazer, Carol</h2>
         <p className='texto-bio'>Atualmente faço parte do quadro do corpo discente, da rede Preta Lab, onde participo do Ciclo formativo em tecnologia, voltada à programação Front-end. Desenvolvendo conhecimentos em HTML, CSS, JavaScript e React.</p>
         
         <img className='gif-perfil'src={image} alt='mulher preta, com tranças afro presas por lenço, e, blusa branca'/>
           
          

        </div>
    </>
    
  )
}

export default Bio