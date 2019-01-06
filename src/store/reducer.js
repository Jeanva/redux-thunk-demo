import {
    HANDLE_INPUT_CHANGE,
    HANDLE_SUBMIT,
    HANDLE_DELETE_ITEM,
    INIT_LIST_DATA
} from './actionTypes';

const defaultState = {
    inputValue:'',
    dataSource:[]
};

export default (state=defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case HANDLE_INPUT_CHANGE:
            newState.inputValue = action.value;
            return newState;
        case HANDLE_SUBMIT:
            newState.dataSource.push(newState.inputValue);
            newState.inputValue='';
            return newState;
        
        case HANDLE_DELETE_ITEM:
            newState.dataSource.splice(action.index,1);
            return newState;

        case INIT_LIST_DATA:
            newState.dataSource=action.data;
            return newState;

        default : return state;
    }
}