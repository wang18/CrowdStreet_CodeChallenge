import {SAVE_DATA_BLUE} from '../actions/type_constants';

const defaultBlueTable={
    N:0,
    X:0,
    M:0,
    W:0,
    D:''
}

export default function BlueTable(state=defaultBlueTable, action) {
    switch (action.type){
        case SAVE_DATA_BLUE:
            console.log('blue reducer: ',action.data);
            return action.data;
        default:
            return state;
    }
}