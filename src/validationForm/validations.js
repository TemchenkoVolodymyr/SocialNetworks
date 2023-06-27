

export const requiredField = (value) => {
  return value || typeof value === "number" ? undefined : "Required"
}
export const maxLengthCreator = (maxLength) => (value) => {
  if(value.length > maxLength) return `Max length ${maxLength}`
  return undefined
}

export const minLengthCreator = (minLength) => (value) => {
  if(value.length < minLength) return `Min length ${minLength}`
  return undefined
}