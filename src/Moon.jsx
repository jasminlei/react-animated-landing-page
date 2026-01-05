import './Moon.css'

export function Moon({ moonPhase, onClick }) {
  return (
    <div className={`moon moon-phase-${moonPhase}`} onClick={onClick}>
      <div className='moon-crater crater-1'></div>
      <div className='moon-crater crater-2'></div>
      <div className='moon-crater crater-3'></div>
    </div>
  )
}
