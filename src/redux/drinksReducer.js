


const SET_DATA_DRINKS = 'SET_DATA_DRINKS';
const SET_IS_READY = "SET_IS_READY";


let initialState = {
    drinks: [],
    isReady: false,
};
const DrinksCard = (state = initialState, action)=>{
    switch (action.type){

        case SET_DATA_DRINKS:
            return{
                ...state,
                drinks: action.payload,
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
};
//actions
export const setDrinksAC = (drinks) => ({
    type: SET_DATA_DRINKS,
    payload: drinks
});


//thunk
/*export const getPizza = () => async(dispatch) =>{
    //сидит функция которая зарезолвила промис
    let response = await pizzaAPI.getPizzaUrl();
    dispatch(getPizza(response.data));
};*/

export default DrinksCard;
