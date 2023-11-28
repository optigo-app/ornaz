import React from 'react'
import './FeaturedCollection.css'
import { Cards } from '../HomeCards/Cards'

import shop1 from '../../../assets/shopByCategory/shopByCategory1.webp'
import shop2 from '../../../assets/shopByCategory/shopByCategory2.jpg'
import shop3 from '../../../assets/shopByCategory/shopByCategory3.webp'
import shop4 from '../../../assets/shopByCategory/shopByCategory4.jpg'

export default function FeaturedCollection() {


    let demoJSON = [
        { prodImg: shop1, prodtitle: 'Women’s Engagement Rings' },
        { prodImg: shop2, prodtitle: 'Men’s Engagement Rings' },
        { prodImg: shop3, prodtitle: 'Eternity Bands' },
        { prodImg: shop4, prodtitle: 'Fine Jewellery Gifts' },
        { prodImg: shop4, prodtitle: 'Fine Jewellery Gifts' },
    ]

    return (
        <div>
            <div>
                {/* <Cards sallerCardImg={demoJSON} type={'category'} /> */}
            </div>
        </div>
    )
}
