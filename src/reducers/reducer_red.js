import {SAVE_DATA_RED} from '../actions/type_constants';

const defaultRedTable={
    N:0,
    X:0,
    M:0,
    W:0,
    D:''
}

export default function RedTable(state=defaultRedTable, action) {
    switch (action.type){
        case SAVE_DATA_RED:
            console.log('red reducer: ',action.data);
            return action.data;
        default:
            return state;
    }
}