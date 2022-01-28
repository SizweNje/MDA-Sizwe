import {STORE, REMOVE} from './actionTypes';

const intialState = {
    userName: 0
};

export const mainReducer = (state = intialState, action) =>{
    switch (action.type){
        case STORE:
            return {...state, userName: state.userName +1};
        case REMOVE:
            return {...state, userName: state.userName -1};

        default:
            return state;
    }
}