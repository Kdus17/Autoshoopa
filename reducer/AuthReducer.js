export const authReducer = (state, action) =>{
    switch(action.type){
        case 'LOGIN':{
            return {
                token: action.payload.token,
            }
        }

        case 'LOGOUT': {
            return {
                token : null
            }
        }

        default:
            return state

    }
}