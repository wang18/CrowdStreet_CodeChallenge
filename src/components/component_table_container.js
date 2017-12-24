import React, {Component} from 'react';
import {connect} from 'react-redux';
import Table from "./component_table";

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
                            flag ? row[j]=-1:row[4-j]='';
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
                            flag ? row[j]=-1:row[4-j]='';
                        }
                    }
                }
                dataArr.push(row);
                flag=!flag;
            }
        }
        return dataArr;
    }

    render(){
        console.log(this.props.RedTable);
        const {N, X, M, D}=this.props.RedTable;
        const dataArray = this.createDataArray(N,X,M,D).reverse();
        console.log('dataArray: ', dataArray);
        return (<div className="">
            <Table tableData={dataArray}/>
        </div>);
    }
}

const mapStateToProps=(state)=>{
    return {
        RedTable: state.RedTable
    };
}

export default connect(mapStateToProps,null)(TableContainer);