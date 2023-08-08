
export type ValuesTypesValidator = (value : string) => string | undefined



export const requiredField : ValuesTypesValidator = (value) => {
  return value || typeof value === "number" ? undefined : "Required"
}


export const maxLengthCreator = (maxLength : number) : ValuesTypesValidator => (value) => {
  if(value.length > maxLength) return `Max length ${maxLength}`
  return undefined
}

export const minLengthCreator = (minLength : number) : ValuesTypesValidator => (value) => {
  if(value.length < minLength) return `Min length ${minLength}`
  return undefined
}