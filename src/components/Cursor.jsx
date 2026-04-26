import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ x: 0, y: 0 })
  const ring    = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dotRef.current.style.left = e.clientX + 'px'
      dotRef.current.style.top  = e.clientY + 'px'
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12
      ring.current.y += (pos.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top  = ring.current.y + 'px'
      }
      requestAnimationFrame(animate)
    }
    animate()

    const grow = () => {
      ringRef.current.style.width  = '52px'
      ringRef.current.style.height = '52px'
      ringRef.current.style.borderColor = 'rgba(200,185,154,0.7)'
      dotRef.current.style.transform = 'translate(-50%,-50%) scale(1.5)'
    }
    const shrink = () => {
      ringRef.current.style.width  = '32px'
      ringRef.current.style.height = '32px'
      ringRef.current.style.borderColor = 'rgba(200,185,154,0.4)'
      dotRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  />
      <div ref={ringRef} className={styles.ring} />
    </>
  )
}
