


export const updateObjectFromArray = (items,userId,objPropName,newObjectProps) => {
  return items.map(item => {
    if(objPropName === userId) {

      return {...item, ...newObjectProps}
    }
    return item
  })
}