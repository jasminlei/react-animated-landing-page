import './Bee.css'

export function Bee({ className = '' }) {
  return (
    <div className={`bee ${className}`}>
      <div className='bee-body'>
        <div className='bee-stripe stripe-1'></div>
        <div className='bee-stripe stripe-2'></div>
        <div className='bee-stripe stripe-3'></div>
      </div>
      <div className='bee-wing wing-left'></div>
      <div className='bee-wing wing-right'></div>
      <div className='bee-head'>
        <div className='bee-antenna antenna-left'></div>
        <div className='bee-antenna antenna-right'></div>
      </div>
      <div className='bee-stinger'></div>
    </div>
  )
}
