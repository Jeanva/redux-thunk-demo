import React from 'react';
import store from '../store';
import {handleInputValueFn,handleSubmitFn,handleDeleteItemFn,initListDataFn,getTodoList} from '../store/actionCreator';
import TodoUI from './TodoUI';

export default class Todolist extends React.Component{
    constructor(props){
        super(props);
        this.state= store.getState();
        console.log(this.state);
        store.subscribe(this.handleStoreChange);
    }
    handleStoreChange=()=>{
        this.setState(store.getState)
    }
    handleOnChange(e){
        const action = handleInputValueFn(e.target.value);
        store.dispatch(action);
    }
    handleSubmit(){
        const action = handleSubmitFn();
        store.dispatch(action);
    }
    handleDeleteItem=(index)=>{
        const action = handleDeleteItemFn(index);
        store.dispatch(action);
    }
    componentDidMount(){
        const action = getTodoList();
        store.dispatch(action);
        console.log(store);
    }
    render(){
        return(
            <TodoUI 
                inputValue ={this.state.inputValue}
                handleOnChange = {this.handleOnChange}
                handleSubmit = {this.handleSubmit}
                dataSource = { this.state.dataSource}
                handleDeleteItem = {this.handleDeleteItem}
            />
        )
    }
}
