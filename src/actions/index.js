export const SWITCH_LOGIN = 'SWITCH_LOGIN'
export const SWITCH_LOADING = 'SWITCH_LOADING'
export const SWITCH_USER_DATA = 'SWITCH_USER_DATA'

export const dispatchLOGIN = (option) => ({
    type: SWITCH_LOGIN,
    payload: option,
})

export const dispatchLOADING = (option) => ({
    type: SWITCH_LOADING,
    payload: option,
})

export const dispatchUSER_DATA = (option) => ({
    type: SWITCH_USER_DATA,
    payload: option,
})
