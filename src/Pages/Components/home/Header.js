import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const navigation = useNavigate();

  return (
    <div style={{ height: '150px', border: '1px solid black' }}>
      header
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <h5 style={{ margin: '20px' , cursor : 'pointer' }} onClick={() => navigation('/RegisterPage')}>REGISTER</h5>

        <h5 style={{ margin: '20px' , cursor : 'pointer' }} onClick={() => navigation('/LoginPage')}>LOGIN</h5>
      </div>

    </div>
  )
}
