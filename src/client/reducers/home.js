var get = require("lodash.get");
export default (state = {indices:[]},action = {type: ""}) =>{
    switch(action.type){
        case "SET_INDICES":{
            var indices = get(action,"data",[]);
            return {indices}
        }
        default:{
            return state;
        }
    }
}