import React from 'react'
import './Stars.css'

export function Stars({ count = 100 }) {
  const [stars] = React.useState(() =>
    Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 3,
    }))
  )

  return (
    <div className='stars'>
      {stars.map((star) => (
        <div
          key={star.id}
          className='star'
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
