import { useState } from "react"



    function Header(){
        const navContainer = document.getElementsByClassName('navcontainer')[0];
        
            const Diako = () => {
            let linkContainer = document.getElementsByClassName('navcontainer')[0];
            linkContainer.classList.toggle('navv')
            console.log(linkContainer)
          }

          const [show, setShow] = useState(true)

          function handleMakeShow(){
              setShow(false)
          }
          function handleNoShow(){
            setShow(true)
          }

          return (
            <>
              {
                show?
                <div className='navcontainer'>
                    <div><img src="../img/1.jpeg" alt="hi" /></div>
                    <div className="linkcontainer">
                      <a href="">Home</a>
                      <a href="">About Us</a>
                      <a href="">Contact</a>
                      <a href="">Products</a>
                      <button onClick={Diako}>click me</button>
                      
                      
                    </div>
                </div>:null
              }
              <button onClick={handleNoShow}>show</button>
              <button onClick={handleMakeShow}>hide body</button>
            </>
          )
        
    }
  export default Header