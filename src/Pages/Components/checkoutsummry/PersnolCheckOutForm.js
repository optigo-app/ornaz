import React from 'react'

export default function PersnolCheckOutForm() {
  return (
    <div>

      <div>
        <p>SHIPPING ADDRESS</p>
      </div>
      <div>
        <input defaultChecked type='radio' /> Enter a new address
      </div>

      <div>
        <div>
          <p>First name </p>
          <input type='text' />
        </div>
        <div>
          <p>Last name </p>
          <input type='text' />
        </div>
      </div>

      <div>
        <div>
          <p>Address </p>
          <input type='text' />
        </div>
        <div>
          <p>Address </p>
          <input type='text' />
        </div>
      </div>

      <div>
        <div>
          <p>City</p>
          <input type='text' />
        </div>
        <div>
          <p>PIN </p>
          <input type='text' />
        </div>
      </div>

      <div>
        <p>State </p>
        <input type='text' />
      </div>

      <div>
        <p>Country </p>
        <input type='label'  value='India' />
      </div>
    </div>
  )
}
