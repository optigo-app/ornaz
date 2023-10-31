import React from 'react'
import './ShopByFilter.css'
import { BTN_APPLY, BTN_CLEAREALL, SHOP_BY } from '../../../Constants'

const Collections = [
  {
    id: '0',
    name: 'Mystic'
  },
  {
    id: '1',
    name: 'gift'
  }
]

const Gender = [
  {
    id: '0',
    name: 'Men'
  },
  {
    id: '1',
    name: 'Women'
  }
]

const Metal = [
  {
    id: '0',
    name: 'White Gold'
  },
  {
    id: '1',
    name: 'Rose Gold'
  },
  {
    id: '2',
    name: 'Yellow Gold'
  }
]

const Occasion = [
  {
    id: '0',
    name: 'Fashion'
  },
  {
    id: '1',
    name: 'Fashion'
  },
  {
    id: '2',
    name: 'Fashion'
  },
  {
    id: '3',
    name: 'Fashion'
  }
]

const Price = [
  {
    id: '0',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '1',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '2',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '3',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '4',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '5',
    price: '50 Thousand - 1 Lakh'
  },
  {
    id: '6',
    price: '50 Thousand - 1 Lakh'
  },
]

const shape = [
  {
    id: '0',
    shape: 'Round'
  },
  {
    id: '1',
    shape: 'Round'
  },
  {
    id: '2',
    shape: 'Round'
  },
  {
    id: '3',
    shape: 'Round'
  },
  {
    id: '4',
    shape: 'Round'
  }, {
    id: '5',
    shape: 'Round'
  },
  {
    id: '6',
    shape: 'Round'
  },
]

const stonType = [
  {
    id: '0',
    name: 'Solitare'
  },
  {
    id: '1',
    name: 'Solitare'
  },
  {
    id: '3',
    name: 'Solitare'
  }

]

 


export default function ShopByFilter() {
  return (
    <div className='filterMain'>
      <div className='head'>
        <p style={{ color: 'white', margin: '18px' }}>{SHOP_BY}</p>
        <button className='btnClear'>{BTN_CLEAREALL}</button>
      </div>
      <div style={{border : '0.1px solid #cecece' , height : '50px'}}>
        <p className='totalProduct'>Total Product: (30)</p>
      </div>
      <div className='priceTop'>
        <p style={{ color : '#888' , margin :0}}>Price</p>
        <div style={{ display: 'flex' }}>
          <input style={{ width: '49%',height : '40px', float: 'left' }} id="id_price_0" type="number" min="0" class="form-control d-inline" placeholder="from" />
          <span style={{ float: 'left' }}> - </span>
          <input style={{ width: '49%', float: 'left' }} id="id_price_1" type="number" min="0" class="form-control d-inline" placeholder="to" />
        </div>
      </div>
      <div className='gender'>
        <p className='checkTitle'>Gender</p>
        {
          Gender.map((data, index) =>
            <div key={index} className='chekBoxOrName'>
              <input type='checkbox' /><p className='checkName'>{data.name}</p>
            </div>
          )
        }
      </div>

      <div className='metal'>
        <p className='checkTitle'>Metal</p>
        {
          Metal.map((data, index) =>
            <div key={index} className='chekBoxOrName'>
              <input type='checkbox' /><p className='checkName'>{data.name}</p>
            </div>
          )
        }
      </div>

      <div className='Occasion'>
        <p className='checkTitle'>Occasion</p>
        {
          Occasion.map((data, index) =>
            <div key={index} className='chekBoxOrName'>
              <input type='checkbox' /><p className='checkName'>{data.name}</p>
            </div>
          )
        }
      </div>

      <div className='price'>
        <p className='checkTitle'>Price</p>
        {
          Price.map((data, index) =>
            <div key={index} className='chekBoxOrName'>
              <input type='checkbox' /><p className='checkName'>{data.price}</p>
            </div>
          )
        }
      </div>

      <div className='shape'>
        <p className='checkTitle'>Shape</p>
        {
          shape.map((data, index) =>
            <div key={index} className='chekBoxOrName'>
              <input type='checkbox' /><p className='checkName'>{data.shape}</p>
            </div>
          )
        }
      </div>

      <div className='stonType'>
        <p className='checkTitle'>Stone Type</p>
        {
          stonType.map((data, index) =>
            <div key={index} className='chekBoxOrName'>
              <input type='checkbox' /><p className='checkName'>{data.name}</p>
            </div>
          )
        }
      </div>
      <div>
        <button className='btnApply'>{BTN_APPLY}</button>
      </div>



    </div>
  )
}
