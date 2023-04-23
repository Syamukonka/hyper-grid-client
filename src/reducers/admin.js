import {SIGN_IN} from "../constants/actions";

export default (data={},action) => {
    switch (action.type){
        case SIGN_IN:
            if(action.payload){
                localStorage.setItem("admin",JSON.stringify(action.payload))
                return action.payload;
            }else
                return null;

        default:
            return data;
    }
}