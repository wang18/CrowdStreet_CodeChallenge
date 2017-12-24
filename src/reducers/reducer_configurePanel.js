import {SHOW_PANEL,CANCLE_PANEL} from '../actions/type_constants';

const defaultData={
    panelName:'',
    panelShow: false
}

export default function ConfigurePanel(state=defaultData, action) {
    switch (action.type){
        case SHOW_PANEL:
            return {
                panelName: action.panel.panelName,
                panelShow: true
            };
        case CANCLE_PANEL:
            return defaultData;
        default:
            return state;
    }
}