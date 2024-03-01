import React from 'react'
import image1 from '../../../assets/shopifysection/image1.webp'
import image2 from '../../../assets/shopifysection/image2.webp'
import image3 from '../../../assets/shopifysection/iamge3.webp'
import image4 from '../../../assets/shopifysection/image4.webp'
import image5 from '../../../assets/shopifysection/image5.webp'
import image6 from '../../../assets/shopifysection/image6.webp'
import './shopifySection.css'

export default function ShopifySection() {

    const dataJSON = [
        {
            id: 0,
            Title: 'Haute Couture',
            Decription: 'Revealing the beauty of lab grown diamonds in high jewelry. From the house of inspired designers, each bringing a unique taste in design and excellent quality in craftsmanship. A preview of our stunning atelier designs captivating every moment in time.',
            Link: 'DISCOVER MORE',
            images: image1
        },
        {
            id: 1,
            Title: 'Carbon For Carbon',
            Decription: 'Smiling Rocks has launched Carbon For Carbon campaign and is working with charity partners to plant trees and improve the environment impact of unnecessary carbon usage.',
            Link: 'LISTEN NOW',
            images: image2
        },
        {
            id: 2,
            Title: 'Smiling with Celebrities at Red Carpet',
            Decription: 'Celebrities and Top Influencers wearing sustainable lab-grown diamonds jewelry',
            Link: 'DISCOVER',
            images: image3
        },
        {
            id: 3,
            Title: 'Meet The Founders',
            Decription: 'The founders of Smiling Rocks have a mission to spread smiles through supporting different charity organizations.',
            Link: 'DISCOVER',
            images: image4
        },
        {
            id: 4,
            Title: 'Featured In',
            Decription: 'Check out the press coverage of Smiling Rocks by top media in the world',
            Link: 'DISCOVER',
            images: image5
        },
        {
            id: 5,
            Title: 'Listen To Smiling Rocks Podcast',
            Decription: 'Tune into Smiling Rocks podcast and join the Smiling Community. Here we will share thoughts with guest speakers on jewelry industry and sustainability.',
            Link: 'LISTEN NOW',
            images: image6
        },
    ]
    return (
        <div>
            {
                dataJSON.map((data, i) => (
                    <div>
                        <div className='shopifyMain'>
                            <div className='shopifyDesc'>
                                <p className='shopifyTitle'>{data.Title}</p>
                                <p className='shopifyDescription'>{data.Decription}</p>
                                <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '1px' }}>{data.Link}</p>
                            </div>
                            <div className='shopifyMainImage'>
                                <img src={data.images} style={{ height: '100%',width:'100%'}} />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
