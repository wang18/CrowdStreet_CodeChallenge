import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveDataRed, saveDataGreen, saveDataBlue, cancelPanel} from '../actions/index';
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
        switch (this.props.ConfigurePanel.panelName){
            case 'RED':
                console.log('RED');
                this.props.saveDataRed({N, X, M, W, D});
                break;
            case 'GREEN':
                console.log('GREEN');
                this.props.saveDataGreen({N, X, M, W, D});
                break;
            case 'BLUE':
                console.log('BLUE');
                this.props.saveDataBlue({N, X, M, W, D});
                break;
            default:
                break;
        }
        this.setState({
            N:0,
            X:0,
            M:0,
            W:0,
            D:''});

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


    handleCancelPanel(e){
        e.preventDefault();
        this.props.cancelPanel();
    }

    render(){
        const strongColor = {color: this.props.ConfigurePanel.panelName};

        return (<div className="">
            <form className="ui form" onSubmit={this.handleSubmit}>
                <h1>Table <strong style={strongColor}>{this.props.ConfigurePanel.panelName}</strong></h1>
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
                    <button className="ui button">OK</button>
                    <button className="ui button" onClick={this.handleCancelPanel.bind(this)}>CANCEL</button>
                </div>
            </form>
        </div>);
    }
}

const mapStateToProps=(state)=>{
    return {
        RedTable: state.RedTable,
        ConfigurePanel: state.ConfigurePanel

    };
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({saveDataRed, saveDataGreen, saveDataBlue, cancelPanel},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ControlPanel);