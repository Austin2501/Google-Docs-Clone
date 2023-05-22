import React from 'react'
import './RightBar.css'
function RightBar() {
  // sidebar which contains Icons of other google services
  return (
    <div className='rightbar-box'>
      <button className='rightbar-image-btn'>
        <img
          src="data:image/png;base64,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"
          className='rightbar-image'
          alt="logo img" />
      </button>

      <a href='https://calendar.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://keep.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://tasks.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://contacts.google.com/' className='rightbar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
        width={20} height={20} alt="" />
      </a>

      <a href='https://maps.google.com/' className='rightbar-app-icon'>
        <img
          src="https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png"
          width={20} height={20} alt="" />
      </a>

      <i className="fa fa-plus rightbar-action-icon"></i>
      <i className="fa fa-angle-right rightbar-action-icon"></i>
    </div>
  )
}

export default RightBar