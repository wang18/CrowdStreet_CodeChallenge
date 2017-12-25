import expect from 'expect';
import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
Enzyme.configure({ adapter: new Adapter() });
import RootReducer from './reducers/index';
import ReduxPromise from "redux-promise";
import {createStore, applyMiddleware} from 'redux';
import ControlPanel from './components/component_controlPanel';
import {Provider} from 'react-redux';
import TableContainer from './components/component_table_container';
import Table from "./components/component_table";

describe('Pokedex unit test', () => {
   const appStore = createStore(
        RootReducer,
        applyMiddleware(ReduxPromise)
    );

    const context = {appStore};
   it('renders App without exploding', ()=> {
       expect(
           shallow(
               <Provider store={appStore}>
                 <App />
               </Provider>
           ).length
       ).toEqual(1);
   });


    it('renders ControlPanel withour exploding',()=>{
      expect(shallow(
          <Provider store={appStore}>
            <ControlPanel/>
          </Provider>
      ).length).toEqual(1);
    });

    it('renders Table Container withour exploding',()=>{
        expect(shallow(
            <Provider store={appStore}>
              <TableContainer/>
            </Provider>
        ).length).toEqual(1);
    });

    it('renders Table withour exploding',()=>{
        expect(shallow(
            <Provider store={appStore}>
              <Table/>
            </Provider>
        ).length).toEqual(1);
    });

    it('render correct control panel', () => {
      const ControlPanelSample = mount(<Provider store={appStore}>
        <ControlPanel />
      </Provider>);
      const title=ControlPanelSample.find('h1');
      expect(
          title.text()
      ).toBe(
          'Table '
      );
    });

    it('render correct table', () => {
        const dataArr = [];
        dataArr.push(['ini','ini','ini','ini','ini']);
        dataArr.push(['ini','ini','ini','ini','ini']);
        dataArr.push(['ini','ini','ini','ini','ini']);
        dataArr.push(['ini','ini','ini','ini','ini']);
        dataArr.push(['ini','ini','ini','ini','ini']);
        const TableSample = mount(<Provider store={appStore}>
          <Table tableData={dataArr} />
        </Provider>);
        const tr=TableSample.find('tr');
        expect(
            tr.length
        ).toEqual(5);
    });
});