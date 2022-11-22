import { useReducer } from "react";
import AppContext from "./AppContext";

let dispatch;

const initialState = {
    auth: null,
};

function reducer(state, action) {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                authLoaded: action.payload.authLoaded,
                auth: action.payload.auth,
            };

        default:
            return state;
    }
}

const AppProvider = (props) => {
    const [ state, stateDispatch ] = useReducer(reducer, initialState);

    dispatch = stateDispatch;

    return <AppContext.Provider value={state}>{props.children}</AppContext.Provider>;
};

export default AppProvider