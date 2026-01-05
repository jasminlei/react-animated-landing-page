import './Flower.css'

export function Flower1({ className = '' }) {
  return (
    <div className={`flower flower1 ${className}`}>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className={`flower1-petal flower1-petal-${i + 1}`}></div>
      ))}
      <div className='flower1-center'></div>
    </div>
  )
}

export function Flower2({ className = '' }) {
  return (
    <div className={`flower flower1 flower2 ${className}`}>
      {Array.from({ length: 12 }, (_, i) => (
        <div key={i} className={`flower1-petal flower1-petal-${i + 1}`}></div>
      ))}
      <div className='flower1-center'></div>
    </div>
  )
}

export function Flower3({ className = '' }) {
  return (
    <div className={`flower flower3 ${className}`}>
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`outer-${i}`}
          className={`flower3-petal flower3-outer-petal flower3-outer-petal-${
            i + 1
          }`}
        ></div>
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`inner-${i}`}
          className={`flower3-petal flower3-inner-petal flower3-inner-petal-${
            i + 1
          }`}
        ></div>
      ))}
      <div className='flower3-center'></div>
    </div>
  )
}

export function Flower4({ className = '' }) {
  return (
    <div className={`flower flower3 flower4 ${className}`}>
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`outer-${i}`}
          className={`flower3-petal flower3-outer-petal flower3-outer-petal-${
            i + 1
          }`}
        ></div>
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`inner-${i}`}
          className={`flower3-petal flower3-inner-petal flower3-inner-petal-${
            i + 1
          }`}
        ></div>
      ))}
      <div className='flower3-center'></div>
    </div>
  )
}

export function Flower5({ className = '' }) {
  return (
    <div className={`flower flower5 ${className}`}>
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`outer-${i}`}
          className={`flower5-petal flower5-outer flower5-outer-${i + 1}`}
        ></div>
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`mid-${i}`}
          className={`flower5-petal flower5-mid flower5-mid-${i + 1}`}
        ></div>
      ))}
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={`inner-${i}`}
          className={`flower5-petal flower5-inner flower5-inner-${i + 1}`}
        ></div>
      ))}
      <div className='flower5-center'></div>
    </div>
  )
}

export function Flower6({ className = '' }) {
  return (
    <div className={`flower flower5 flower6 ${className}`}>
      {Array.from({ length: 8 }, (_, i) => (
        <div
          key={`outer-${i}`}
          className={`flower5-petal flower5-outer flower5-outer-${i + 1}`}
        ></div>
      ))}
      {Array.from({ length: 6 }, (_, i) => (
        <div
          key={`mid-${i}`}
          className={`flower5-petal flower5-mid flower5-mid-${i + 1}`}
        ></div>
      ))}
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={`inner-${i}`}
          className={`flower5-petal flower5-inner flower5-inner-${i + 1}`}
        ></div>
      ))}
      <div className='flower5-center'></div>
    </div>
  )
}
