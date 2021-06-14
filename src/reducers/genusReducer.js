export default function genera (state = [], action) {
    switch(action.type) {
        case 'LOAD_GENUS_REQUEST':
            return {
                updating: true,
            }
        case 'LOAD_GENUS_SUCCESS':
            return {
                dataLoaded: true,
                genera: action.genus
            }
        case 'LOAD_GENUS_FAILURE':
            return {
                dataLoaded: false
            }
        case 'ADD_GENUS_TO_USER':
            console.log(action.genus_id)
            return state
        default:
            return state
    }
}