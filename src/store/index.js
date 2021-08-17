import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { SET_AUTH } from '../constants/actions';

const StoreContext = createContext();

const initialState = {
    auth: {
        isValid: false,
    },
};

const reducer = (state, action) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: {
                    ...action.payload,
                },
            };
        default:
            return state;
    }
};

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = { state, dispatch };

    return (
        <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
    );
};

StoreProvider.propTypes = {
    children: PropTypes.object,
};

export { StoreProvider, StoreContext };
