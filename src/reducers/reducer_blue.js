import {SAVE_DATA_BLUE, GET_TABLES_BLUE} from '../actions/type_constants';

const defaultBlueTable={
    N:0,
    X:0,
    M:0,
    W:-1,
    D:''
}

export default function BlueTable(state=defaultBlueTable, action) {
    switch (action.type){
        case SAVE_DATA_BLUE:
            return action.data;
        case GET_TABLES_BLUE:
            return action.blue;
        default:
            return state;
    }
}