export default function species (state=[{ name: 'this', id: 1 }], action) {
    switch(action.type) {
        debugger
        case 'LOAD_SPECIES_REQUEST':
                return {
                updating: true,
                }
        case 'LOAD_SPECIES_SUCCESS':
            return {
                dataLoaded: true
            }
        case 'LOAD_SPECIES_FAILURE':
            return {
                dataLoaded: false
            }

        case 'ADD_SPECIES_TO_USER':
            console.log(action.species_id)
            return state
        default:
            return state
    }
}