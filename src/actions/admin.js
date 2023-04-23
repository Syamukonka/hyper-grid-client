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
            //Execute the onSuccess sequence
            onSuccess()
        }//failed to log in
        else//Show failure via the onFailure sequence
            onFailure("No data found");
    }catch(error){
        console.log(error)
        //execute the onFailure sequence, pass the axios error
        onFailure(error?.message)
    }
}