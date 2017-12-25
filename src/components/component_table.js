import React from 'react';


class Table extends React.Component{

    createRow(arr,i){
        return(<tr key={i}>
            {arr.map((ele,j)=>{
                return  <td key={j} className={ele==='' ? 'empty':''}>{ele==='ini' ? '' : ele}</td>
            })}
        </tr>)
    }

    render() {
        const {tableData} = this.props;
        return (
            <table className="ui unstackable celled table dataTable">
                <tbody>
                {tableData.map(((arr, i) => {
                    return this.createRow(arr,i)
                }))}

                </tbody>
            </table>

        );
    }
}



export default Table;
