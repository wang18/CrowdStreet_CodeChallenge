import React from 'react';


class Table extends React.Component{

    createRow(arr,i){
        return(<tr key={i}>
            {arr.map((ele,j)=>{
               return  <td key={j}>{ele}</td>
            })}
        </tr>)
    }

    render() {
        const {tableData} = this.props;
        return (
            <table className="ui celled table">
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
