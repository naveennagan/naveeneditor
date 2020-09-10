import React,{Component} from 'react';
import EditorComponent from './Editor';

class VisComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            error: ''
        }
        this.onChange = this.onChange.bind(this);
        this.findText = this.findText.bind(this);
    }
    
  
    onChange(e){
        this.props.resetIndices && this.props.resetIndices();
        this.setState({value: e.target.value, error:""},()=>{
            this.props.updatePatternString && this.props.updatePatternString(this.state.value);
        });
    }

    findText(){
        var mainString = this.props.string || "";
        if(!mainString){
            this.setState({error: "Enter editor string"})
            return;
        }
        if(mainString.length < this.state.value.length){
            this.setState({error: "Should be smaller string than editor"})
            return;
        }
        if(!this.state.value){
            this.setState({error: "Enter something to be searched !"})
            return;
        }

        this.props.findText && this.props.findText();

    }

    render(){
        return (
            <div className="col-sm-2">
                <p>Visualise Section</p>
                <p>{this.state.error}</p>
                <textarea className="form-control" 
                      value={this.state.value} 
                      onChange= {this.onChange}
                      placeholder="Search"
                      id="exampleFormControlTextarea1" rows="5"></textarea>
                <div className="find col text-center">
                  <button onClick={this.findText} className="btn btn-info text-center">Find</button>
                </div>      
            </div>
        )
    }
}

export default VisComponent