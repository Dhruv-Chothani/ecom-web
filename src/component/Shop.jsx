import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Shop() {
  return (
    <div>
    <Nav />  
      
      <div className="head">
        <h4 className="f-bold">Products (10)</h4>
      </div>
      <div className="banner">
        <img src={require('./assets/banner1.webp')} alt="" />
      </div>
      {/* <!-- Product Section --> */}
      <div className="product-section">
        
      <div class="contain">
            <div class="p-box">
                    <div class="box1 b">
                        <div class="i1"> 
                            <i class="fa-regular fa-heart  bg-cl"></i>
                        </div>
                        <div class="i2">
                            <i class="fa-regular fa-eye   bg-cl "></i>   
                        </div>
                     
                    </div>
                    <div class="content">
                        <div class="d1"><p>Mobile accesories</p></div>
                        <div class="d2"><p>Head-phone</p></div>
                        <div class="d3"><p>$89.99</p></div>
                    </div>
                    
            </div>
            <div class="p-box">
                    <div class="box2 b">
                        <div class="i1"> 
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="i2">
                            <i class="fa-regular fa-eye  "></i>   
                        </div>
                     
                    </div>
                    <div class="content">
                        <div class="d1"><p>Phone</p></div>
                        <div class="d2"><p>I-phone 11</p></div>
                        <div class="d3"><p>$489.99</p></div>
                    </div>
                    
            </div>
            <div class="p-box">
                    <div class="box3 b">
                        <div class="i1"> 
                            <i class="fa-regular fa-heart "></i>
                        </div>
                        <div class="i2">
                            <i class="fa-regular fa-eye  "></i>   
                        </div>
                     
                    </div>
                    <div class="content">
                        <div class="d1"><p>Mobile accesories</p></div>
                        <div class="d2"><p>Watch-8</p></div>
                        <div class="d3"><p>$189.99</p></div>
                    </div>
                    
            </div>
            <div class="p-box">
                <div class="box4 b">
                    <div class="i1"> 
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="i2">
                        <i class="fa-regular fa-eye  "></i>   
                    </div>
                 
                </div>
                <div class="content">
                    <div class="d1"><p> Accesories</p></div>
                    <div class="d2"><p>Buds</p></div>
                    <div class="d3"><p>$89.99</p></div>
                </div>
                
        </div>
           

    </div>  
      <div class="contain">
            <div class="p-box">
                    <div class="box5 b">
                        <div class="i1"> 
                            <i class="fa-regular fa-heart  bg-cl"></i>
                        </div>
                        <div class="i2">
                            <i class="fa-regular fa-eye   bg-cl "></i>   
                        </div>
                     
                    </div>
                    <div class="content">
                        <div class="d1"><p>Home-accesories</p></div>
                        <div class="d2"><p>Juicer Machine</p></div>
                        <div class="d3"><p>$139.99</p></div>
                    </div>
                    
            </div>
            <div class="p-box">
                    <div class="box6 b">
                        <div class="i1"> 
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="i2">
                            <i class="fa-regular fa-eye  "></i>   
                        </div>
                     
                    </div>
                    <div class="content">
                        <div class="d1"><p>Mobile Accesories</p></div>
                        <div class="d2"><p>Head-phone</p></div>
                        <div class="d3"><p>$33.99</p></div>
                    </div>
                    
            </div>
            <div class="p-box">
                    <div class="box7 b">
                        <div class="i1"> 
                            <i class="fa-regular fa-heart "></i>
                        </div>
                        <div class="i2">
                            <i class="fa-regular fa-eye  "></i>   
                        </div>
                     
                    </div>
                    <div class="content">
                        <div class="d1"><p> accesories</p></div>
                        <div class="d2"><p>Mouse</p></div>
                        <div class="d3"><p>$11.11</p></div>
                    </div>
                    
            </div>
            <div class="p-box">
                <div class="box8 b">
                    <div class="i1"> 
                        <i class="fa-regular fa-heart"></i>
                    </div>
                    <div class="i2">
                        <i class="fa-regular fa-eye  "></i>   
                    </div>
                 
                </div>
                <div class="content">
                    <div class="d1"><p> Accesories</p></div>
                    <div class="d2"><p>Camera</p></div>
                    <div class="d3"><p>$200.00</p></div>
                </div>
                
        </div>
           

    </div>  
        
        
      </div> 


    <Footer />  
    </div>
  )
}

export default Shop