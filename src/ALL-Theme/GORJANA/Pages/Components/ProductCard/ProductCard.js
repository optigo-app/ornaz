import React, { useState } from 'react'

const ProductCard = ({productsList}) => {

    const[imgFlag,setImgFlag]=useState(false);
    const[imgInx,setImgInx]=useState();

  return (
    
    <div>
        <div style={{width:'100%',display:'flex',justifyContent:'space-between',padding:'30px 0px',marginTop:'20px'}}>
            <div style={{fontFamily: 'Montserrat, sans-serif',display:'flex',gap:'20px'}}>
                <span>Filter</span>
                <span>products</span>
            </div>
            <div> sort By: 
                <select style={{border:'none',outline:'none'}}>
                    <option>Sort</option>
                    <option>Best Sellers</option>
                    <option>Top Match</option>
                    <option>New Arrivals</option>
                    <option>Price:Low to High</option>
                    <option>Price:High to Low</option>
                </select>
            </div>
        </div>
        <div style={{display:'flex',width:'100%',gap:'10px',flexWrap:'wrap'}}>
            {
               productsList.map((pl,i)=>(
                    <div 
                    style={{width:'24.5%',  transition:'all 0.7s ease',position:'relative'}} 
                    onMouseEnter={
                        ()=>{
                            setImgFlag(true) 
                            setImgInx(i)
                        }} 
                    onMouseLeave={()=>setImgFlag(false)}
                    >
                        
                        <img 
                        src={pl.prodImage.x} 
                        style={{
                            width:'100%',
                            objectFit:'cover',
                            transition:'all 0.7s ease',
                            position:'relative',
                            zIndex:0
                        }} 
                        />
                        
                        <img 
                        src={ pl.prodImage.y} 
                        style={{
                            width:'100%',
                            objectFit:'cover',
                            transition:'all 0.7s ease',
                            position:'absolute',
                            zIndex:1,
                            opacity:(imgFlag && (imgInx===i))? 1 : 0,
                            top:'0px',
                            left:'0px',
                        }} 
                        />
                    
                        <div style={{display:'flex',flexDirection:'column',fontFamily: 'FreightDisp Pro Medium',color:'#565d6d',fontSize:'18px'}}>
                            <span>{pl.prodTitle}</span>
                            <span>{pl.prodPrice}</span>
                            <span style={{color:'#8d9199'}}>More Option</span>
                        </div>
                    </div>
               )) 
            }
        </div>
    </div>
  )
}

export default ProductCard