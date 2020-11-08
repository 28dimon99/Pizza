


const SET_DATA_PIZZA = 'SET_DATA_PIZZA';
const SET_IS_READY = "SET_IS_READY";


let initialState = {
    pizzas: null,
    isReady: false,
};
export default (state = initialState, action)=>{
    switch (action.type){

        case SET_DATA_PIZZA:
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
export const setPizzaAC = (pizzas) => ({
    type: SET_DATA_PIZZA,
    payload: pizzas
});


//thunk
/*export const getPizza = () => async(dispatch) =>{
    //сидит функция которая зарезолвила промис
    let response = await pizzaAPI.getPizzaUrl();
    dispatch(getPizza(response.data));
};*/


