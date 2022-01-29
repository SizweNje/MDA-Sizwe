import {STORE, REMOVE} from './actionTypes';

const intialState = {
    userName: ""
};

export const mainReducer = (state = intialState, action) =>{
    switch (action.type){
        case STORE:
            return {...state, userName: action.value};
        case REMOVE:
            return {...state, userName: null};

        default:
            return state;
    }
}