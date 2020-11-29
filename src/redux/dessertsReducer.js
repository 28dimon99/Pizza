


const SET_DATA_DESSERTS = 'SET_DATA_DESSERTS';
const SET_IS_READY = "SET_IS_READY";


let initialState = {
    desserts: [],
    isReady: false,
};
const DessertsCard = (state = initialState, action)=>{
    switch (action.type){

        case SET_DATA_DESSERTS:
            return{
                ...state,
                desserts: action.payload,
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
export const setDessertsAC = (desserts) => ({
    type: SET_DATA_DESSERTS,
    payload: desserts
});


//thunk
/*export const getPizza = () => async(dispatch) =>{
    //сидит функция которая зарезолвила промис
    let response = await pizzaAPI.getPizzaUrl();
    dispatch(getPizza(response.data));
};*/

export default DessertsCard;
