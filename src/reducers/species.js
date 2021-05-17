export default function species (state=[], action) {
    switch(action.type) {
        case 'ADD_SPECIES':
            console.log(state)
            return state
        default:
            return state
    }
}