import {SAVE_DATA_GREEN,GET_TABLES_GREEN} from '../actions/type_constants';

const defaultGreenTable={
    N:0,
    X:0,
    M:0,
    W:-1,
    D:''
}

export default function GreenTable(state=defaultGreenTable, action) {
    switch (action.type){
        case SAVE_DATA_GREEN:
            return action.data;
        case GET_TABLES_GREEN:
            return action.green;
        default:
            return state;
    }
}