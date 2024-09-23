    

    function Header(){
        
        
            const Diako = () => {
            let linkContainer = document.getElementsByClassName('linkcontainer')[0];
            linkContainer.classList.toggle('navv')
            console.log(linkContainer)
          }
         
          return (
            <>
              <div className='navcontainer'>
                  <div><img src="../img/1.jpeg" alt="hi" /></div>
                  <div className="linkcontainer">
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">Contact</a>
                    <a href="">Products</a>
                    <button onClick={Diako}>click me</button>
                  </div>
              </div>
            </>
          )
        
    }
  export default Header