import React from 'react'
import './Content.css'
import ContentItem from './ContentItem'
function Content() {
  return (
    <div className='content'>
      <div className='content-wrapper'>
        <div className="logo">
        <img src={process.env.PUBLIC_URL+"imgs/logo.png"} alt="logo" />
        </div>
        <div className="content-section">
        <h4>Lorem ipsum dolor sit asmet?</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
        </div>
      <div className="content-items">
        <ContentItem src={process.env.PUBLIC_URL+'/imgs/css.png'}/>
        <ContentItem src={process.env.PUBLIC_URL+'/imgs/html.png'}/>
        <ContentItem src={process.env.PUBLIC_URL+'/imgs/url.png'}/>
        </div>  
      </div>
    </div>
  )
}

export default Content
