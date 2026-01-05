import { Flower1, Flower2, Flower3, Flower4, Flower5, Flower6 } from './Flower'

const flowerLayout = [
  { className: 'flower-container flower-1', type: Flower3 },
  { className: 'flower-container flower-2', type: Flower1 },
  { className: 'flower-container flower-3', type: Flower5 },
  { className: 'flower-container flower-4', type: Flower2 },
  { className: 'flower-container flower-5', type: Flower6 },
  { className: 'flower-container flower-6', type: Flower3 },
  { className: 'flower-container flower-7', type: Flower1 },
  { className: 'flower-container flower-8', type: Flower5 },
  { className: 'flower-container flower-9', type: Flower4 },
  { className: 'flower-container flower-10', type: Flower2 },
  { className: 'flower-container flower-11', type: Flower6 },
  { className: 'flower-container flower-12', type: Flower3 },
  { className: 'flower-container flower-13', type: Flower1 },
  { className: 'flower-container flower-14', type: Flower5 },
  { className: 'flower-container flower-15', type: Flower4 },
  { className: 'flower-container flower-16', type: Flower2 },
  { className: 'flower-container flower-17', type: Flower6 },
  { className: 'flower-container flower-18', type: Flower3 },
  { className: 'flower-container flower-19', type: Flower1 },
  { className: 'flower-container flower-20', type: Flower5 },
]
export function FlowerField() {
  return (
    <>
      {flowerLayout.map(({ className, type: FlowerComponent }, i) => (
        <div className={className} key={i}>
          {FlowerComponent ? <FlowerComponent /> : null}
        </div>
      ))}
    </>
  )
}
