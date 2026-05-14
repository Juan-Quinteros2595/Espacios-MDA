import { useRef, useCallback } from "react"

interface SwipeOptions {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  minSwipeDistance?: number
}

export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  minSwipeDistance = 50,
}: SwipeOptions) {
  const touchStartX = useRef(0)

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    const distance = touchStartX.current - e.changedTouches[0].clientX

    if (distance > minSwipeDistance) {
      onSwipeLeft?.()
    } else if (distance < -minSwipeDistance) {
      onSwipeRight?.()
    }
  }, [minSwipeDistance, onSwipeLeft, onSwipeRight])

  return { onTouchStart, onTouchEnd }
}