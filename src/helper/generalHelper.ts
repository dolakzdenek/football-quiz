function checkIfDark(_color) {
  if (invertColor(_color, true) === '#000000') {
    return -1
  } else {
    return 1
  }
}

export function adjust(hex, amount) {
  // Convert HEX to RGB
  let r = parseInt(hex.substring(1, 3), 16)
  let g = parseInt(hex.substring(3, 5), 16)
  let b = parseInt(hex.substring(5, 7), 16)

  // Calculate adjustment factor
  const factor = (amount >= 0 ? amount : -amount) / 100

  // Adjust brightness
  if (amount > 0) {
    // Darken
    r = Math.round(r * (1 - factor))
    g = Math.round(g * (1 - factor))
    b = Math.round(b * (1 - factor))
  } else {
    // Lighten
    r = Math.round(r + (255 - r) * factor)
    g = Math.round(g + (255 - g) * factor)
    b = Math.round(b + (255 - b) * factor)
  }

  // Ensure RGB values are within the 0-255 range
  r = Math.min(255, Math.max(0, r))
  g = Math.min(255, Math.max(0, g))
  b = Math.min(255, Math.max(0, b))

  // Convert RGB back to HEX
  r = r.toString(16).padStart(2, '0')
  g = g.toString(16).padStart(2, '0')
  b = b.toString(16).padStart(2, '0')

  // Return the new HEX color
  return `#${r}${g}${b}`
}
export function invertColor(hex, bw = true) {
  try {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1)
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color?.')
    }
    let r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16)
    if (bw) {
      // http://stackoverflow.com/a/3943023/112731
      return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF'
    }
    // invert color components
    r = (255 - r).toString(16)
    g = (255 - g).toString(16)
    b = (255 - b).toString(16)
    // pad each with zeros and return
    return '#' + padZero(r) + padZero(g) + padZero(b)
  } catch (error) {
    console.error('invertColor', error)
    return hex
  }
}
