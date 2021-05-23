export default function genus (state=[], action) {
    switch(action.type) {
        case 'ADD_GENUS':
            console.log(state)
            return state
        default:
            return state
    }
}