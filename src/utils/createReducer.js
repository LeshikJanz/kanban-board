export const DefaultCase = Symbol('DefaultCase')

export const createReducer:any = (declaration:any, initialValue:any) => {
  return function reducerFn(state = initialValue, action:any) {
    const reducer = declaration[action.type] || declaration[DefaultCase]

    return reducer ? reducer(state, action.payload, action) : state
  }
}
