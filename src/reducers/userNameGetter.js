import { GET_USER_NAME } from "../actions/myApiActions";

const initialState = '';

export const userNameGetter = (state = initialState, action) => {
    switch (action.type) {
        case (GET_USER_NAME): return action.payload
        default: return state
    }
};