export default function genuses (state = [{ name: 'this', id: 1 }], action) {
    switch(action.type) {
        case 'ADD_GENUS_TO_USER':
            console.log(state)
            return state
        default:
            return state
    }
}