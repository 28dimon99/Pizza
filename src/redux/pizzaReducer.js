


const GET_PIZZA = 'GET_PIZZA';
const SET_IS_READY = "SET_IS_READY";
const ADD_TO_CARD = "ADD_TO_CARD";
const REMOVE_FROM_CARD = "REMOVE_FROM_CARD";

let initialState = {
    pizza: null,
    isReady: false,
};

export default (state = initialState, action)=>{
    switch (action.type){

        case GET_PIZZA:
            return{
                ...state,
                pizza: action.payload
            };
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            };
        case ADD_TO_CARD:
            return{
                ...state,
                items: [
                    ...state.items,
                    action.payload
                ]
            };

        case REMOVE_FROM_CARD:
            return{
                ...state,
                items: state.items.filter(o => o.id != action.payload)
            };
        default :
            return state;

    }
}
//actions
export const getPizzaAC = (pizza) => ({
    type: GET_PIZZA,
    action: pizza
});
/*export const addToCard = (obj) => ({
    type: ADD_TO_CARD,
    payload: obj
});

export const removeToCard = (id) => ({
    type: REMOVE_FROM_CARD,
    payload: id
});*/

//thunk
/*export const getPizza = () => async(dispatch) =>{
    //сидит функция которая зарезолвила промис
    let response = await pizzaAPI.getPizzaUrl();
    dispatch(getPizza(response.data));
};*/


