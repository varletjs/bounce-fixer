;(() => {
  const inBrowser = typeof window !== 'undefined'
  const supportTouch = inBrowser && 'ontouchstart' in window

  function createBounceFixer() {
    if (!supportTouch) {
      return {
        enable() {},
        disable() {},
      }
    }

    let startY

    function handleTouchstart(event) {
      startY = event.touches[0].clientY
    }

    function handleTouchmove(event) {
      let el = event.target

      while (el !== document.body && el !== document.documentElement) {
        const { overflowY } = window.getComputedStyle(el)
        const isScroller = overflowY === 'auto' || overflowY === 'scroll'
        const allowScroll = isScroller && el.scrollHeight > el.clientHeight

        if (allowScroll) {
          const currentY = event.touches[0].clientY
          const isReachTop = startY <= currentY && el.scrollTop == 0
          const offsetBottom = Math.abs(
            el.scrollHeight - el.scrollTop - el.clientHeight
          )
          const isReachBottom =
            startY >= currentY && (offsetBottom === 0 || offsetBottom === 1)

          if (isReachTop || isReachBottom) {
            if (event.cancelable) {
              event.preventDefault()
            }
          }

          return
        }

        el = el.parentNode
      }
    }

    function enable() {
      window.addEventListener('touchstart', handleTouchstart, {
        passive: false,
      })
      window.addEventListener('touchmove', handleTouchmove, { passive: false })
    }

    function disable() {
      window.removeEventListener('touchstart', handleTouchstart)
      window.removeEventListener('touchmove', handleTouchmove)
    }

    return {
      enable,
      disable,
    }
  }

  if (inBrowser) {
    window.BounceFixer = { createBounceFixer }
  }
})()
