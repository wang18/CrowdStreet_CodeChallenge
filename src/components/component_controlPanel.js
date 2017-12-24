import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveData} from '../actions/index';
import {bindActionCreators} from 'redux';

class ControlPanel extends Component {

    state={
        N:this.props.RedTable.N,
        X:this.props.RedTable.X,
        M:this.props.RedTable.M,
        W:this.props.RedTable.W,
        D:this.props.RedTable.D
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {N, X, M, W, D}=this.state;
        this.props.saveData({N, X, M, W, D});
    }

    InputField=(inputName)=>{
        return (<div className="inline field">
                    <label htmlFor={inputName}>{inputName} = </label>
                    <input name={inputName}
                           value={this.state[inputName]}
                           onChange={this.handleChange}
                           id={inputName}/>
                    {inputName==='W'?'%':''}
                </div>);
    }

    render(){
        return (<div className="">
            <form className="ui form" onSubmit={this.handleSubmit}>
                <h1>Table Red</h1>
                {this.InputField("N")}
                {this.InputField("X")}
                {this.InputField("M")}
                {this.InputField("W")}
                <div className="field inline">
                    <label htmlFor="D">D = </label>
                    <select name="D"
                            className="ui search dropdown"
                            value={this.state.D}
                            onChange={this.handleChange}
                            id="D">
                        <option value="" disabled>Choose D</option>
                        <option key="LTR" value="LTR-UP">LTR-UP</option>
                        <option key="RTL" value="RTL-UP">RTL-UP</option>

                    </select>
                </div>

                <div className="field">
                    <button className="ui primary button">OK</button>
                    <button className="ui red button">CANCEL</button>

                </div>


            </form>
        </div>);
    }
}

const mapStateToProps=(state)=>{
    return {
        RedTable: state.RedTable
    };
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({saveData},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ControlPanel);