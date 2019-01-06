import axios from 'axios';
import {HANDLE_INPUT_CHANGE,
    HANDLE_SUBMIT,
    HANDLE_DELETE_ITEM,
    INIT_LIST_DATA} from './actionTypes';

export const handleInputValueFn = (value)=>({
    type: HANDLE_INPUT_CHANGE,
    value
});
export const handleSubmitFn = ()=>({
    type: HANDLE_SUBMIT
})

export const handleDeleteItemFn = (index)=>({
    type:HANDLE_DELETE_ITEM,
    index
})

export const initListDataFn = (data)=>({
    type:INIT_LIST_DATA,
    data
})

export const getTodoList =()=>{
    return (dispatch)=>{
        axios.get('http://localhost:8001/json').then(
            (res)=>{
                const data = res.data;
                const action = initListDataFn(data);
                console.log(res.data);
                dispatch(action);
            }
        )
    }
}