
const ADD_TO_BASKET = "ADD_TO_BASKET";
const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
const READY = "READY";


const initialState ={
    ready: false,
    items: []
};

const basketReducer = (state =initialState, action) =>{
    switch (action.type) {
        case ADD_TO_BASKET:
            return{
                ...state,
                ready: true,
                items : [...state.items, action.payload]
            };
        case REMOVE_FROM_BASKET:
            return{
                ...state,
                items: state.items.filter(o => o.id !=action.payload.id)
            };
        case READY:
            return {
                ...state,
                ready: action.payload
            };
        default:
            return state
    }
};
//actions
export const addToBasketAC = (obj)=>({
    type: ADD_TO_BASKET,
    payload: obj
});

export const removeFromBasketAC = (id)=>({
    type: REMOVE_FROM_BASKET,
    payload: id
});



export default basketReducer
