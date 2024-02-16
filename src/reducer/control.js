import * as actions from '../actions'

const initState = {
    isLogin: false,
    isLoading: false,
    reFetch: false,
    keepFetch: false,
    userData: {},
}

const controlReducer = (state = initState, action) => {
    switch (action.type) {
        case actions.SWITCH_LOGIN:
            return {
                ...state,
                isLogin: action.payload,
            }
        case actions.SWITCH_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case actions.SWITCH_REFETCH:
            return {
                ...state,
                reFetch: action.payload,
            }
        case actions.SWITCH_KEEP_FETCH:
            return {
                ...state,
                keepFetch: action.payload,
            }
        case actions.SWITCH_USER_DATA:
            return {
                ...state,
                userData: action.payload,
            }
        default:
            return state
    }
}

export default controlReducer
