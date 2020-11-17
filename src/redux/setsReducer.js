
const SET_DATA_SETS = "SET_DATA_SETS";
const SET_IS_READY = "SET_IS_READY";

 let initialState = {
     sets: [],
     isReady: false

};

const SetsCard = (state = initialState , action) => {

    switch (action.type) {
        case SET_DATA_SETS :
            return{
                ...state,
                sets: action.payload,
                isReady: true
            };
        case SET_IS_READY :
            return{
                ...state,
                isReady: action.payload
            };
        default:
            return state

    }
};

//action
export const setSetsAC  = (sets)=>({
    type: SET_DATA_SETS,
    payload: sets
});

export default SetsCard
