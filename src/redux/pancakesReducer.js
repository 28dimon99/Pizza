


const SET_DATA_PANCAKES = 'SET_DATA_PANCAKES';
const SET_IS_READY = "SET_IS_READY";


let initialState = {
    pancakes: [],
    isReady: false,
};
const PancakesCard = (state = initialState, action)=>{
    switch (action.type){

        case SET_DATA_PANCAKES:
            return{
                ...state,
                pancakes: action.payload,
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
export const setPancakesAC = (pancakes) => ({
    type: SET_DATA_PANCAKES,
    payload: pancakes
});


//thunk
/*export const getPizza = () => async(dispatch) =>{
    //сидит функция которая зарезолвила промис
    let response = await pizzaAPI.getPizzaUrl();
    dispatch(getPizza(response.data));
};*/

export default PancakesCard;
