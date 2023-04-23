import { signIn} from "../api"
import { SIGN_IN } from "../constants/actions"

export const SignIn = (form, onSuccess, onFailure) => async (dispatch) => {
    try{
        const {data} = await signIn(form)
        console.log("RECIEVED:\n",data)
        if(data){
            dispatch({
                type: SIGN_IN,
                payload: data}
            )
        }//failed to log in
        else
            onFailure("No data found");
    }catch(error){
        console.log(error)
        onFailure(error.response?.data?.message)
    }
}