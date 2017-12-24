import {SAVE_DATA_RED,SAVE_DATA_GREEN,SAVE_DATA_BLUE, SHOW_PANEL, CANCLE_PANEL} from './type_constants';

export function saveDataRed(data) {
    return {
        type: SAVE_DATA_RED,
        data
    }
}

export function saveDataGreen(data) {
    return {
        type: SAVE_DATA_GREEN,
        data
    }
}

export function saveDataBlue(data) {
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