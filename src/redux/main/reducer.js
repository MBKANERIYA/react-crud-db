import { GET_USER_ERROR, GET_USER_PENDING, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS } from "./action";

let initialState = {
    user: [],
    isLoading: false,
    isError: null
};

let userReducer = (state = initialState, action) => {
    switch (action.type) {
        case (GET_USER_PENDING, POST_USER_ERROR): {
            return {
                ...state,
                isLoading: true
            };
        }
        case GET_USER_SUCCESS: {
            return {
                isLoading: false,
                user: action.payload,
            };
        }
        case POST_USER_SUCCESS: {
            return {
                isLoading: true,
                user: state.user.concat(action.payload)
            }
        }
        case (GET_USER_ERROR, POST_USER_ERROR): {
            return {
                isLoading: false,
                isError: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

export default userReducer;
