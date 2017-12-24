import {SAVE_DATA_GREEN} from '../actions/type_constants';

const defaultGreenTable={
    N:0,
    X:0,
    M:0,
    W:0,
    D:''
}

export default function GreenTable(state=defaultGreenTable, action) {
    switch (action.type){
        case SAVE_DATA_GREEN:
            console.log('green reducer: ',action.data);
            return action.data;
        default:
            return state;
    }
}