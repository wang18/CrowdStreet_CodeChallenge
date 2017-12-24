import {SAVE_DATA} from './type_constants';

export function saveData(data) {
    return {
        type: SAVE_DATA,
        data
    }
}