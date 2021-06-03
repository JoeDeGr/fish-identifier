// let user = JSON.parse(localStorage.getItem('user'));

export default function genuses (state = [{ name: 'this', id: 1 }], action) {
    switch(action.type) {
        case 'ADD_GENUS_TO_USER':
            console.log(action.genus_id)
            return state
        default:
            return state
    }
}