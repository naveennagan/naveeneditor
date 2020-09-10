var get = require("lodash.get");
export default (state = {string:"",pattern:""},action = {type: ""}) =>{
    switch(action.type){
        case "SET_MAIN_STRING":{
            var newString = get(action,"data","");
            var newState = {...state};
            newState["string"] = newString;
            return newState;
        }
        case "SET_PATTERN_STRING":{
            var newPattern = get(action,"data","");
            var newState = {...state};
            newState["pattern"] = newPattern;
            return newState;
        }
        default:{
            return state;
        }
    }
}