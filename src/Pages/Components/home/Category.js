import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CategoryPage() {

  const navigation = useNavigate();

  return (
    <div style={{height : '400px' , border : '1px solid black'}} onClick={() => navigation('jewelleryPage')}>CategoryPage</div>
  )
}
