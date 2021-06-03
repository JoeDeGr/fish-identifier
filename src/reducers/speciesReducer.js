// let user = JSON.parse(localStorage.getItem('user'));

export default function species (state=[{ name: 'this', id: 1 }], action) {
    switch(action.type) {
        case 'ADD_SPECIES_TO_USER':
            console.log(action.species_id)
            return state
        default:
            return state
    }
}