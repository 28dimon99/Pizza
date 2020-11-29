


const SET_DATA_SAUCES = 'SET_DATA_SAUCES';
const SET_IS_READY = "SET_IS_READY";


let initialState = {
    sauces: [],
    isReady: false,
};
const SaucesCard = (state = initialState, action)=>{
    switch (action.type){

        case SET_DATA_SAUCES:
            return{
                ...state,
                sauces: action.payload,
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
export const setSaucesAC = (sauces) => ({
    type: SET_DATA_SAUCES,
    payload: sauces
});


//thunk
/*export const getPizza = () => async(dispatch) =>{
    //сидит функция которая зарезолвила промис
    let response = await pizzaAPI.getPizzaUrl();
    dispatch(getPizza(response.data));
};*/

export default SaucesCard;
