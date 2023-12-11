import React from 'react'
import './TrideBanner.css'

export default function TrideBanner() {
    return (
        <div>
            <div className='gorjanaFave1'>
                <img src='https://www.gorjana.com/cdn/shop/files/Hero_D-2_13.jpg?v=1701993381&width=2800' className='gorjanaFaveImage' />
                <div className='gorjanaTrideBox'>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '60px',
                        color: 'white',
                        fontWeight: 400
                    }}>Tried and True </p>
                    <p style={{
                        fontFamily: 'Freight Big Pro,serif',
                        fontSize: '21px',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '-30px',
                        fontWeight: 300
                    }}>Easy-to-style layers you'll love. </p>
                    <p className='gorjanaFavBoxLink'>Shop File Jewelry</p>
                </div>
            </div>
        </div>
    )
}
