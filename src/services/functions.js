export const hasPresent = (value) => {
  if (typeof value === 'undefined') return false
  if (Array.isArray(value)) return value.length > 0
  if (typeof value === 'object') return Object.keys(value).length > 0
}
