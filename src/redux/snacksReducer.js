const SET_DATA_SNACKS = "SET_DATA_SNACKS";
const SET_IS_READY = "SET_IS_READY";


let initialState={
    snacks: [],
    isReady: false
};

const SnacksCard = (state = initialState, action)=>{
    switch (action.type) {
        case SET_DATA_SNACKS:
            return{
                ...state,
                snacks: action.payload,
                isReady: true
            };
        case SET_IS_READY:
            return{
                ...state,
                isReady: action.payload,
            };
        default:
            return state
    }
};

//actions
export const setSnacksAC =(snacks)=>({
    type: SET_DATA_SNACKS,
    payload: snacks
});

export default SnacksCard