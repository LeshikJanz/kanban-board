// @flow

export function createAction(type: string, payloadMapper?: any) {
  const name = `board/${type}`

  function actionCreator(...args: any[]) {
    return {
      type: name,
      payload: payloadMapper ? payloadMapper(...args) : args[0],
    }
  }

  actionCreator.bind({ displayName: name })

  return actionCreator
}

export const scopedCreator: any = (scopeName: string) => createAction.bind({ scope: scopeName })
