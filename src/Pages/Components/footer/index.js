import React from 'react'
import AllAboutOrnaz from './allaboutornaz'
import OrnazExperience from './experience'
import Policies from './Policies'
import WhyOrnaz from './WhyOrnaz'

export default function Footer(){
  return (
    <div style={{display : 'flex'}}>
      <OrnazExperience />
      <WhyOrnaz />
      <AllAboutOrnaz />
      <Policies />
    </div>
  )
}
