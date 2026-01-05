import { useEffect, useRef } from 'react'
import { Bee } from './Bee'

export function BeeAnimation() {
  const beeRefs = useRef([])

  useEffect(() => {
    let animationId
    let time = 0
    const previousPositions = beeRefs.current.map(() => ({ x: 0, y: 0 }))

    const animateBees = () => {
      time += 0.01

      beeRefs.current.forEach((bee, index) => {
        if (!bee) return

        const positions = [
          { baseX: 80, baseY: 200 },
          { baseX: 100, baseY: 500 },
          { baseX: window.innerWidth - 100, baseY: 180 },
          { baseX: window.innerWidth - 120, baseY: 450 },
          { baseX: window.innerWidth - 90, baseY: 700 },
          { baseX: window.innerWidth / 2 - 100, baseY: 100 },
          { baseX: window.innerWidth / 2 + 100, baseY: 80 },
          { baseX: window.innerWidth / 2, baseY: window.innerHeight - 100 },
        ]

        const pos = positions[index] || positions[0]
        const baseY = pos.baseY
        const baseX = pos.baseX

        const offsetX = Math.sin(time + index * 1.5) * 30
        const offsetY = Math.cos(time * 0.8 + index * 2) * 20

        const x = baseX + offsetX
        const y = baseY + offsetY

        const velocityX = Math.cos(time + index * 1.5) * 30 * 0.01
        const velocityY = -Math.sin(time * 0.8 + index * 2) * 20 * 0.01 * 0.8

        const rotation = Math.atan2(velocityY, velocityX) * (180 / Math.PI)

        previousPositions[index] = { x, y }

        bee.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`
      })

      animationId = requestAnimationFrame(animateBees)
    }

    animateBees()
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <>
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (beeRefs.current[i] = el)}
          className={`bee-container bee-container-${i + 1}`}
        >
          <Bee className={`bee-${i + 1}`} />
        </div>
      ))}
    </>
  )
}
