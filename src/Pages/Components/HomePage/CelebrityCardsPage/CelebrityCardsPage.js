import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function CelebrityCardsPage() {

  const navigation = useNavigate();

  return (
    <div style={{ height: '600px', border: '1px solid black' }} onClick={() => navigation('/productDetailsPage')}> 

      CelebrityCardsPage

    </div>
  )
}
