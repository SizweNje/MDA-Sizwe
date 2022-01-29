import {STORE, REMOVE} from './actionTypes';

export const store = (value) => ({
    type:STORE,
    value: value

})

export const remove = () => ({
    type:REMOVE,
})