export const SWITCH_LOGIN = 'SWITCH_LOGIN'
export const SWITCH_LOADING = 'SWITCH_LOADING'

export const dispatchLOGIN = (option) => ({
    type: SWITCH_LOGIN,
    payload: option,
})

export const dispatchLOADING = (option) => ({
    type: SWITCH_LOADING,
    payload: option,
})
