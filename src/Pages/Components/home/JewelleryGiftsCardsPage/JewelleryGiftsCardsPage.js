import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function JewelleryGiftsCardsPage() {
  
  const navigation = useNavigate();

  return (
    <div style={{height : '400px' , border : '1px solid black'}} onClick={() => navigation('/jewelleryPage')}>JewelleryGiftsCardsPage</div>
  )
}
