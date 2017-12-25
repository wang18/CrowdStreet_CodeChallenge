import {SAVE_DATA_RED,GET_TABLES_RED} from '../actions/type_constants';

const defaultRedTable={
    N:0,
    X:0,
    M:0,
    W:-1,
    D:''
}

export default function RedTable(state=defaultRedTable, action) {
    switch (action.type){
        case SAVE_DATA_RED:
            return action.data;
        case GET_TABLES_RED:
            return action.red;
        default:
            return state;
    }
}