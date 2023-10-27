import React from 'react'
import './ProductContact.css'

export default function ProductContact() {
  return (
    <div>
      <div>
        <p className='formTitle'>CONTACT FORM</p>
      </div>
      <p className='formHelp'>Please call us at 18002120299</p>
      <div className='form'>
        <input type='text' placeholder='Your name' className='formName'/>

        <input type='text' placeholder='Your Email Address'  className='formName'/>
        <input type='text' placeholder='Your Phone Number(optional'  className='formName'/>

        <textarea type='text' placeholder='Comment here..' style={{height : '150px' ,margin : '5px'}}/>
        <button className='btnForm'>SUBMIT</button>
      </div>
    </div>
  )
}
