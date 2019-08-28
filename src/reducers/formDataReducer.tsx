export default (state = {}, action: any) => {
    switch (action.type) {
        case "FETCH_FORM_DATA" :
            return action.payload
        default :
            return state
    }
}