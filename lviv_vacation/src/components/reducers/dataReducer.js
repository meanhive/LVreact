const initialState = {
    items: [],
    loading: false,
    error: null
};

export default function dataReducer(state=initialState, action) {
    switch(action.type) {
        case 'FETCH_DATA_BEGIN':
            return{
                ...state,
                loading: true,
                error: null
            };
        
        case 'FETCH_DATA_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        
        
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                loading: true,
                items: action.payload.posts
            }
        default:
            return state;
    }
}