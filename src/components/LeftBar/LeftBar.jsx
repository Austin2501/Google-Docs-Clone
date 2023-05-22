import React from 'react'
import './LeftBar.css'
function LeftBar() {
  return (
    <div className='leftbar-box'>
      <div className='leftbar-arrow'>
        <i className="fa fa-arrow-left" />
      </div>
      <p className='leftbar-head'>Outline</p>
      <p className='leftbar-para'>
        <i>Headings that you add to the document will appear here.</i>
      </p>
    </div>
  )
}

export default LeftBar