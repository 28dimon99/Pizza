


const GET_PIZZA = 'GET_PIZZA';
const SET_IS_READY = "SET_IS_READY";


let initialState = {
    pizzas: null,
    isReady: false,
};
export default (state = initialState, action)=>{
    switch (action.type){

        case GET_PIZZA:
            return{
                ...state,
                pizzas: action.payload,
                isReady: true
            };
        case SET_IS_READY:
            return {
                ...state,
                isReady: action.payload
            };
        default :
            return state;
    }
}
//actions
export const getPizzaAC = (pizzas) => ({
    type: GET_PIZZA,
    action: pizzas
});


//thunk
/*export const getPizza = () => async(dispatch) =>{
    //сидит функция которая зарезолвила промис
    let response = await pizzaAPI.getPizzaUrl();
    dispatch(getPizza(response.data));
};*/


