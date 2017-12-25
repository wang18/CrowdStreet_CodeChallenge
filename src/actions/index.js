import {SAVE_DATA_RED,SAVE_DATA_GREEN,SAVE_DATA_BLUE, SHOW_PANEL, CANCLE_PANEL,GET_TABLES_RED,GET_TABLES_BLUE,GET_TABLES_GREEN} from './type_constants';
import {addTableRedData,addTableGreenData, addTableBlueData,getTableBlueData,getTableGreenData, getTableRedData} from '../utils/AppAPI';

export function saveDataRed(data) {
    console.log('action: ', data);
    addTableRedData(data);
    return {
        type: SAVE_DATA_RED,
        data
    }
}

export function saveDataGreen(data) {
    addTableGreenData(data);
    return {
        type: SAVE_DATA_GREEN,
        data
    }
}

export function saveDataBlue(data) {
    addTableBlueData(data);
    return {
        type: SAVE_DATA_BLUE,
        data
    }
}


export function showConfigurePanel(panel) {
    return {
        type: SHOW_PANEL,
        panel
    }
}

export function cancelPanel() {
    return {
        type: CANCLE_PANEL
    }
}

export function fetchTableRedData() {
    const {red}=getTableRedData();
    return {
        type: GET_TABLES_RED,
        red
    }
}
export function fetchTableGreenData() {
    const {green}=getTableGreenData();
    return {
        type: GET_TABLES_GREEN,
        green
    }
}
export function fetchTableBlueData() {
    const {blue}=getTableBlueData();
    return {
        type: GET_TABLES_BLUE,
        blue
    }
}