export const SWITCH_LOGIN = 'SWITCH_LOGIN'
export const SWITCH_ADMIN = 'SWITCH_ADMIN'
export const SWITCH_LOADING = 'SWITCH_LOADING'
export const SWITCH_CART_CHANGED = 'SWITCH_CART_CHANGED'
export const SWITCH_REFETCH = 'SWITCH_REFETCH'
export const SWITCH_KEEP_FETCH = 'SWITCH_KEEP_FETCH'
export const SWITCH_USER_DATA = 'SWITCH_USER_DATA'

export const dispatchLOGIN = (option) => ({
    type: SWITCH_LOGIN,
    payload: option,
})

export const dispatchADMIN = (option) => ({
    type: SWITCH_ADMIN,
    payload: option,
})

export const dispatchLOADING = (option) => ({
    type: SWITCH_LOADING,
    payload: option,
})

export const dispatchCART_CHANGED = (option) => ({
    type: SWITCH_CART_CHANGED,
    payload: option,
})

export const dispatchREFETCH = (option) => ({
    type: SWITCH_REFETCH,
    payload: option,
})

export const dispatchKEEP_FETCH = (option) => ({
    type: SWITCH_KEEP_FETCH,
    payload: option,
})

export const dispatchUSER_DATA = (option) => ({
    type: SWITCH_USER_DATA,
    payload: option,
})
