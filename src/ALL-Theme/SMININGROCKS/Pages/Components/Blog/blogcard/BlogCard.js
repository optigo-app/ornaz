import React from 'react'
import './blogcard.css'

const BlogCard = ({dj}) => {

    const {bloghead,blogdate,blogImg}=dj;

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginBottom:'80px'}}>
         <p style={{fontSize:'42px',fontFamily: 'FreightDisp Pro Medium',color:'#7f7d85',cursor:'pointer'}} className='bloghead'>
            {bloghead}
         </p>
         <p style={{color:'#7f7d85',marginTop:'15px'}} >
            {blogdate}
         </p>
         <div style={{width:'800px',overflow:'visible',left:'-17%',position:'relative',marginTop:'35px'}}>
         <img src={blogImg} alt={''} />
         </div>
    </div>
  )
}

export default BlogCard