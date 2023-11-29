import React from 'react'
import sustain1 from '../../assets/sustain/sustain1.webp'
import sustain2 from '../../assets/sustain/sustain2.webp'

const SustainAbility = () => {
  return (
    <>
    <div style={{display:'flex',justifyContent:'center',width:'100%',flexDirection:'column',padding:'45px 85px 10px',gap:"12px"}}>
    <div style={{textAlign:'center'}}>
        <p style={{fontSize:'40px',fontFamily:'FreightDisp Pro Medium',color:'#7d7f85'}}>Committed on Sustainability</p>
        <p style={{fontSize:'14px',fontFamily:"TT Commons, sans-serif",color:'#7d7f85'}}>For our planet, our home, and our future</p>
    </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'12px'}}>
        <div style={{background:'#fafafa',padding:'20px 20px 0px 20px',textAlign:'center'}}> 
            <img src={sustain1} alt={''} style={{height:'200px',width:'200px'}}/>
            <p style={{marginTop:"7px",color:'#7d7f85',fontSize:'13px',fontFamily:"TT Commons, sans-serif",fontWeight:'600'}}>1% for the Planet</p>
        </div>
        <div style={{background:'#fafafa',padding:'20px 20px 0px 20px',textAlign:'center'}}>
            <img src={sustain2} alt={''} style={{height:'200px',width:'200px',objectFit:'cover'}}/>
            <p style={{marginTop:"7px",color:'#7d7f85',fontSize:'13px',fontFamily:"TT Commons, sans-serif",fontWeight:'600'}}> Certified Butterfly Mark on ESG+</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default SustainAbility