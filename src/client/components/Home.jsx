import React,{Component} from 'react';
import EditorComponent from './Editor';
import VisComponent from './Vis';

class HomeComponent extends Component{
    constructor(props) {
        super(props);
        this.updateMainString = this.updateMainString.bind(this);
        this.updatePatternString = this.updatePatternString.bind(this);
        this.findText = this.findText.bind(this);
    }

    updateMainString(string){
        this.props.setMainString && this.props.setMainString(string);
    }

    updatePatternString(pattern){
        this.props.updatePatternString && this.props.updatePatternString(pattern);
    }

    findText(){
        if(this.props.string && this.props.pattern){
            this.props.findText && this.props.findText(this.props.string,this.props.pattern);
        }
    }
    
    render(){
        return (
            <div className="container">
                <div className="row">
                    <EditorComponent string={this.props.string} pattern={this.props.pattern}
                     updateMainString={this.updateMainString} resetIndices={this.props.resetIndices}
                     indices={this.props.indices} />
                    <VisComponent string={this.props.string} pattern={this.props.pattern} 
                     resetIndices={this.props.resetIndices}
                     updatePatternString={this.updatePatternString} findText={this.findText}/>
                </div>
            </div>
        )
    }
}

export default HomeComponent