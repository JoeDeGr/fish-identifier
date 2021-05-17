export default (state =[], action) => {
    switch(action.type) {
        case 'ADD_USER':
            console.log(state)
            return state
        default:
            return state
    }
}