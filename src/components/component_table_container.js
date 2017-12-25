import React, {Component} from 'react';
import {connect} from 'react-redux';
import Table from "./component_table";
import {showConfigurePanel,fetchTableRedData, fetchTableGreenData, fetchTableBlueData} from '../actions/index';
import {bindActionCreators} from 'redux';
class TableContainer extends Component {
    componentWillMount(){
        this.props.fetchTableRedData();
        this.props.fetchTableGreenData();
        this.props.fetchTableBlueData();
    }

    createDataArray(N,X,M,D){
        const dataArr = [];
        let tmp=Number.parseInt(N,10);
        const increase=parseInt(X,10);
        const maxNum=parseInt(M,10);
        if(D==='LTR-UP'){
            let flag=true;
            for(let i=0;i<5;i++){
                let row=[];
                if (tmp > maxNum) {
                    row=['','','','',''];
                }else{
                    for(let j=0;j<5;j++) {
                        if(tmp<=maxNum){
                            flag ? row[j]=tmp:row[4-j]=tmp;
                            tmp += increase;
                            continue;
                        }
                        else if ((tmp > maxNum) ) {
                            flag ? row[j]='':row[4-j]='';
                        }
                    }
                }
                dataArr.push(row);
                flag=!flag;
            }
        }else if(D==='RTL-UP'){
            let flag=false;
            for(let i=0;i<5;i++){
                let row=[];
                if (tmp > maxNum) {
                    row=['','','','',''];
                }else{
                    for(let j=0;j<5;j++) {
                        if(tmp<=maxNum){
                            flag ? row[j]=tmp:row[4-j]=tmp;
                            tmp += increase;
                            continue;
                        }
                        else if ((tmp > maxNum) ) {
                            flag ? row[j]='':row[4-j]='';
                        }
                    }
                }
                dataArr.push(row);
                flag=!flag;
            }
        }else{
            dataArr.push(['ini','ini','ini','ini','ini']);
            dataArr.push(['ini','ini','ini','ini','ini']);
            dataArr.push(['ini','ini','ini','ini','ini']);
            dataArr.push(['ini','ini','ini','ini','ini']);
            dataArr.push(['ini','ini','ini','ini','ini']);
        }
        return dataArr;
    }

    handleClickConfigure(name){
       this.props.showConfigurePanel({
           panelName: name,
           panelShow :true
       });

    }

    getDataArray(generalTableData){
        const {N, X, M, D}=generalTableData;
        return this.createDataArray(N,X,M,D).reverse();
    }

    render(){
        const WR=this.props.RedTable.W;
        const WG=this.props.GreenTable.W;
        const WB=this.props.BlueTable.W;
        const dataArrayRed = this.getDataArray(this.props.RedTable);
        const dataArrayGreen = this.getDataArray(this.props.GreenTable);
        const dataArrayBlue = this.getDataArray(this.props.BlueTable);
        const tableRedWidthStyle = {width: WR===-1 ? '30%':`${WR}%`};
        const tableGreenWidthStyle = {width: WG===-1 ? '30%':`${WG}%`};
        const tableBlueWidthStyle = {width: WB===-1 ? '30%':`${WB}%`};
        return (<div className="ui container">
            <div className="ui title"><b>TEST #6531</b></div >

            <div className="ui grid centered wrapper">
                <div className="wide column centered redTable topTable" style={tableRedWidthStyle}>
                    <Table tableData={dataArrayRed }/>
                    <button className="ui button" onClick={this.handleClickConfigure.bind(this, 'RED')}>Configure</button>
                    <label>{WR===-1 ? 0 : WR}%</label>
                </div>

                <div  className="wide column centered greenTable bottomTable" style={tableGreenWidthStyle}>
                    <Table tableData={dataArrayGreen}/>
                    <button className="ui button" onClick={this.handleClickConfigure.bind(this, 'GREEN')}>Configure</button>
                    <label>{WG===-1 ? 0 : WG}%</label>
                </div>

                <div  className="wide column centered blueTable" style={tableBlueWidthStyle}>
                    <Table tableData={dataArrayBlue}/>
                    <button className="ui button" onClick={this.handleClickConfigure.bind(this, 'BLUE')}>Configure</button>
                    <label>{WB===-1 ? 0 : WB}%</label>
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps=(state)=>{
    return {
        RedTable: state.RedTable,
        GreenTable: state.GreenTable,
        BlueTable: state.BlueTable
    };
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({showConfigurePanel,fetchTableRedData, fetchTableGreenData, fetchTableBlueData},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(TableContainer);