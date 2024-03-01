import React from 'react'

export function GifItem({ title, url }) {

  return (
    <div className='card'>
        <img src={url} alt={title} />
        <span>{title}</span>
    </div>
  )
}
