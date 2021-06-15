export default function species (state=[], action) {
    switch(action.type) {
        case 'LOAD_SPECIES_REQUEST':
                return {
                updating: true,
                }
        case 'LOAD_SPECIES_SUCCESS':
            return {
                dataLoaded: true,
                species: action.species
            }
        case 'LOAD_SPECIES_FAILURE':
            return {
                dataLoaded: false
            }
        default:
            return state
    }
}