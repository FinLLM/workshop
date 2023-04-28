const setRem = () => {
  const screenwidth = document.documentElement.clientWidth
  let scale = 1
  const maxwidth = 750
  if (screenwidth >= maxwidth) {
    scale = screenwidth / 1920
  } else if (screenwidth >= 375) {
    scale = screenwidth / 1600
  } else {
    scale = 375 / 1920
  }
  const rem = 16 * scale
  document.documentElement.style.fontSize = `${rem}px`
}

export { setRem }
