import React, {Component} from 'react';
import {connect} from 'react-redux';
import Table from "./component_table";
import {showConfigurePanel} from '../actions/index';
import {bindActionCreators} from 'redux';
class TableContainer extends Component {
    createDataArray(N,X,M,D){
        const dataArr = [];
        let tmp=Number.parseInt(N);
        const increase=parseInt(X);
        const maxNum=parseInt(M);
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
            dataArr.push(['','','','','']);
            dataArr.push(['','','','','']);
            dataArr.push(['','','','','']);
            dataArr.push(['','','','','']);
            dataArr.push(['','','','','']);
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
        console.log(this.props.RedTable);

        const WR=this.props.RedTable.W;
        const WG=this.props.GreenTable.W;
        const WB=this.props.BlueTable.W;
        const dataArrayRed = this.getDataArray(this.props.RedTable);
        const dataArrayGreen = this.getDataArray(this.props.GreenTable);
        const dataArrayBlue = this.getDataArray(this.props.BlueTable);

        console.log('dataArrayRed : ', dataArrayRed );
        console.log('dataArrayGreen : ', dataArrayGreen );
        console.log('dataArrayBlue : ', dataArrayBlue );
        const tableRedWidthStyle = {width: WR===0 ? '30%':`${WR}%`};
        const tableGreenWidthStyle = {width: WG===0 ? '30%':`${WG}%`};
        const tableBlueWidthStyle = {width: WB===0 ? '30%':`${WB}%`};
        return (<div className="ui grid">
            <div className="wide column" style={tableRedWidthStyle}>
                <Table tableData={dataArrayRed }/>
                <button className="ui button" onClick={this.handleClickConfigure.bind(this, 'RED')}>Configure</button>
                <label>{WR}%</label>
            </div>

            <div  className="wide column" style={tableGreenWidthStyle}>
                <Table tableData={dataArrayGreen}/>
                <button className="ui button" onClick={this.handleClickConfigure.bind(this, 'GREEN')}>Configure</button>
                <label>{WG}%</label>
            </div>

            <div  className="wide column" style={tableBlueWidthStyle}>
                <Table tableData={dataArrayBlue}/>
                <button className="ui button" onClick={this.handleClickConfigure.bind(this, 'BLUE')}>Configure</button>
                <label>{WB}%</label>
            </div>
        </div>);
    }
}

const mapStateToProps=(state, props)=>{
    console.log('cur props: ',props);
    return {
        RedTable: state.RedTable,
        GreenTable: state.GreenTable,
        BlueTable: state.BlueTable
    };
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({showConfigurePanel},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(TableContainer);