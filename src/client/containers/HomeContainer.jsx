import { connect } from 'react-redux';
import HomeComponent from '../components/Home';
import searchPattern from '../helpers/kmp';
var get = require("lodash.get");

const mapStateToProps = (state) => {
    return {
      string: get(state,'string.string') || "",
      pattern: get(state,'string.pattern') || "",
      indices: get(state,"home.indices") || [],
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setMainString: (string)=>{
        let setMainStringAction = {
            type: "SET_MAIN_STRING",
            data: string
        }
        dispatch(setMainStringAction)
      },
      updatePatternString:(pattern)=>{
          let setPatternAction = {
              type: "SET_PATTERN_STRING",
              data: pattern
          }
          dispatch(setPatternAction) 
      },
      findText:(string,pattern)=>{
            var indices = searchPattern(string,pattern);
            console.log(indices);
            let setSearchAction = {
                type: "SET_INDICES",
                data: indices
            }
            dispatch(setSearchAction)
      },
      resetIndices: ()=>{
        var indices = [];
        let setSearchAction = {
            type: "SET_INDICES",
            data: indices
        }
        dispatch(setSearchAction)
      }
    }
  }
  const HomeView = connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
  export default HomeView;