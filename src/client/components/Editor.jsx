import React,{Component} from 'react';


class EditorComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value : ""
        }
        this.onChange = this.onChange.bind(this);
        this.getIndicesSection = this.getIndicesSection.bind(this);
        this.getTag = this.getTag.bind(this);
        this.resetIndices = this.resetIndices.bind(this);
        this.getEditSection = this.getEditSection.bind(this);
        this.showPreview = this.showPreview.bind(this);
    }

    onChange(e){
        this.setState({value: e.target.value},()=>{
            this.props.updateMainString && this.props.updateMainString(this.state.value);
        });
    }

    getIndicesSection(indices){
        return (<div >
            <p> Your search results occur in following indices !</p>
            {indices.map((ind)=>{
                return <span className="badge badge-primary"> {" "+ind+" "} </span>
            })}
        </div>)
    }

    getTag (string,type){
        return type === 'highlight' ? <span className="badge badge-pill badge-info">
            {string}
        </span>:<span>{string}</span>
    }

    resetIndices (){
        this.props.resetIndices && this.props.resetIndices();
    }

    showPreview(){
        var mainString = this.props.string;
        var patternString = this.props.pattern;
        var indices = this.props.indices || [];
        var totalPoints = [];
        var startIndex = 0;

        for(var ind = 0;ind < indices.length;ind++){
            totalPoints.push({string:mainString.substring(startIndex,indices[ind]),type:"normal"})
            totalPoints.push({string:mainString.substring(indices[ind],indices[ind]+patternString.length),type:"highlight"})
            startIndex = indices[ind]+patternString.length;
        }
        totalPoints.push({string:mainString.substring(startIndex),type:"normal"});

        return (<div className="form-control editor">
             <p>
                 { 
                 totalPoints.map((totalPoint)=>{
                   return this.getTag(totalPoint.string,totalPoint.type)
                  })}
             </p>
             <button onClick={this.resetIndices} className="btn btn-primary findr">Reset</button>
        </div>)
    }

    getEditSection(){
        return (
            <textarea className="form-control" 
              value={this.state.value} 
              onChange= {this.onChange}
              placeholder="Type some text over here !"
              id="exampleFormControlTextarea1" rows="10"></textarea>
            )
    }

    render(){
        return (
            <div className="col-sm-8">
                 <label for="exampleFormControlTextarea1">Editor</label>
                <form>
                    {(this.props.indices && this.props.indices.length > 0) ? this.showPreview():
                      this.getEditSection()}
                </form>
            </div>
        )
    }
}

export default EditorComponent