const initalState = {
    list : [],
    activeId: null,
}
const hobbyReducer = (state = initalState,action) =>{
    switch (action.type) {
        case "ADD_HOBBY":{
            // kenh ra mảng mới, không bị thay đổi mảng ở trên initalState
            const newList = [...state.list];
            newList.push(action.payload);
        return {
            ...state,
            list: newList,
        }
            
        }
        case "SET_HOBBY":{
            const newActiveId = action.payload.id
            return {
                ...state,
                activeId: newActiveId
            };
        }
        default:
            return state;
    }
}
export default hobbyReducer;