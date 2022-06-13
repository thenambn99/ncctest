import React from 'react'
import './ContentItem.css'
function ContentItem(props) {
  return (
      <div className="content-item">
        <h3>Lorem ipsum dolor sit amet</h3>
        <div className="item-para">
        <img src={props.src} alt="img" className='img-item' />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
        </div>
      </div>
  )
}

export default ContentItem
