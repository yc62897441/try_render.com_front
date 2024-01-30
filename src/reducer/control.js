import * as actions from '../actions'

const initState = {
    isLogin: false,
    isLoading: false,
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
