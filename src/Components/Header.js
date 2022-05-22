function Header(){
    const StyleFunction = ()=>{
        if(document.getElementById('sidebar').style.display==='none'){
          document.getElementById('sidebar').style.display='flex'
        }
        else{
          document.getElementById('sidebar').style.display='none'
        }
      }
      return (
        <div >
          <div style={{ border: '1px solid red' }}>
            <span id="icon" onClick={StyleFunction} style={{cursor:'pointer'}} >=</span>
          </div>
    
          <div style={{ display: 'flex' }}>
            <div className="sidebar" id='sidebar' style={{ border: '1px solid green', width:'10vw', margin:'2px' }}>
              s
            </div>
    
            <div className="menu" style={{ border: '1px solid yellow', width:'100%', margin:'2px' }}>
              s
            </div>
          </div>
        </div>
      );
}

export default Header;