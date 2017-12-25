import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveDataRed, saveDataGreen, saveDataBlue, cancelPanel} from '../actions/index';
import {bindActionCreators} from 'redux';
import classnames from 'classnames';

class ControlPanel extends Component {

    state={
        N:0,
        X:0,
        M:0,
        W:0,
        D:'',
        errors:{}
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        const {N, X, M, W, D}=this.state;

        //validation
        let errors={};
        if(isNaN(N) ){
            errors.N="N has to be number...";
        }
        if(isNaN(X) || (parseInt(X,10)<1)){
            errors.X="X has to be a positive number...";
        }
        if(isNaN(M) || (parseInt(M,10)<parseInt(N,10))){
            errors.M="M has to be a number greater than N...";
        }
        if(isNaN(W) || (parseInt(W,10) > 100) || (parseInt(W,10) < 0)){
            errors.W="W has to be a number between 0 and 100...";
        }
        if(D===''){
            errors.D="Pick a direction...";
        }
        this.setState({errors});
        const isValid=Object.keys(errors).length === 0;

        if(isValid){
            switch (this.props.ConfigurePanel.panelName){
                case 'RED':
                    this.props.saveDataRed({N, X, M, W, D});
                    break;
                case 'GREEN':
                    this.props.saveDataGreen({N, X, M, W, D});
                    break;
                case 'BLUE':
                    this.props.saveDataBlue({N, X, M, W, D});
                    break;
                default:
                    break;
            }
            this.setState({N:0, X:0, M:0, W:0, D:''});
            this.props.cancelPanel();
        }
    }

    InputField=(inputName)=>{
        return (<div className={classnames('inline', 'field', {error: !!this.state.errors[inputName]})}>
                    <label htmlFor={inputName}>{inputName} = </label>
                    <input name={inputName}
                           value={this.state[inputName]===-1 ? 0 : this.state[inputName]}
                           onChange={this.handleChange}
                           id={inputName}
                           type="text"/>
                    {inputName==='W'?'%':''}
                    {this.state.errors[inputName] ? <div class="ui left pointing red basic label" >{this.state.errors[inputName]}</div> : ''}

                </div>);
    }


    handleCancelPanel(e){
        e.preventDefault();
        this.setState({N:0, X:0, M:0, W:0, D:''});
        this.props.cancelPanel();
    }

    render(){
        const strongColor = {color: this.props.ConfigurePanel.panelName};

        return (<div className="ui container panelDiv">
            <div className="ui two column grid">
                <form className="ui fluid form column panelForm" onSubmit={this.handleSubmit}>
                    <h1>Table <strong style={strongColor}>{this.props.ConfigurePanel.panelName}</strong></h1>
                    {this.InputField("N")}
                    {this.InputField("X")}
                    {this.InputField("M")}
                    {this.InputField("W")}
                    <div className={classnames("field"," inline",{error: !!this.state.errors.D})}>
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
                        {this.state.errors.D ? <div class="ui left pointing red basic label" >{this.state.errors.D}</div> : ''}

                    </div>

                    <div className="field">
                        <button className="ui button">OK</button>
                        <button className="ui button" onClick={this.handleCancelPanel.bind(this)}>CANCEL</button>
                    </div>
                </form>
            </div>
        </div>);
    }
}

const mapStateToProps=(state)=>{
    return {
        RedTable: state.RedTable,
        GreenTable: state.GreenTable,
        ConfigurePanel: state.ConfigurePanel

    };
}

const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({saveDataRed, saveDataGreen, saveDataBlue, cancelPanel},dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(ControlPanel);