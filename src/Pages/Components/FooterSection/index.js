import React from 'react'
import AllAboutOrnaz from './AllAboutOrnaz'
import OrnazExperience from './OrnazExperience'
import Policies from './Policies'
import WhyOrnaz from './WhyOrnaz'

export default function FooterSection(){
  return (
    <div style={{display : 'flex'}}>
      <OrnazExperience />
      <WhyOrnaz />
      <AllAboutOrnaz />
      <Policies />
    </div>
  )
}
