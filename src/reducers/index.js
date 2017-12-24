import {combineReducers} from 'redux';
import RedTable from './reducer_red';
import ConfigurePanel from './reducer_configurePanel';
import GreenTable from './reducer_green';
import BlueTable from './reducer_blue';
const RootReducer = combineReducers({
    RedTable,
    GreenTable,
    BlueTable,
    ConfigurePanel
});

export default RootReducer;